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
    user_id: string
    gallery: string
}

export interface IAdDetailContextProps {
    children: ReactNode
}

export interface IAdDetailContext {
    adToShow: object
    setAdToShow: React.Dispatch<React.SetStateAction<object>>
}