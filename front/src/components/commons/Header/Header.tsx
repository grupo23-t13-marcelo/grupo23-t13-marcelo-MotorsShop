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
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Link as LinkDom } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <Flex justify={"space-between"} p={"16px"}>
        <Image
          src={logoMotors}
          alt="Logo do header"
          maxW={"300px"}
          maxH={"30px"}
          onClick={() => navigate('/')}
          cursor={'pointer'}
        />
        <HStack
          display={{ base: "none", md: "flex" }}
          borderLeft={"2px"}
          borderLeftColor={"gray.200"}
          spacing={"16px"}
          w={"300px"}
          justify={"space-evenly"}
        >
          <Link href="/login">Fazer Login</Link>
         <Link href="/register">
            <Button variant={"outline-1"}>Cadastrar</Button>
          </Link>
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
         top={"70px"}
          zIndex={9999}
          gap={"30px"}

        > 
          <LinkDom to='/login'>
            <Button  variant={"outline-1"}>Fazer Login</Button>
          </LinkDom>
          
            <LinkDom to='/register'>
              <Button  w={"100%"} variant={"outline-1"}>Cadastrar</Button>
            </LinkDom>
        </Flex>
      )}
      <Outlet />
      <Footer />
    </>
  );
}
