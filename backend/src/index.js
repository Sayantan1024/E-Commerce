import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
import { User } from "./models/user.models.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then( async() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`)
    })

    const existedClient = await User.findOne({email: process.env.CLIENT_EMAIL})
    if(!existedClient) {
        await User.create({
            username: "Client",
            email: process.env.CLIENT_EMAIL,
            phone: process.env.CLIENT_PHONE,
            role: "client",
            password: process.env.CLIENT_PASSWORD
        })
        console.log("Client created successfully")
    }
    else 
        console.log("Client already exists")
    
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err)
})