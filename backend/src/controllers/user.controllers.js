import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.models.js";
import { Product } from "../models/product.models.js"
import { Otp } from "../models/otp.models.js";
import nodemailer from "nodemailer"

const generateAccessAndRefreshToken = async (clientId) => {
    try {
        const client = await User.findById(clientId)
        const accessToken = client.generateAccessToken()
        const refreshToken = client.generateRefreshToken()

        client.refreshToken = refreshToken
        await client.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Error in generating tokens")
    }
}

const sendOtpToCustomer = asyncHandler( async (req, res) => {
    const {email} = req.body

    if(!email)
        throw new ApiError(400, "Email is required")

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new ApiError(409, "Email already registered");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const sessionToken = crypto.randomBytes(16).toString("hex");
    const expiresAt = Date.now() + 5*60*1000 //5 mins

    const otpSession = await Otp.findOneAndUpdate(
        { email },
        { otp, sessionToken, expiresAt },
        { upsert: true, new: true }
    );

    if(!otpSession)
        throw new ApiError(404, "Error in creating otp session")
    
    const transporter = nodemailer.createTransport({
        secure: true,
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    await transporter.sendMail({
        from: `Your App Support ${process.env.EMAIL_USER}`,
        to: email,
        subject: "Your OTP code",
        text: `Your OTP code is: ${otp}. It will expire in 5 minutes`,
        html: `<p>Your OTP code is: <b>${otp}</b></p><p>This code will expire in 5 minutes.</p>`
    })

    return res
    .status(200)
    .json(
        new ApiResponse(200, sessionToken, "Otp sent to email successfully")
    )
})

const verifyOtpAndRegisterCustomer = asyncHandler( async(req, res) => {
    const {otp, sessionToken, username, address, phone} = req.body

    if(!username || !address || !phone)
        throw new ApiError(400, "All fields are required")

    const otpSession = await Otp.findOne({sessionToken})
    if(!otpSession || otpSession.expiresAt<Date.now())
        throw new ApiError(400, "Session/OTP expired")

    if(otpSession.otp !== otp)
        throw new ApiError(400, "Invalid verification")

    const customer = await User.create({
        username: username.toLowerCase(),
        email: otpSession.email,
        address,
        phone,
        role: "customer",
        isVerified: true
    })

    //for leftover cleanup
    await Otp.updateOne(
        { sessionToken },
        {
            $unset: {otp: "", expiresAt: ""}
        }
    );

    const createdCustomer = await User.findById(customer._id).select("-address -phone")

    if(!createdCustomer) 
        throw new ApiError(404, "Error in registering customer")

    return res
    .status(201)
    .json(new ApiResponse(201, createdCustomer, "Customer registered successfully"))
})

// const registerClient = asyncHandler( async (req, res) => {
//     const clientData = {
//         username: "Client",
//         email: process.env.CLIENT_EMAIL,
//         phone: process.env.CLIENT_PHONE,
//         role: "client",
//         password: process.env.CLIENT_PASSWORD
//     }

//     const existedClient = await User.findOne({email: clientData.email})
//     if(existedClient)
//         throw new ApiError(409, "Client already exists")

//     const client = await User.create({
//         ...clientData,
//         username: clientData.username.toLowerCase()
//     })

//     const createdClient = await User.findById(client._id).select("-phone -password -refreshToken")

//     if(!createdClient)
//         throw new ApiError(404, "Error in creating client")

//     return res
//     .status(201)
//     .json(new ApiResponse(201, "Client created successfully"))
// })

const loginClient = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    if(!email || !password)
        throw new ApiError(400, "All fields are required")

    const client = await User.findOne({email, role: "client"})

    if(!client)
        throw new ApiError(404, "Unauthorized access")

    const isPasswordValid = await client.isPasswordCorrect(password)

    if(!isPasswordValid)
        throw new ApiError(401, "Invalid client credentials")

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(client._id)

    const loggedInClient = await User.findById(client._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                client: loggedInClient, accessToken, refreshToken
            },
            "Client logged in successfully"
        )
    )
})

const addInterestedProducts = asyncHandler( async(req, res) => {
    const {sessionToken, productId} = req.body

    const otpSession = await Otp.findOne({sessionToken})
    if(!otpSession)
        throw new ApiError(400, "Invalid session token")

    const user = await User.findOne({email : otpSession.email})
    if(!user)
        throw new ApiError(404, "User not found")

    const updatedUser = await User.findByIdAndUpdate(
        user?._id,
        { 
            $addToSet: {interestedProducts: productId} 
        },
        { new: true }
    ).populate("interestedProducts")

    return res
    .status(200)
    .json(
        new ApiResponse(200, updatedUser, "Product added to interested list")
    )
})

const getDashboardForClient = asyncHandler( async (req, res) => {

    //for less customers but more heavy
    // const customers = await User.find().populate("interestedProducts", "name")

    //for more customers, so less heavy
    // const customers = await User.find().select("name email phone interestedProducts").populate("interestedProducts", "name").lean()


    //pipeline for large number of users, group by product 
    const productsWithCustomers = await Product.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "interestedProducts",
                as: "interestedCustomers"
            }
        },
        {
            $project: {
                name: 1,
                interestedCustomers: {
                    $map: {
                        input: "$interestedCustomers",
                        as: "customer",
                        in: {
                            name: "$$customer.name",
                            email: "$$customer.email",
                            phone: "$$customer.phone"
                        }
                    }
                }
            }
        }
    ])

    return res
    .status(200)
    .json(new ApiResponse(200, productsWithCustomers, "Interested products for customers fetched successfully"))
})

export {sendOtpToCustomer, loginClient, verifyOtpAndRegisterCustomer, addInterestedProducts, getDashboardForClient}