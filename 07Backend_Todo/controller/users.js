import User from "../modles/user.js";
// schema user 
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
tokenfunction(res,user,"user register successfully")
   
}
export const getAlluers=async (req,res)=>{
const users= await User.find({})   
    res.json({
       users,
    })
}
export const getUserDetails= async (req,res)=>{
const{id}= req.params 
// keep in mind in params i used id not _id 
    const user= await User.findById(id)
    console.log(user)
      res.json({
        success:true,
        user,
      })
}
export const login=()=>{

}

