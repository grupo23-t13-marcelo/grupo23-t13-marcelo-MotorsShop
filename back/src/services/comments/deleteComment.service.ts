import { AppDataSource } from "../../data-source"
import { Comments } from "../../entities/comments.entities"

export const deleteCommentService = async (commentID: string, userID: string) => {
    console.log('oi')
    const commentRepository = AppDataSource.getRepository(Comments)

    const exist = await commentRepository.findOne({
        where: {
            id: commentID
        },
        relations: {
            user: true
        }
    })

    if (!exist) {
        return [404, { message: 'Comment not found' }]
    }

    if (exist.user.id !== userID) {
        return [403, { message: 'This comment is not yours' }]
    }

    await commentRepository.delete(exist.id)

    return [204, '']
}