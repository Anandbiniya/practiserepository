import React, { useState } from "react";
import { createContext } from "react";
export const MenuActiveContext = createContext();
export const MenuActiveContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const handleMegaMenu = () => {
    active ? setActive(false) : setActive(true);
  };
  const handleClose = () => {
    setActive(false);
  };
  return (
    <MenuActiveContext.Provider
      value={[active, setActive, handleMegaMenu, handleClose]}
    >
      {children}
    </MenuActiveContext.Provider>
  );
};
