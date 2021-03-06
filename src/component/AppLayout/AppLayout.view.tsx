
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Footer } from "./components/Footer";
import { useAppLayoutContext } from "./utils/context";

export default function AppLayoutView() {
    const { setShow, show, variants, items, children } = useAppLayoutContext();
    return (
        <Flex direction={'column'}>
            <Flex direction={'column'}>
                <Flex
                    bgColor='white'
                    h='100px'
                    borderBottom={'3px solid #cc372d'}
                    alignItems={'center'}
                    justifyContent='end'
                    fontSize={{ base: '5pt', sm: '5pt', md: '6pt', lg: '6pt', xl: '8pt' }}
                >
                    <Flex
                        mx={'20px'}
                        w='350px'
                        fontSize={{ base: '12pt', sm: '14pt', md: '16pt', lg: '18pt', xl: '20pt' }}
                        fontWeight='bold'
                        letterSpacing={1}
                        direction='column'
                        onClick={()=>window.open('/dashboard','_self')}
                        cursor='pointer'
                    >
                        <Flex>
                        <Text>CIVIL</Text><Text color={'#cc372d'}> Practo</Text>
                        </Flex>
                        <Text pl={'3px'} fontSize={{ base: '6px', sm: '7px', md: '8px', lg: '9px', xl: '10px' }}
                        >Built Knowledge, Built Tomorrow</Text>
                    </Flex>
                    <Flex display={{ base: 'none', lg: 'inherit' }}>
                        {items.map((item, id) => (
                            <Flex fontWeight={'bold'} key={id} color={item.active ? '#e31b6d' : 'black'} p='0 20px' cursor={'pointer'} borderLeft={id == 0 ? "none" : '1px solid'}>
                                <a href={item.href}>{(item.title + "").toUpperCase()}</a>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex
                        fontSize='20pt'
                        w='100%'
                        m='0 20px'
                        justifyContent={'end'}
                        display={{ base: 'inherit', lg: 'none' }}
                    >
                        <Flex
                            justifyContent={'end'}
                            cursor='pointer'
                            onClick={() => setShow(!show)}
                        >
                            <HamburgerIcon />
                        </Flex>
                    </Flex>
                    <Flex
                        as={motion.div}
                        w={'100%'}
                        direction={'column'}
                        position='absolute'
                        fontSize={'12pt'}
                        lineHeight={'11pt'}
                        top='101px'
                        bgColor={'#333'}
                        animate={show ? "open" : "closed"}
                        variants={variants}
                        zIndex={199}
                    >
                        {items.map((item, id) => (
                            <Flex key={id} color={item.active ? '#e31b6d' : 'white'} m='20px 20px' cursor={'pointer'} onClick={() => {
                                setShow(false)
                                window.open(item.href, '_self')
                            }}>
                                <a href={item.href}>{(item.title + "").toUpperCase()}</a>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Flex overflowX={'hidden'} direction={'column'} onClick={(e) => {
                e.stopPropagation()
                setShow(false)
            }}>
                {children}
                <Footer />
            </Flex>
        </Flex >
    );
}    
