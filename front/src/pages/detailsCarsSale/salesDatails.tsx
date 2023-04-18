import {
  Box,
  Flex,
  Button,
  Text,
  UnorderedList,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { CardCars } from "../../components/commons/Card";
import mock from "../../../componentes-cards.mock.json";

export const CarsSalesDetail = () => {
  const cards = mock.cards_cars;

  return (
    <>
      <Box
        bgGradient={"linear(to-b, brand1 0px 400px, gray.100 00px 100%)"}
        w="100%"
        paddingBottom={10}
        gap={5}
      >
        <Flex
          gap={2}
          width={"100%"}
          justifyContent={"center"}
          direction={["column", null, "row"]}
          alignItems={["center", null, "flex-start"]}
        >
          <Box
            marginTop={10}
            width={["90%",null ,"75%",null ,"60%" ]}
            marginRight={0}
            alignItems={"center"}
          >
            <Flex
              direction={"column"}
              w={"100%"}
              gap={10}
              justifyContent={"center"}
            >
              <Box
                backgroundColor={"white"}
                h="350"
                width={"100%"}
                borderRadius={5}
                p={7}
                display={"flex"}
                flexDirection={"column"}
                gap={7}
                justifyContent={"center"}
                marginTop={75}
              >
                <Stack direction="row" alignItems="center">
                  <Avatar size="xl" name="Samuel Leao" />
                </Stack>
                <Box
                  display={"flex"}
                  flexDirection={["column", "row"]}
                  justifyContent={"space-between"}
                  alignItems={["flex-start", "center"]}
                  gap={5}
                >
                  <Box display={"flex"} gap={3} alignItems={"center"}>
                    <Text fontFamily={"Lexend"} fontWeight={600}>
                      Samuel Leao
                    </Text>
                    <Button
                      h={"30px"}
                      backgroundColor={"brand4"}
                      color={"brand2"}
                      size="sm"
                      cursor={"unset"}
                    >
                      Anunciante
                    </Button>
                  </Box>
                </Box>
                <Text>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
                <Button
              fontSize={12}
              w={120}
              h={10}
              border={"2px"}
              color={"brand1"}
              cursor={"pointer"}
              borderColor={"brand1"}
              backgroundColor={"whiteFixed"}
            >
              Criar anuncio
            </Button>
              </Box>

              <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row-reverse" }}
                width={{ base: "auto", md: "100%" }}
                maxWidth={"1600px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <UnorderedList
                  paddingRight={{ base: "5px", md: "0px" }}
                  display="flex"
                  flexWrap={{ base: "nowrap", md: "wrap" }}
                  overflowX={{ base: "auto" }}
                  gap={{ base: "25px", md: "20px" }}
                  listStyleType="none"
                  flex={{ base: "auto", md: 1 }}
                  maxWidth={{ base: "auto", md: "auto" }}
                  style={{ width: "100%", paddingRight: "5px" }}
                  justifyContent={"center"}
                >
                  {cards.map((card, index) => (
                    <CardCars
                      key={index}
                      card={card}
                      showEditButton={true}
                      showPerfil={false}
                      showStatus={false}
                    />
                  ))}
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "4px", md: "20px" }}
          margin={"15px 0"}
        >
          <Flex gap={"5px"}>
            <Text color={"brand1"}>1</Text>
            <Text color={"gray.600"}>de</Text>
            <Text color={"gray.600"}>2</Text>
          </Flex>
          <Button
            display={"flex"}
            width={"100px"}
            backgroundColor={"transparent"}
            color={"brand1"}
          >
            Seguinte &gt;
          </Button>
        </Box>
      </Box>
    </>
  );
};
