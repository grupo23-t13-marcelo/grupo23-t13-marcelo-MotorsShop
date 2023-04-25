import {
    Box, Button, Container, Flex, Image, SimpleGrid, Text, Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { IAdDetail } from "../../../context/adsDetail/adsTypes"
import { AccessContext } from "../../../context/access/accessContext"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"


export const AdAsideInfo = (adToShow: IAdDetail) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalImg, setModalImg] = useState("")
    const {apiGetUser} = useContext(AccessContext)
    const navigate = useNavigate()


    const handleImgClick = (img: string) => {
        onOpen()
    }
    return (
        <Container margin={0} p={0} marginRight={['0%', '0%', '3%', '7%']} width={['90%', '85%', '25%']} display={'flex'} flexDirection={'column'} alignItems={"center"}>
            <Flex marginTop={10} minWidth={'260px'} direction={'column'}>
                <Box backgroundColor={"white"} p={'5%'} minWidth={'260px'} borderRadius={5} width={'100%'}>
                    <Text marginBottom={5} fontWeight={600}>Fotos</Text>
                    <SimpleGrid columns={3} spacing={4} maxHeight={'240px'} overflow={'auto'}>
                        {adToShow.gallery?.map((image: any) => {

                            return (<Image src={image.file_name} key={image.id} onClick={() => handleImgClick(image.file_name)} objectFit={'contain'} width={['108px', null, '70px', '80px', '108px']} height={['108px', null, '70px', '80px', '108px']} backgroundColor={"gray.100"} borderRadius={5} p={'7%'} />)
                        })}
                    </SimpleGrid>
                </Box>
                <Box marginTop={10} backgroundColor={'white'} p={7} marginBottom={10} borderRadius={5} minWidth={'260px'}>
                    <Flex direction={"column"} alignItems={"center"} gap={10}>
                        <Image src={adToShow.user?.profile_picture!} alt={"teste"} objectFit={'cover'} maxWidth={'104px'} />
                        <Text>{adToShow.user?.name}</Text>
                        <Text>
                            {adToShow.user?.description}
                        </Text>
                        <Button onClick={() => {navigate('/salesdetail')}}   p={7} color={"white"} backgroundColor={"black"}>Ver todos anuncios</Button>
                    </Flex>
                </Box>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text>
                            Imagem do veículo
                        </Text>
                        <ModalCloseButton color={'gray.500'} />
                    </ModalHeader>
                    <ModalBody p={7}>
                        <Image src={modalImg} h={'100%'} w={'100%'} backgroundColor={'gray.200'} borderRadius={5} p={5} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container >
    )
}
