import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ModalContextProvider } from "@chakra-ui/react";
import MotorTheme from "./styles/theme";
import { AccessProvider } from "./context/access/accessContext";
import { AdDetailProvider } from "./context/adsDetail/adsDetailContext";
import { ModalDashboardProvider } from "./context/modalDashboard/modalDashboard";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={MotorTheme}>
        <AccessProvider>
          <ModalDashboardProvider>
            <AdDetailProvider>
              <App />
            </AdDetailProvider>
          </ModalDashboardProvider>
        </AccessProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
