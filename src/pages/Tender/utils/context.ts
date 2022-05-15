
import React from "react";

export const TenderContext = React.createContext(null);

export const useTenderContext = () => {
  const context = React.useContext(TenderContext);
  if (!context)
    throw new Error("useTenderContext can not be used outside it's provider");
  return context;
};
