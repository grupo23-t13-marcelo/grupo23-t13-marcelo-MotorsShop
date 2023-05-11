import { IGallery, IGalleryCreate, IGalleryPatch } from "../gallery"

export interface ICreateAds {
    brand: string
    model: string
    year: string
    fuel: string
    mileage: number
    color: string
    fipe_table_price: string
    price: string
    description: string
    cover_image: string
    gallery: IGalleryCreate[]
}

export interface IPatchAds {
    brand?: string
    model?: string
    year?: string
    fuel?: string
    mileage?: number
    color?: string
    fipe_table_price?: string
    price?: string
    description?: string
    cover_image?: string
    gallery?: IGalleryPatch[]
}


export interface IAds {
    id: string
    brand: string
    model: string
    year: string
    fuel: string
    mileage: number
    color: string
    fipe_table_price: string
    price: string
    description: string
    cover_image: string
    is_activated: boolean
    gallery: IGallery[]
}

