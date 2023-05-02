import { IAds } from "../ads"
import { IUser } from "../users"

export interface IComment {
    comment: string
    user: IUser
    ad: IAds | string
}