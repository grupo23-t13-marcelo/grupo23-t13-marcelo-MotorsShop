import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { CursorPaginator } from 'typeorm-paginator'

const listAdsServicePaginated = async (queries: any) => {
    if (queries.query) {
        const { next = "", take = 20, prev = "" } = queries.query

        const adsRepository = AppDataSource.getRepository(Ads)
        const paginator = new CursorPaginator(Ads, {
            orderBy: {
                id: true,

            },
            take
        })

        const pagination1 = await paginator
            .paginate(adsRepository.createQueryBuilder("ads")
                .leftJoinAndSelect("ads.user", "user")
                .leftJoinAndSelect("ads.gallery", "gallery")
                .leftJoinAndSelect("user.address", "address")
                , { nextCursor: next, prevCursor: prev }
            )


        return pagination1
    }
    const { next = "", take = 20, prev = "" } = queries

    const adsRepository = AppDataSource.getRepository(Ads)
    const paginator = new CursorPaginator(Ads, {
        orderBy: {
            id: true,

        },
        take
    })

    const pagination1 = await paginator
        .paginate(adsRepository.createQueryBuilder("ads")
            .leftJoinAndSelect("ads.user", "user")
            .leftJoinAndSelect("ads.gallery", "gallery")
            .leftJoinAndSelect("user.address", "address")
            , { nextCursor: next, prevCursor: prev }
        )


    return pagination1
}

export default listAdsServicePaginated