import express from 'express'
import { newUser,getAlluers, getUserDetails ,login} from '../controller/users.js';
// make sure file at last when you simply importing javascript
const router=express.Router()
// as of now router is used to set prefix
router.post("/api/v1/new",newUser)
router.get("/all",getAlluers)
router.post("/login",login)

router.route("/userId/:id").get(getUserDetails)
export default router
 
