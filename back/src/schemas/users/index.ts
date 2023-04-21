import * as Yup from "yup";
import moment from "moment";



const passwordRegexUppercase = /^(?=.*[A-Z]).+$/;
const passwordRegexNumber = /^(?=.*[0-9]).+$/;
const passwordRegexSpecialChar = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>§~`[\]\\/]).+$/;

export const UserSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),

  email: Yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),

  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Digite um CPF válido")
    .required("O CPF é obrigatório"),

  cell_phone: Yup.string()
    .matches(/^\(\d{2}\)\s\d{4,5}\-\d{4}$/, "Digite um telefone válido")
    .required("O telefone é obrigatório"),

  birthdate: Yup.string()
    
    .transform((value, originalValue) => {
      
      const parsedDate = moment(value, "DD/MM/YYYY", true);
      return parsedDate.isValid() ? parsedDate.toISOString() : null;
    })
    .required("A data de nascimento é obrigatória"),

  description: Yup.string().max(
    400,
    "A descrição deve ter no máximo 400 caracteres"
  ),

  password: Yup.string()
    .matches(
      passwordRegexUppercase,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .matches(passwordRegexNumber, "A senha deve conter pelo menos um número")
    .matches(
      passwordRegexSpecialChar,
      "A senha deve conter pelo menos um caractere especial"
    )
    .required("A senha é obrigatória"),

  type: Yup.mixed()
    .oneOf(["Anunciante", "Comprador"])
    .required("O tipo é obrigatório"),

  
  profile_picture: Yup.string().url("Digite uma URL válida"),

  address: Yup.object().shape({
    cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, "informe o cep corretamente")
    .required('CEP é obrigatório'),
    state: Yup.string().required('Estado é obrigatório'),
    city: Yup.string().required('Cidade é obrigatória'),
    street: Yup.string().required('Logradouro é obrigatório'),
    number: Yup.string().required('Número é obrigatório'),
    complement: Yup.string(),
  })
});

export const sendEmailSchema = Yup.object().shape({
  email: Yup.string()
  .email("Digite um email válido")
  .required("O email é obrigatório")
})

export const passwordResetSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      passwordRegexUppercase,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .matches(passwordRegexNumber, "A senha deve conter pelo menos um número")
    .matches(
      passwordRegexSpecialChar,
      "A senha deve conter pelo menos um caractere especial"
    )
    .required("A senha é obrigatória")
})