import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link, Divider } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import medincedonate from '../assest/Medicines-are-dispensed.webp';
import campagn from '../assest/campagn.webp';
import wecare from '../assest/wecare.jpg';

export default function Work() {
  return (
    <Stack >
        {/* what else we can do ? */}
        <Box
            backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665815768/Med%20Donner/ic_outline-health-and-safety_qjy7fv.svg)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
            h="fit-content"
            pt="5%"
            // border="2px solid red"
        >
            <Heading 
              fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
              fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]}
              letterSpacing="0.023em" textAlign="center" >
              Why choose us
            </Heading>
            <Flex justifyContent="center" >
                <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
            </Flex>
            <Stack direction={['column','row','row']}>
              {/* first half  */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">
                {/* <AiOutlinePlayCircle /> */}
                <VStack spacing="10">
                  <Heading as="h4" alignSelf="flex-start">It’s safe and transparent.</Heading>
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > 
                    All the medicines that you donate towards are delivered to the needy people by us. 
                    There are no monetary transactions with anyone- you know exactly what you’re donating and where it’s going.
                  </Text>
                </VStack>
                {/* </Box> */}
              </Flex>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Image src={medincedonate} />
              </Flex>
            </Stack>

            <Stack direction={['column','row','row']}>
              {/* first half  */}
              
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Image src={campagn} />
              </Flex>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">
                {/* <AiOutlinePlayCircle /> */}
                <VStack spacing="10">
                  <Heading as="h4" alignSelf="flex-start">You receive regular updates about campaign.</Heading>
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > 
                    Your experience before, during, and after making a donation is extremely 
                    important to us. Hence, you will receive regular updates from the campaign you’ve donated to.
                  </Text>
                </VStack>
                {/* </Box> */}
              </Flex>
            </Stack>

            <Stack direction={['column','row','row']}>
              {/* first half  */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">
                {/* <AiOutlinePlayCircle /> */}
                <VStack spacing="10">
                  <Heading as="h4" alignSelf="flex-start">We care.</Heading>
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > 
                    If you have any feedback, thoughts, or concerns, don’t hesitate to reach out to our support team. 
                    We’re dedicated to making this the best and most seamless experience for you - so we’re all ears.
                  </Text>
                </VStack>
                {/* </Box> */}
              </Flex>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Image src={wecare} />
              </Flex>
            </Stack>
        </Box>
    </Stack>
  )
}
