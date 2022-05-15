import { Flex, Image } from "@chakra-ui/react";
import { about_founder } from "../../../utils/About/About_data";

export default function AboutFounder() {
    return (
        <>
            <Flex
                direction={{ base: 'column', lg: 'initial' }}
                bgColor='white'
            >
                <Flex
                    w={{ base: '100%', lg: '40%' }}
                    h='auto'
                >
                    <Image
                        src={about_founder.img}
                        w={'100%'}
                    />
                </Flex>
                <Flex
                    w={{ base: '100%', lg: '60%' }}
                    direction='column'
                    p={{ base: '20px', md: '100px' }}
                >
                    <Flex
                        fontSize={{ base: '20pt', sm: '25pt', md: '30pt', lg: '42pt' }}
                        fontWeight='bold'
                        mb={'50px'}
                    >
                        {about_founder.name}
                    </Flex>
                    <Flex
                        pr={{ base: 'inherit', lg: '100px' }}
                        fontSize={{ base: '11pt', sm: '12pt', md: '13pt', lg: '15pt' }}
                        dangerouslySetInnerHTML={{ __html: `${about_founder.text}` }}
                    />
                </Flex>

            </Flex>
        </>
    )
}