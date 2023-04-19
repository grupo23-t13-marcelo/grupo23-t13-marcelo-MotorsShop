import { Heading, Stack, Link, Flex, Input } from "@chakra-ui/react"
import { useContext } from "react"
import { HomeContext } from "../../../context/home/homeContext"

const FilterOptions = () => {
    const {listAds} = useContext(HomeContext)

    return (
        <>
            <Stack>
                <Heading>Marca</Heading>
                    {listAds
                    .filter((el, index) => index === listAds.findIndex(item => item.brand === el.brand))
                    .map(el => {
                        return (
                            <Link key={el.id} color={"gray.600"}>{el.brand}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Modelo</Heading>
                {listAds
                    .filter((el, index) => index === listAds.findIndex(item => item.model === el.model))
                    .map(el => {
                        return (
                            <Link key={el.id} color={"gray.600"}>{el.model}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Ano</Heading>
                {listAds
                    .filter((el, index) => index === listAds.findIndex(item => item.year === el.year))
                    .map(el => {
                        return (
                            <Link key={el.id} color={"gray.600"}>{el.year}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Combustível</Heading>
                {listAds
                    .filter((el, index) => index === listAds.findIndex(item => item.fuel === el.fuel))
                    .map(el => {
                        return (
                            <Link key={el.id} color={"gray.600"}>{el.fuel}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Km</Heading>
                <Flex justify={"center"} gap={"10px"} maxW={"250px"}>
                    <Input width={"50%"} placeholder="Mínimo" />
                    <Input width={"50%"} placeholder="Máximo" />
                </Flex>
            </Stack>
            <Stack>
                <Heading>Preço</Heading>
                <Flex justify={"center"} gap={"10px"} maxW={"250px"}>
                    <Input width={"50%"} placeholder="Mínimo" />
                    <Input width={"50%"} placeholder="Máximo" />
                </Flex>
            </Stack>
        </>
    )
}

export default FilterOptions