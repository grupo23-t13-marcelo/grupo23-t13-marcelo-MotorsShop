import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { ICreateAds } from "../../interfaces/ads";
import { adPatchSerializerResponse} from "../../schemas/ads";


const registerAdsService = async (adsData: ICreateAds) => {

    const adsRepository = AppDataSource.getRepository(Ads)

    const createdAd = adsRepository.create(adsData)
    
    await adsRepository.save(createdAd)

    const validate = adPatchSerializerResponse.validate(createdAd, {
        stripUnknown: true
    })

    return validate

}


export default registerAdsService