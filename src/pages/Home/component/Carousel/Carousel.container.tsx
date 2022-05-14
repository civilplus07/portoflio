
import { Flex } from "@chakra-ui/react";
import React from "react";
import CarouselView from "./Carousel.view";
import { CarouselContext } from "./utils/context";

export default function CarouselContainer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <CarouselContext.Provider
            value={{
                settings
            }}
        >
            <CarouselView />
        </CarouselContext.Provider>
    );
}
