import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { emailAndCpfMiddleware } from "../middlewares/users/emailAndCpfAuth.middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { YupVerification } from "../middlewares/serializer/serializer.middleware";
import { UserSchema } from "../schemas/users";
import { verifyIdMiddleware } from "../middlewares/users/verifyId.middleware";
import { putUserController } from "../controllers/users/putUser.controller";
import { verifyPatchBodyMiddleware } from "../middlewares/users/verifyPutBody.middleware";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { getUsersController } from "../controllers/users/getUsers.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/users/verifyPatchAndDelete.middleware";

const userRouter = Router();

userRouter.post(
  "",
  YupVerification(UserSchema),
  emailAndCpfMiddleware,
  createUserController
);

userRouter.get("", getUsersController);
userRouter.get(
  "/:id",
  verifyTokenValidationMiddleware,
  verifyIdMiddleware,
  getUserByIdController
);

userRouter.put(
  "/:id",
  verifyTokenValidationMiddleware,
  verifyIdMiddleware,
  verifyPatchBodyMiddleware,
  verifyPatchAndDeleteMiddleware,
  putUserController
);

userRouter.delete(
  "/:id",
  verifyTokenValidationMiddleware,
  verifyIdMiddleware,
  verifyPatchAndDeleteMiddleware,
  deleteUserController
);

export default userRouter;
