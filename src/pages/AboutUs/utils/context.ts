
import React from "react";

export const AboutUsContext = React.createContext(null);

export const useAboutUsContext = () => {
  const context = React.useContext(AboutUsContext);
  if (!context)
    throw new Error("useAboutUsContext can not be used outside it's provider");
  return context;
};
