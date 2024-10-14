import mongoose from "mongoose";
import { Note } from "./noteTypes";
import { timeStamp } from "console";


const noteSchema = new mongoose.Schema<Note>({
    title: {
        type : String,
        required:true
    },
    subtitle: String,
    description: {
        type:String,
        required:[true,"Description must be given to the data"]
    },
    file :String
    
   
   
},{timestamps:true})
export default mongoose.model<Note>("Notes",noteSchema)
