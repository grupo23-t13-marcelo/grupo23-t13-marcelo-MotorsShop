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
export interface IAccessContext {
    modalstatus: boolean
    setModalstatus: React.Dispatch<React.SetStateAction<boolean>>
    apiPostLogin: (formData: ILogin) => void
    listAds: IAdInfo[]
    setListAd: React.Dispatch<React.SetStateAction<IAdInfo[]>>
}