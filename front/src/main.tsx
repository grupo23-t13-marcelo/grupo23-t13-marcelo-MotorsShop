import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MotorTheme from "./styles/theme";
import { AccessProvider } from "./context/access/accessContext";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={MotorTheme}>
        <AccessProvider>
          <App />
        </AccessProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
