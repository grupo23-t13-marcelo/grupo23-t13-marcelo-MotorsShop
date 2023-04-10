import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { AppError } from "../../errors"

const deactiveAdService = async (adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOneBy({
        id: adID
    })

    if(!ad?.is_activated){
        throw new AppError("Anúncio Já Está Desativado", 403)
    }

    ad.is_activated = false

    await adsRepository.save(ad)

    return {message: "Anúncio Desativado Com Sucesso!"}

}

export default deactiveAdService