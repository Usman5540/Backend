

import  connectDb from './DataBases/DB.js';
import app from './app.js'
const PORT=8000
connectDb() 
app.listen(PORT,()=>{
    // console.log(process.env.PORT)
    // but unable to use above . i will see it later 
    console.log(`server is runnig at ${PORT} `)
})// this is an server which hosted locally 

