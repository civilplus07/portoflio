
import React from "react";

export const CarouselContext = React.createContext(null);

export const useCarouselContext = () => {
  const context = React.useContext(CarouselContext);
  if (!context)
    throw new Error("useCarouselContext can not be used outside it's provider");
  return context;
};
