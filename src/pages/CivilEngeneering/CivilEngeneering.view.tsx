
import { Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Civil_about, civil_file, civil_file_mapper } from "../../utils/Civil/civilData";
import { PdfViewer } from "./component/PdfViewer";
import { useCivilEngeneeringContext } from "./utils/context";

export default function CivilEngeneeringView() {
    const { count } = useCivilEngeneeringContext();
    const [inputFile, setInputFile] = React.useState('CE-404_1 Introduction')
    return (
        <>
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
                            src="/iscode.png"
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                <Flex direction={'column'}>
                    <Select placeholder='Select option' value={inputFile} onChange={(e) => setInputFile(e.target.value)} w='500px'>
                        {civil_file.map((row, id) => (
                            <option key={id} value={row.title}>{row.title}</option>
                        ))}
                    </Select>
                    <Flex justifyContent={'center'} mt='20px' mb={'30px'} fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}>
                        {inputFile}
                    </Flex>
                    {civil_file_mapper[inputFile] &&
                        <PdfViewer file={civil_file_mapper[inputFile]} />
                    }
                    <Flex
                        display={{ base: 'inherit', lg: 'none' }}
                        justifyContent='center'
                    >
                        <Flex
                            cursor='pointer'
                            onClick={() => {
                                window.open(civil_file_mapper[inputFile])
                            }}
                            direction='column'
                            justifyContent='center'
                            alignItems={'center'}
                            fontSize={{ base: '20pt', sm: '25pt', md: '30pt', lg: '40pt' }}
                        >
                            <FaFileDownload />
                            <Text
                                fontSize={{ base: '11pt', sm: '12pt', md: '13pt', lg: '14pt' }}
                            >
                                Download PDF
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
