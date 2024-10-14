import mongoose from "mongoose";
import envConfig from "./config";
const connectTODatabase = async()=>{
    try {
        mongoose.connection.on("connected",()=>{
            console.log("DataBAse sucessfully connected")
        })
        await mongoose.connect(envConfig.mongobString as string)
    } catch (error) {
        console.log("Failed to connect Db!!!!!!")
            process.exit(1)
      
    }
}
export default connectTODatabase