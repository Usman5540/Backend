 export class errorHandler extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}
// above is custom error handler clas which is used due to pass only message to Error class nothing so here we can pass bot message and status code as well 


export const errorMiddlewere=(error, req, res, next) => {// not working 
   error.message=error.message || "internal server error"// or will run when we not passed message in errohandler class same as below for statusCode
   error.statusCode=error.statusCode  || "500"
    res.status(error.statusCode).json({
        success: false,
        message: error.message  
    });
}