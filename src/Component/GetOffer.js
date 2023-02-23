import React from 'react'
import {Heading, Flex, Text , InputGroup, Input, InputLeftAddon, InputRightAddon} from '@chakra-ui/react'
import { GrMail } from "react-icons/gr";
// GrMail

export default function GetOffer() {
  return (
    <Flex w="full" justifyContent="center" mt={[10,10,"25%"]} >
        <Flex w="80%" direction={['column','row','row']} boxShadow="0px 0px 2px" p="10" rounded="lg" >
            <Flex w={["100%","50%","50%"]} direction="column" >
                <Heading
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
                    letterSpacing="0.023em" pt={["5","0","0"]}>
                        Get offers
                </Heading>
                <Text
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                    fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC"
                    pt={["5","0","0"]}
                >
                    Get all the latest offers and updates form us
                </Text>
            </Flex>
            {/* half row end*/}
            {/* half row start*/}
            <InputGroup w={["100%","50%","50%"]} alignSelf="center" pt={["10","0","0"]}>
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
