import * as Yup from "yup";
import { SchemaOf } from "yup";
import { AddressRequest } from "../../interfaces/address";

export const addressSchema: SchemaOf<AddressRequest> = Yup.object().shape({
    cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, "informe o cep corretamente")
    .notRequired(),
    state: Yup.string().notRequired(),
    city: Yup.string().notRequired(),
    street: Yup.string().notRequired(),
    number: Yup.string().notRequired(),
    complement: Yup.string().notRequired(),
})