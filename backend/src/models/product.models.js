import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        features: {
            type: String
        },
        category: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        picture: {
            type: String
        }
    }, 
    {timestamps: true}
)

export const Product = mongoose.model("Product", productSchema)