import Joi from 'joi';
import { NextFunction, Request, Response } from "express";

function validatorHandler ( schema: Joi.ObjectSchema<any>, property:string ) {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = req[ property as keyof typeof req ];
      const { error } = schema.validate(data, { abortEarly: false });
      if (error) throw error
      next();
    };
}

export default validatorHandler;