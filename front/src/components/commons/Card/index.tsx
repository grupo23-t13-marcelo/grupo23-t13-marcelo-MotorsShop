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
import { useContext } from "react";
import { AccessContext } from "../../../context/access/accessContext";
import brandPrice from "../../../assets/png/price5.png"
import { AdDetailContext } from "../../../context/adsDetail/adsDetailContext";
import { ModalDashboardContext } from "../../../context/modalDashboard/modalDashboard";
interface CardProps {
  id: string;
  card: IAdInfo;
  showPerfil: Boolean;
  showStatus: Boolean;
  showEditButton: boolean;
  showBrands: Boolean

}


export function CardCars({
  // id,
  card,
  showEditButton = true,
  showPerfil = true,
  showStatus = true,
  showBrands= true
}: CardProps) {

  const { is_activated, cover_image, description, mileage, year, price, brand, user, fipe_table_price, id } = card;
  const { editPlaceholderSelection } = useContext(ModalDashboardContext)

  const {userRender} = useContext(AccessContext)
  const {setInputsGallery, setModalEditAd, setEditAd} = useContext(AdDetailContext)
  const showBrand = parseInt(price) < (parseInt(fipe_table_price) * 0.05) || parseInt(price) < parseInt(fipe_table_price);
  return (
    <Card
      minW="320px"
      maxW="250px"
      _hover={is_activated ? { cursor: "pointer" } : {}}
    
    >
      {showStatus && (
        <>
          {is_activated ? (
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
        height="190.96px"
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
            {showBrands && (
              <>
            {showBrand && (
        <Box position="absolute" top="-25px" right="-20px">
          <Image src={brandPrice} alt="Warning" width="90px" height="90px" />
        </Box>
      )}
              </>
            )}
          </Text>
          <Text color={"#495057"} fontSize="sm" fontFamily={"inter"} h={10}>
          {description.length > 50 ? description.slice(0, 50).charAt(0).toUpperCase() + description.slice(1, 74).toLowerCase() + "..." : description.charAt(0).toUpperCase() + description.slice(1)}
          </Text>
        </Box>
        {showPerfil && (
          <Stack direction="row" alignItems="center">
            <Avatar size="sm" name={user? user?.name : userRender?.name} />
            <Text fontWeight="bold" fontSize="sm">
              {user? user?.name : userRender?.name}
            </Text>
          </Stack>
        )}
        <Flex alignItems="center" justifyContent="start" marginTop={3} gap={2}>
          <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
            <Text fontWeight="bold" color={" #4529E6"} fontSize="11">
              {mileage}KM
            </Text>
          </Box>
          <Box backgroundColor="#EDEAFD" p="1" borderRadius="md">
            <Text fontWeight="bold" color={" #4529E6"} fontSize="11">
              {year}
            </Text>
          </Box>
          <Spacer />
          <Text color="black" fontSize="11" fontWeight="bold">
            R$ {price}
          </Text>
        </Flex>

        {showEditButton && (
          <Flex alignItems="center" marginTop={5}>
            <Button
              onClick={() => (setEditAd(card), editPlaceholderSelection({brand: card.brand}),setModalEditAd(true))}
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

