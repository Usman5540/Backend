import express from 'express'
import mongoose from 'mongoose';
const app = express()
const PORT=8000;
// this all is server side 
app.get('/',(req,res)=>{
    res.send("ok")
})
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"API"
}).then(() =>("DataBase Connected")).catch((e)=>console.log(e))
const schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String

})
const User= mongoose.model("API's",schema)
app.get("/users/all", async (req,res)=>{
   const users= await User.find({})
    res.json({
    //   users:users, // key value pair is same so we can write like this as well
      users
    })
})
app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`)
})// this is an server which hosted locally 

// res.sendFile(__dirname + "/index.html")// __dirname --> start locking from main dir till index.html