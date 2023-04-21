import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";
import {randomUUID} from "node:crypto"
import { resetPasswordTemplate, sendEmail } from "../../config/nodeMailer.config";
import { hashSync } from "bcryptjs";

export const updatePasswordService = async (password: string, resetToken: string) => {
    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({reset_token: resetToken})

    if (!user) {
        throw new AppError("User not Found", 404)
    }


    await userRepo.update(user.id, {password:  hashSync(password, 10), reset_token: null}) 
}