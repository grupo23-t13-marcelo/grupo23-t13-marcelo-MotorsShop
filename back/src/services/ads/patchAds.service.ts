import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { AppError } from "../../errors";
import { IAds, IPatchAds } from "../../interfaces/ads";
import { adPatchSerializerResponse } from "../../schemas/ads";


const patchAdsService = async (patchAdData: IPatchAds, adData: IAds, adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)

    const adPatch = patchAdData

    const ad = await adsRepository.findOneBy({
        id: adID
    })

    if(!ad){
        throw new AppError("Anúncio Não Existe", 404)
    }

    const adPatched = adsRepository.create({
        ...adData,
        ...adPatch
    })

    const patchClient = await adsRepository.save(adPatched)

    const validate = await adPatchSerializerResponse.validate(patchClient, {
        stripUnknown:true
    })

    return validate
}

export default patchAdsService