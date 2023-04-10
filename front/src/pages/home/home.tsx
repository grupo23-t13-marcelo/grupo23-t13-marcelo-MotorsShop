import { Heading, Flex, Box, Text, Stack, Center, flexbox, UnorderedList, ListItem, Badge, Image, Button, Input } from "@chakra-ui/react"
import homeCover from "../../assets/home_cover.png"
import homeCoverMobile from "../../assets/home_cover_mobile.png"
import { CardCars } from "../../components/commons/Card"


const HomePage = () => {
   return (
    <Box>
        <Box
            backgroundImage="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
            width="100%"
            height="450px" 
            backgroundSize="cover"
            position="relative"
        >
            <Box
                backgroundImage={`url(${homeCover})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                borderColor="brand1"
                width="100%"
                height="100%"
                position="absolute"
                zIndex={-1}
            />
                <Stack
                    width={"90%"}
                    align="center"
                    justify="center"
                    position="absolute"
                    top={{base: "20%", md: "50%"}}
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                >
                    <Heading
                        color="purple.50"
                        fontSize={{base: "4xl", md: "5xl"}}
                        fontWeight="bold"
                        fontFamily="heading"
                    >
                        Motors Shop</Heading>
                    <Text
                        color="purple.50"
                    >
                        A melhor plataforma de anúncios de carros do país</Text>
                </Stack>
        </Box>
        <Box display={"flex"} flexDirection={{base: "column", md: "row-reverse"}} width={{base: "auto", md: "95%"}} maxWidth={"1600px"} margin={"20px auto 0 auto"} justifyContent={{md: "space-between"}} alignItems={{md: "flex-start"}} gap={{md: "10%"}}>
            <UnorderedList 
                display="flex"
                flexWrap={{base: "nowrap", md: "wrap"}}
                overflowX={{base: "auto"}}
                gap={{base: "15px", md: "35px"}}
                listStyleType="none"
                flex={{base: "auto", md: 1}}
                // maxWidth={{base: "auto", md: "1252px"}}
                maxWidth={{base: "auto", md: "auto"}}
            >
                <CardCars/>
                <CardCars/>
                <CardCars/>
                <CardCars/>
                <CardCars/>
                {/* <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 1
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 2
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 3
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 4
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 5
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box p="5" width={"280px"} maxW="350px" borderWidth="1px">
                        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
                        <Flex align="baseline" mt={2}>
                            <Badge colorScheme="pink">Plus 1</Badge>
                            <Text
                                ml={2}
                                textTransform="uppercase"
                                fontSize="sm"
                                fontWeight="bold"
                                color="pink.800"
                            >
                                Verified &bull; Cape Town
                            </Text>
                        </Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                        card 6
                        </Text>
                        <Text mt={2}>$119/night</Text>
                        <Flex mt={2} align="center">
                            <Box color="orange.400" />
                            <Text ml={1} fontSize="sm">
                                <b>4.84</b> (190)
                            </Text>
                        </Flex>
                    </Box>
                </ListItem> */}
            </UnorderedList>
            {/* //////////////////////////////////////////////////////
            ////////////////////////////////////////////////////// */}
            <Box> 
                <Flex width={"100%"} justify={"center"} marginTop={"15px"}>
                    <Button>filtrar</Button>
                </Flex>
                <Stack >
                    <Flex width={"100%"} justify={"space-between"}>
                        <Text marginLeft={"5px"}>Filtro</Text>
                        <Button marginRight={"5px"}>X</Button>
                    </Flex>
                    <Stack>
                        <Heading>Marca</Heading>
                        <Text>Porche</Text>
                        <Heading>Modelo</Heading>
                        <Text>Azul</Text>
                        <Text>Azul</Text>
                        <Text>Azul</Text>
                        <Text>Azul</Text>
                        <Heading>Ano</Heading>
                        <Text>2020</Text>
                        <Text>2020</Text>
                        <Text>2020</Text>
                        <Text>2020</Text>
                        <Heading>Combustível</Heading>
                        <Text>Diesel</Text>
                        <Text>Diesel</Text>
                        <Text>Diesel</Text>
                        <Text>Diesel</Text>
                        <Heading>Marca</Heading>
                        <Text>Porche</Text>
                        <Heading>Km</Heading>
                        <Flex justify={"center"} gap={"10px"}>
                            <Input width={"120px"} placeholder="Mínimo" />
                            <Input width={"120px"}  placeholder="Máximo" />
                        </Flex>
                        <Heading>Preço</Heading>
                        <Flex justify={"center"} gap={"10px"}>
                            <Input width={"120px"} placeholder="Mínimo" />
                            <Input width={"120px"}  placeholder="Máximo" />
                        </Flex>
                    </Stack>
                    <Button width={"120px"} height={"40px"}>Ver anúncios</Button>
                </Stack>
            </Box>
        </Box>
        <Box width={"100%"} display={"flex"} flexDirection={{base: "column", md: "row"}} justifyContent={"center"} alignItems={"center"} gap={{base: "4px", md: "20px"}} marginTop={"15px"}>
            <Flex gap={"5px"}>
                <Text color={"brand1"}>1</Text>
                <Text color={"gray.600"}>de</Text>
                <Text color={"gray.600"}>2</Text>
            </Flex>
            <Button width={"100px"} backgroundColor={"transparent"} color={"brand1"}>Seguinte</Button>
        </Box>
    </Box>
   ) 
}

export default HomePage