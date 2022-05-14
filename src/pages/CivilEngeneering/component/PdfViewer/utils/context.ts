
import React from "react";

export const PdfViewerContext = React.createContext(null);

export const usePdfViewerContext = () => {
  const context = React.useContext(PdfViewerContext);
  if (!context)
    throw new Error("usePdfViewerContext can not be used outside it's provider");
  return context;
};
