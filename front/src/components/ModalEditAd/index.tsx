import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { color } from "framer-motion"
import { useContext } from "react"
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext"

const ModalEditAd = () => {

    const {modalEditAd, setModalEditAd} = useContext(AdDetailContext)

    return (
        <Modal isOpen={modalEditAd} onClose={() => setModalEditAd(false)}>
            <ModalOverlay>
                <ModalContent p={"10px 20px"} ml={"10px"} mr={"8px"} maxW={"500px"}>
                    <Flex w={"100%"} justify={"space-between"} align={"center"} mt={"8px"}>
                        <Heading fontSize={"1xl"}>Editar endereço</Heading>
                        <Text cursor={"pointer"} _hover={{ color: "gray.500" }}>X</Text>
                    </Flex>
                    <Text m={"20px 0"} fontSize={"1xl"}>Informações de endereço</Text>
                    <Stack>
                        <form action="">
                            <FormControl mb={"20px"} >
                                <FormLabel>CEP</FormLabel>
                                <Input type="text" id="nameRegister" placeholder="00000.000" />
                                <FormErrorMessage>
                                    teste
                                </FormErrorMessage>
                            </FormControl>
                            <Flex w={"100%"} justify={"space-between"}>
                                <FormControl w={"48%"} mb={"20px"} >
                                    <FormLabel>Estado</FormLabel>
                                    <Input type="text" id="nameRegister" placeholder="Digitar Estado" />
                                    <FormErrorMessage>
                                        teste
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl w={"48%"} mb={"20px"} >
                                    <FormLabel>Cidade</FormLabel>
                                    <Input type="text" id="nameRegister" placeholder="Digitar cidade" />
                                    <FormErrorMessage>
                                        teste
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <FormControl mb={"20px"} >
                                    <FormLabel>Rua</FormLabel>
                                    <Input type="text" id="nameRegister" placeholder="Digitar Rua" />
                                    <FormErrorMessage>
                                        teste
                                    </FormErrorMessage>
                            </FormControl>
                            <Flex w={"100%"} justify={"space-between"}>
                                <FormControl w={"48%"} mb={"20px"} >
                                    <FormLabel>Número</FormLabel>
                                    <Input type="text" id="nameRegister" placeholder="Digitar número" />
                                    <FormErrorMessage>
                                        teste
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl w={"48%"} mb={"20px"} >
                                    <FormLabel>Complemento</FormLabel>
                                    <Input type="text" id="nameRegister" placeholder="Ex: apart 307" />
                                    <FormErrorMessage>
                                        teste
                                    </FormErrorMessage>
                                </FormControl>
                            </Flex>
                            <Flex mt={"10px"} mb={"8px"} w={"100%"} justify={"space-between"}>
                                <Button w={"35%"} variant={"gray-1"}>Cancelar</Button>
                                <Button w={"60%"} variant={"button-sender"}>Salvar alterações</Button>
                            </Flex>
                        </form>
                    </Stack>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )

}

export default ModalEditAd