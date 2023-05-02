import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";
import { deleteCommentService } from "../../services/comments/deleteComment.service";
import { updateCommentService } from "../../services/comments/updateComment.service";


export const createCommentController = async (req: Request, res: Response) => {
    const userID: string = req.user.id
    const newComment = await createCommentService(req.body, userID)

    return res.status(201).json(newComment)
}

export const deleteCommentControler = async (req: Request, res: Response) => {
    const commentID: string = req.params.id

    const [status, message] = await deleteCommentService(commentID, req.user.id)

    return res.status(status as number).json(message)
}

export const updateCommentControler = async (req: Request, res: Response) => {
    const commentID: string = req.params.id

    const [status, message] = await updateCommentService(commentID, req.body.content, req.user.id)

    return res.status(status as number).json(message)
}