import { errorHandler } from '../middlewere/error.js';
import Task from '../modles/task.js'
export const newTask=(req,res,next)=>{
    
    try {
    
    const {title,description}=req.body;
      Task.create ({
        title,
        description,
        user:req.user // we added as next (isAuth) that will provide logged user _id which being used to get user data 
    })
    res.status(201).json({
        success:true,
        message:"task successfuly created "
    })
} catch (error) {
    next(error)
}
}
export const myTasks= async(req,res,next)=>{
   try {
     const userid=req.user._id;// again extract id from token 
    const tasks=await Task.find({user:userid})// users collection--->not a collection rather name of the Schema attribute user in Task Schema
    // when we were creating task at that time we sent the id of the logged in user so basically hare we are getting id from token then and matching with user with logged in id so user is in the task
    res.json({
        success:true,
        tasks,
    })
   } catch (error) {
    next(error)
   }

}
export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id); // we will provide id of the specific task
       if(!task) return next(new errorHandler("Task not found ",404))
        task.isCompleted = !task.isCompleted; // this is same as in react streak removed
        await task.save();

        res.status(200).json({
            success: true,
            message: "Task is updated successfully."
        });
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async(req,res,next)=>{
try {
         const { id } = req.params;
        const task = await Task.findById(id);
        if(!task) return next(new errorHandler("Task not found ",404))
        await task.deleteOne()
        res.status(200).json({
            success: true,
            message: "Task is deleted successfully."
        });

} catch (error) {
 next(error)   
}
}