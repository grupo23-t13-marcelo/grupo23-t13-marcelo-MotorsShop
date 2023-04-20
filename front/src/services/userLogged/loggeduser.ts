import { AxiosResponse } from "axios"
import { IAdInfo } from "../../context/access/accessTypes"
import { api } from "../api"

export async function apiGetUserLogged(): Promise<AxiosResponse<IUserDetail>> {
    const listUser = await api.get<IUserDetail>(`users/profile/`)

    return listUser
}