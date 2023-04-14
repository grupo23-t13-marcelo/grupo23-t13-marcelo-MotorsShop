import { Text, Modal, ModalOverlay, ModalContent, Flex, Heading, Button, Stack, flatten } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { AccessContext } from "../../context/access/accessContext"

const ModalRegister = () => {
    const { modalstatus, setModalstatus } = useContext(AccessContext)
    const navigate = useNavigate()

    return (
        <Modal isOpen={modalstatus} onClose={() => setModalstatus(false)}>
            <ModalOverlay>
                <ModalContent p={"10px 20px"} ml={"10px"} mr={"8px"} maxW={"530px"}>
                    <Flex justifyContent={"space-between"} align={"center"}>
                        <Heading fontSize={"lg"}>Sucesso!</Heading>
                        <Button bg={"transparent"} color={"gray.400"} _hover={{ backgroundColor: "gray.900"}} onClick={() => setModalstatus(false)}>X</Button>
                    </Flex>
                    <Stack mt={"30px"} mb={"20px"} gap={"10px"}>
                        <Heading fontSize={"md"}>Sua conta foi criada com sucesso!</Heading>
                        <Text >Agora você poderá ver seus negócios crescendo em grande escala</Text>
                        <Button width={"140px"} variant={"button-sender"} onClick={() => (setModalstatus(false), navigate("/login"))}>Ir para o login</Button>
                    </Stack>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalRegister