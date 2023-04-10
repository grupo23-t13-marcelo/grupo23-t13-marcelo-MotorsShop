import { Heading, Flex, Box, Text, Stack, Center, flexbox, UnorderedList, ListItem, Badge, Image, Button, Input, Link, useMediaQuery, Modal } from "@chakra-ui/react"
import { useState } from "react";
import homeCover from "../../assets/home_cover.png"
import { CardCars } from "../../components/commons/Card"


const HomePage = () => {

    const [filterChange] = useMediaQuery("(max-width: 768px)");
    const [filterModal, setFilterModal] = useState<boolean>(false)
    const onClose = () => setFilterModal(false)

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
                        fontWeight="bold"
                        fontSize={{base: "lg", md: "5xl"}}
                    >
                        A melhor plataforma de anúncios de carros do país</Text>
                </Stack>
        </Box>
        <Box 
            display={"flex"} 
            flexDirection={{base: "column", md: "row-reverse"}} 
            width={{base: "auto", md: "95%"}} maxWidth={"1600px"} 
            margin={{base: "20px auto 0 auto", md: "50px auto 0 auto"}} 
            justifyContent={{md: "space-between"}} 
            alignItems={{md: "flex-start"}} 
            gap={{md: "10%"}}
        >
            <UnorderedList 
                paddingRight={{base: "5px", md: "0px"}}
                display="flex"
                flexWrap={{base: "nowrap", md: "wrap"}}
                overflowX={{base: "auto"}}
                gap={{base: "15px", md: "35px"}}
                listStyleType="none"
                flex={{base: "auto", md: 1}}
                maxWidth={{base: "auto", md: "auto"}}
            >
                <CardCars/>
                <CardCars/>
                <CardCars/>
                <CardCars/>
                <CardCars/>
            </UnorderedList>
            <Box> 
                {filterChange ? (
                    <Stack alignItems={"center"}>
                        <Button display={filterModal ? "none" : "inline"} variant={"button-sender"} w={"90%"} maxW={"320px"} margin={"50px 0 20px 0"} textColor={"#ffffff"} onClick={() => (setFilterModal(true), window.scrollTo({ top: 0, behavior: "smooth" }))}>Filtros</Button>
                        {filterModal ? (
                            <Box 
                                width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                backgroundColor={"#ffffff"}
                                position={"absolute"} 
                                zIndex={20} 
                                top={"65px"} 
                                left={0}
                                padding={"12px"}
                                alignItems={"center"}
                            >
                                <Flex width={"100%"} justify={"space-between"}>
                                    <Text marginLeft={"5px"}>Filtro</Text>
                                    <Button variant={"outline-1"} border={"none"} marginRight={"5px"} onClick={() => setFilterModal(false)}>X</Button>
                                </Flex>
                                <Stack marginBottom={"20px"} gap={"12px"} w={"100%"}>
                                    <Stack>
                                        <Heading>Marca</Heading>
                                        <Link color={"gray.600"}>Porche</Link>
                                        <Link color={"gray.600"}>Fiat</Link>
                                        <Link color={"gray.600"}>Ford</Link>
                                        <Link color={"gray.600"}>Honda</Link>
                                    </Stack>
                                    <Stack>
                                        <Heading>Modelo</Heading>
                                        <Link color={"gray.600"}>Azul</Link>
                                        <Link color={"gray.600"}>Azul</Link>
                                        <Link color={"gray.600"}>Azul</Link>
                                        <Link color={"gray.600"}>Azul</Link>
                                    </Stack>
                                    <Stack>
                                        <Heading>Ano</Heading>
                                        <Link color={"gray.600"}>2020</Link>
                                        <Link color={"gray.600"}>2020</Link>
                                        <Link color={"gray.600"}>2020</Link>
                                        <Link color={"gray.600"}>2020</Link>
                                    </Stack>
                                    <Stack>
                                        <Heading>Combustível</Heading>
                                        <Link color={"gray.600"}>Diesel</Link>
                                        <Link color={"gray.600"}>Diesel</Link>
                                        <Link color={"gray.600"}>Diesel</Link>
                                        <Link color={"gray.600"}>Diesel</Link>
                                    </Stack>
                                    <Stack>
                                        <Heading>Km</Heading>
                                        <Flex justify={"center"} gap={"10px"}>
                                            <Input width={"40%"} placeholder="Mínimo" />
                                            <Input width={"40%"}  placeholder="Máximo" />
                                        </Flex>
                                    </Stack>
                                    <Stack>
                                        <Heading>Preço</Heading>
                                        <Flex justify={"center"} gap={"10px"}>
                                            <Input width={"40%"} placeholder="Mínimo" />
                                            <Input width={"40%"}  placeholder="Máximo" />
                                        </Flex>
                                    </Stack>
                                </Stack>
                                <Button variant={"button-sender"} textColor={"#ffffff"} w={"90%"} maxW={"320px"} margin={"10px 0"} onClick={() => setFilterModal(false)}>Ver anúncios</Button>
                            </Box>
                        ) : (
                            <Stack display={"none"}>
                                <Stack>
                                    <Heading>Marca</Heading>
                                    <Link color={"gray.600"}>Porche</Link>
                                    <Link color={"gray.600"}>Fiat</Link>
                                    <Link color={"gray.600"}>Ford</Link>
                                    <Link color={"gray.600"}>Honda</Link>
                                </Stack>
                                <Stack>
                                    <Heading>Modelo</Heading>
                                    <Link color={"gray.600"}>Azul</Link>
                                    <Link color={"gray.600"}>Azul</Link>
                                    <Link color={"gray.600"}>Azul</Link>
                                    <Link color={"gray.600"}>Azul</Link>
                                </Stack>
                                <Stack>
                                    <Heading>Ano</Heading>
                                    <Link color={"gray.600"}>2020</Link>
                                    <Link color={"gray.600"}>2020</Link>
                                    <Link color={"gray.600"}>2020</Link>
                                    <Link color={"gray.600"}>2020</Link>
                                </Stack>
                                <Stack>
                                    <Heading>Combustível</Heading>
                                    <Link color={"gray.600"}>Diesel</Link>
                                    <Link color={"gray.600"}>Diesel</Link>
                                    <Link color={"gray.600"}>Diesel</Link>
                                    <Link color={"gray.600"}>Diesel</Link>
                                </Stack>
                                <Stack>
                                    <Heading>Km</Heading>
                                    <Flex justify={"center"} gap={"10px"}>
                                        <Input width={"120px"} placeholder="Mínimo" />
                                        <Input width={"120px"}  placeholder="Máximo" />
                                    </Flex>
                                </Stack>
                                <Stack>
                                    <Heading>Preço</Heading>
                                    <Flex justify={"center"} gap={"10px"}>
                                        <Input width={"120px"} placeholder="Mínimo" />
                                        <Input width={"120px"}  placeholder="Máximo" />
                                    </Flex>
                                </Stack>
                            </Stack>
                        )}
                    </Stack>
                ) : (
                    <Stack alignItems={"center"}>
                        <Stack gap={"12px"} marginBottom={"15px"}>
                            <Stack>
                                <Heading>Marca</Heading>
                                <Link color={"gray.600"}>Porche</Link>
                                <Link color={"gray.600"}>Fiat</Link>
                                <Link color={"gray.600"}>Ford</Link>
                                <Link color={"gray.600"}>Honda</Link>
                            </Stack>
                            <Stack>
                                <Heading>Modelo</Heading>
                                <Link color={"gray.600"}>Azul</Link>
                                <Link color={"gray.600"}>Azul</Link>
                                <Link color={"gray.600"}>Azul</Link>
                                <Link color={"gray.600"}>Azul</Link>
                            </Stack>
                            <Stack>
                                <Heading>Ano</Heading>
                                <Link color={"gray.600"}>2020</Link>
                                <Link color={"gray.600"}>2020</Link>
                                <Link color={"gray.600"}>2020</Link>
                                <Link color={"gray.600"}>2020</Link>
                            </Stack>
                            <Stack>
                                <Heading>Combustível</Heading>
                                <Link color={"gray.600"}>Diesel</Link>
                                <Link color={"gray.600"}>Diesel</Link>
                                <Link color={"gray.600"}>Diesel</Link>
                                <Link color={"gray.600"}>Diesel</Link>
                            </Stack>
                            <Stack>
                                <Heading>Km</Heading>
                                <Flex justify={"center"} gap={"10px"}>
                                    <Input width={"120px"} placeholder="Mínimo" />
                                    <Input width={"120px"}  placeholder="Máximo" />
                                </Flex>
                            </Stack>
                            <Stack>
                                <Heading>Preço</Heading>
                                <Flex justify={"center"} gap={"10px"}>
                                    <Input width={"120px"} placeholder="Mínimo" />
                                    <Input width={"120px"}  placeholder="Máximo" />
                                </Flex>
                            </Stack>
                        </Stack>
                        <Button w={"100%"} variant={"button-sender"} color={"#ffffff"}>Limpar filtros</Button>
                    </Stack>
                )}
            </Box>
        </Box>
        <Box 
            width={"100%"} 
            display={"flex"} 
            flexDirection={{base: "column", md: "row"}} 
            justifyContent={"center"} 
            alignItems={"center"} 
            gap={{base: "4px", md: "20px"}} 
            margin={"15px 0"}
        >
            <Flex gap={"5px"}>
                <Text color={"brand1"}>1</Text>
                <Text color={"gray.600"}>de</Text>
                <Text color={"gray.600"}>2</Text>
            </Flex>
            <Button display={"flex"} width={"100px"} backgroundColor={"transparent"} color={"brand1"}>Seguinte &gt;</Button>
        </Box>
    </Box>
   ) 
}

export default HomePage