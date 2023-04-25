import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";
import { hashSync } from "bcryptjs";
import moment from "moment";

export const updatePasswordService = async (password: string, resetToken: string) => {
    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({reset_token: resetToken})

    if (!user) {
        throw new AppError("User not Found", 404)
    }
    const verificationDate = moment(user.reset_time)
    const timeNow = moment()
    const timeDifference = timeNow.diff(verificationDate, 'hours')

    if (timeDifference > 1) {
        throw new AppError("time to update your password has expired", 400)
    }

    await userRepo.update(user.id, {password:  hashSync(password, 10), reset_token: null, reset_time: null}) 
}