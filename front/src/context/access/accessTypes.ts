import { ReactNode } from "react"
import { ILogin } from "../../pages/loginPage/login"

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
	gallery: []
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
}