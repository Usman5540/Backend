import User from "../modles/user.js";
import Jwt  from "jsonwebtoken";
// at route localshost:500/me this function will run first then next funtion which is 
// getUserDetails
export const isAuthenticated=async (req,res,next)=>{
  // below is the new concept which is conntect with the middlewere (cookieParser)
  const {token} = req.cookies;
if (!token) {
    res.status(404).json({
      success:false,
      message:"log in first",
    })}
    // below verify function is used to get any thing from token which is already created 
    // here we are extracting _id which we stored in token 
    const decoded=  Jwt.verify(token,process.env.JWT_SECRET)
    req.user= await User.findById(decoded._id) // extaract id that we passed when we made a token and we do not need to pass as parameter user so we can use as req.user
// console.log(req.user)
    next();// call next function according to the rule
}
