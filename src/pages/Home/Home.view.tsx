
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Iscode_about } from "../../utils/IsCode/IsCodeData";
import CivilBox from "../CivilEngeneering/component/CivilBox";
import ArchitectureBox from "./component/ArchitectureBox";
import { Carousel } from "./component/Carousel";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <>
            <Carousel />
            <ArchitectureBox />
            <Flex
                bgColor={'rgb(19,28,60)'}
                p={{ base: '20px', md: '100px' }}
                color={'white'}
                columnGap={'10px'}
                direction={'column'}
            >
                <Flex
                    color={'white'}
                    direction={{ base: 'column', lg: 'initial' }}
                    columnGap={'10px'}
                    rowGap='50px'
                    mb={'50px'}
                >
                    <Flex
                        w={{ base: '100%', lg: '60%' }}
                        justifyContent={'center'}
                        direction='column'
                        gap='10px'
                    >
                        <Flex
                            fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                            fontWeight='bold'
                            onClick={() => window.open('/iscode', "_self")}
                            cursor='pointer'
                        >
                            {Iscode_about.header}
                        </Flex>
                        <Flex
                            fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                        >
                            {Iscode_about.text}
                        </Flex>
                    </Flex>
                    <Flex
                        w={{ base: '100%', lg: '40%' }}
                        h='auto'
                        justifyContent={'center'}
                        overflow='hidden'
                        borderRadius={'10px'}
                    >
                        <Image
                            src={Iscode_about.img}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <CivilBox />
        </>
    );
}    
