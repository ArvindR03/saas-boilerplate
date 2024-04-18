import connectDB from "../../../lib/db/connectDb"
import {NextResponse} from "next/server"
// import model schema here

// example
export async function POST(req, res) {
    const {} = await request.json()
    await connectDB();
    // await Schema.create({...})
    return NextResponse.json({message:"Created"}, {status:201})
}