import { ReactNode } from "react"
import { ILogin } from "../../pages/loginPage/login"
import { IUserResponseOnAd } from "../adsDetail/adsTypes"
import { IEditUser } from "../../components/ModalEditUser"
import { IEditAddress } from "../../components/ModalEditAddress"

export interface IAccessContextProps {
    children: ReactNode
}

export interface IAdInfo {
    id: string,
	brand: string,
	model: string,
	year: string,
	fuel: string,
	mileage: number,
	color: string,
	fipe_table_price: string,
	price: string,
	description: string,
	cover_image: string,
	is_activated: boolean,
    user: IUserResponseOnAd
	gallery: []
}

export interface IUser {
    id: string
	name: string
	email: string
	cell_phone: string
	birthdate: string
	description: string
    cpf: string
	type: string
	profile_picture: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
	is_active: boolean
	ads: IAdInfo[]
    address: {
        cep: string,
        state: string,
        city: string,
        street: string,
        number: string,
        complement: string 
    }
}

export interface IUserRegister {
    name: string
    email: string,
    cpf: string,
    cell_phone: string,
    birthdate: string,
    description: string,
    password: string,
    type: string,
    profile_picture?: string | null | undefined,
    address: {
        cep: string,
        state: string,
        city: string,
        street: string,
        number: string,
        complement?: string | null | undefined
    }
}
export interface IAccessContext {
    modalstatus: boolean
    setModalstatus: React.Dispatch<React.SetStateAction<boolean>>
    apiPostLogin: (formData: ILogin) => void
    apiPostRegister: (dataRegister: IUserRegister) => Promise<void>
    apiGetProfile: () => void
    apiGetUser: (userId:string) => void
    apiPutEdit: (dataEdit: IEditUser, userId: string) => void
    apiDeleteProfile: (userId: string) => void
    apiPutAddress: (dataEdit: IEditAddress) => void
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    setUserRender: React.Dispatch<React.SetStateAction<IUser | null>>
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>
    user: IUser | null
    userRender: IUser | null
    

}