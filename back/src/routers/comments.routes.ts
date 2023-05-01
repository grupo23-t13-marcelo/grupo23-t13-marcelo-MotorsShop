import { Router } from "express";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { createCommentController } from "../controllers/comments/comments.controller";

export const commentsRoutes = Router()

commentsRoutes.post('', verifyTokenValidationMiddleware, createCommentController)