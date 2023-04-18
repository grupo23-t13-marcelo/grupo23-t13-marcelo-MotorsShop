import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUser } from "../../interfaces/users";
import { compare } from "bcryptjs";
import { AppError } from "../../errors";

export const verifyLoginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);
  const { email, password }: IUser = req.body;

  const userEmail = (await userRepo.findOne({
    where: { email: email },
    select: ["password", "email"],
  })) as User;

  if (userEmail) {
    const passMatch = await compare(password, userEmail.password);

    if (!passMatch) throw new AppError("Incorrect Email or Password", 403);
  }

  if (!userEmail) throw new AppError("Incorrect Email or Password", 403);

  return next();
};
