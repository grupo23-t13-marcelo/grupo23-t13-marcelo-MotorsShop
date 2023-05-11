import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import footerMotor from "../../../assets/png/Property 1=Variant2.png";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function Footer() {
  const height = useBreakpointValue({ base: "sm", md: "20" });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex bg={"gray.900"} justify={"space-between"} align={"center"} p={"38px"} height={height} direction={{base: "column", md:"row"}}>
      <Image src={footerMotor} w={"210px"} h={"32px"} />
      <HStack
        w={"60%"}
        height={{base: "60%"}}
        color={"whiteFixed"}
        justify={"space-between"}
        flexDir={{base: "column", md:"row"}}
        p={"9px"}
      >
        <Text>© 2022 - Todos os direitos reservados.</Text>
        <Button
          bg={"gray.800"}
          w={"53px"}
          h={"50px"}
          borderRadius={"4px"}
          onClick={handleScrollTop}
          _hover={{bg: "gray.700"}}
        >
          <ArrowUpIcon />
        </Button>
      </HStack>
    </Flex>
  );
}
