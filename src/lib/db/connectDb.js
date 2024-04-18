import mongoose from "mongoose"

export default async function connectDB() {

    const DB = process.env.MONGODB_URI

    if (mongoose.connection.readyState === 1) {
        
        console.log("(connectDB()) Attempted to connect to MongoDB Atlas, but already connected")
    }

    else if (mongoose.connection.readyState === 2) {

        console.log("(connectDB()) Attempted to connect to MongoDB Atlas, but already connecting")

    }

    else {

        const DB = process.env.DATABASE_URL

        try {
            await mongoose.connect(DB)
            console.log("(connectDB()) Connected to MongoDB Atlas")
        } catch (e) {
            console.error("(connectDB()) Connection to MongoDB Atlas failed ", e)
        }

    }
}