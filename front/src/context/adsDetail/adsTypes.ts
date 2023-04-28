import { ReactNode } from "react"

export interface IAdDetail {
    brand: string
    model: string
    year: string
    fuel: string
    mileage: string
    color: string
    fipe_table_price: string
    price: number
    description: string
    cover_image: string
    is_active: string
    user: IUserResponseOnAd
    gallery: [{ id: string, file_name: string }]
}

export interface IUserResponseOnAd {
    id: string
    name: string
    email: string
    description: string
    profile_picture: string
}

export interface IAdDetailContextProps {
    children: ReactNode
}

export interface IAdDetailContext {
    adToShow: IAdDetail | {}
    setAdToShow: React.Dispatch<React.SetStateAction<IAdDetail>>,
    getFullAd: (id: string) => Promise<void>
    modalEditAd: boolean
    setModalEditAd: React.Dispatch<React.SetStateAction<boolean>>
}