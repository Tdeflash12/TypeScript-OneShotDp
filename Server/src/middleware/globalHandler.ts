import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import envConfig from "../config/config";



const globalErrorHandler = (err:HttpError,req:Request,res:Response,next:NextFunction)=>{
    const statuscode= err.statusCode || 500
    res.status(statuscode).json({
        message: err.message,
        errorStack : envConfig.environment  === 'development' ? err.stack: " something went wrong"
    })

}
export default globalErrorHandler