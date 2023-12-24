import { NextFunction, Response } from "express";
import { isAxiosError } from 'axios';

function errorHandler (error: any, req: Request, res: Response, next: NextFunction) {  
  if ( !error ) next();
  if ( error.error ) error = error.error;
   
  console.log( error );

  let statusCode = error.statusCode || error.code || 500;
  let errorMessage = error.message || 'Internal server error [check server logs]';


  if ( isAxiosError( error ) ){
    if (error.response) {
      console.log(error.response.data);
      errorMessage = error.response.data.message;
      statusCode = error.response.status;
    } else {
      errorMessage = error.message;
    }
  }


  return res.status( statusCode ).json({ 
    error: errorMessage,
    id: `${ Math.random() }`,
    statusCode,
    status: 'failure',
    data: null,
  });
}

export default errorHandler;