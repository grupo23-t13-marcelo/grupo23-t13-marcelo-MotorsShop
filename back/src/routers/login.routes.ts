import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { verifyLoginMiddleware } from "../middlewares/login/verifyLogin.middleware";

const loginRouter = Router();

loginRouter.post("", verifyLoginMiddleware, loginController);

export default loginRouter;
