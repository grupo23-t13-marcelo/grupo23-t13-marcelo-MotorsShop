import { AppDataSource } from "../../data-source";
import { Ads } from "../../entities/ads.entities";
import { Gallery } from "../../entities/gallery.entities";
import { AppError } from "../../errors";
import { IAds, IPatchAds } from "../../interfaces/ads";
import { adPatchSerializerResponse } from "../../schemas/ads";


const patchAdsService = async (patchAdData: IPatchAds, adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)
    const galleryRepository = AppDataSource.getRepository(Gallery)

    const adPatch = patchAdData
    const galleryPatch = patchAdData.gallery
    
    const ad = await adsRepository.findOne({
        where: {
            id: adID
        },
        relations: {
            gallery: true
        }
    })
    if(!ad){
    throw new AppError("Anúncio Não Existe", 404)
    }
    const adPatched = adsRepository.create({
        ...ad,
        ...adPatch
    })
    
    const savedAd =await adsRepository.save(adPatched)
        galleryPatch?.forEach(async(patchedElement, indexPatch) => {
                const newGalley = galleryRepository.create(patchedElement)
                newGalley.ad = savedAd
                const savedGallery = await galleryRepository.save(newGalley)
                savedAd.gallery.push(savedGallery)
        })   

    await adsRepository.save(savedAd)

    const validate = await adPatchSerializerResponse.validate(savedAd, {
        stripUnknown:true
    })

    return validate
}

export default patchAdsService