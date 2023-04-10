import { Router } from "express";
import { activeAdsController, createAdsController, deactiveAdsController, deleteAdsController, listAdsController, listUniqueAdsController, patchAdsController } from "../controllers/ads.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureUserIsAdOwner } from "../middlewares/ensureUserIsAdOwner.middleware";


const adsRouters = Router()

adsRouters.post("/activate/:id", activeAdsController)
adsRouters.post("", createAdsController)
adsRouters.delete("/deactive/:id", deactiveAdsController)
adsRouters.delete("/:id", deleteAdsController)
adsRouters.patch("/:id", ensureAuthMiddleware,ensureUserIsAdOwner,patchAdsController)
adsRouters.get("/:id", listUniqueAdsController)
adsRouters.get("", listAdsController)

export default adsRouters