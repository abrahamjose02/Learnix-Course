import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.MONGO_DATA}`
        )
        console.log(`CourseDB Connected : ${conn.connection.host}`)
    } catch (error:any) {
        console.log(error.message)
    }
}

export {connectDB}