
import React from "react";

export const PracticalCivilContext = React.createContext(null);

export const usePracticalCivilContext = () => {
  const context = React.useContext(PracticalCivilContext);
  if (!context)
    throw new Error("usePracticalCivilContext can not be used outside it's provider");
  return context;
};
