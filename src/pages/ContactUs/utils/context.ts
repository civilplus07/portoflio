
import React from "react";

export const ContactUsContext = React.createContext(null);

export const useContactUsContext = () => {
  const context = React.useContext(ContactUsContext);
  if (!context)
    throw new Error("useContactUsContext can not be used outside it's provider");
  return context;
};
