
import React from "react";

export const HouseCraftingContext = React.createContext(null);

export const useHouseCraftingContext = () => {
  const context = React.useContext(HouseCraftingContext);
  if (!context)
    throw new Error("useHouseCraftingContext can not be used outside it's provider");
  return context;
};
