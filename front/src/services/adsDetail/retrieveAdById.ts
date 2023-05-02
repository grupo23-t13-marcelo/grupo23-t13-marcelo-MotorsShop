import { AxiosResponse } from "axios";
import { IAdDetail } from "../../context/adsDetail/adsTypes";
import { api } from "../api";
import { INewAd } from "../../pages/modalDashboard/types";

export async function apiGetAdById(id: string): Promise<AxiosResponse<IAdDetail>> {
    const ad = await api.get<AxiosResponse>(`ads/${id}`)

    return ad.data
}

export async function apiPostNewAd(data: INewAd, token: string): Promise<AxiosResponse<INewAd>> {
    const ad = await api.post<INewAd>('ads/', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return ad
}