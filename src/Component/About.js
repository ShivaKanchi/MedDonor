import { Box, Stack,Text, VStack, Flex, Image, Heading, Button, Link } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


export default function About() {
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
                  fontSize="67px" lineHeight="88px" letterSpacing="0.023em" >
                    Short Story About
                    Medonner
                </Heading>
                <VStack spacing="10">
                  
                  <Text 
                    pt="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > Medifine is an online healthcare provider, Offering health solutions
                    and advice to over 30,00,000 patients across  Bangladesh.
                  </Text>
                  <Text 
                    fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                    fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                  > With a team of licensed doctors and pharmasists, Medifine aim to
                    provide comprihensive medical consultation services for patients
                    and doctors alike.
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
    </Stack>
  )
}
