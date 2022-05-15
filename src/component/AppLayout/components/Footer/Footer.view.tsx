
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { footer_address, footer_info, footer_social, items } from "../../../../utils/AppLayout/AppItem";
import { useFooterContext } from "./utils/context";
import { BsDot } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import axios from "axios";

export default function FooterView() {
    const { count } = useFooterContext();
    return (
        <Flex
            bgColor={'black'}
            p={{ base: '20px', md: '40px' }}
            w='100%'
            justifyContent={'space-between'}
            direction='column'
            alignItems={'center'}
            color='white'
            fontSize={{ base: '9pt', sm: '11pt', md: '12pt' }}
            gap='40px'
            lineHeight={{ base: '10pt', sm: '12pt', md: '16pt', lg: '18pt' }}
        >
            <Flex
                justifyContent={'space-between'}
                rowGap={'20px'}
            >
                <Grid
                    m={{ base: '40px 0 30px 0', sm: '60px 0 35px 0', md: '80px 0 50px 0', lg: '100px 0 70px 0' }}
                    w='100%'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap={6}
                >
                    <GridItem>
                        <Flex direction={'column'} mx='40px'>
                            <Flex w='200px' mb={'40px'} fontWeight='bold' fontSize={{ base: '15pt', sm: '30pt', md: '32pt' }}>
                                CIVIL <span style={{ color: '#cc372d' }}>Practo</span>
                            </Flex>
                            <Flex
                            >
                                <Text>
                                    {footer_info.text}
                                </Text>
                            </Flex>
                        </Flex>
                    </GridItem>

                    <GridItem>
                        <Flex direction={'column'} mx='40px'>
                            <Flex w='200px' mb={'40px'} fontWeight='bold' fontSize={{ base: '11pt', sm: '13pt', md: '15pt' }}>
                                Quick Links
                            </Flex>
                            <Flex direction={'column'}>
                                {items.map((item, id) => (
                                    <Flex fontWeight={'bold'} key={id} p='0 20px' cursor={'pointer'} alignItems='center' w='300px'>
                                        <BsDot />
                                        <a href={item.href}>{(item.title + "")}</a>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </GridItem>

                    <GridItem>
                        <Flex direction={'column'} mx='40px'>
                            <Flex w='200px' mb={'40px'} fontWeight='bold' fontSize={{ base: '11pt', sm: '13pt', md: '15pt' }}>
                                Address Details
                            </Flex>
                            <Flex direction={'column'} gap='20px'>
                                <Flex alignItems={'center'} gap='20px' >
                                    <Flex>
                                        <GoLocation />
                                    </Flex>
                                    <Flex direction={'column'} w='200px'>
                                        <Text>{footer_address.address.street_no}, {footer_address.address.colony}</Text>
                                        <Text>{footer_address.address.city}, {footer_address.address.pincode}</Text>
                                    </Flex>
                                </Flex>
                                <Flex alignItems={'center'} gap='20px' >
                                    <Flex>
                                        <AiOutlineMail />
                                    </Flex>
                                    <Flex direction={'column'} w='200px'>
                                        {footer_address.email}
                                    </Flex>
                                </Flex>
                                <Flex alignItems={'center'} gap='20px' >
                                    <Flex>
                                        <AiOutlinePhone />
                                    </Flex>
                                    <Flex direction={'column'} w='200px'>
                                        {footer_address.phone}
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>

                    <GridItem>
                        <Flex direction={'column'} mx='40px'>
                            <Flex w='200px' mb={'40px'} fontWeight='bold' fontSize={{ base: '11pt', sm: '13pt', md: '15pt' }}>
                                Social
                            </Flex>
                            <Flex alignItems={'center'} gap='20px'>
                                {footer_social.map((row, id) => (
                                    <Flex
                                        fontSize={{ base: '11pt', sm: '13pt', md: '15pt' }}
                                        cursor='pointer'
                                        onClick={() => {
                                            if (row.link = 'whatsapp') {
                                                axios.get('https://api.whatsapp.com/send?phone=+917665882883')
                                            }
                                            else
                                                window.open(row.link)
                                        }}
                                        key={id} color={'white'}>
                                        <row.img />
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </GridItem>

                </Grid>
            </Flex>
            <Flex
                fontSize={{ base: '8pt', sm: '9pt', md: '10pt' }}
            >
                © 2022 by CivilPRACTO
            </Flex>
        </Flex>
    )
}    
