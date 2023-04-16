import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { emailAndCpfMiddleware } from "../middlewares/users/emailAndCpfAuth.middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { YupVerification } from "../middlewares/serializer/serializer.middleware";
import { UserSchema } from "../schemas/users";


const userRouter = Router()

userRouter.post("", YupVerification(UserSchema), emailAndCpfMiddleware, createUserController)
export default userRouter

userRouter.get("/:id", getUserByIdController)
userRouter.patch("")
userRouter.delete("")