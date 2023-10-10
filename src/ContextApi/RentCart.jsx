import React from "react";
import { useState } from "react";
import { createContext } from "react";
//---------------------
const Rentcontext = createContext();
const RentCartProvider = ({ children }) => {
  const [num, Setnum] = useState("");
  const Rentnum = (val) => {
    Setnum(val);
  };
  return (
    <Rentcontext.Provider value={{ num, Rentnum }}>
      {children}
    </Rentcontext.Provider>
  );
};
//-------------------------
export { RentCartProvider, Rentcontext };
