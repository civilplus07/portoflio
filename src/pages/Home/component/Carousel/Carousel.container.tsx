
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import CarouselView from "./Carousel.view";
import { CarouselContext } from "./utils/context";
import { IoChevronBackOutline } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'


export default function CarouselContainer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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

const px = { base: '20px', sm: '30px', md: '40px', lg: '50px' }

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Flex
            onClick={onClick}
            position='absolute'
            top={'50%'}
            transform="translate(-50%,-50%)"
            right={0}
            w={px}
            h={px}
            fontSize={px}
            bgColor='blackAlpha.400'
            color={'white'}
            cursor='pointer'
            zIndex={99}
        >
            <MdNavigateNext />
        </Flex>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (


        <Flex
            onClick={onClick}
            position='absolute'
            top={'50%'}
            transform="translate(-50%,-50%)"
            left={'2%'}
            w={px}
            h={px}
            fontSize={px}
            bgColor='blackAlpha.400'
            color={'white'}
            zIndex={99}
            cursor='pointer'
        >
            <IoChevronBackOutline />
        </Flex>
    );
}