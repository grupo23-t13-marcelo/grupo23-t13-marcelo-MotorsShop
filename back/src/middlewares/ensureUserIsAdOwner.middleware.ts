import { NextFunction, Response, Request } from "express"

import { Ads } from "../entities/ads.entities"
import { AppError } from "../errors"
import { AppDataSource } from "../data-source"



const ensureUserIsAdOwner = async(req:Request, res: Response, next: NextFunction) => {
    // const adsRepository = AppDataSource.getRepository(Ads)


    // const ensureUserIsAdOwner = await adsRepository.findOneBy({

    // })

    // req.user = ensureUserIsAdOwner

    // if(ensureUserIsAdOwner){
    //     return next()
    // }



    // throw new AppError("Você não é o Dono Deste Anúncio", 403)
}

export {ensureUserIsAdOwner}