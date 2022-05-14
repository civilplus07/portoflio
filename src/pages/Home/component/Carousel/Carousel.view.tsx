
import React from "react";
import { useCarouselContext } from "./utils/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImages } from "../../../../utils/Home/CarouselData";
import { Flex, Image } from "@chakra-ui/react";


export default function CarouselView() {
    const { settings } = useCarouselContext();
    return (
        <>
            <Slider {...settings}>
                {CarouselImages.map((row, id) => {
                    return (
                        <Flex key={id} w='100%'>
                            <Image src={row} w='100%' />
                        </Flex>
                    )
                })}
            </Slider>
        </>
    );
}    
