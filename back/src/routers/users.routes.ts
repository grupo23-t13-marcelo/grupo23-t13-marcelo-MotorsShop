import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { emailAndCpfMiddleware } from "../middlewares/users/emailAndCpfAuth.middleware";
import { getUserByIdController } from "../controllers/users/getUserById.controller";
import { YupVerification } from "../middlewares/serializer/serializer.middleware";
import { passwordResetSchema, sendEmailSchema, UserSchema } from "../schemas/users";
import { verifyIdMiddleware } from "../middlewares/users/verifyId.middleware";
import { putUserController } from "../controllers/users/putUser.controller";
import { verifyPatchBodyMiddleware } from "../middlewares/users/verifyPutBody.middleware";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { getUsersController } from "../controllers/users/getUsers.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { verifyPatchAndDeleteMiddleware } from "../middlewares/users/verifyPatchAndDelete.middleware";
import { getProfileUserController } from "../controllers/users/getProfileUser.controller";
import { resetPasswordController } from "../controllers/users/postResetPassword.controller";
import { updatePasswordController } from "../controllers/users/patchUpdatePassword.controller";

const userRouter = Router();

userRouter.post(
  "",
  YupVerification(UserSchema),
  emailAndCpfMiddleware,
  createUserController
);

userRouter.get("", getUsersController);
userRouter.get("/profile", verifyTokenValidationMiddleware, getProfileUserController);
userRouter.get(
  "/:id",
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

userRouter.post(
  "/reset",
  YupVerification(sendEmailSchema),
  resetPasswordController
)

userRouter.patch(
  "/reset/:token",
  YupVerification(passwordResetSchema),
  updatePasswordController
)

export default userRouter;
