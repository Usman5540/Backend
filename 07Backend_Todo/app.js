import  route  from './routes/route.js';
import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config({ path: './config.env' });
// here we config the path to use dotenv any where
const app = express()
app.use(express.json())
app.use(cookieParser())// this will allow for req.cookies in getuserDetails
app.use("/users",route) 
export default app
