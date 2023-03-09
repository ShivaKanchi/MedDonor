import React from 'react'
import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link, Divider, useColorModeValue, ScaleFade } from '@chakra-ui/react'
import { useInView } from "react-intersection-observer";

export default function OurMission() {

  const text=useColorModeValue("#7C7C7C","#d1cdc2")
  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger animation when the component is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <ScaleFade in={inView} initialScale={0.5}>
      <Stack direction="column" w="full" h="fit-content" pt="5%" ref={ref}>
          <Heading 
              fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
              fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
              letterSpacing="0.023em"  alignSelf="center"
          >
              Our Mission
          </Heading>
          <Flex justifyContent="center" >
              <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
          </Flex>


          <Box
              backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665815768/Med%20Donner/ic_outline-health-and-safety_qjy7fv.svg)"
              backgroundPosition="left"
              backgroundRepeat="no-repeat"
              w="full"
              h="fit-content"
              pt="5%"
              // border="2px solid red"
          >   
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
                  {/* </Box> */}
                  <Heading 
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize={["3xl","4xl","5xl"]} lineHeight={["3xl","4xl","5xl"]} letterSpacing="0.023em" >
                      {/* Welcome To MedDonner */}
                  </Heading>
                  <VStack spacing="10">
                    
                    <Text 
                      pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                      fontSize="21px" line-height="28px" letterSpacing="0.023em" color={text}
                    > 
                      {/* Medifine is an online healthcare provider, Offering health solutions
                      and advice to over 30,00,000 patients across  Bangladesh. */}
                    </Text>
                    <Text 
                      fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                      fontSize="21px" line-height="28px" letterSpacing="0.023em" color={text}
                    > 
                      * To reduce medical waste.<br /><br /> 
                      * To reduce pollution which happens after decomposing medicines. <br /><br /> 
                      * Provide medicines to the people who can't afford on daily basis. <br /><br />
                      * Our platform allows people anywhere in the world to donate medicines. With trust, 
                        transparency and empathy, we’re striving hard to create a better world by bringing
                        people together to create a lasting impact.. <br /><br />
                    </Text>
                    
                  </VStack>
                </Flex>
                {/* second half */}
                <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                  <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667152468/Med%20Donner/02_1_j0z80c.svg" />
                </Flex>
              </Stack>
          </Box>
        </Stack>
    </ScaleFade>
  )
}
