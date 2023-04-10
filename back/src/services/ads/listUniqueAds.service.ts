import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { IPatchAds } from "../../interfaces/ads";
import { adSerializerResponse } from "../../schemas/ads";



const listUniqueAdService = async (AdID: string) => {

    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOneBy({
        id: AdID
    })

    const validate = adSerializerResponse.validate(ad, {
        stripUnknown:true
    })

    return validate

}


export default listUniqueAdService