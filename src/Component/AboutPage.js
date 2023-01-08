import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link, Divider } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


export default function AboutPage() {
  return (
    <Stack >
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
              Who We Are ?
            </Heading>
            <Flex justifyContent="center" >
                <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
            </Flex>
            <Stack direction={['column','row','row']}>
              {/* first half  */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">
                {/* <Box 
                  backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665816660/Med%20Donner/Group_5_nnn7v9.svg)"
                  backgroundPosition="left"
                  backgroundRepeat="no-repeat"
                  w="full"
                  h="full"
                  // bgImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665816660/Med%20Donner/Group_5_nnn7v9.svg)" />
                > */}
                {/* <AiOutlinePlayCircle /> */}
                <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665816660/Med%20Donner/Group_5_nnn7v9.svg" />
                {/* </Box> */}
              </Flex>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Heading 
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                  fontSize={["3xl","4xl","5xl"]} lineHeight={["3xl","4xl","5xl"]} letterSpacing="0.023em" >
                    Welcome To MedDonor
                </Heading>
                <VStack spacing="10">
                  
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > 
                    MedDonor is a online portal to donate unused medicines and that medicines to be used by needy one who is unable to pay money for that particular medicine. We provide medicines free of cost to the poor people.
                  </Text>
                  <Text 
                    fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em"
                     color="#7C7C7C"
                  > 
                  MedDonor aims to provide unused medicines for free. 
                  </Text>
                  <Link href='/donner' w="full" alignSelf="flex-start" >
                    <Button 
                      rightIcon={<ArrowForwardIcon />}  color='#20BC7E' variant='link'
                      fontFamily="IBM Plex Sans" fontSize="28" lineheight="37" fontWeight="700" letterSpacing="0.023em"  
                    >
                        Donate Now
                    </Button>
                  </Link>
                </VStack>
              </Flex>
            </Stack>
        </Box>
    </Stack>
  )
}
