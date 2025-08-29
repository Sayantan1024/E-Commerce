import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.models.js";

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

const registerCustomer = asyncHandler( async (req, res) => {
    const {username, email, address, phone} = req.body

    if(!username || !phone)
        throw new ApiError(400, "All fields are required")

    const existedCustomer = await User.findOne({
        $and: [{username}, {phone}]
    })

    if(existedCustomer)
        throw new ApiError(409, "Customer already exists")

    const customer = await User.create({
        username: username.toLowerCase(),
        email,
        address,
        phone,
        role: "customer"
    })

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

export {registerCustomer, registerClient, loginClient}