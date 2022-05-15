
import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { about_info } from "../../utils/About/About_data";
import AboutBox from "./components/AboutBox";
import { useAboutUsContext } from "./utils/context";

export default function AboutUsView() {
    const { count } = useAboutUsContext();
    return (
        <Flex
            direction={'column'}
            bgImage={'url(/aboutbg.jpeg)'}
            bgRepeat='no-repeat'
            bgSize={'cover'}
            bgAttachment='fixed'
        >
            <Flex
                direction={'column'}
                w='100%'
                p={{ base: '20px', md: '100px' }}
                justifyContent='center'
                alignItems={'center'}
                fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                color='white'
                bgColor={'transparent'}
            >
                <Flex
                    fontWeight='bold'
                >
                    About
                </Flex>
                <Flex
                    fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                >
                    <Flex><a href="/home">Home / </a></Flex>
                    <Flex pl={'5px'}><a href="aboutus">About </a></Flex>
                </Flex>
            </Flex>
            <AboutBox />
        </Flex>
    );

}    
