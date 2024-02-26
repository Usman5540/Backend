import mongoose from "mongoose"
// db is created according to our Schema 
/* 
            
_id
65dcb56c1ded74966d7317e1
name
" email"
email
"email@gmail.com"
password
"$2b$08$DCbG0vVxISRpUGD7Fh1Tbulhol1DVM3GzM5FHWub.SDiExHbgxrti"
createdAt
2024-02-26T15:59:40.106+00:00
__v
0

*/
const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // we know the required true must be filled
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        select:false,
    },
    /* 
    
    In this example, the password field is marked with select: 
    false, indicating that it should not be included in query results
     unless explicitly requested. This helps protect the password field from being accidentally exposed in responses. If you need to retrieve the password field in specific
     queries, you can explicitly include it in the query projection.
    
    */
    createdAt:{
        type:Date,
        default:Date.now,
    },
})
 const User= mongoose.model("User",schema)
 export default User