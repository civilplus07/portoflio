
import React from "react";

export const VariousExamContext = React.createContext(null);

export const useVariousExamContext = () => {
  const context = React.useContext(VariousExamContext);
  if (!context)
    throw new Error("useVariousExamContext can not be used outside it's provider");
  return context;
};
