import * as yup from "yup"
import { SchemaOf } from "yup";
import { IAds, ICreateAds, IPatchAds } from "../../interfaces/ads"

const adSerializerRequest: SchemaOf<ICreateAds> = yup.object().shape({
    gallery: yup.array().of(
        yup.object({
            file_name: yup.string().required()
        })
    ).required(),
    cover_image: yup.string().required(),
    fipe_table_price: yup.string().required(),
    color: yup.string().required(),
    mileage: yup.number().required(),
    description: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
})

const uniqueAdSerializerResponse: SchemaOf<IAds> = yup.object().shape({
    comments: yup.array().of(yup.object({
        user: yup.object({
            id: yup.string(),
            name: yup.string(),
            profile_picture: yup.string().nullable(),
        }),
        createdAt: yup.string(),
        content: yup.string(),
        id: yup.string()
    })),
    user: yup.object({
        profile_picture: yup.string().nullable(),
        description: yup.string().required(),
        cpf: yup.string().required(),
        cell_phone: yup.string().required(),
        email: yup.string().required(),
        name: yup.string().required(),
        id: yup.string().notRequired(),
    }).required(),
    gallery: yup.array().of(
        yup.object({
            id: yup.string().notRequired(),
            file_name: yup.string().notRequired(),
        })
    ).notRequired(),
    is_activated: yup.boolean().required(),
    cover_image: yup.string().required(),
    fipe_table_price: yup.string().required(),
    color: yup.string().required(),
    mileage: yup.number().required(),
    description: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
    id: yup.string().required()
})

const adSerializerResponse: SchemaOf<IAds> = yup.object().shape({
    user: yup.object({
        profile_picture: yup.string().nullable(),
        description: yup.string().required(),
        cpf: yup.string().required(),
        cell_phone: yup.string().required(),
        email: yup.string().required(),
        name: yup.string().required(),
        id: yup.string().notRequired(),
    }).required(),
    gallery: yup.array().of(
        yup.object({
            id: yup.string().notRequired(),
            file_name: yup.string().notRequired(),
        })
    ).notRequired(),
    is_activated: yup.boolean().required(),
    cover_image: yup.string().required(),
    fipe_table_price: yup.string().required(),
    color: yup.string().required(),
    mileage: yup.number().required(),
    description: yup.string().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
    id: yup.string().required()
})

const adPatchSerializerResponse: SchemaOf<IPatchAds> = yup.object().shape({
    gallery: yup.array().of(
        yup.object({
            file_name: yup.string().notRequired(),
        })
    ).notRequired(),
    is_activated: yup.boolean().notRequired(),
    cover_image: yup.string().notRequired(),
    fipe_table_price: yup.string().notRequired(),
    color: yup.string().notRequired(),
    mileage: yup.number().notRequired(),
    description: yup.string().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    price: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired()
})


const adArraySerializer: SchemaOf<IAds[]> = yup.array(adSerializerResponse)



export { adSerializerResponse, adSerializerRequest, adArraySerializer, adPatchSerializerResponse, uniqueAdSerializerResponse }