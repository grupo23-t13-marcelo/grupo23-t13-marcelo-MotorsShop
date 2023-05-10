import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { AccessContext } from "../../context/access/accessContext"
import { apiDeleteComment } from "../../services/comments/commentsApi"
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext"



const ModalDeleteComment = (commentId: any, adToShow: any) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user, apiDeleteProfile, setLoadingDeleteUser, loadingDeleteUser} = useContext(AccessContext)
    const token = localStorage.getItem('motors.token')
    const toast = useToast()
    const {getFullAd} = useContext(AdDetailContext)
    const deleteComment = async () => {
        await apiDeleteComment(token, commentId.commentId).then(() => {
            getFullAd(commentId.adToShow.id)
            setLoadingDeleteUser(false)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
                Comentário deletado!
            </Box>)})
        }).catch((error) => {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
                Algo deu errado, tente novamente...
            </Box>)})
        })
    } 
   

    return (
        <>
            <Text onClick={onOpen}>Excluir comentário</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                <Text fontWeight={600} fontSize={18}>Quer mesmo deletar seu comentário?</Text>
                <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                <Text fontWeight={200} fontSize={14}>Caso Aceite. Sua comentário será deletado.</Text>
                </ModalBody>
                <ModalFooter display={'flex'} justifyContent={"space-around"}>
                    {loadingDeleteUser ?
                        <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'} bg={'red.100'} color={"red.500"} disabled={true}>{<Spinner />}</Button>
                        :
                        <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'} bg={'red.400'} onClick={() => (setLoadingDeleteUser(true), deleteComment(), onClose())}>Deletar comentário</Button>
                    }
                    <Button h={'12'} w={'40%'} borderRadius={'base'} fontWeight={'medium'}  variant={"gray-1"} onClick={onClose}>Não</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDeleteComment