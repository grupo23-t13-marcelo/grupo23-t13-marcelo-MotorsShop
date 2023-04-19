import { Router } from "express";
import { createAdsController, deleteAdsController, putAdsController, listUniqueAdsController, listAdsController } from "../controllers/ads/ads.controller";
import { verifyTokenValidationMiddleware } from "../middlewares/login/verifyTokenValidation.Middleware";
import { verifyUserIsAdOwner } from "../middlewares/ads/verifyUserIsAdOwner.middleware";



const adsRouters = Router()


adsRouters.post("", verifyTokenValidationMiddleware,createAdsController)
adsRouters.delete("/:id",verifyTokenValidationMiddleware,verifyUserIsAdOwner,deleteAdsController)
adsRouters.put("/:id",verifyTokenValidationMiddleware,verifyUserIsAdOwner,putAdsController)
adsRouters.get("/:id", listUniqueAdsController)
adsRouters.get("", listAdsController)

export default adsRouters