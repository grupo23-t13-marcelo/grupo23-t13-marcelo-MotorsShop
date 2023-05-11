import { Request, Response } from "express";
import { updatePasswordService } from "../../services/users/patchUpdatePassword.service";

export const updatePasswordController = async (req: Request, res: Response) => {
    const { password } = req.body
    const { token } = req.params

    await updatePasswordService(password, token);
  
    return res.status(200).json({message: "successfully updated password"});
};