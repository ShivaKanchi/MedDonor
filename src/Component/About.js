import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link, ScaleFade } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useInView } from "react-intersection-observer";

export default function About() {

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
                  color="#FFB87A" fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                  fontSize="21px" lineHeight="28px" letterSpacing="0.023em" >
                  Who we are?
                </Heading>
                <Heading 
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                  fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} letterSpacing="0.023em" >
                    A short story about MedDonor
                </Heading>
                <VStack spacing="10">
                  
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > MedDonor is a platform to donate medicine and urgently give medicines to people who need it.
                  </Text>
                  <Text 
                    fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > We have 100s of donors and pharmacists, that aim to let unused and to be expired medicine be used more efficiently and reduce medicine wastage and make medicines available for people for less price.
                  </Text>
                  <Link href='/about' w="full" alignSelf="flex-start" >
                    <Button 
                      rightIcon={<ArrowForwardIcon />}  color='#20BC7E' variant='link'
                      fontFamily="IBM Plex Sans" fontSize="28" lineheight="37" fontWeight="700" letterSpacing="0.023em"  
                    >
                    Know more
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
