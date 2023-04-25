import { Request, Response } from "express";
import { resetPassordService } from "../../services/users/postResetPassword.service";

export const resetPasswordController = async (req: Request, res: Response) => {
    const {email} = req.body
    const {protocol} = req
    const host = req.get("host")

    await resetPassordService(email, protocol, host!);
  
    return res.status(200).json({message: "token send"});
};
