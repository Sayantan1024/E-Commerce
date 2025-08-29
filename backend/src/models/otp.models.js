import mongoose, {Schema} from "mongoose";

const otpSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        },
        otp: {
            type: String,
            required: true
        },
        sessionToken: {
            type: String,
            unique: true,
            required: true
        },
        expiresAt: {
            type: Date,
            required: true
        }
    }, 
    {timestamps: true}
)

otpSchema.index({expiresAt: 1}, {expireAfterSeconds: 0})

export const Otp = mongoose.model("Otp", otpSchema)