import * as yup from "yup";

export interface INewAd {
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
    gallery: IGallery[]
}

export interface IGallery {
    file_name: string
}

export const adSchema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string(),
    mileage: yup.string().required(),
    color: yup.string().required(),
    fipe_table_price: yup.string(),
    price: yup.string().required(),
    description: yup.string().required(),
    cover_image: yup.string().required(),
    gallery: yup.array().of(yup.object({
        file_name: yup.string().required()
    })).required()
})