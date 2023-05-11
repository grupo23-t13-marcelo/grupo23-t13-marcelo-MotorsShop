import { Button, Flex, Heading, Modal, ModalContent, ModalOverlay, Stack, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext"
import { apiDeleteAds } from "../../services/adsApi/adsApi"
import { AccessContext } from "../../context/access/accessContext"
import { api } from "../../services/api"

const ModalDeleteAd = () => {

    const { modalDeleteAd, setModalDeleteAd } = useContext(AdDetailContext)
    const { editAd } = useContext(AdDetailContext)
    const { setUser } = useContext(AccessContext)

    const deleteAd = async (id: string) => {
        try {
            await apiDeleteAds(id)
            setModalDeleteAd(false)
            const {data} = await api.get('users/profile')
            setUser(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Modal isOpen={modalDeleteAd} onClose={() => setModalDeleteAd(false)}>
            <ModalOverlay>
                <ModalContent p={"10px 20px"} ml={"10px"} mr={"8px"} maxW={"500px"}>
                    <Flex w={"100%"} justify={"space-between"} align={"center"} mt={"8px"}>
                        <Heading fontSize={"1xl"}>Excluir anúncio</Heading>
                        <Text cursor={"pointer"} _hover={{ color: "gray.500" }} onClick={() => setModalDeleteAd(false)}>X</Text>
                    </Flex>
                    <Stack mt={"30px"} mb={"28px"} gap={"10px"}>
                        <Heading fontSize={"1xl"} >Tem certeza que deseja remover este anúncio?</Heading>
                        <Text lineHeight={"28px"}>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</Text>
                    </Stack>
                    <Flex w={"100%"} justify={{base: "space-between", md: "flex-end"}} gap={{base: "auto", md: "10px"}}>
                        <Button variant={"gray-1"} w={{base: "35%", md: "30%"}} onClick={() => setModalDeleteAd(false)}>Cancelar</Button>
                        <Button bg={"red.100"} color={"red.500"} w={{base: "60%", md: "45%"}} _hover={{bg: "red.500", color: "red.50"}} onClick={() => deleteAd(editAd.id)}>Sim, excluir anúncio</Button>
                    </Flex>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}

export default ModalDeleteAd