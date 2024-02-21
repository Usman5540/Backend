import cookieParser from 'cookie-parser';
import express from 'express'
import mongoose from 'mongoose';
import path from "path";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const app = express();
app.set("view engine", "ejs");
const pathlocation = path.resolve();

// Middleware
app.use(express.static(path.join(pathlocation, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//custom middlewere
const isAuthenticated = async (req, res, next) => {
  //  const token=req.cookies.token
  const { token } = req.cookies
  if (token) {
    try {
      const tokenMinimized = jwt.verify(token, "ok bye sea");
      // console.log(tokenMinimize)
      // hop so at below you got the point 
      req.user = await db.findById(tokenMinimized._id)
      //  console.log(req.user)
      next()
    } catch (error) {
      console.error("Error verifying JWT token:", error);
      res.render("login", { username: null }); // Pass username as null if token verification fails
    }
  } else {
    res.render("login", { username: null }); // Pass username as null if no token is present
  }
}

// These functions will run in sequence. isAuthenticated will run first if a token is created, then the next function, which is logout, will run. Otherwise, the login page will be rendered. This process will run on each refresh.

// The below function will only run when data has been filled by the user in the login form
app.get("/", isAuthenticated, async (req, res) => {
  // Here we are passing email and password which we took from input fields of the login form to the logout form
  res.render("logout", { username: req.user.username, password: req.user.password });
});

// Here we set post because we send data
app.post("/login", async (req, res) => {
  // console.log(req.body)   
  const { username, password } = req.body;
  // Whenever we interact with db we always await until process completed
  try {
    let userExist = await db.findOne({ username });
    // here above we will check is user exists or not by using findOne() method

    console.log(userExist)// will return null if user does not exist
    // it will return complete obj if user exists
    /* {
      _id: new ObjectId('65d372eecec53be277fe6551'),
      username: 'one@gmail.com',        
      password: 9898,
      __v: 0
    } */
    // This will run when the user does not exist in db. It will redirect to registration first

    if (!userExist) {
      // We must render file not redirect, we redirect to page always
      return res.render("register");
    }
         const isMatch = await bcrypt.compare(password,userExist.password)
    if (!isMatch) { // If passed password with req.body is not matched the existing password that is stored in db
      // Passwords do not match. Send an error message to the client.
      res.render("login", { username,error: "Incorrect password. Please try again." });
      return;
    }
// if user exists then create token for that user 
    // Here we are passing id of the user as well in cookie
    const token = jwt.sign({ _id: userExist._id }, 'ok bye sea');
    console.log(token)
    // Above simple jwt token
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 1000)
    });
    // After creating cookie 
    // As write below haha
    res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Here is not so get will be fine 
app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now())
  })
  res.redirect("/")
})

app.post("/register", async (req, res) => {
  const { username, fulname, password } = req.body
  // destructred data from the regex form and directly creating db document for that
   const hashpassword= await bcrypt.hash(password,8)// here we converted the password into hash which comming from regex

  try {
    const reg = await db.create({ username, password:hashpassword, fulname });
    // check if db successfully created  then render login page for login with that regester email
    if (reg) {
      res.render("login");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Internal Server Error");
  }
});

mongoose.connect("mongodb://127.0.0.1:27017", { dbName: 'auth' })
  .then(() => console.log("db connected"))
  .catch(e => console.log(e));

const schema = new mongoose.Schema({
  username: String,
  password: String,
  fulname: String,
})
const db = mongoose.model("Authentication", schema)

app.listen(5000, () => {
  console.log('Server is listening at port 5000');
});
