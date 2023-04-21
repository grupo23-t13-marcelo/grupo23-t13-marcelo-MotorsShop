import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { User } from "../../entities/users.entities";

export const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = (await userRepo.findOneBy({ id })) as User;
  const adRepo = AppDataSource.getRepository(Ads);
  await adRepo.delete({ user: { id: user.id } }); 
  await userRepo.delete(id); 
  return;
};