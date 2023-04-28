import { Button, Flex, Heading, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext"

const ModalDeleteAd = () => {

    const {modalDeleteAd, setModalDeleteAd} = useContext(AdDetailContext)

    return (
        <Modal isOpen={modalDeleteAd} onClose={() => setModalDeleteAd(false)}>
            <ModalOverlay>
                <ModalContent p={"10px 20px"} ml={"10px"} mr={"8px"} maxW={"500px"}>
                    <Flex w={"100%"} justify={"space-between"} align={"center"} mt={"8px"}>
                        <Heading fontSize={"1xl"}>Excluir anúncio</Heading>
                        <Text cursor={"pointer"} _hover={{ color: "gray.500" }}>X</Text>
                    </Flex>
                    <Stack mt={"30px"} mb={"28px"} gap={"10px"}>
                        <Heading fontSize={"1xl"} >Tem certeza que deseja remover este anúncio?</Heading>
                        <Text lineHeight={"28px"}>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</Text>
                    </Stack>
                    <Flex w={"100%"} justify={{base: "space-between", md: "flex-end"}} gap={{base: "auto", md: "10px"}}>
                        <Button variant={"gray-1"} w={{base: "35%", md: "30%"}}>Cancelar</Button>
                        <Button bg={"red.100"} color={"red.500"} w={{base: "60%", md: "45%"}} _hover={{bg: "red.500", color: "red.50"}}>Sim, excluir anúncio</Button>
                    </Flex>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalDeleteAd