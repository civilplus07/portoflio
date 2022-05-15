
import { Flex, Text, Image } from "@chakra-ui/react";
import AboutBox from "./components/AboutBox";
import AboutFounder from "./components/AboutFounder";
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
                    fontSize={{ base: '10pt', sm: '11pt', md: '12pt', lg: '15pt' }}
                >
                    <Flex><a href="/dashboard">Home / </a></Flex>
                    <Flex pl={'5px'}><a href="aboutus">About </a></Flex>
                </Flex>
            </Flex>
            <AboutBox />
            <AboutFounder/>
        </Flex>
    );

}    
