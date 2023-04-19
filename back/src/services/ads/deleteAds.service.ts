import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { Gallery } from "../../entities/gallery.entities"
import { AppError } from "../../errors"

const deleteAdService = async (adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)
    const galleryRepository = AppDataSource.getRepository(Gallery)

    const ad = await adsRepository.findOne({
        where: {
            id: adID
        }
    })

    
    
    if(!ad){
        throw new AppError("Anúncio Não Existe", 404)
    }

    
    if(ad.gallery){
        ad.gallery.forEach( async (element) => {
            await galleryRepository.delete(element.id)
        })
    }
    await adsRepository.delete(ad.id)


    return {message: "Anúncio Deletado Com Sucesso!"}

}

export default deleteAdService