import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUser } from "../../interfaces/users";

export const createUserService = async (body: Omit<IUser, "id">) => {
  const userRepo = AppDataSource.getRepository(User);

  const createUser = userRepo.create({ ...body, address: { ...body.address } });

  await userRepo.save(createUser);

  const { password, ...userWithoutPassword } = createUser;

  return userWithoutPassword;
};
