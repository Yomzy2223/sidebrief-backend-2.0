import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err?.statusCode || 500;
  const errMessage = errStatus === 500 ? "Error occured" : err?.message;
  logger.error({
    message: `${errMessage} with error ${err} occurred when ${req.method} ${req.originalUrl} was called`,
  });
  res.status(errStatus).json({
    error: errMessage,
  });
};

export default ErrorHandler;
