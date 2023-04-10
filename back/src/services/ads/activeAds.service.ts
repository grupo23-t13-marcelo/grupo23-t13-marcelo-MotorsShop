import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { AppError } from "../../errors"

const activeAdService = async (adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOneBy({
        id: adID
    })
    
    if(!ad){
        throw new AppError("Anuncio Não Existe", 404)
    }

    if(ad?.is_activated){
        throw new AppError("Anúncio Já Está Ativado", 403)
    }

    ad.is_activated = true

    await adsRepository.save(ad)

    return {message: "Anúncio Ativado Com Sucesso!"}

}

export default activeAdService