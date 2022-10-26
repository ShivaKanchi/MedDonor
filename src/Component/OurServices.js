import { Stack, VStack, Heading, Divider } from '@chakra-ui/react'
import React from 'react'

export default function OurServices() {
  return (
    <>
    <Stack direction={['column','row','row']} pt="10">
        <VStack w="full" alignSelf="center">
            <Heading 
                color="#FFB87A" fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                fontSize="21px" lineHeight="28px" letterSpacing="0.023em" >
                Our Services
            </Heading>
            {/* <Heading 
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} letterSpacing="0.023em" w={["90%","80%","70%"]} textAlign="center"
            >
                We Offer Different Medicine
                Such as 
            </Heading> */}
        <Divider orientation='horizontal' w="30%"  />
        {/* <Stack direction={['column','row','row']} pt="10" > */}
        {/* </Stack> */}
        </VStack>
    </Stack>
           
    </>
  )
}
