import { AxiosResponse } from "axios"
import { IAdInfo } from "../../context/access/accessTypes"
import { api } from "../api"
import { IUserDetail } from "../../context/loggedUser/userTypes"

export async function apiGetUserLogged(): Promise<AxiosResponse<IUserDetail>> {
    const listUser = await api.get<IUserDetail>(`profile/`)

    return listUser
}