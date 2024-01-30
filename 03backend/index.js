import express from "express";
 import path from "path";
 const users=[];
const app = express();
app.set("view engine", "ejs");
const pathlocation= path.resolve()
// middleweres 
app.use(express.static(path.join(pathlocation , "public")));
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    // res.render("index", { ok: "usman khan shinwari" });
 
    //    res.sendFile("index.html")// not working linking files  
    res.render("index")
    // you know what render and sendfile difference 
})
app.post("/contact",(req,res)=>{
// console.log(req.body.name)
users.push({username:req.body.name,email:req.body.email})
//  res.redirect("/success")
      res.render("success")
})
app.get("/users",(req,res)=>{
       res.json({
        users,
       })
})

app.listen(5000,()=> {
 console.log('server is listening at port 5000 ')
})




