import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link, Divider, useColorModeValue, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useInView } from "react-intersection-observer";

export default function AboutPage() {

  const text=useColorModeValue("#7C7C7C","#d1cdc2")

  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger animation when the component is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <Stack >
      <ScaleFade in={inView} initialScale={0.5}>
          <Box
              backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665815768/Med%20Donner/ic_outline-health-and-safety_qjy7fv.svg)"
              backgroundPosition="right"
              backgroundRepeat="no-repeat"
              w="full"
              h="fit-content"
              pt="5%"
              ref={ref}
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
                      fontSize="21px" line-height="28px" letterSpacing="0.023em" color={text}
                    > 
                      MedDonor is a online portal to donate unused medicines and that medicines to be used by needy one who is unable to pay money for that particular medicine. We provide medicines free of cost to the poor people.
                    </Text>
                    <Text 
                      fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                      fontSize="21px" line-height="28px" letterSpacing="0.023em"
                      color={text}
                    > 
                    MedDonor aims to provide unused medicines for free. 
                    </Text>
                    <Link href='/donor' w="full" alignSelf="flex-start" >
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
        </ScaleFade>
    </Stack>
  )
}
