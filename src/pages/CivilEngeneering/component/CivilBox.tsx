import { Flex, Text, Image } from "@chakra-ui/react";
import { Civil_about } from "../../../utils/Civil/civilData";

export default function CivilBox() {
    return (
        <Flex
            bgColor={'#ff6666'}
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
                        onClick={() => window.open('/civilengeneering', "_self")}
                        cursor='pointer'
                    >
                        {Civil_about.header}
                    </Flex>
                    <Flex
                        fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                    >
                        {Civil_about.text}
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
                        src="/civilimg.jpeg"
                        w={'100%'}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}