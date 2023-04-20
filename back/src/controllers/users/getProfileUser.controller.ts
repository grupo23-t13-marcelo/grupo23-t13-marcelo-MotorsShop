import { Request, Response } from "express";
import { getProfileUserService } from "../../services/users/getProfileUser.service";


export const getProfileUserController = async (req: Request, res: Response) => {

    const auth = req.headers.authorization as string;
    const user = await getProfileUserService(auth);

    return res.status(200).json(user);
}