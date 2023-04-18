import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";

export const emailAndCpfMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cpf } = req.body;

  const userRepo = AppDataSource.getRepository(User);
  const userEmail = await userRepo.findOneBy({ email });
  const userCpf = await userRepo.findOneBy({ cpf });

  if (userEmail) throw new AppError("Email already exists", 409);

  if (userCpf) throw new AppError("Cpf already exists", 409);

  return next();
};
