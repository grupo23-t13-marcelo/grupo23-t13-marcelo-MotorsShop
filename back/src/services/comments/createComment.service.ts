import { AppDataSource } from "../../data-source"
import { Ads } from "../../entities/ads.entities"
import { Comments } from "../../entities/comments.entities"
import { User } from "../../entities/users.entities"
import { AppError } from "../../errors"
import { IComment } from "../../interfaces/comments"
import { commentCreateSerializer } from "../../schemas/comments"

export const createCommentService = async (commentData: IComment, userID: string) => {
    const commentRepository = AppDataSource.getRepository(Comments)
    const userRepository = AppDataSource.getRepository(User)
    const adsRepository = AppDataSource.getRepository(Ads)

    const findAd = await adsRepository.findOneBy({
        id: commentData.ad as string
    })

    const user = await userRepository.findOneBy({
        id: userID
    })

    if (!findAd) {
        throw new AppError("Ad not found", 404)
    }

    if (!user) {
        throw new AppError('User not found', 404)
    }

    const createdComment = commentRepository.create({ ...commentData, ad: findAd, user: user })

    const newComment = await commentRepository.save(createdComment)

    const validate = await commentCreateSerializer.validate(newComment, { stripUnknown: true })

    return validate
}