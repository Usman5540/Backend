
import mongoose from "mongoose"

const schema= new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
       
   isCompleted:{
        type:Boolean,
    default:false,
    },
    description:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,// "_id": "65d8ac3f4c05f4dafdccc554", which is given at mongo
            ref:"User", // reference of the collection 
            required:true,
         },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})
 const Task= mongoose.model("Task",schema)
 export default Task