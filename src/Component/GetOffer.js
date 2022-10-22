import React from 'react'
import {Heading, Stack, Flex, Text , InputGroup, Input, InputLeftAddon, InputRightAddon} from '@chakra-ui/react'
import { GrMail } from "react-icons/gr";
// GrMail

export default function GetOffer() {
  return (
    <Flex w="full" justifyContent="center" mt="30%">
        <Flex w="80%" direction={['column','row','row']} boxShadow="0px 4px 10px" p="10" border="lg" >
            <Flex w="50%" direction="column">
                <Heading
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize="50px" lineHeight="88px" letterSpacing="0.023em" >
                        Get offers
                </Heading>
                <Text
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                    fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC"
                >
                    Get all the latest offers and updates form us
                </Text>
            </Flex>
            {/* half row end*/}
            {/* half row start*/}
            <InputGroup w="50%" alignSelf="center">
                <InputLeftAddon children={< GrMail />} />
                <Input type='tel' placeholder='Enter email here' />
                <InputRightAddon 
                    background="#20BC7E" placeholder="Subscribe" 
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                    fontSize="16px" lineHeight="21px" letterSpacing="0.023em" color="white"
                    > Subscribe</InputRightAddon>
            </InputGroup>


        </Flex>
    </Flex>
  )
}
