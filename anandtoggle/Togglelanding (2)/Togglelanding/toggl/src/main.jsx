import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MenuActiveContextProvider } from "./Context/MenuActiveContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <MenuActiveContextProvider>
        <App />
      </MenuActiveContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
