
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useAppLayoutContext } from "./utils/context";

export default function AppLayoutView() {
    const { setShow, show, variants, items, children } = useAppLayoutContext();
    return (
        <Flex direction={'column'}>
            <Flex direction={'column'}>
                <Flex
                    top={'0%'}
                    bgColor='white'
                    position={'sticky'}
                    h='120px'
                    borderBottom={'3px solid #04c2c9'}
                    alignItems={'center'}
                    justifyContent='center'
                    fontSize={{ base: '5pt', sm: '5pt', md: '6pt', lg: '8pt' }}
                    lineHeight={{ base: '10pt', sm: '20pt', md: '30pt', lg: '40px' }}
                    zIndex={99}
                >
                    <Flex display={{ base: 'none', sm: 'inherit' }}>
                        {items.map((item, id) => (
                            <Flex key={id} color={item.active ? '#e31b6d' : 'black'} p='0 20px' cursor={'pointer'} borderLeft={id == 0 ? "none" : '1px solid'}>
                                <a href={item.href}>{(item.title + "").toUpperCase()}</a>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex
                        fontSize='20pt'
                        w='100%'
                        m='0 20px'
                        justifyContent={'end'}
                        display={{ base: 'inherit', sm: 'none' }}
                        cursor='pointer'
                        onClick={() => setShow(!show)}
                    >
                        <Flex>
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
                        top='121px'
                        bgColor={'#333'}
                        animate={show ? "open" : "closed"}
                        variants={variants}
                    >
                        {items.map((item, id) => (
                            <Flex key={id} color={item.active ? '#e31b6d' : 'white'} m='20px 20px' cursor={'pointer'} onClick={() => setShow(false)}>
                                <a href={item.href}>{(item.title + "").toUpperCase()}</a>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            {children}
        </Flex >
    );
}    
