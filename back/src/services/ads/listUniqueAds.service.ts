import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { AppError } from "../../errors";
import { uniqueAdSerializerResponse } from "../../schemas/ads";



const listUniqueAdService = async (AdID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOne({
        where: {
            id: AdID
        },
        relations: {
            gallery: true,
            user: true,
            comments: {
                user: true
            }
        }
    })

    if (!ad) {
        throw new AppError("Anúncio Não Existe", 404)
    }

    const validate = await uniqueAdSerializerResponse.validate(ad, {
        stripUnknown: true
    })

    return validate
}


export default listUniqueAdService