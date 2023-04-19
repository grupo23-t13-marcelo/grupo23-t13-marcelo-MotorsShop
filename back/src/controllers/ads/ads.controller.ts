import { Request, Response } from "express"
import { IAds, ICreateAds, IPatchAds } from "../../interfaces/ads"
import registerAdsService from "../../services/ads/registerAds.service"
import listAdsService from "../../services/ads/listAds.service"
import listUniqueAdService from "../../services/ads/listUniqueAds.service"
import deleteAdService from "../../services/ads/deleteAds.service"



import putAdsService from "../../services/ads/putAds.service"
import { IUser } from "../../interfaces/users"



const createAdsController = async (req:Request, res: Response) => {
    const userID:string = req.user.id
    const adData: ICreateAds = req.body
    const newAd = await registerAdsService(adData, userID)
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

const putAdsController = async (req:Request, res: Response) => {
    const adPatchData: IPatchAds = req.body
    const adID: string = req.params.id
    const putAD = await putAdsService(adPatchData, adID)
    return res.status(200).json(putAD)
}


export {createAdsController, listAdsController, listUniqueAdsController, deleteAdsController, putAdsController}