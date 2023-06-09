import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { AccessContext } from "../../context/access/accessContext"



const ModalDeleteUser = (userId: any) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user, apiDeleteProfile, setLoadingDeleteUser, loadingDeleteUser} = useContext(AccessContext)
    

    return (
        <>
            <Button h={'12'} w={'80%'} borderRadius={'base'} fontWeight={'medium'}  display={{base: "none", md: "flex"}} bg={'red.200'} onClick={onOpen}>Excluir Perfil</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                <Text fontWeight={600} fontSize={18}>Quer mesmo deletar seu usuário?</Text>
                <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                <Text fontWeight={200} fontSize={14}>Caso Aceite. Sua Conta será deletada, e você tera que registrar outra!</Text>
                </ModalBody>
                <ModalFooter display={'flex'} justifyContent={"space-around"}>
                    {loadingDeleteUser ?
                        <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'} bg={'red.100'} color={"red.500"} disabled={true}>{<Spinner />}</Button>
                        :
                        <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'} bg={'red.400'} onClick={() => (setLoadingDeleteUser(true), apiDeleteProfile(userId.userId.userId))}>Deletar Conta</Button>
                    }
                    <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'}  variant={"gray-1"} onClick={onClose}>Não</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDeleteUser