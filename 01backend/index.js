// const http=require("http")
import http from "http";
import  masi,{ name1,name2 } from "./features.js";
import * as obj from "./features.js";
 import fs from "fs"
 const read=fs.readFile("./index.html",()=>{
    console.log('file is read')
 })// async task 
 console.log(read)
// const gfname = require("./features")
// import masi from "./features.js";// we can change name in export default
// console.log(masi)
// console.log(name1)
// console.log(name2)
// console.log(obj)
// console.log(obj.default)
// console.log(obj.name2)
// console.log(obj.Love())
// console.log(http)

const server=http.createServer((req,res)=>{
    // console.log('<h1>hello world</h1>')
    // console.log(req.url) req gives back in console values
    //response shows on web browser
    // res.end("hello web")
    // res.end("<h1>h1</h1>")
    // res.end(`you love is `)
    
    if(req.url==="/")
    {
        res.end(`<h1>Love i have  : ${obj.Love()} <\h1> `)
        // res.end("<h1> home page</h1>")
    }
    else if(req.url==="/about")
    {
        res.end("<h1> about  page</h1>")
    }
    else if(req.url==="/nav")
    {
        res.end("<h1> nav page</h1>")
    }
    else 
    res.end('page not found ')
    

})


server.listen(5000,()=>{
    console.log('ser is listening at 5000 port')
})