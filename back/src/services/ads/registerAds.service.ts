import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { Gallery } from "../../entities/gallery.entities";
import { ICreateAds } from "../../interfaces/ads";
import {adSerializerRequest, adSerializerResponse} from "../../schemas/ads";


const registerAdsService = async (adsData: ICreateAds) => {

    const adsRepository = AppDataSource.getRepository(Ads)
    const galleryRepository = AppDataSource.getRepository(Gallery)

    
    const createdAd = adsRepository.create(adsData)
    const newAds = await adsRepository.save(createdAd)
    adsData.gallery.forEach( async (element) => {
        const createGallery = galleryRepository.create(element)
        createGallery.ad = newAds
       const newGallery = await galleryRepository.save(createGallery)
       console.log(newGallery)
        newAds.gallery.push(newGallery) 
    })

    await adsRepository.save(newAds)
    

    const validate = await adSerializerResponse.validate(newAds, {
        stripUnknown: true
    })

    return validate

}


export default registerAdsService