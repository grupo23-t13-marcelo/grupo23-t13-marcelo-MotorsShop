import { useState } from "react";
import {
  Flex,
  Image,
  HStack,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoMotors from "../../../assets/png/Motors shop.png";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
      </Flex>
      {isMenuOpen && (
        <Flex
          direction={"column"}
          boxShadow={"md"}
          display={{ base: "flex", md: "none" }}
          w={"100%"}
          p={"16px"}
          bg={"white"}
          pos={"absolute"}
          top={"3%"}
          zIndex={1}
          gap={"30px"}
        >
          <Button variant={"outline-1"}>Fazer Login</Button>
          <Button variant={"outline-1"}>Cadastrar</Button>
        </Flex>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
