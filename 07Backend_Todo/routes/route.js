import express from 'express'
import { newUser,getAlluers, getUserDetails ,login} from '../controller/users.js';
import { isAuthenticated } from '../middlewere/auth.js';
// make sure file at last when you simply importing javascript
const router=express.Router()
// as of now router is used to set prefix
router.post("/api/v1/new",newUser)
router.get("/all",getAlluers)
router.post("/api/v1/login",login)

router.get("/me",isAuthenticated,getUserDetails)//OK
export default router
 
