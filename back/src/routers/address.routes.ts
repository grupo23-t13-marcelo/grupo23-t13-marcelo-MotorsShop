import { Router } from "express";
import { updateAddressController } from "../controllers/address/address.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { YupVerification } from "../middlewares/serializer/serializer.middleware";
import { addressSchema } from "../schemas/address";

const addressRouter = Router();

addressRouter.put(
    "", 
    YupVerification(addressSchema), 
    verifyTokenValidationMiddleware, 
    updateAddressController
);

export default addressRouter;