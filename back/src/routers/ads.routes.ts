import { Router } from "express";
import { activeAdsController, createAdsController, deactiveAdsController, deleteAdsController, listAdsController, listUniqueAdsController,putAdsController } from "../controllers/ads.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureUserIsAdOwner } from "../middlewares/ensureUserIsAdOwner.middleware";


const adsRouters = Router()


adsRouters.post("", createAdsController)
adsRouters.delete("/:id", deleteAdsController)
adsRouters.put("/:id",putAdsController)
adsRouters.get("/:id", listUniqueAdsController)
adsRouters.get("", listAdsController)

export default adsRouters