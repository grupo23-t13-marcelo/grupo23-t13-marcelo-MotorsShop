import {
    Box, Button, Container, Flex, Image, SimpleGrid, Text, Modal,

    useDisclosure,
} from "@chakra-ui/react"

export const AdAsideInfo = (adToShow: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container margin={0} p={0} marginRight={['0%', '0%', '3%', '7%']} width={['90%', '85%', '25%']} display={'flex'} flexDirection={'column'} alignItems={"center"}>
            <Flex marginTop={10} minWidth={'260px'} direction={'column'}>
                <Box backgroundColor={"white"} p={'5%'} minWidth={'260px'} borderRadius={5} width={'100%'}>
                    <Text marginBottom={5} fontWeight={600}>Fotos</Text>
                    <SimpleGrid columns={3} spacing={4} maxHeight={'240px'} overflow={'auto'}>
                        {adToShow.gallery.map((image: any) => {
                            return (<Image src={image} objectFit={'contain'} width={['108px', null, '70px', '80px', '108px']} height={['108px', null, '70px', '80px', '108px']} backgroundColor={"gray.100"} borderRadius={5} p={'7%'} />)
                        })}

                    </SimpleGrid>
                </Box>
                <Box marginTop={10} backgroundColor={'white'} p={7} marginBottom={10} borderRadius={5} minWidth={'260px'}>
                    <Flex direction={"column"} alignItems={"center"} gap={10}>
                        <Image src={adToShow.user.profile_image} objectFit={'cover'} maxWidth={'104px'} />
                        <Text>Samuel Leão</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo praesentium illo pariatur ut fugit officia. Amet ratione cum labore molestiae vitae delectus! Laboriosam magnam ratione, officiis inventore maiores consectetur?</Text>
                        <Button p={7} color={"white"} backgroundColor={"black"}>Ver todos anuncios</Button>
                    </Flex>
                </Box>
            </Flex>
        </Container >
    )
}