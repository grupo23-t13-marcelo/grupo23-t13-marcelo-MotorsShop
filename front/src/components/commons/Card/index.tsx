import { EditIcon } from "@chakra-ui/icons";
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
  Button,
} from "@chakra-ui/react";
import { IAdInfo } from "../../../context/access/accessTypes";
import { redirect } from "react-router-dom";

// interface CardProps {
//   card: {
//     title: string;
//     status: boolean;
//     brand: boolean;
//     image: {
//       url: string;
//       alt: string;
//     };
//     text: string;
//     mileage: string;
//     year: string;
//     price: string;
//   };
//   showEditButton: boolean;
//   showPerfil: Boolean;
//   showStatus: Boolean;
// }

interface CardProps {
  id: string;
  card: IAdInfo;
  showPerfil: Boolean;
  showStatus: Boolean;
  showEditButton: boolean;
}


export function CardCars({
  id,
  card,
  showEditButton = true,
  showPerfil = true,
  showStatus = true
}: CardProps) {
  // const { status, image, text, mileage, year, price, brand, title } = card;
  const { is_activated, cover_image, description, mileage, year, price, brand, user, fipe_table_price } = card;
  return (
    <Card
      minW="320px"
      maxW="250px"
      _hover={is_activated ? { cursor: "pointer" } : {}}
      onClick={() => {
        if (status) {
          console.log("Card clicado!");
        }
      }}
    >
      {showStatus && (
        <>
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
              pointerEvents={!status ? "none" : "auto"}
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
        </>
      )}
      <Image
        src={cover_image}
        alt={"imagem de capa do anúncio"}
        objectFit="cover"
        width="350px"
        height="178.96px"
        _hover={{
          filter: "brightness(0.9)",
          cursor: "pointer",
          border: "2px solid blue",
        }}
      />
      <CardBody>
        <Box mt="-3" mb="2">
          <Text
            fontWeight={600}
            fontSize="md"
            fontFamily={"Lexend"}
            marginBottom={2}
          >
            {brand}
          </Text>
          <Text color={"#495057"} fontSize="sm" fontFamily={"inter"}>
            {description}
          </Text>
        </Box>
        {showPerfil && (
          <Stack direction="row" alignItems="center">
            <Avatar size="sm" name={user?.name} />
            <Text fontWeight="bold" fontSize="sm">
              {user?.name}
            </Text>
          </Stack>
        )}
        <Flex alignItems="center" justifyContent="start" marginTop={3} gap={2}>
          <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
            <Text fontWeight="bold" color={" #4529E6"} fontSize="11">
              {mileage}
            </Text>
          </Box>
          <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
            <Text fontWeight="bold" color={" #4529E6"} fontSize="11">
              {year}
            </Text>
          </Box>
          <Spacer />
          <Text color="black" fontSize="11" fontWeight="bold">
            R$ {price},00
          </Text>
        </Flex>

        {showEditButton && (
          <Flex alignItems="center" marginTop={5}>
            <Button
              fontSize={12}
              w={70}
              h={7}
              _hover={{ border: "1px" }}
              color={"black"}
              colorScheme={"blackAlpha"}
              variant={"ghost"}
              cursor={"pointer"}
            >
              Editar
            </Button>
            <Button
              fontSize={12}
              w={100}
              h={7}
              color={"black"}
              colorScheme={"blackAlpha"}
              variant={"ghost"}
              marginLeft={4}
              cursor={"pointer"}
              _hover={{ border: "1px" }}
            >
              Ver detalhes
            </Button>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
}
