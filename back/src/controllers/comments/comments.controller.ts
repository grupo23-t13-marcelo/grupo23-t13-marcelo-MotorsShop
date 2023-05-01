import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";


export const createCommentController = async (req: Request, res: Response) => {
    const userID: string = req.user.id
    const newComment = await createCommentService(req.body, userID)

    return res.status(201).json(newComment)
}