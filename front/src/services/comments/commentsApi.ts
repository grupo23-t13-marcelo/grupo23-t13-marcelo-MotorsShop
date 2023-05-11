import { AxiosResponse } from "axios"
import { IComment, ICommentPatch } from "../../pages/adsDetail/components/commentSection"
import { api } from "../api"

export async function apiPostComment(data: IComment, token: string): Promise<void> {
    await api.post<AxiosResponse>(`comments/`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export async function apiPatchComment(data: ICommentPatch, token: string | null, commentID: string): Promise<void> {
    await api.patch<AxiosResponse>(`comments/${commentID}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export async function apiDeleteComment(token: string | null, commentID: string): Promise<void> {
    await api.delete<AxiosResponse>(`comments/${commentID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

