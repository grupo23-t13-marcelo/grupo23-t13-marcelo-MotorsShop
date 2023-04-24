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
  useBreakpointValue
} from "@chakra-ui/react";
import logoMotors from "../../../assets/png/Motors shop.png"; // substitua com o caminho correto para a imagem do logo
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { EditIcon } from "@chakra-ui/icons";
import { AccessContext } from "../../../context/access/accessContext";

export const Header = () => {
  const {user} = useContext(AccessContext)

  const breakpoint = useBreakpointValue({ base: "base", md: "md" });



  return (
    <>
      <Flex justify={"space-between"} p={"16px"}  alignItems={"center"}
>
        <Image
          src={logoMotors}
          alt="Logo do header"
          maxW={"300px"}
          maxH={"30px"}
        />
        {user?.name ? (
          <Flex gap={2}>
            <HStack
              display={{ base: "none", md: "flex" }}
              borderLeft={"2px"}
              borderLeftColor={"gray.200"}
              spacing={"16px"}
              w={"40px"}
              justify={"space-evenly"}
            ></HStack>
            <Menu>
            <Stack direction="row">
                <MenuButton>
                  <Avatar
                    name={user.name}
                    src="https://bit.ly/broken-link"
                  />
                </MenuButton>
              </Stack>
              <MenuList>
                <MenuItem>Editar usuário</MenuItem>
                <MenuItem>Editar endereço</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy placement={breakpoint === "base" ? "bottom-start" : "bottom-end"}>
              
              <MenuButton
                display={breakpoint === "md" ? "flex" : "none"}
              >
                {user.name}
              </MenuButton>
              <MenuList>
                <MenuItem>Editar usuário</MenuItem>
                <MenuItem>Editar endereço</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
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
            <Link>Fazer Login</Link>
            <Button variant={"outline"}>Cadastrar</Button>
          </HStack>
        )}
      </Flex>
      <Outlet />
      <Footer />
    </>
  );
}