
import React from "react";

export const IscodeContext = React.createContext(null);

export const useIscodeContext = () => {
  const context = React.useContext(IscodeContext);
  if (!context)
    throw new Error("useIscodeContext can not be used outside it's provider");
  return context;
};
