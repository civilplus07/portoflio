
import React from "react";

export const CivilEngeneeringContext = React.createContext(null);

export const useCivilEngeneeringContext = () => {
  const context = React.useContext(CivilEngeneeringContext);
  if (!context)
    throw new Error("useCivilEngeneeringContext can not be used outside it's provider");
  return context;
};
