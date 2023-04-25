import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";
import {randomUUID} from "node:crypto"
import { resetPasswordTemplate, sendEmail } from "../../config/nodeMailer.config";

export const resetPassordService = async (email: string, protocol: string, host: string) => {

    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({email: email})

    if (!user) {
        throw new AppError("User not Found", 404)
    }

    const resetToken = randomUUID()
    const resetTime = new Date()
    
    await userRepo.update(user.id, {reset_token: resetToken, reset_time: resetTime})

    const resetTemplate = resetPasswordTemplate(email, user.name, protocol, host, resetToken)

    await sendEmail(resetTemplate)


    return "teste reset password"
}
