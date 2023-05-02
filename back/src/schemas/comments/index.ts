import * as yup from "yup"

export const commentUpdateSerializer = yup.object().shape({
    ad: yup.object({
        id: yup.string(),
    }),
    user: yup.object({
        id: yup.string(),
        name: yup.string(),
        email: yup.string()
    }),
    createdAt: yup.string(),
    content: yup.string(),
    id: yup.string()
})

export const commentCreateSerializer = yup.object().shape({
    ad: yup.object({
        year: yup.string(),
        model: yup.string(),
        brand: yup.string(),
        id: yup.string(),
    }),
    user: yup.object({
        email: yup.string(),
        name: yup.string(),
        id: yup.string(),
    }),
    createdAt: yup.string(),
    content: yup.string(),
    id: yup.string()
})