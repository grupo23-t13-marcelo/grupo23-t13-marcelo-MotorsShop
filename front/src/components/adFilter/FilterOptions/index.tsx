import { Heading, Stack, Link, Flex, Input } from "@chakra-ui/react"

const FilterOptions = () => {
    const dataTeste = [
        {
            brand: "Citroën",
            model: "C1 LOUNGE",
            year: "2019",
            fuel: "Flex",
            mileage: 0,
            color: "Cinza",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81211",
            is_activated: true
        },
        {
            brand: "Porche",
            model: "C2 LOUNGE",
            year: "2018",
            fuel: "Diesel",
            mileage: 0,
            color: "Azul",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81212",
            is_activated: true
        },
        {
            brand: "Fiat",
            model: "C3 LOUNGE",
            year: "2017",
            fuel: "gasolina comum",
            mileage: 0,
            color: "Preto",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81213",
            is_activated: true
        },
        {
            brand: "Ford",
            model: "C4 LOUNGE",
            year: "2020",
            fuel: "gasolina aditivada",
            mileage: 0,
            color: "Vermelho",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81214",
            is_activated: true
        },
        {
            brand: "Honda",
            model: "C5 LOUNGE",
            year: "2021",
            fuel: "Flex",
            mileage: 0,
            color: "Rosa",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81215",
            is_activated: true
        },
        {
            brand: "Citroën",
            model: "C6 LOUNGE",
            year: "2019",
            fuel: "Flex",
            mileage: 0,
            color: "Cinza",
            fipe_table_price: "R$ 110.000,00",
            price: "R$ 79.988,00",
            description: "Lorem Impsion",
            cover_image: "https://www.automaistv.com.br/wp-content/uploads/2022/04/citroen_xsara_picasso_305_edited-750x450.jpg",
            id: "3dbba177-0db7-4903-ba46-d7975ee81216",
            is_activated: true
        },
    ]

    return (
        <>
            <Stack>
                <Heading>Marca</Heading>
                    {dataTeste
                    .filter((el, index) => index === dataTeste.findIndex(item => item.brand === el.brand))
                    .map(el => {
                        return (
                            <Link color={"gray.600"}>{el.brand}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Modelo</Heading>
                {dataTeste
                    .filter((el, index) => index === dataTeste.findIndex(item => item.brand === el.brand))
                    .map(el => {
                        return (
                            <Link color={"gray.600"}>{el.model}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Ano</Heading>
                {dataTeste
                    .filter((el, index) => index === dataTeste.findIndex(item => item.brand === el.brand))
                    .map(el => {
                        return (
                            <Link color={"gray.600"}>{el.year}</Link>
                        )
                    })
                    }
            </Stack>
            <Stack>
                <Heading>Combustível</Heading>
                {dataTeste
                    .filter((el, index) => index === dataTeste.findIndex(item => item.brand === el.brand))
                    .map(el => {
                        return (
                            <Link color={"gray.600"}>{el.fuel}</Link>
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