import { Box, Center, ChakraProvider } from "@chakra-ui/react"
// import { LandingPage } from "./pages/landing/landing"
import MotorTheme from "./styles/theme"
import { CardCars } from "./components/commons/Card"
import { InputComponents, InputComponentsBig } from "./components/commons/Inputs"




function App() {
  

  return (
    <ChakraProvider theme={MotorTheme}>

    <Box display={"flex"}
    justifyContent={"center"} alignItems={"center"}>
      <Center>
      </Center>
    </Box>
    </ChakraProvider>
  )
}

export default App
