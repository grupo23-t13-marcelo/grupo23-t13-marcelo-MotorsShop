import { Request, Response } from "express";
import { putUserService } from "../../services/users/putUser.service";

export const putUserController = async (req: Request, res: Response) => {
  const {
    body,
    params: { id },
  } = req;
  const user = await putUserService(body, id);

  return res.status(200).json(user);
};
