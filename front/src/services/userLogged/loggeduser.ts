import { AxiosResponse } from "axios"
import { IAdInfo } from "../../context/access/accessTypes"
import { api } from "../api"

export async function apiGetUserLogged(): Promise<AxiosResponse<any>> {
    const listUser = await api.get<any>(`users/profile/`)

    return listUser
}