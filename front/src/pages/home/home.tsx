import { Heading, Flex, Box, Text, Stack, UnorderedList, Button } from "@chakra-ui/react"
import homeCover from "../../assets/Luxury-Car-PNG-Image-HD.png"
import FilterType from "../../components/adFilter/FilterType";
import { CardCars } from "../../components/commons/Card"
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/home/homeContext";
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext";
import { AccessContext } from "../../context/access/accessContext";
import CardCarsSkeleton from "../../components/CardSkeleton";


const HomePage = () => {
    const { filteredAds, filtersUsed, listAdsPag, setQuery, query, page, setPage } = useContext(HomeContext)
    const { getFullAd } = useContext(AdDetailContext)
    const { apiGetUser, user } = useContext(AccessContext)

    useEffect(() => {
        if (user) {
            apiGetUser(user.id)
        }
    }, [user, query])


    return (
        <Box>
            <Box
                backgroundImage="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
                width="100%"
                height="480px"
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
                    top={{ base: "20%", md: "50%" }}
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                >
                    <Heading
                        color="purple.50"
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight="bold"
                        fontFamily="heading"
                    >
                        Motors Shop</Heading>
                    <Text
                        color="purple.50"
                        fontWeight="bold"
                        fontSize={{ base: "lg", md: "5xl" }}
                    >
                        A melhor plataforma de anúncios de carros do país</Text>
                </Stack>
            </Box>
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row-reverse" }}
                width={{ base: "auto", md: "95%" }} maxWidth={"1600px"}
                margin={{ base: "20px auto 0 auto", md: "50px auto 0 auto" }}
                justifyContent={{ md: "space-between" }}
                alignItems={{ md: "flex-start" }}
                gap={{ md: "10%" }}
            >
                <UnorderedList
                    padding={"5px"}
                    display="flex"
                    flexWrap={{ base: "nowrap", md: "wrap" }}
                    overflowX={{ base: "auto" }}
                    gap={{ base: "25px", md: "45px" }}
                    listStyleType="none"
                    flex={{ base: "auto", md: 1 }}
                    maxWidth={{ base: "auto", md: "auto" }}
                    marginLeft={{ base: "5px", md: "16px" }}
                >
                    {
                        filteredAds.length > 0 ?
                            filteredAds.map((card, index) => (
                                index < page * 20 && index >= page * 20 - 20 ? (
                                    <Flex key={card.id} onClick={() => { getFullAd(card.id), apiGetUser(card.user.id) }}>
                                        <CardCars
                                            id={card.id}
                                            card={card}
                                            showPerfil={true}
                                            showBrands={true}
                                            showStatus={false}
                                            showEditButton={false}
                                        />
                                    </Flex>
                                ) : (
                                    null
                                )
                            )) :
                            Object.values(filtersUsed).length > 0 ?
                                <Stack w={{ base: "95%", md: "90%" }} h={{ base: "200px", md: "600px" }} justify={"center"} align={"center"}>
                                    <Heading color={"brand1"} fontSize={{ base: "xl", md: "4xl" }}>Nenhum anúncio encontrado</Heading>
                                </Stack> 
                                :
                                listAdsPag?.nodes.length! > 0 ?
                                    listAdsPag?.nodes.map((card, index) => (
                                        <Flex key={card.id} onClick={() => { getFullAd(card.id), apiGetUser(card.user.id) }}>
                                            <CardCars
                                                id={card.id}
                                                card={card}
                                                showPerfil={true}
                                                showBrands={true}
                                                showStatus={false}
                                                showEditButton={false}
                                            />
                                        </Flex>
                                    ))
                                    :
                                    <>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    <CardCarsSkeleton/>
                                    </>
                    }
                </UnorderedList>
                <FilterType />
            </Box>
            <Box
                width={"100%"}
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ base: "4px", md: "20px" }}
                margin={"15px 0"}
            >
                {
                    filteredAds.length > 0 ? (
                        page > 1 ? (
                            <Button
                                display={"flex"}
                                width={"100px"}
                                backgroundColor={"transparent"}
                                color={"brand1"}
                                onClick={() => { setPage(page - 1), window.scrollTo({ top: 500, behavior: "smooth" }) }}
                            >
                                &lt; Anterior
                            </Button>
                        ) : (
                            null
                        )
                    ) : (
                        listAdsPag?.hasPrev ? (
                            <Button
                                display={"flex"}
                                width={"100px"}
                                backgroundColor={"transparent"}
                                color={"brand1"}
                                onClick={() => { setQuery({ prev: listAdsPag.prevCursor }), setPage(page - 1), window.scrollTo({ top: 500, behavior: "smooth" }) }}
                            >
                                &lt; Anterior
                            </Button>
                        ) : (
                            null
                        )
                    )
                }
                {
                    filteredAds.length > 20 ? (
                        <Flex gap={"5px"}>
                            <Text color={"brand1"}>{page}</Text>
                            <Text color={"gray.600"}>de</Text>
                            <Text color={"gray.600"}>{Math.ceil(filteredAds?.length / 20)}</Text>
                        </Flex>
                    ) : (
                        filteredAds.length > 0 ? (
                            null
                        ) : (
                            listAdsPag?.hasNext || listAdsPag?.hasPrev ? (
                                <Flex gap={"5px"}>
                                    <Text color={"brand1"}>{page}</Text>
                                    <Text color={"gray.600"}>de</Text>
                                    <Text color={"gray.600"}>{Math.ceil(listAdsPag?.count! / 20)}</Text>
                                </Flex>
                            ) : (
                                null
                            )
                        )
                    )
                }

                {
                    filteredAds.length > 0 ? (
                        page * 20 < filteredAds.length ? (
                            <Button
                                display={"flex"}
                                width={"100px"}
                                backgroundColor={"transparent"}
                                color={"brand1"}
                                onClick={() => { setPage(page + 1), window.scrollTo({ top: 500, behavior: "smooth" }) }}
                            >
                                Seguinte &gt;
                            </Button>
                        ) : (
                            null
                        )
                    ) : (
                        listAdsPag?.hasNext ? (
                            <Button
                                display={"flex"}
                                width={"100px"}
                                backgroundColor={"transparent"}
                                color={"brand1"}
                                onClick={() => { setQuery({ next: listAdsPag.nextCursor }), setPage(page + 1), window.scrollTo({ top: 500, behavior: "smooth" }) }}
                            >
                                Seguinte &gt;
                            </Button>
                        ) : (
                            null
                        )
                    )
                }
            </Box>
        </Box >
    )
}

export default HomePage
