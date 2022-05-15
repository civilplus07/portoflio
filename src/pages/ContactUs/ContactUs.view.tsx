
import { Flex } from "@chakra-ui/react";
import ContactBox from "./components/ContactBox";
import { useContactUsContext } from "./utils/context";

export default function ContactUsView() {
    const { count } = useContactUsContext();
    return (
        <>
            <Flex
                direction={'column'}
                bgImage={'url(/contactimg.jpeg)'}
                bgRepeat='no-repeat'
                bgSize={'cover'}
                bgAttachment='fixed'
            >
                <Flex
                    direction={'column'}
                    w='100%'
                    p={{ base: '20px', md: '100px' }}
                    justifyContent='center'
                    alignItems={'center'}
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    color='white'
                    bgColor={'transparent'}
                >
                    <Flex
                        fontWeight='bold'
                    >
                        Contact
                    </Flex>
                    <Flex
                        fontSize={{ base: '10pt', sm: '11pt', md: '12pt', lg: '15pt' }}
                    >
                        <Flex><a href="/dashboard">Home / </a></Flex>
                        <Flex pl={'5px'}><a href="contactus">Contact </a></Flex>
                    </Flex>
                </Flex>
                <ContactBox/>
            </Flex>
        </>
    )
}    
