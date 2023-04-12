import {
  Flex,
  Image,
  Text,
  Box,
  Stack,
  CardBody,
  Card,
  Avatar,
  Spacer,
} from "@chakra-ui/react";

interface CardProps {
  card:{

    title: string,
    status: boolean,
    brand: boolean,
    image: {
      url: string;
      alt: string;
    },
    text: string,
    mileage: string,
    year: string,
    price: string
  }

  
}

export function CardCars() {

  // const {status,image,text, mileage,year,price,brand,title} = card

  const mockedAd = {
    brand: "Citroën 2",
    model: "C4 LOUNGE Feel 1.6 Turbo Flex Aut.",
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
  }

  return (
      <Card
  minW="320px"
  maxW="350px"
  pointerEvents={!status ? "none" : "auto"}
  _hover={status ? { filter: "brightness(0.9)", cursor: "pointer" } : {}}
  onClick={() => {
    if (status) {
      console.log("Card clicado!")
    }
  }}
>
  {status ? (
    <Box
      position="absolute"
      left={2}
      backgroundColor={"#4529E6"}
      w={16}
      h={6}
      display={"flex"}
      justifyContent={"center"}
      borderRadius={3}
      marginTop={2}
    >
      <Text color={"#FFFFFF"} fontFamily={"inter"}>
        Ativo
      </Text>
    </Box>
  ) : (
    <Box
      position="absolute"
      left={2}
      backgroundColor={"gray"}
      w={16}
      h={6}
      display={"flex"}
      justifyContent={"center"}
      borderRadius={3}
      marginTop={2}
    >
      <Text color={"#FFFFFF"} fontFamily={"inter"}>
        Inativo
      </Text>
    </Box>
  )}
  <Image
    src={mockedAd.cover_image}
    alt={"image.alt"}
    objectFit="cover"
    width="350px"
    height="178.96px"
  />
  <CardBody>
    <Box mt="-3" mb="2">
      <Text
        fontWeight={600}
        fontSize="md"
        fontFamily={"Lexend"}
        marginBottom={2}
      >
        {mockedAd.brand}
      </Text>
      <Text color={"#495057"} fontSize="sm" fontFamily={"inter"}>
        {mockedAd.description}
      </Text>
    </Box>
    <Stack direction="row" alignItems="center">
      <Avatar size="sm" name="João Silva" />
      <Text fontWeight="bold" fontSize="sm">
        João Silva
      </Text>
    </Stack>
    <Flex alignItems="center" justifyContent="start" marginTop={3} gap={2}> 
      <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
        <Text fontWeight="bold" color={" #4529E6"} fontSize="sm">
         {mockedAd.mileage}KM
        </Text>
      </Box>
      <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
        <Text fontWeight="bold" color={" #4529E6"} fontSize="sm">
          {mockedAd.year}
        </Text>
      </Box>
      <Spacer  />
      <Text color="black" fontSize="14" fontWeight="bold" marginLeft={10}>
        {mockedAd.price}
      </Text>
    </Flex>
  </CardBody>
</Card>
);
}
