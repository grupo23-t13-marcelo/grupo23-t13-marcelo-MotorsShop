import { Router } from "express";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { createCommentController, deleteCommentControler, updateCommentControler } from "../controllers/comments/comments.controller";

export const commentsRoutes = Router()

commentsRoutes.post('', verifyTokenValidationMiddleware, createCommentController)
commentsRoutes.delete('/:id', verifyTokenValidationMiddleware, deleteCommentControler)
commentsRoutes.patch('/:id', verifyTokenValidationMiddleware, updateCommentControler)