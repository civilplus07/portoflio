
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Iscode_about, Iscode_export_data } from "../../utils/IsCode/IsCodeData";
import { useIscodeContext } from "./utils/context";
import { FaFileDownload } from 'react-icons/fa'

export default function IscodeView() {
    const { count } = useIscodeContext();
    return (
        <>
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
                {Iscode_export_data.map((row, id) => (
                    <Flex
                        key={id}
                        bgColor={row.bgColor}
                        p={{ base: '10px', md: '50px' }}
                        color={row.textColor}
                        columnGap={'10px'}
                        rowGap='50px'
                        direction={{ base: 'column', md: 'row' }}
                    >
                        <Flex
                            justifyContent={'center'}
                            direction='column'
                            gap='10px'
                            w={{ base: '95%', md: '70%' }}
                        >
                            <Flex
                                fontSize={{ base: '10pt', sm: '15pt', md: '20pt', lg: '25pt' }}
                                fontWeight='bold'
                            >
                                {row.header}
                            </Flex>
                            <Flex
                                fontSize={{ base: '10pt', sm: '15pt', md: '20pt', lg: '25pt' }}
                                fontWeight='bold'
                                h={'5px'}
                                w='50px'
                                bgColor={'gray.600'}
                                my='10px'
                            />
                            <Text
                                noOfLines={4}
                                fontSize={{ base: '11pt', sm: '12pt', md: '13pt', lg: '14pt' }}
                                dangerouslySetInnerHTML={{ __html: `${row.text}` }}
                            />
                        </Flex>
                        <Flex
                            w={{ base: '50%', md: '30%' }}
                            justifyContent='center'
                            alignItems={'center'}
                        >
                            <Flex
                                cursor='pointer'
                                onClick={() => {
                                    window.open(row.file)
                                }}
                                _hover={{
                                    color: 'red',
                                    transition: "1s"
                                }}
                                direction='column'
                                justifyContent='center'
                                alignItems={'center'}
                                fontSize={{ base: '20pt', sm: '25pt', md: '30pt', lg: '40pt' }}
                            >
                                <Image
                                    src={row.img}
                                    w='80%'
                                    opacity={'0.5'}
                                />
                                <Flex position={'absolute'}>
                                <FaFileDownload />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}

            </Flex>

        </>
    );
}    
