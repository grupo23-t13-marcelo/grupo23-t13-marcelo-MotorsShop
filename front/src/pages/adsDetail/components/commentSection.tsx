import { Box, Button, Flex, Heading, Image, Text, Textarea } from "@chakra-ui/react"

export const adCommentSection = (adToShow: any, display: Array<string | null>) => {
    return (
        <Box display={display}>
            <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7}>
                <Heading marginBottom={10} as='h2' size={'md'}>
                    Comentários
                </Heading>
                <Box marginBottom={5} maxHeight={'500px'} overflow={'auto'} borderRadius={5}>
                    {adToShow.comments.map((comment: any) => {
                        return (
                            <>
                                <Flex alignItems={"center"} gap={5}>
                                    <Image src={comment.user.profile_picture} h={'50px'} w={'50px'} borderRadius={'50%'} backgroundColor={"black"} />
                                    <Flex gap={1}>
                                        <Text fontWeight={600}>{comment.user.name} </Text>
                                        <Text color={"gray.500"}>• 7 days ago</Text>
                                    </Flex>
                                </Flex>
                                <Text marginTop={5} marginBottom={5}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit quas rerum labore vel perspiciatis. Atque qui distinctio ea commodi voluptatibus sit odit neque tenetur, rerum obcaecati doloribus mollitia inventore.</Text >
                            </>
                        )
                    })}
                </Box>
            </Box>
            <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7} marginTop={10}>
                <Flex alignItems={"center"} gap={5}>
                    <Image src={adToShow.user.profile_image} w={'50px'} h={'50px'} borderRadius={'50%'} />
                    <Text>{adToShow.user.name}</Text>
                </Flex>
                <Box position={'relative'}>
                    <Flex>
                        <Textarea resize={'none'} placeholder="Carro muito confortável, foi uma ótima experiência de compra..." h={'100px'} />
                        <Button backgroundColor={'brand1'} position={'absolute'} w={'130px'} h={'30px'} fontWeight={400} bottom={3} right={3} color={"white"}>Comentar</Button>
                    </Flex>
                </Box>
                <Flex gap={1}>
                    <Button backgroundColor={"gray.100"} color={"gray.500"} h={'20px'} borderRadius={'15'} fontSize={10}>Gostei Muito!</Button>
                    <Button backgroundColor={"gray.100"} color={"gray.500"} h={'20px'} borderRadius={'15'} fontSize={10}>Incrível</Button>
                    <Button backgroundColor={"gray.100"} color={"gray.500"} h={'20px'} borderRadius={'15'} fontSize={10}>Recomendarei para meus amigos</Button>
                </Flex>
            </Box>
        </Box >
    )
}