import { Box, ChakraProvider } from "@chakra-ui/react";

import MotorTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={MotorTheme}>
      <Box></Box>
    </ChakraProvider>
  );
}

export default App;
