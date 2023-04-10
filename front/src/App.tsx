import { Box, ChakraProvider } from "@chakra-ui/react"
import { LandingPage } from "./pages/landing/landing"
import MotorTheme from "./styles/theme"
import { RoutesMain } from "./routes/routes"
import Global from "./styles/global"




function App() {
  return (
    <>
      <Global />
      <RoutesMain />
    </>
  )
}

export default App
