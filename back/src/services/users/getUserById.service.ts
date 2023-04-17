import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";

export const getUserByIdService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const getUser = userRepo.findOne({ where: { id }, relations: { ads: true } });

  return getUser;
};
