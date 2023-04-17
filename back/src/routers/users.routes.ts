import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { emailAndCpfMiddleware } from "../middlewares/users/emailAndCpfAuth.middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { YupVerification } from "../middlewares/serializer/serializer.middleware";
import { UserSchema } from "../schemas/users";
import { verifyIdMiddleware } from "../middlewares/users/verifyId.middleware";
import { putUserController } from "../controllers/users/putUser.controller";
import { verifyPatchBodyMiddleware } from "../middlewares/users/verifyPutBody.middleware";

const userRouter = Router();

userRouter.post(
  "",
  YupVerification(UserSchema),
  emailAndCpfMiddleware,
  createUserController
);
export default userRouter;

userRouter.get("/:id", getUserByIdController);
userRouter.patch(
  "/:id",
  verifyIdMiddleware,
  verifyPatchBodyMiddleware,
  putUserController
);
userRouter.delete("");
