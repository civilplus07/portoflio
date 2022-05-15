import { Flex, Select, Image, Text } from "@chakra-ui/react";
import React from "react";
import { various_img } from "../../utils/Various/Various_data";
import { useVariousExamContext } from "./utils/context";

export default function VariousExamView() {
    const { count } = useVariousExamContext();
    const [inputFile, setInputFile] = React.useState('Various Exams')
    return (
        <>
            <Flex
                bgColor={'rgb(14,46,52)'}
                p={{ base: '10px', md: '50px' }}
                color={'white'}
                columnGap={'10px'}
                rowGap='50px'
                direction={'column'}
            >
                <Flex
                    fontSize={{ base: '25pt', sm: '30pt', md: '35pt', lg: '42pt' }}
                    fontWeight='bold'
                    justifyContent={'center'}
                    alignItems='center'
                    direction='column'
                >
                    <Text>{inputFile}</Text>
                    <Text
                        fontSize={{ base: '18pt', sm: '20pt', md: '23pt', lg: '28pt' }}
                    >
                        ( IES, GATE, SSC JE, ISRO... )
                    </Text>
                </Flex>
                <Select placeholder='Select option' value={inputFile} onChange={(e) => setInputFile(e.target.value)} w='300px'>
                    <option value={'Various Exams'}>Various Exams</option>
                    <option value={'Strategy For Exams'}>Strategy For Exams</option>
                </Select>
                <Flex
                    direction={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                    gap='20px'
                >
                    {various_img[inputFile].map((row, id) => (
                        <Flex
                            direction={'column'}
                            justifyContent='center'
                            alignItems={'center'}
                            key={id}
                        >
                            <Image
                                src={row}
                                w={{ base: '90%', md: '80%' }}
                                h='auto'
                            />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    );
}    
