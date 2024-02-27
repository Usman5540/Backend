import User from "../modles/user.js";
// schema user 
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { tokenfunction } from "../utils/utils.js";
// before it giving error but its working fine 
export const newUser=async (req,res)=>{
    const {email,password,name} = req.body;
   let user = await User.findOne({email})
   if (user) {
    res.status(404).json({
      success:false,
      message:"user is already exists",
    })}
    // below line will catch the comming password comming from body of the postman  and will convert into hash then that hashed password will send to db
    const hashPasword =  await bcrypt.hash(password,8)
    user = await  User.create({
      email,
      password:hashPasword,
      name,
    })
// simply called the function for readablity 
tokenfunction(res,user,"user register successfully",200)
   
}
export const getAlluers=async (req,res)=>{

const users= await User.find({})   
    res.json({
       users,
    })
}
export const getUserDetails=  (req,res)=>{
      res.json({
        success:true,
        user:req.user,//---->??
      })
}
// not working
export const login= async (req,res)=>{
const {email,password}= req.body
// we set password property select:false that is why we can not get password with user  data so that is why  we used select function and + as well
   let user = await User.findOne({email}).select("+password") 
  if (!user) {
    res.status(404).json({
      success:false,
      message:"invalid password or email",
    })}
    
    const isMatch = bcrypt.compare(password,user.password)
    if (!isMatch) 
      {
    res.status(404).json({
      success:false,
      message:"invalid password or email",
    })}
    // order matter
    tokenfunction(res,user,`welcome back ${user.name}`,"200")
    
}

