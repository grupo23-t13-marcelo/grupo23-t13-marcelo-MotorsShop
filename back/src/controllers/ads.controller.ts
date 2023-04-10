import { Request, Response } from "express"
import { IAds, ICreateAds, IPatchAds } from "../interfaces/ads"
import registerAdsService from "../services/ads/registerAds.service"
import listAdsService from "../services/ads/listAds.service"
import listUniqueAdService from "../services/ads/listUniqueAds.service"
import deleteAdService from "../services/ads/deleteAds.service"
import deactiveAdService from "../services/ads/deactiveAds.service"
import activeAdService from "../services/ads/activeAds.service"
import patchAdsService from "../services/ads/patchAds.service"



const createAdsController = async (req:Request, res: Response) => {
    const adData: ICreateAds = req.body
    const newAd = await registerAdsService(adData)
    return res.status(201).json(newAd)
}

const listAdsController = async (req:Request, res: Response) => {
    const listAds = await listAdsService()
    return res.status(200).json(listAds)
}

const listUniqueAdsController = async (req:Request, res: Response) => {
    const adID: string = req.params.id
    const listAd = await listUniqueAdService(adID)
    return res.status(200).json(listAd)
}

const deleteAdsController = async (req:Request, res: Response) => {
    const adID: string = req.params.id
    const deleteAD = await deleteAdService(adID)
    return res.status(204).json(deleteAD)
}

const deactiveAdsController = async (req:Request, res: Response) => {
    const adID: string = req.params.id
    const deactiveAD = await deactiveAdService(adID)
    return res.status(204).json(deactiveAD)
}

const activeAdsController = async (req:Request, res: Response) => {
    const adID: string = req.params.id
    const activeAD = await activeAdService(adID)
    return res.status(200).json(activeAD)
}

const patchAdsController = async (req:Request, res: Response) => {
    const adPatchData: IPatchAds = req.body
    const adID: string = req.params.id
    const patchAD = await patchAdsService(adPatchData, adID)
    return res.status(200).json(patchAD)
}


export {createAdsController, listAdsController, listUniqueAdsController, deleteAdsController,deactiveAdsController,activeAdsController, patchAdsController}