import * as yup from "yup";

export const validationEditAddress = yup.object().shape({
    cep: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().matches(/^[0-9]+$/, "Digite apenas números").required("Campo obrigatório"),
    complement: yup.string().notRequired(),
})