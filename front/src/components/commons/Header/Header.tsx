import React, { useContext, useState } from "react";
import {
  Flex,
  Image,
  Link,
  HStack,
  Button,
  MenuList,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Avatar,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";
import logoMotors from "../../../assets/png/Motors shop.png";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { CloseIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AccessContext } from "../../../context/access/accessContext";
import ModalEditUser from "../../ModalEditUser";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(AccessContext);
  const token = localStorage.getItem('motors.token')
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const handleLogout = () => {
    localStorage.removeItem("motors.token");
    window.location.href = "/login";
  }
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Flex justifyContent={'space-between'} p={"16px"} alignItems={"center"}>
      <Link href="/">
      <Image
        src={logoMotors}
        alt="Logo do header"
        maxW={"300px"}
        maxH={"30px"}
        />
        </Link>
      {token ? (
        <Flex marginRight={{ base:'0', md: '10'}} gap={5} w={'12%'}>
          <HStack
            display={{ base: "flex", md: "flex" }}
            borderLeft={{base: 'none', md: '1px'}}
            borderLeftColor={"gray.700"}
            spacing={"16px"}
            w={"10%"}
          >
          </HStack>
          <Menu>
            <Stack alignItems={'center'}   direction="row">
              <MenuButton>
                <Avatar display={{ base: "flex", md: "flex" }}  name={user?.name}  />
              </MenuButton>
          </Stack>
            <MenuList>
              <MenuItem><ModalEditUser userId={user?.id}/></MenuItem>
              <MenuItem>Editar endereço</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
            <Text mt={3} display={{ base: "none", md: "flex" }} w={'100%'}>
              {user?.name}
            </Text>
          </Menu>
        </Flex>
      ) : (
        <HStack
          display={{ base: "none", md: "flex" }}
          borderLeft={"2px"}
          borderLeftColor={"gray.200"}
          spacing={"16px"}
          w={"300px"}
          justify={"space-evenly"}
        >
          <Link href="/login">Fazer Login</Link>
          <Button as={Link} href="/register" variant={"outline"}>Cadastrar</Button>
        </HStack>
      )}
      <Menu
        isLazy
        placement={breakpoint === "base" ? "bottom-start" : "bottom-end"}
      >
      {({isOpen})=>(
    <>
      {(!token || (token && isOpen)) && ( 
        <MenuButton display={{ base: "flex", md: "none" }} onClick={handleToggle}>
          {isOpen ? <CloseIcon fontSize={13} /> : <HamburgerIcon />}
        </MenuButton>
      )}
      <MenuList>
        <MenuItem>
          <Link href="/login">Fazer Login</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/register" variant={"outline"}>Cadastrar</Link>
        </MenuItem>
      </MenuList>
    </>
  )}
      </Menu>
    </Flex>
      <Outlet />
      <Footer />
    </>
  );
      }









