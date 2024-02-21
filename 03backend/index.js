// import express from "express";
// import mongoose from "mongoose";
//  import path from "path";
//  const users=[];
// const app = express();
// app.set("view engine", "ejs");
// const pathlocation= path.resolve()
// // middleweres 
// app.use(express.static(path.join(pathlocation , "public")));// anything we put in public folder that will we serve by express we do not need routing in this case 
// app.use(express.urlencoded({ extended: true }));
// app.get("/",(req,res)=>{
//     // res.render("index", { ok: "usman khan shinwari" });
 
//     //    res.sendFile("index.html")// not working linking files  
//     res.render("index")
//     // you know what render and sendfile difference 
// })
// app.post("/contact",async (req,res)=>{
// // console.log(req.body.name)
// const data={name:req.body.name,email:req.body.email}
// //  res.redirect("/success")
//       res.render("index")
//   await  db.create(data)

// })
// // app.get("/",async (req,res)=>{
// //     const data={name:req.body.name,email:req.body.email}
// //     await  db.create(data)
// // })
// mongoose.connect("mongodb://127.0.0.1:27017",{
//    dbName:'newOne'
// }).then( ()=>console.log("db connected")).catch(e=>console.log(e))
// const Schemaa = new mongoose.Schema({
//     name:String,
//     email:String
// })
// const db= mongoose.model("mails",Schemaa)


// app.get("/", (req, res) => {
//     db.find({}).then((userData) => {
//         console.log(userData);
//         res.render("index.ejs", { information: userData });
//     }).catch(e => console.log(e));
// });


// // ejs expecting object so i wrapped up userData array with obj
//    // gives the information to that array
// app.listen(5000,()=> {
//  console.log('server is listening at port 5000 ')
// })


import express from 'express'
import express from "express";
import mongoose from "mongoose";
import path from "path";
import methodOverride from "method-override";
const app = express();
app.set("view engine", "ejs");
const pathlocation = path.resolve();

// Middleware
app.use(express.static(path.join(pathlocation, "public")));
app.use(express.urlencoded({ extended: true }));
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017", { dbName: 'newOne' })
    .then(() => console.log("db connected"))
    .catch(e => console.log(e));

// Define Mongoose Schema
const Schemaa = new mongoose.Schema({
    name: String,
    email: String
});
const db = mongoose.model("mails", Schemaa);

// Root Route when refresh the page it runs automatically render all data at "/" 
app.get("/", async (req, res) => {
    try {
        const userData = await db.find({});
        res.render("index", { information: userData });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Contact Form Submission Route
// i fiald to solve that issue 
// as for action is used to match post request where we created to much post request on one server
app.post("/data", async (req, res) => {
    // console.log(req)
    // as  i learnt in leon class there to much things that are sent with request one of them is body 
    // we extract req.body with specified name of the input 
    try {
        //added this to db from all buch of stuff of req
        const data = { name: req.body.name, email: req.body.email };// post works with request req.body.name means in html body where the name of the element is name then listen to that 
// above will took data from the body of the html and we added form type post that will automatically call this method when we hit submit
        await db.create(data);// it will wait untill new document created
        res.redirect("/"); // refresh
        // now i know the value of redirect 
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Eror");
    }
});
app.delete("/userDelete", async (req, res) => { 
    // we heard del  req hare at 5000 port and del db document

    try {
        const del = { name: req.body.name, email: req.body.email };
        await db.deleteOne(del);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Start Server
app.listen(5000, () => {
    console.log('Server is listening at port 5000');
});


