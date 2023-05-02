import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { adArraySerializer } from "../../schemas/ads"
import { CursorPaginator } from 'typeorm-paginator'
import { PagePaginator } from 'typeorm-paginator'

const listAdsService = async (queries:any) => {
    const {next="",take = 3, prev=""} = queries
    const adsRepository = AppDataSource.getRepository(Ads)
    const paginator = new CursorPaginator(Ads, {
        orderBy: {
            id: true,
        
        },
        take
    })

 
        const pagination1 = await paginator
        .paginate(  adsRepository.createQueryBuilder("ads")
        .leftJoinAndSelect("ads.user" , "user")
        .leftJoinAndSelect("ads.gallery" , "gallery")
        .leftJoinAndSelect("user.address", "address")
        ,{nextCursor:next ,prevCursor:prev}
        )


    return pagination1
}


export default listAdsService