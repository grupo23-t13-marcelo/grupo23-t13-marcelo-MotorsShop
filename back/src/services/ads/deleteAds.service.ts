import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { AppError } from "../../errors"

const deleteAdService = async (adID: string) => {
    const adsRepository = AppDataSource.getRepository(Ads)

    const ad = await adsRepository.findOneBy({
        id: adID
    })

    if(!ad){
        throw new AppError("Anúncio Não Existe", 404)
    }

    await adsRepository.delete(ad)

    return {message: "Anúncio Deletado Com Sucesso!"}

}

export default deleteAdService