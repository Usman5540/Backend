import  userRouter  from './routes/route.js';
import   taskRouter from './routes/taskRoute.js'
import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddlewere } from './middlewere/error.js';
dotenv.config({ path: './config.env' });
// here we config the path to use dotenv any where
const app = express()
app.use(express.json())
app.use(cookieParser())// this will allow for req.cookies in getuserDetails

app.use("/users",userRouter) 
app.use("/api/v1/tasks",taskRouter)
app.use(errorMiddlewere);


export default app
