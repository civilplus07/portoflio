
import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { tender_img } from "../../utils/Tender/Tender_data";
import { useTenderContext } from "./utils/context";

export default function TenderView() {
    const { count } = useTenderContext();
    const [page, setPage] = React.useState(0)
    return (
        <Flex
            bgColor={'#d3f5f4'}
            p={{ base: '10px', md: '50px' }}
            color={'black'}
            columnGap={'10px'}
            rowGap='20px'
            justifyContent='center'
            alignItems={'center'}
            direction={'column'}
        >
            <Flex
                fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                fontWeight='bold'
                justifyContent={'center'}
                alignItems='center'
                direction='column'
            >
                <Text>Tender Obligation</Text>
                {/* <Text
                    fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                >Build Today for better tommorow</Text> */}
            </Flex>
            {tender_img.map((row, id) => (
                <Flex
                    direction={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                    key={id}
                    display={{ base: 'inherit', md: 'none' }}
                >
                    <Image
                        src={row}
                        w={{ base: '90%', md: '80%' }}
                        h='auto'
                    />
                </Flex>
            ))}
            <Flex
                display={{ base: 'none', md: 'inherit' }}
            >
                <Flex
                    cursor={'pointer'}
                    onClick={() => {
                        if (page > 0)
                            setPage(page - 1)
                    }}
                    color={'white'}
                    justifyContent={'center'}
                    alignItems='center'
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    display={page == 0 ? 'none' : 'inherit'}
                >
                    <GrFormPrevious />
                </Flex>
                <Flex
                    direction={'column'}
                    justifyContent='center'
                    alignItems={'center'}
                >
                    <Image
                        src={tender_img[page]}
                        w={{ base: '90%', md: '80%' }}
                        h='auto'
                    />
                </Flex>
                <Flex
                    cursor={'pointer'}
                    onClick={() => setPage(page + 1)}
                    color={'white'}
                    justifyContent={'center'}
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    alignItems='center'
                    display={page == tender_img.length - 1 ? 'none' : 'inherit'}
                >
                    <GrFormNext />
                </Flex>
            </Flex>
        </Flex>
    )
}    
