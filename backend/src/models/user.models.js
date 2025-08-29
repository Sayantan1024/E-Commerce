import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        address: {
            type: String,
            trim: true,
            // required: true
        },
        phone: {
            type: Number,
            required: true
        },
        role: {
            type: String,
            enum: ["customer", "client"],
            required: true
        },
        password: {
            type: String,
        },
        refreshToken: {
            type: String
        },
        interestedProducts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        // otp: {
        //     type: String
        // },
        // otpExpires: {
        //     type: Date
        // },
        isVerified: {
            type: Boolean,
            default: false
        }
    }, 
    {timestamps: true}
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)