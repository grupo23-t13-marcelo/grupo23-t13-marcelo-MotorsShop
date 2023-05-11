import moment from "moment";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUser } from "../../interfaces/users";


export const createUserService = async (body: Omit<IUser, "id">) => {
  const userRepo = AppDataSource.getRepository(User);
  const formattedDate = moment(body.birthdate, "DD/MM/YYYY").format('YYYY-MM-DD')

  const createUser = userRepo.create({ ...body, birthdate: formattedDate, address: { ...body.address } });

  await userRepo.save(createUser);

  const { password, ...userWithoutPassword } = createUser;

  return userWithoutPassword;
};
