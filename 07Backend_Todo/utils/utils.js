import jwt from 'jsonwebtoken'
export const tokenfunction=(res,user,message,status=201)=>{
    // syntax must use {} inside built in function 
    const token  = jwt.sign({_id: user._id},process.env.JWT_SECRET) 

    res.status(status).cookie("token",token,{
      httpOnly: true,
      maxAge:15*60*1000
    }).json({
      success:true,
      message,
    })
}