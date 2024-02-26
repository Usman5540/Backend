import mongoose from "mongoose";
  const connectDb=()=>{
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Todo"
}).then(() => {
        console.log("Db Connect");
    }).catch((e)=>console.log(e))
}                             
 export default connectDb 