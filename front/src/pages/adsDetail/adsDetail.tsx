import { Container, Box, useBreakpointValue, Flex, Image, HStack, Link, Button, IconButton, Text, Stack, SimpleGrid, Grid, useBreakpoint, Heading } from "@chakra-ui/react"
import { ArrowUpIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoMotors from "./assets/Motorsshop.png";
import footerMotor from "./assets/Property1=Variant2.png"
import carImage from "./assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
import userImage from "./assets/Ellipse 2.png"
import { useState } from "react";
import { adMainInfo } from "./components/mainInfo";
import { AdAsideInfo } from "./components/asideInfo";
import { AdCommentSection } from "./components/commentSection";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Flex justify={"space-between"} p={"16px"}>
            <Image
                src={logoMotors}
                alt="Logo do header"
                maxW={"300px"}
                maxH={"30px"}
            />
            <HStack
                display={{ base: "none", md: "flex" }}
                borderLeft={"2px"}
                borderLeftColor={"gray.200"}
                spacing={"16px"}
                w={"300px"}
                justify={"space-evenly"}
            >
                <Link>Fazer Login</Link>
                <Button variant={"outline-1"}>Cadastrar</Button>
            </HStack>
            <IconButton
                aria-label="Abrir menu"
                icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                display={{ base: "flex", md: "none" }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant={"outline"}
            />
            {isMenuOpen && (
                <Flex
                    direction={"column"}
                    boxShadow={"md"}
                    display={{ base: "flex", md: "none" }}
                    w={"100%"}
                    p={"16px"}
                    bg={"white"}
                    pos={"absolute"}
                    top={"100%"}
                    left={"0"}
                    gap={"30px"}
                >
                    <Button variant={"outline-1"}>Fazer Login</Button>
                    <Button variant={"outline-1"} w={"100%"} alignSelf={"center"}>
                        Cadastrar
                    </Button>
                </Flex>
            )}


        </Flex>
    );
}

export function Footer() {
    const height = useBreakpointValue({ base: "sm", md: "20" });

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Flex bg={"gray.900"} justify={"space-between"} align={"center"} p={"16px"} height={height} direction={{ base: "column", md: "row" }}>
            <Image src={footerMotor} w={"150px"} h={"26px"} />
            <HStack
                w={"60%"}
                height={{ base: "60%" }}
                color={"gray.whiteFixed"}
                justify={"space-between"}
                flexDir={{ base: "column", md: "row" }}
                p={"8px"}
            >
                <Text>© 2022 - Todos os direitos reservados.</Text>
                <Button
                    bg={"gray.800"}
                    w={"53px"}
                    h={"50px"}
                    borderRadius={"4px"}
                    onClick={handleScrollTop}
                    _hover={{ bg: "gray.700" }}
                >
                    <ArrowUpIcon />
                </Button>
            </HStack>
        </Flex>
    );
}

const gallery = [carImage, carImage, carImage, carImage, carImage, carImage, carImage, carImage]

const comment = {
    user: {
        name: 'Julio da Silva',
        profile_picture: carImage
    },
    comment_at: '2023-04-03',
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque impedit maiores recusandae temporibus accusamus, labore veniam aperiam voluptates eveniet dolore facere laboriosam eius in ratione omnis! Explicabo quia quisquam impedit?"
}

const adToShow = {
    brand: 'Mercedez Benz',
    model: "A 200 CGI ADVANCE SEDAN",
    year: '2013',
    fuel: '',
    mileage: '0km',
    color: 'gray',
    fipe_table_price: '40000',
    price: 30000,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cover_image: carImage,
    is_active: 'True',
    user_id: '',
    user: {
        profile_image: userImage,
        name: 'Samuel Leão'
    },
    gallery: gallery,
    comments: [comment, comment, comment, comment]
}

export const currency = function (number: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(number);
};

export const AdsDetail = () => {
    return (
        <>
            <Header></Header>
            <Box bgGradient={'linear(to-b, brand1 0px 500px, gray.100 500px 100%)'} w='100%' paddingBottom={10}>
                <Flex gap={2} width={'100%'} justifyContent={{ md: 'space-between' }} direction={['column', null, 'row']} alignItems={["center", null, 'flex-start']}>
                    {adMainInfo(adToShow)}
                    {AdAsideInfo(adToShow)}
                    <Box marginLeft={['0%', '0%', '3%', '7%']} marginTop={10} width={['90%', '85%', '57%']} marginRight={0} display={['block', null, 'none']}>
                        {AdCommentSection(adToShow, ['block', null, 'none'])}
                    </Box>
                </Flex >
            </Box >
            <Footer />
        </>
    )
}

