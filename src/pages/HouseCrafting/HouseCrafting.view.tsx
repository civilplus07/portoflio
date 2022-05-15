
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HouseImage } from "../../utils/House/House_Data";
import { useHouseCraftingContext } from "./utils/context";

export default function HouseCraftingView() {
    const { count } = useHouseCraftingContext();
    return (
        <>
            <Flex
                p={{ base: '10px', md: '50px' }}
                color={'black'}
                columnGap={'10px'}
                rowGap='50px'
                direction={'column'}
            >
                <Flex
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    fontWeight='bold'
                    justifyContent={'center'}
                    alignItems='center'
                    direction='column'
                >
                    <Text>  House Designs</Text>
                    <Text
                        fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                    >Build Today for better tommorow</Text>
                </Flex>
                <Grid
                    w='100%'
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)' }}
                    gap={6}
                >
                    {HouseImage.map((row, id) => (
                        <GridItem key={id}>
                            <Image
                                src={row}
                                w={'100%'}
                                h='auto'
                            />
                        </GridItem>
                    ))}
                </Grid>
                <Flex
                    mt={'20px'}
                    fontSize={{ base: '11pt', sm: '12pt', md: '13pt', lg: '15pt' }}
                    justifyContent='center'
                >
                    CONTACT US FOR MORE INFO...
                </Flex>
            </Flex>
        </>
    )
}    
