export const errorMiddlewere=(error, req, res, next) => {// not working 
    console.error('Error caught by error handling middleware:', error); // Log the error for debugging purposes
    res.status(404).json({
        success: false,
        message: error.message  
    });
}