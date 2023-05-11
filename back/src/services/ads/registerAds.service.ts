import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { Gallery } from "../../entities/gallery.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors";
import { ICreateAds } from "../../interfaces/ads";
import { IUser } from "../../interfaces/users";
import {adSerializerRequest, adSerializerResponse} from "../../schemas/ads";


const registerAdsService = async (adsData: ICreateAds, userID: string) => {

    const adsRepository = AppDataSource.getRepository(Ads)
    const galleryRepository = AppDataSource.getRepository(Gallery)
    const userRepository = AppDataSource.getRepository(User)
    const createdAd = adsRepository.create(adsData)
    
    const user = await userRepository.findOneBy({
        id: userID
    })

    if(!user){
        throw new AppError("Usuario Não Existe", 404)
    }

    createdAd.user = user
    
    const newAds = await adsRepository.save(createdAd)
    adsData.gallery.forEach( async (element) => {
        const createGallery = galleryRepository.create(element)
        createGallery.ad = newAds
       const newGallery = await galleryRepository.save(createGallery)
        newAds.gallery.push(newGallery) 
    })

    await adsRepository.save(newAds)
    

    const validate = await adSerializerResponse.validate(newAds, {
        stripUnknown: true
    })

    return validate

}


export default registerAdsService