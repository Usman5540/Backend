import express from 'express';
const app=express();
const PORT=8000;

app.get("/",()=>{})
app.listen(PORT,()=>{
    console.log(`server is running on the prot${PORT}`)
})