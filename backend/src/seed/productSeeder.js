import {Product} from "../models/product.models.js"
import connectDB from "../db/index.js"

const products = [
    {
        category: "category 1",
        name: "Product 1",
        price: 100,
        features: [
            "1. Feature 1",
            "2. Feature 2",
            "3. Feature 3"
        ]
    },
    {
        category: "category 2",
        name: "Product 2",
        price: 200,
        features: [
            "1. Feature 1",
            "2. Feature 2",
            "3. Feature 3"
        ]
    },
    {
        category: "category 1",
        name: "Product 3",
        price: 300,
        features: [
            "1. Feature 1",
            "2. Feature 2",
            "3. Feature 3"
        ]
    },
    {
        category: "category 1",
        name: "Product 4",
        price: 400,
        features: [
            "1. Feature 1",
            "2. Feature 2",
            "3. Feature 3"
        ]
    },
    {
        category: "category 2",
        name: "Product 5",
        price: 500,
        features: [
            "1. Feature 1",
            "2. Feature 2",
            "3. Feature 3"
        ]
    }
]

const seedProducts = async() => {
    try {
        await connectDB()

        await Product.deleteMany();
        await Product.insertMany(products);

        console.log("products seeding successful")
        process.exit(0);
    } catch (error) {
        console.error("error in seeding products", error)
        process.exit(1)
    }
}

seedProducts()