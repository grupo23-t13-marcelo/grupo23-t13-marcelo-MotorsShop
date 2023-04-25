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
import logoMotors from "../../../assets/png/Motors shop.png";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { CloseIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AccessContext } from "../../../context/access/accessContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {user} = useContext(AccessContext);

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
    <Flex justify={"space-between"} p={"16px"} alignItems={"center"}>
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
                <Avatar name={user.name} src="https://bit.ly/broken-link" />
              </MenuButton>
            </Stack>
            <MenuList>
              <MenuItem>Editar usuário</MenuItem>
              <MenuItem>Editar endereço</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
          </Menu>
          <Menu
            isLazy
            placement={breakpoint === "base" ? "bottom-start" : "bottom-end"}
          >
            <MenuButton display={{ base: "none", md: "flex" }}>
              {user.name}
            </MenuButton>
            <MenuList>
              <MenuItem>Editar usuário</MenuItem>
              <MenuItem>Editar endereço</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
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
      <Menu
        isLazy
        placement={breakpoint === "base" ? "bottom-start" : "bottom-end"}
      >
        <MenuButton display={{ base: "flex", md: "none" }} onClick={handleToggle}>
        {isOpen ? <CloseIcon fontSize={13} /> : <HamburgerIcon />}
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link>Fazer Login</Link>
          </MenuItem>
          <MenuItem>
            <Link variant={"outline"}>Cadastrar</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
<Outlet />
<Footer />
    </>
  );
}
