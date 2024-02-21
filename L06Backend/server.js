import express from 'express'
import mongoose from 'mongoose';
const app = express()
const PORT=8000;

// middlwere in previous app which is auth we used app.use(express.urlencoded something)
// which used to accept data from req.body in the the way of form now we are not currently using any kind of form so 
// we will use middlwere for jason
app.use(express.json())
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
app.post("/users/new", async (req,res)=>{

    const {email,password,name} = req.body;
    User.create({
        email,password,name,
    })

    res.status(201).cookie("name","log").json({
    //   users:users, // key value pair is same so we can write like this as well
      success:true,
      message:"msg deleverd "
    })
})
app.get("/users/all",async (req,res)=>{
const users= await User.find({})// this all return all stuf of the User db

// console.log(req.query)
// answer server is runnig at 8000 { name: 'ali' } of the above line
const keyword=req.query.keyword
console.log(keyword)
// individual access from query params --> output server is runnig at 8000 --->moji
    res.json({
       users,
    })
})
// dynamic routing 
app.get("/userId/:id",async (req,res)=>{
    // below id can sent from post area of the postman 
    // instruction attribute name must be same as using name postman
    // const {_id}=req.body  body is used for post req
    // we should use body with post req instead use params dynamic routes basically 
    // here is also interaction with db so that is why we are using async function 
    // const {_id} = req.query 
    // it will work as same as above 
    // tested in console ok 
//----------------<<<<<<<<<>>>>>>--------------//
// time to use params if want  passed in parameter in postman as userId/:id we can pass dynamically like in appwrite in the place of :id
// here we making dynamic things 
const{id}= req.params // her we wall pass id of the user as direct params like userId/342lwjerjlekjr234
console.log(req.params)
    const user= await User.findById( id)
console.log(user)
      res.json({
        success:true,
        user,
      })
})
app.get("/users/remem",(req,res)=>{
    res.send("using browser we can only get request we can't do post req at all only using browser")
})
app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`)
})// this is an server which hosted locally 

// res.sendFile(__dirname + "/index.html")// __dirname --> start locking from main dir till index.html