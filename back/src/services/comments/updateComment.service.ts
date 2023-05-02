import { AppDataSource } from "../../data-source"
import { Comments } from "../../entities/comments.entities"
import { commentUpdateSerializer } from "../../schemas/comments"

export const updateCommentService = async (commentID: string, commentContent: string, userID: string) => {
    const commentRepository = AppDataSource.getRepository(Comments)

    const exist = await commentRepository.findOne({
        where: {
            id: commentID
        },
        relations: {
            user: true,
            ad: true
        }
    })

    if (!exist) {
        return [404, { message: 'Comment not found' }]
    }

    if (exist.user.id !== userID) {
        return [403, { message: 'This comment is not yours' }]
    }

    const newComment = await commentRepository.save({ ...exist, content: commentContent })

    const validate = await commentUpdateSerializer.validate(newComment, { stripUnknown: true })

    return [200, validate]
}