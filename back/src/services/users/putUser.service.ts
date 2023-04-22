import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";
import { IUser } from "../../interfaces/users";

export const putUserService = async (body: Partial<IUser>, id: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = (await userRepo.findOneBy({ id: id })) as User;

  await userRepo.update(user.id, { ...body });
  const { password, ...newBody  } = body;

  return newBody;
};
