
import { Flex, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Civil_about, civil_file, civil_file_mapper } from "../../utils/Civil/civilData";
import CivilBox from "./component/CivilBox";
import { PdfViewer } from "./component/PdfViewer";
import { useCivilEngeneeringContext } from "./utils/context";

export default function CivilEngeneeringView() {
    const { count } = useCivilEngeneeringContext();
    const [inputFile, setInputFile] = React.useState('Introduction')
    return (
        <>
            <CivilBox />
            <Flex
                p={{ base: '10px', md: '50px' }}
                columnGap={'10px'}
                direction={'column'}
            >
                <Flex direction={'column'}>
                    <Select placeholder='Select option' value={inputFile} onChange={(e) => setInputFile(e.target.value)} w='300px'>
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
