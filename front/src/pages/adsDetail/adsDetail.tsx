import { Container, Box, useBreakpointValue, Flex, Image, HStack, Link, Button, IconButton, Text, Stack, SimpleGrid, Grid, useBreakpoint, Heading } from "@chakra-ui/react"
import carImage from "./assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png"
import userImage from "./assets/Ellipse 2.png"
import { adMainInfo } from "./components/mainInfo";
import { AdAsideInfo } from "./components/asideInfo";
import { AdCommentSection } from "./components/commentSection";
import { useContext, useEffect } from "react";
import { AdDetailContext } from "../../context/adsDetail/adsDetailContext";
import { IAdDetail } from "../../context/adsDetail/adsTypes";


const gallery = [carImage, userImage, carImage, userImage, carImage, carImage, carImage, carImage]

const comment = {
    user: {
        name: 'Julio da Silva',
        profile_picture: carImage
    },
    comment_at: '2023-04-03',
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque impedit maiores recusandae temporibus accusamus, labore veniam aperiam voluptates eveniet dolore facere laboriosam eius in ratione omnis! Explicabo quia quisquam impedit?"
}

// const adToShow = {
//     brand: 'Mercedez Benz',
//     model: "A 200 CGI ADVANCE SEDAN",
//     year: '2013',
//     fuel: '',
//     mileage: '0km',
//     color: 'gray',
//     fipe_table_price: '40000',
//     price: 30000,
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     cover_image: carImage,
//     is_active: 'True',
//     user_id: '',
//     user: {
//         profile_image: userImage,
//         name: 'Samuel Leão'
//     },
//     gallery: gallery,
//     comments: [comment, comment, comment, comment]
// }

export const currency = function (number: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(number);
};

export const AdsDetail = () => {
    const { adToShow, setAdToShow } = useContext(AdDetailContext)

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('adToShow')!))
        setAdToShow(JSON.parse(localStorage.getItem('adToShow')!))
    }, [])

    return (
        <>
            <Box bgGradient={'linear(to-b, brand1 0px 500px, gray.100 500px 100%)'} w='100%' paddingBottom={10}>
                <Flex gap={2} width={'100%'} justifyContent={{ md: 'space-between' }} direction={['column', null, 'row']} alignItems={["center", null, 'flex-start']}>
                    {adMainInfo(adToShow)}
                    {AdAsideInfo(adToShow as IAdDetail)}
                    <Box marginLeft={['0%', '0%', '3%', '7%']} marginTop={10} width={['90%', '85%', '57%']} marginRight={0} display={['block', null, 'none']}>
                        {AdCommentSection(adToShow, ['block', null, 'none'])}
                    </Box>
                </Flex >
            </Box >
        </>
    )
}