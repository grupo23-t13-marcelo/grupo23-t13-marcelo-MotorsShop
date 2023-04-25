import { Box, Button, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import { useContext, useState } from "react";
import FilterOptions from "../FilterOptions"
import { HomeContext } from "../../../context/home/homeContext";

const FilterType = () => {

    const [filterChange] = useMediaQuery("(max-width: 767px)");
    const [filterModal, setFilterModal] = useState<boolean>(false)
    const { setFilteredAds, setFiltersUsed } = useContext(HomeContext)

    return (
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
                                <FilterOptions />
                            </Stack>
                            <Button variant={"button-sender"} textColor={"#ffffff"} w={"90%"} maxW={"320px"} margin={"10px 0"} onClick={() => setFilterModal(false)}>Ver anúncios</Button>
                        </Box>
                    ) : (
                        <Stack display={"none"}>
                            <FilterOptions />
                        </Stack>
                    )}
                </Stack>
            ) : (
                <Stack alignItems={"center"}>
                    <Stack gap={"12px"} marginBottom={"15px"}>
                        <FilterOptions />
                    </Stack>
                    <Button w={"100%"} variant={"button-sender"} color={"#ffffff"} onClick={(e) => { setFilteredAds([]), setFiltersUsed({}) }}>Limpar filtros</Button>
                </Stack>
            )}
        </Box>
    )
}

export default FilterType