import express from "express";
import path from "path";

const app=express()

app.get("/",( req,res  )=>{
    // res.json({
    //     age:23,
    //     height :342
    // })
    // res.status(500).send('meri marzi')
    // const pathalocation=path.resolve()
    // res.sendFile(path.join(pathalocation,"./index.html"))
})
app.listen(5000,()=>{
    console.log('server is running')
})