import * as yup from "yup";
export const validationUserRegister = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    cpf: yup.string().matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Digite um CPF válido").required("Campo obrigatório"),
    cellPhone: yup.string().matches(/^\(\d{2}\)\s\d{4,5}\-\d{4}$/, "Digite um telefone válido").required("Campo obrigatório"),
    birthdate: yup.string().notRequired().typeError("Insira uma data de nascimento válida (DD/MM/AAAA)"),
    description: yup.string().max(
      400,
      "A descrição deve ter no máximo 400 caracteres"
    ).notRequired(),
    cep: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().matches(/^[0-9]+$/, "Digite apenas números").required("Campo obrigatório"),
    complement: yup.string().notRequired(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Mínimo  de 8 caracteres")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "deve conter ao menos um caracter especial"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmação de senha deve ser igual a senha"
    )
});


export const validationUserEdit = yup.object().shape({
  name: yup.string().min(1, "Minímo de uma Letra").required("Nome Obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: yup.string().matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Digite um CPF válido").required("Campo obrigatório"),
  cell_phone: yup.string().matches(/^\(\d{2}\)\s\d{4,5}\-\d{4}$/, "Digite um telefone válido").required("Campo obrigatório"),
  birthdate: yup.string().notRequired().typeError("Insira uma data de nascimento válida (DD/MM/AAAA)").min(10 , "Preencha sua data de nascimento"),
  description: yup.string().max(
    400,
    "A descrição deve ter no máximo 400 caracteres"
  ).notRequired(),
})

export const validationEditAd = yup.object().shape({
  brand: yup.string().required("Campo obrigatório"),
	model: yup.string().required("Campo obrigatório"),
	year: yup.string().required("Campo obrigatório"),
	fuel: yup.string().notRequired(),
	mileage: yup.string().required("Campo obrigatório"),
	color: yup.string().required("Campo obrigatório"),
	fipe_table_price: yup.string().notRequired(),
	price: yup.string().required("Campo obrigatório"),
	description: yup.string().max(
    400,
    "A descrição deve ter no máximo 400 caracteres"
  ).notRequired(),
  cover_image: yup.string().required("Campo obrigatório"),
  gallery_first_image: yup.string().notRequired(),
  gallery_second_image: yup.string().notRequired(),
  gallery_third_image: yup.string().notRequired(),
  gallery_fourth_image: yup.string().notRequired(),
  gallery_fifth_image: yup.string().notRequired(),
  gallery_sixth_image: yup.string().notRequired()
})