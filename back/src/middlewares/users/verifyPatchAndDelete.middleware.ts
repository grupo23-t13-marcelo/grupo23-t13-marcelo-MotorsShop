import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AppError } from "../../errors";

export const verifyPatchAndDeleteMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;
  const token = authToken!.split(" ")[1];

  const { sub } = jwt.decode(token) as JwtPayload;

  if (sub !== req.params.id) throw new AppError("Invalid id", 401);

  return next();
};
