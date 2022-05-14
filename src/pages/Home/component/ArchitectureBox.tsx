import { Flex, Image, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";

export default function ArchitectureBox() {
    return (
        <Flex
            bgColor={'rgb(14,46,52)'}
            p={{ base: '20px', md: '100px' }}
            color={'white'}
            direction={{ base: 'column', lg: 'initial' }}
            columnGap={'10px'}
            rowGap='50px'
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
                    REVIT ARCHITECTURE<br /> SOFTWARE
                </Flex>
                <Flex
                    fontSize={{ base: '15pt', sm: '16pt', md: '17pt', lg: '18pt' }}
                >
                    In a consulting perspective,you will learn the entire Architectural modelling of a building.
                    You will learn modelling,sketching,layout preparation,detailing.<br />
                    Basics of worksharing and co-ordination is also covered in this course.
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
                    src="https://static.wixstatic.com/media/16b26d_3e81196d2768401ca5d07043608b5e95~mv2.jpg/v1/fill/w_936,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/580641-637286212567871099-16x9.jpg"
                    w={'100%'}
                />
            </Flex>
        </Flex>
    )
}