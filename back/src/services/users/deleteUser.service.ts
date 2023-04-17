import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";

export const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = (await userRepo.findOneBy({ id })) as User;

  await userRepo.delete(user.id);
  return;
};
