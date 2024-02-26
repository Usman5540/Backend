#1 node:internal/modules/esm/resolve:255
throw new ERR_MODULE_NOT_FOUND
^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'A:\Odin\Backend\07backend_todo\modles\user' imported from
A:\Odin\Backend\07backend_todo\controller\users.js

solution --->
here user imported from models in the wrong way in the controller
like import User from "../modles/user";
instead
import User from "../modles/user.js";
so we need to carefull when we are importing something from anywhere
