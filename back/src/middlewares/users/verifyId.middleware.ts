import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";

export const verifyIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepo = AppDataSource.getRepository(User);

  const verify = await userRepo.exist({ where: { id: id } });

  if (!verify) throw new AppError("user not found", 404);

  return next();
};
