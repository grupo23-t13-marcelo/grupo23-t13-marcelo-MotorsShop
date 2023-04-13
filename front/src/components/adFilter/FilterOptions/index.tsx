import { Heading, Stack, Link, Flex, Input } from "@chakra-ui/react"

const FilterOptions = () => {
    return (
        <>
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