
import { Box, ChakraProvider, Center } from "@chakra-ui/react"
import HomePage from "./pages/home/home"
import { LandingPage } from "./pages/landing/landing"
import MotorTheme from "./styles/theme"
import { RoutesMain } from "./routes/routes"
import Global from "./styles/global"


function App() {
  return (
    <>
      <RoutesMain />
    </>
  )

}

export default App;
