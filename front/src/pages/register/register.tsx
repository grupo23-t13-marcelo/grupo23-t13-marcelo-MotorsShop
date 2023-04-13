import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';



const RegisterPage = () => {

    const validationUserRegister = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        cpf: yup.string().required("Campo obrigatório"),
        cellPhone: yup.string().required("Campo obrigatório"),
        birthdate: yup.string().notRequired(),
        description: yup.string().notRequired(),
        cep: yup.string().required("Campo obrigatório"),
        state: yup.string().required("Campo obrigatório"),
        city: yup.string().required("Campo obrigatório"),
        street: yup.string().required("Campo obrigatório"),
        number: yup.string().required("Campo obrigatório"),
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

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [typeUser,setTypeUser] = useState<string>("Comprador")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationUserRegister)
    });

    const onSubmit = (data: any) => {
        setIsLoading(true);
        data.type = typeUser
        console.log(data)
    }

    return (
        <Box bg={"gray.100"} >
            <Stack w={"90%"} m={"20px auto 30px auto"} bg={"#ffffff"} maxW={"500px"}>
                <Stack w={{base: "90%", md: "85%"}} m={"10px auto 0 auto"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Heading mt={"20px"} fontSize={"4xl"}>Cadastro</Heading>
                        <Text m={"20px 0"}>Informações pessoais</Text>
                        <FormControl mb={"20px"} isInvalid={errors.name ? true : false} isRequired={errors.name ? true : false}>
                            <FormLabel>Nome</FormLabel>
                            <Input type="text" id="nameRegister" placeholder="Ex: Samuel Leão" {...register("name")}/>
                            <FormErrorMessage>
                                {errors.name && `${errors.name.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.email ? true : false} isRequired={errors.email ? true : false}>
                            <FormLabel>Email</FormLabel>
                            <Input type="text" id="email" placeholder="Ex: samuel@kenzie.com.br" {...register("email")}/>
                            <FormErrorMessage>
                                {errors.email && `${errors.email.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.cpf ? true : false} isRequired={errors.cpf ? true : false}>
                            <FormLabel>CPF</FormLabel>
                            <Input type="text" id="cpf" placeholder="000.000.000-00" {...register("cpf")}/>
                            <FormErrorMessage>
                                {errors.cpf && `${errors.cpf.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.cellPhone ? true : false} isRequired={errors.cellPhone ? true : false}>
                            <FormLabel>Celular</FormLabel>
                            <Input type="text" id="cellPhone" placeholder="(DDD) 90000-0000" {...register("cellPhone")}/>
                            <FormErrorMessage>
                                {errors.cellPhone && `${errors.cellPhone.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.birthdate ? true : false} isRequired={errors.birthdate ? true : false}>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input type="text" id="birthdate" placeholder="Ex: Samuel Leão" {...register("birthdate")}/>
                            <FormErrorMessage>
                                {errors.birthdate && `${errors.birthdate.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.description ? true : false} isRequired={errors.description ? true : false}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea id="description" placeholder="Digitar descrição" {...register("description")}/>
                            <FormErrorMessage>
                                {errors.description && `${errors.description.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Text m={"25px 0"}>Infomações de endereço</Text>
                        <FormControl mb={"20px"} isInvalid={errors.cep ? true : false} isRequired={errors.cep ? true : false}>
                            <FormLabel>CEP</FormLabel>
                            <Input type="text" id="cep" placeholder="00000.000" {...register("cep")}/>
                            <FormErrorMessage>
                                {errors.cep && `${errors.cep.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <FormControl isInvalid={errors.state ? true : false} isRequired={errors.state ? true : false}>
                                <FormLabel>Estado</FormLabel>
                                <Input type="text" id="state" placeholder="Digitar Estado" {...register("state")}/>
                                <FormErrorMessage>
                                    {errors.state && `${errors.state.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.city ? true : false} isRequired={errors.city ? true : false}>
                                <FormLabel>Cidade</FormLabel>
                                <Input type="text" id="city" placeholder="Digitar cidade" {...register("city")}/>
                                <FormErrorMessage>
                                    {errors.city && `${errors.city.message}`}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        <FormControl mb={"20px"} isInvalid={errors.street ? true : false} isRequired={errors.street ? true : false}>
                            <FormLabel>Rua</FormLabel>
                            <Input type="text" id="street" placeholder="Digitar senha" {...register("street")}/>
                            <FormErrorMessage>
                                {errors.street && `${errors.street.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <FormControl isInvalid={errors.number ? true : false} isRequired={errors.number ? true : false}>
                                <FormLabel>Número</FormLabel>
                                <Input type="text" id="number" placeholder="Digitar número" {...register("number")}/>
                                <FormErrorMessage>
                                    {errors.number && `${errors.number.message}`}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.complement ? true : false} isRequired={errors.complement ? true : false}>
                                <FormLabel>Complemento</FormLabel>
                                <Input type="text" id="complement" placeholder="Ex: apart 307" {...register("complement")}/>
                                <FormErrorMessage>
                                    {errors.complement && `${errors.complement.message}`}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                        <Text m={"10px 0 15px 0"}>Tipo de conta</Text>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <Button type="button" w={"50%"} variant={typeUser === "Comprador" ? "button-sender" : "outline-2"} color={typeUser === "Comprador" ? "#ffffff"  : "#000000"} onClick={()=> setTypeUser("Comprador")}>Comprador</Button>
                            <Button w={"50%"} variant={typeUser === "Anuciante" ? "button-sender" : "outline-2"} onClick={()=> setTypeUser("Anuciante")} >Anuciante</Button>
                        </Flex>
                        <FormControl mb={"20px"} isInvalid={errors.password ? true : false} isRequired={errors.password ? true : false}>
                            <FormLabel>Senha</FormLabel>
                            <Input type="text" id="password" placeholder="Digitar senha" {...register("password")}/>
                            <FormErrorMessage>
                                {errors.password && `${errors.password.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.confirmPassword ? true : false} isRequired={errors.confirmPassword ? true : false}>
                            <FormLabel>Confirmar Senha</FormLabel>
                            <Input type="text" id="confirmPassword" placeholder="Digitar senha" {...register("confirmPassword")}/>
                            <FormErrorMessage>
                                {errors.confirmPassword && `${errors.confirmPassword.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Button type="submit" w={"100%"} mb={"30px"} variant={"button-sender"} textColor={"#ffffff"}>Finalizar cadastro</Button>
                    </form>
                </Stack>
            </Stack>
        </Box>
    )
}

export default RegisterPage