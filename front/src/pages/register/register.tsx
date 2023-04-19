import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import { useContext, useRef, useState, createRef } from "react";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import ModalRegister from "../../components/ModalRegister";
import { AccessContext } from "../../context/access/accessContext";
import { validationUserRegister } from "../../validations/user";
import InputMask from 'react-input-mask';
import { IUserRegister } from "../../context/access/accessTypes";
import { Spinner } from "@chakra-ui/react";

const RegisterPage = () => {
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [typeUser,setTypeUser] = useState<string>("Comprador")
    const { isLoading, setIsLoading, apiPostRegister } = useContext(AccessContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationUserRegister)
    });

    const onSubmit = async (data: any) => {
        setIsLoading(true);

        data.type = typeUser

        const newObj: IUserRegister = {
            name: data.name,
            email: data.email,
            cpf: data.cpf,
            cell_phone: data.cellPhone,
            birthdate: data.birthdate,
            description: data.description,
            password: data.password,
            type: data.type,
            address: {
                cep: data.cep,
                state: data.state,
                city: data.city,
                street: data.street,
                number: data.number,
                complement: data.complement
            }
        }

        apiPostRegister(newObj)
    }
    
    return (
        <Box bg={"gray.100"} >
            <Stack w={"90%"} m={"20px auto 30px auto"} bg={"#FFFFFF"} maxW={"500px"}>
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
                            <Input as={InputMask} mask="999.999.999-99" type="text" id="cpf" placeholder="000.000.000-00" {...register("cpf")}/>
                            <FormErrorMessage>
                                {errors.cpf && `${errors.cpf.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.cellPhone ? true : false} isRequired={errors.cellPhone ? true : false}>
                            <FormLabel>Celular</FormLabel>
                            <Input as={InputMask} mask="(99) 99999-9999" type="text" id="cellPhone" placeholder="(DDD) 90000-0000" {...register("cellPhone")}/>
                            <FormErrorMessage>
                                {errors.cellPhone && `${errors.cellPhone.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.birthdate ? true : false} isRequired={errors.birthdate ? true : false}>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input as={InputMask} mask="99/99/9999" type="text" id="birthdate" placeholder="00/00/0000" {...register("birthdate")}/>
                            <FormErrorMessage>
                                {errors.birthdate && `${errors.birthdate.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.description ? true : false} isRequired={errors.description ? true : false}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea maxLength={400} id="description" placeholder="Digitar descrição" {...register("description")}/>
                            <FormErrorMessage>
                                {errors.description && `${errors.description.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <Text m={"25px 0"}>Infomações de endereço</Text>
                        <FormControl mb={"20px"} isInvalid={errors.cep ? true : false} isRequired={errors.cep ? true : false}>
                            <FormLabel>CEP</FormLabel>
                            <Input as={InputMask} mask="99999-999" type="text" id="cep" placeholder="00000-000" {...register("cep")}/>
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
                            <Input type="text" id="street" placeholder="Digitar Nome Da Rua" {...register("street")}/>
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
                            <Button type="button" w={"50%"} variant={typeUser === "Comprador" ? "button-sender" : "outline-2"} color={typeUser === "Comprador" ? "#FFFFFF"  : "#000000"} onClick={()=> setTypeUser("Comprador")}>Comprador</Button>
                            <Button w={"50%"} variant={typeUser === "Anunciante" ? "button-sender" : "outline-2"} onClick={()=> setTypeUser("Anunciante")} >Anunciante</Button>
                        </Flex>
                        <FormControl mb={"20px"} isInvalid={errors.password ? true : false} isRequired={errors.password ? true : false}>
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" id="password" placeholder="Digitar senha" {...register("password")}/>
                            <FormErrorMessage>
                                {errors.password && `${errors.password.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mb={"20px"} isInvalid={errors.confirmPassword ? true : false} isRequired={errors.confirmPassword ? true : false}>
                            <FormLabel>Confirmar Senha</FormLabel>
                            <Input type="password" id="confirmPassword" placeholder="Digitar Confirmação De Senha" {...register("confirmPassword")}/>
                            <FormErrorMessage>
                                {errors.confirmPassword && `${errors.confirmPassword.message}`}
                            </FormErrorMessage>
                        </FormControl>
                        {isLoading ? 
                            <Button
                                type="button"
                                w={"100%"}
                                h={"50px"}
                                mb={"30px"}
                                bg={"gray.400"}
                                color={"gray.700"}
                                textColor={"#FFFFFF"}
                                isLoading={isLoading}
                                disabled={true}
                            >
                                {<Spinner />}
                            </Button>
                            :
                            <Button 
                                type="submit" 
                                w={"100%"} 
                                h={"50px"} 
                                mb={"30px"} 
                                variant={"button-sender"} 
                                textColor={"#FFFFFF"}
                            >
                                Finalizar cadastro
                            </Button>
                        }
                    </form>
                </Stack>
            </Stack>
            <ModalRegister/>
        </Box>
    )
}
export default RegisterPage
