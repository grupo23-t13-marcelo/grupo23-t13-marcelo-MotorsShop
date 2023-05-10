import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { ICommentPatch } from "../../pages/adsDetail/components/commentSection";
import { useContext, useState } from "react";
import { AccessContext } from "../../context/access/accessContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { apiPatchComment } from "../../services/comments/commentsApi";
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext";

const ModalEditComment = (comment: any, adToShow: any) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user, apiPutEdit, apiGetProfile, setLoadingEditUser, loadingEditUser} = useContext(AccessContext)
    const token = localStorage.getItem('motors.token')
    const {getFullAd} = useContext(AdDetailContext)
    const toast = useToast()
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ICommentPatch>({
        defaultValues: {
            content: comment.comment.content
        }

    });

    const [contentValue, setContentValue] = useState(comment.comment.content)

    
    const onSubmit =  async (formData: ICommentPatch) => {
        await apiPatchComment(formData, token, comment.comment.id ).then(() => {
            getFullAd(comment.adToShow.id)
            toast({title: "success", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"green.600"} fontWeight={"bold"} borderRadius={"md"}>
               Comentário modificado
            </Box>)})   
        }).catch((error) => {
            toast({title: "failed", variant: "solid", position: "bottom-left", isClosable: true,
            render: () => (
                <Box color={"gray.50"} p={3} bg={"red.600"} fontWeight={"bold"} borderRadius={"md"}>
               Algo de errado aconteceu...
            </Box>)})  
        })
    }

    
    return (      
        <>
            <Text onClick={onOpen}>Editar comentário</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent alignItems={'center'}  >
                <ModalHeader>
                        <Text fontWeight={600} fontSize={18}>Editar comentário</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody w={[350, 450]}>
                    <Flex direction={['column', null, 'row']} gap={[5, null, 0]}>
                            <Textarea 
                                value={contentValue}
                                resize={'none'}
                                zIndex={0}
                                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                                h={'100px'}
                                {...register('content')}
                                onChange={(e) => {
                                    setContentValue(e.target.value)
                                }}

                            />
                    </Flex>  
                    </ModalBody>
                    <ModalFooter>
                    {loadingEditUser ?
                            <Button h={'12'} w={'100%'} borderRadius={'base'} fontWeight={'medium'} fontSize={14}  bg={"brand3"} color={"whiteFixed"} disabled={true}>{<Spinner />}</Button>
                            :
                            <Button h={'12'} w={'100%'} borderRadius={'base'} fontWeight={'medium'} fontSize={14}  variant={"button-sender"} onClick={onClose}   type="submit">Salvar alterações</Button>
                        }
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}


export default ModalEditComment