
import { Box, Center, ChakraProvider } from "@chakra-ui/react"
import MotorTheme from "./styles/theme"
import { RoutesMain } from "./routes/routes"
import Global from "./styles/global"
import { CardCars } from "./components/commons/Card"


function App() {
  return (
    <>
      <Global />
      <RoutesMain />
    </>
  );

}

export default App