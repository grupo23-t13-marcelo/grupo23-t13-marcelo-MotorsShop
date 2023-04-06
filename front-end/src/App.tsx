import { Box, ChakraProvider } from "@chakra-ui/react"
import { LandingPage } from "./pages/landing/landing"
import MotorTheme from "./styles/theme"




function App() {
  

  return (
    <ChakraProvider theme={MotorTheme}>

    <Box>
   <LandingPage/>
    </Box>
    </ChakraProvider>
  )
}

export default App
