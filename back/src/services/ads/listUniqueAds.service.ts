import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { AppError } from "../../errors";
import { IPatchAds } from "../../interfaces/ads";
import { adSerializerResponse } from "../../schemas/ads";



const listUniqueAdService = async (AdID: string) => {

    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOne({
        where: {
            id: AdID
        },
        relations : {
            gallery: true,
            user: true
        }
    })
    

    if(!ad){
        throw new AppError("Anúncio Não Existe", 404)
    }

    const validate = adSerializerResponse.validate(ad, {
        stripUnknown:true
    })

    return validate

}


export default listUniqueAdService