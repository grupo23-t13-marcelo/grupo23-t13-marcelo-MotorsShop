import { AxiosResponse } from "axios"
import { IAdInfo } from "../../context/access/accessTypes"
import { api } from "../api"

export async function apiGetListAds(): Promise<AxiosResponse<IAdInfo[]>> {
    const listAd = await api.get<IAdInfo[]>(`ads/`)

    return listAd
}