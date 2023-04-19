import { NextFunction, Response, Request } from "express"

import { Ads } from "../../entities/ads.entities"
import { AppError } from "../../errors"
import { AppDataSource } from "../../data-source"



const verifyUserIsAdOwner = async(req:Request, res: Response, next: NextFunction) => {
    const adsRepository = AppDataSource.getRepository(Ads)


    const ensureUserIsAdOwner = await adsRepository.findOneBy({
        user: {
            id: req.user.id
        }
    })

    if(ensureUserIsAdOwner){
        return next()
    }



    throw new AppError("Você não é o Dono Deste Anúncio", 403)
}

export {verifyUserIsAdOwner}