import { Flex,Image } from "@chakra-ui/react";
import { about_info } from "../../../utils/About/About_data";

export default function AboutBox() {
    return (
        <Flex
            bgColor={'rgb(33, 33, 33)'}
            p={{ base: '20px', md: '100px' }}
            color={'white'}
            direction={{ base: 'column', lg: 'initial' }}
            columnGap={'10px'}
            rowGap='50px'
        >
            <Flex
                w={{ base: '100%', lg: '60%' }}
                justifyContent={'center'}
                direction='column'
                gap='30px'
            >
                <Flex
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    fontWeight='bold'
                >
                    {about_info.header}
                </Flex>
                <Flex
                    fontSize={{ base: '10pt', sm: '15pt', md: '20pt', lg: '25pt' }}
                    fontWeight='bold'
                    h={'5px'}
                    w='50px'
                    bgColor={'white'}
                    my='10px'
                />
                <Flex
                    pr={{ base: 'inherit', lg: '100px' }}
                    fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                    dangerouslySetInnerHTML={{ __html: `${about_info.text}` }}
                />
            </Flex>
            <Flex
                w={{ base: '100%', lg: '40%' }}
                h='auto'
                justifyContent={'center'}
                overflow='hidden'
                borderRadius={'10px'}
            >
                <Image
                    src={about_info.img}
                    w={'100%'}
                />
            </Flex>
        </Flex>
    )
}