import { AxiosResponse } from "axios"
import { IAdInfo } from "../../context/access/accessTypes"
import { api } from "../api"

export async function apiGetListAds(): Promise<AxiosResponse<IAdInfo[]>> {
    const listAd = await api.get<IAdInfo[]>(`ads/`)

    return listAd
}

export async function apiPatchAds(value: IAdInfo, id: string) {
    const {data} = await api.put<IAdInfo>(`ads/${id}`, value)
    
    return data
}

export async function apiDeleteAds(id: string) {
    const {data} = await api.delete(`ads/${id}`)
    
    return data
}