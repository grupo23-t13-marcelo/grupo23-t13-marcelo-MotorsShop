import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

export const verifyPatchBodyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const verifyKeys = Object.keys(req.body);

  if (
    verifyKeys.includes("id") ||
    verifyKeys.includes("is_active")
  ) {
    throw new AppError("These data cannot be modified ", 401);
  }
  return next()
};
