import { Image, Stack, Flex, Text, Box, Heading, Button, Link } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
    
  return (
    <Stack>
        <Box
            backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665650294/Med%20Donner/hero_background_smo15x.svg)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="full"
            h="fit-content"
            // border="2px solid red"
        >
            <Stack direction={['column','row','row']}>
                <Flex direction="column" w="50%" p="10">
                    <Image w="26px" h="26px"  align="flex-start" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665683216/Med%20Donner/Rectangle_3_aajbgu.svg" />
                    <Heading 
                        pl="5" fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                        fontSize="67px" line-height="88px" letterSpacing="0.023em"
                    > Complete Heatlth <br></br>Care Solutions for <br></br>Everyone</Heading>
                    <Text 
                        p="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                        fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                    > We're always available for our Patients with emergen problems.
                    <br></br>You can easily reach us 24/7. We focused on highest quality.</Text>
                    <Flex direction="row-reverse">
                        <Image w="26px" h="26px"   src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665685545/Med%20Donner/Rectangle_4_yafxif.svg" />
                    </Flex>
                    <Link href='/signup' w="full"  >
                        <Button
                            size='lg' variant='solid' bg='#20BC7E' _hover="#FFB87A" color="white" transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            borderRadius='47px' w="40%" alignSelf="center"
                        >Find Your Donner
                        </Button>
                     </Link>
                </Flex>
                {/* second half  */}
                <Flex direction="column" w="50%" >
                    <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665685965/Med%20Donner/Homepage_Design_1_jbtj2c.svg" />
                </Flex>
            </Stack>
        </Box>
    </Stack>
        
            
    // </Stack>
  )
}
