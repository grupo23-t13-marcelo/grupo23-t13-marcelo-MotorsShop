import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import {InputComponents} from "../../components/commons/Inputs/index"


const RegisterPage = () => {
    return (
        <Box bg={"gray.100"} >
            <Stack w={"90%"} m={"20px auto 30px auto"} bg={"#ffffff"} maxW={"500px"}>
                <Stack w={{base: "90%", md: "85%"}} m={"10px auto 0 auto"}>
                    <form>
                        <Heading mt={"20px"} fontSize={"4xl"}>Cadastro</Heading>
                        <Text m={"20px 0"}>Informações pessoais</Text>
                        <FormControl mb={"20px"}>
                            <FormLabel>Nome</FormLabel>
                            <Input type="text" id="nameRegister" placeholder="Ex: Samuel Leão"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>Email</FormLabel>
                            <Input type="text" id="email" placeholder="Ex: samuel@kenzie.com.br"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>CPF</FormLabel>
                            <Input type="text" id="cpf" placeholder="000.000.000-00"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>Celular</FormLabel>
                            <Input type="text" id="cellPhone" placeholder="(DDD) 90000-0000"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>Data de nascimento</FormLabel>
                            <Input type="text" id="birthdate" placeholder="Ex: Samuel Leão"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>Descrição</FormLabel>
                            <Textarea id="description" placeholder="Digitar descrição"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <Text m={"25px 0"}>Infomações de endereço</Text>
                        <FormControl mb={"20px"}>
                            <FormLabel>CEP</FormLabel>
                            <Input type="text" id="cep" placeholder="00000.000"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <FormControl>
                                <FormLabel>Estado</FormLabel>
                                <Input type="text" id="state" placeholder="Digitar Estado"/>
                                {/* <FormErrorMessage></FormErrorMessage> */}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Cidade</FormLabel>
                                <Input type="text" id="City" placeholder="Digitar cidade"/>
                                {/* <FormErrorMessage></FormErrorMessage> */}
                            </FormControl>
                        </Flex>
                        <FormControl mb={"20px"}>
                            <FormLabel>Rua</FormLabel>
                            <Input type="text" id="street" placeholder="Digitar senha"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <FormControl>
                                <FormLabel>Número</FormLabel>
                                <Input type="text" id="number" placeholder="Digitar número"/>
                                {/* <FormErrorMessage></FormErrorMessage> */}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Complemento</FormLabel>
                                <Input type="text" id="complement" placeholder="Ex: apart 307"/>
                                {/* <FormErrorMessage></FormErrorMessage> */}
                            </FormControl>
                        </Flex>
                        <Text m={"10px 0 15px 0"}>Tipo de conta</Text>
                        <Flex mb={"20px"} justify={"space-between"} w={"100%"} gap={"10px"}>
                            <Button type="button" w={"50%"} variant={"button-sender"} textColor={"#ffffff"}>Comprador</Button>
                            <Button w={"50%"} variant={"outline-2"}>Anuciante</Button>
                        </Flex>
                        <FormControl mb={"20px"}>
                            <FormLabel>Senha</FormLabel>
                            <Input type="text" id="password" placeholder="Digitar senha"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <FormControl mb={"20px"}>
                            <FormLabel>Confirmar Senha</FormLabel>
                            <Input type="text" id="confirmPassword" placeholder="Digitar senha"/>
                            {/* <FormErrorMessage></FormErrorMessage> */}
                        </FormControl>
                        <Button type="button" w={"100%"} mb={"30px"} variant={"button-sender"} textColor={"#ffffff"}>Finalizar cadastro</Button>
                    </form>
                </Stack>
            </Stack>
        </Box>
    )
}

export default RegisterPage