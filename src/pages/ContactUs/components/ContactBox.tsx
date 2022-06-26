import { Flex, Input, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { successHandler } from "../../../component/SuccessHandler";

export default function ContactBox() {
    const form = useRef();
    const [isLoading, setLoading] = useState(false)
    const onSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_4tji3pe', 'template_4fcit6j', form.current, 'Pu33DEYDzzR2WCMrc')
            .then((result) => {
                successHandler("Your message have been sent successfully")
                setLoading(false)
            }, (error) => {
                console.log(error.text);
                setLoading(false)

            });
    }
    return (
        <>
            <Flex
                bgColor={'white'}
                p={{ base: '20px', md: '100px' }}
                justifyContent='center'
                alignItems={'center'}
                direction='column'
            >
                <Flex
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    fontWeight='bold'
                >
                    GET IN TOUCH
                </Flex>
                <form ref={form} onSubmit={onSubmit}>
                    <Flex
                        direction={'column'}
                        mt={'60px'}
                        mb='100px'
                        w={{ base: '300px', sm: '450px', md: '500px' }}
                        gap={1}
                    >
                        <Input
                            name="user_name"
                            p='10px 15px'
                            placeholder='Name'
                            borderRadius='0'
                        />
                        <Input
                            type='email'
                            name="user_email"
                            p='10px 15px'
                            placeholder='Enter Email'
                            borderRadius='0'
                        />
                        <Textarea
                            name="message"
                            p='10px 15px'
                            placeholder='Your Message'
                            borderRadius='0'
                        />
                        <Input bgColor={'transparent'}
                            p='8px 15px'
                            alignSelf={'end'}
                            borderRadius='0'
                            w='110px'
                            _hover={{
                                bgColor: '#04c2c9',
                                borderColor: '#04c2c9',
                                transition: '0.2s ease-in'
                            }}
                            border={'2px solid white'}
                            justifyContent='center' type={'submit'} value={isLoading ? "Sending..." : 'SUBMIT'} cursor={'pointer'}
                        />
                    </Flex>
                </form>
            </Flex>
        </>
    )
}