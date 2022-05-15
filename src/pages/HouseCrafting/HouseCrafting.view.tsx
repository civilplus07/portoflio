
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HouseImage } from "../../utils/House/House_Data";
import { useHouseCraftingContext } from "./utils/context";

export default function HouseCraftingView() {
    const { count } = useHouseCraftingContext();
    return (
        <>
            <Flex
                bgColor={'#cbdff5'}
                p={{ base: '10px', md: '50px' }}
                color={'white'}
                direction={{ base: 'column', lg: 'initial' }}
                columnGap={'10px'}
                rowGap='50px'
            >
                <Grid
                    m={{ base: '40px 0 30px 0', sm: '60px 0 35px 0', md: '80px 0 50px 0', lg: '100px 0 70px 0' }}
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
            </Flex>
        </>
    )
}    
