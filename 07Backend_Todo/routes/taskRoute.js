import express from 'express';
import { newTask,myTasks, updateTask, deleteTask } from '../controller/task.js';
import { isAuthenticated } from '../middlewere/auth.js';
const router = express.Router()

router.post("/new",isAuthenticated,newTask)
router.get("/mytasks",isAuthenticated,myTasks)
router.route("/:id").put(updateTask).delete(deleteTask)
export default router