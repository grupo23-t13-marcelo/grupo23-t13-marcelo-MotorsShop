
import { Box, Center, ChakraProvider } from "@chakra-ui/react"
import MotorTheme from "./styles/theme"
import { CardCars } from "./components/commons/Card"



import { Box, ChakraProvider } from "@chakra-ui/react";


import MotorTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={MotorTheme}>


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
