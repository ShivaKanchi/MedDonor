import {  Stack, Flex, Input, Heading, Button, Divider } from '@chakra-ui/react'
import React from 'react'

export default function ContactHead() {
  return (
    <Stack>
        <Heading 
            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
            fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
            letterSpacing="0.023em"  alignSelf="center"
        >
            Contact Us
        </Heading>
        <Flex justifyContent="center" >
            <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
        </Flex>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.224441480567!2d72.8644758!3d19.26283605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f74539954d%3A0xbb6b56faebc49ef4!2sAshish%20Complex%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1667163695206!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <Stack spacing="5" direction="column" alignSelf="center" w="full" pt="10">
            <Flex direction="row" alignSelf="center">
                <Heading 
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize={["xl","2xl","3xl"]} lineHeight={["xl","2xl","3xl"]} 
                    letterSpacing="0.023em"  alignSelf="center" textAlign="center"
                >
                    Send your
                </Heading>
                <Heading 
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize={["xl","2xl","3xl"]} lineHeight={["xl","2xl","3xl"]} 
                    letterSpacing="0.023em"  alignSelf="center" color="#20BC7E" pl="2"
                    textAlign="center"
                >
                    Query
                </Heading>
            </Flex>
            {/* form */}
            <Flex direction={["column","row","row"]} w="full" alignSelf="center" justifyContent="center">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                //   onChange={handleChange}
                //   value={data.firstName}
                  required
                  variant='filled' 
                  size='md'
                  w={["80%","40%","30%"]}
                  alignSelf="center"
                //   className={styles.input}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="firstName"
                  w={["80%","40%","30%"]}
                  ml={["0","10","10"]}
                  mt={["5","0","0"]}
                //   onChange={handleChange}
                //   value={data.firstName}
                  required
                  variant='filled' 
                  size='md'
                  alignSelf="center"
                //   className={styles.input}
                />
            </Flex>
            {/* email & phone  */}
            <Flex direction={["column","row","row"]} w="full" alignSelf="center" justifyContent="center">
                <Input
                  type="text"
                  placeholder="email"
                  name="firstName"
                //   onChange={handleChange}
                //   value={data.firstName}
                  required
                  variant='filled' 
                  size='md'
                  typeof='email'
                  w={["80%","40%","30%"]}
                  alignSelf="center"
                //   className={styles.input}
                />
                <Input
                  type="text"
                  placeholder="Phone No."
                  name="firstName"
                  w={["80%","40%","30%"]}
                  ml={["0","10","10"]}
                  mt={["5","0","0"]}
                //   onChange={handleChange}
                //   value={data.firstName}
                  required
                  variant='filled' 
                  size='md'
                  typeof='number'
                  alignSelf="center"
                //   className={styles.input}
                />
            </Flex>
            {/* last row */}
            <Flex justifyContent="center">
                
                <Input
                    type="text"
                    placeholder="Message"
                    name="firstName"
                    w={["80%","70%","60%"]}
                    aria-multiline
                    //   onChange={handleChange}
                    //   value={data.firstName}
                    required
                    variant='filled' 
                    size='md'
                    alignSelf="center"
                    //   typeof='number'
                    //   className={styles.input}
                />
            </Flex>
            <Button 
                alignSelf="center" background="#20BC7E" rounded="lg"
            >
                Send
            </Button>
        </Stack>
    </Stack>
  )
}
