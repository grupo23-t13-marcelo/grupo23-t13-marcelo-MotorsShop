import { AxiosResponse } from "axios"
import { IComment } from "../../pages/adsDetail/components/commentSection"
import { api } from "../api"

export async function apiPostComment(data: IComment, token: string): Promise<void> {
    await api.post<AxiosResponse>(`comments/`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}