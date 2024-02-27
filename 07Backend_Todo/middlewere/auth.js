import User from "../modles/user.js";
import Jwt  from "jsonwebtoken";
export const isAuthenticated=async (req,res,next)=>{
const {token} =req.cookies;
if (!token) {
    res.status(404).json({
      success:false,
      message:"log in first",
    })}
    const decoded=  Jwt.verify(token,process.env.JWT_SECRET)
    req.user= await User.findById(decoded._id)// extaract id that we passed when we made a token and we do not need to pass as parameter user so we can use as req.user
// console.log(req.user)
    next();// call next function according to the rule
}