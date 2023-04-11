import { AxiosResponse } from "axios";
import { IAdDetail } from "../../context/adsDetail/adsTypes";
import { api } from "../api";

export async function apiGetAdById(id: string): Promise<AxiosResponse<IAdDetail>> {
    const ad = await api.get<IAdDetail>(`ads/${id}`)

    return ad
}