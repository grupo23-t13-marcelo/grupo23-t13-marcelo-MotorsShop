import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getProfileUserService = async (auth: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const token = auth?.split(" ")[1];

  const { sub } = jwt.decode(token) as JwtPayload;

  const user = await userRepo.findOne({
  where: {id: String(sub)},
  relations: {ads: {
    gallery: true
  }, address: true, }
  }) as User

  return user
};
