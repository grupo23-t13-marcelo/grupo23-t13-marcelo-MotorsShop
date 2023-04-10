
import { Box, ChakraProvider } from "@chakra-ui/react"
import HomePage from "./pages/home/home"
import { LandingPage } from "./pages/landing/landing"


import { Box, Center, ChakraProvider } from "@chakra-ui/react"

import MotorTheme from "./styles/theme"

import { RoutesMain } from "./routes/routes"
import Global from "./styles/global"

import { CardCars } from "./components/commons/Card"




import { Box, ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <>
      <Global />
      <RoutesMain />
    </>
  )


import MotorTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={MotorTheme}>

      <Box>
        <LandingPage/>
      </Box>



    <Box display={"flex"}
    justifyContent={"center"} alignItems={"center"}>
      {/* <LandingPage/> */}
      <Center>
        
      <CardCars/>
      </Center>
    </Box>

      <Box></Box>


    </ChakraProvider>
  );

}

export default App;
