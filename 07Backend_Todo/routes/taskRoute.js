import express from 'express';
import { newTask,myTasks, updateTask, deleteTask } from '../controller/task.js';
import { isAuthenticated } from '../middlewere/auth.js';
const router = express.Router()

router.post("/new",isAuthenticated,newTask)
router.get("/mytasks",isAuthenticated,myTasks)
router.route("/:id").put(isAuthenticated,updateTask).delete(deleteTask)
/* 

,updateTask,()=>{
    next()// will through error because there is no next function 
    to solve this problem we will create a middlewere
}
*/
export default router 