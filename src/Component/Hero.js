import { Image, Stack, Flex, Text, Box, Heading, Button, Link, ScaleFade } from '@chakra-ui/react'
import React,{ useState, useEffect, useRef } from 'react'

export default function Hero() {

    const [inView, setInView] = useState(false);
    const animatedBoxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const rect = animatedBoxRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
        setInView(isVisible);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <Flex>
        <Box
            backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665650294/Med%20Donner/hero_background_smo15x.svg)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="full"
            h="fit-content"
            zIndex={1}
            ref={animatedBoxRef}
            // border="2px solid red"
        >
            <ScaleFade in={inView} initialScale={0.5}>

            <Stack direction={['column','row','row']}>
                <Flex direction="column" w={["100%","50%","50%"]} p="10">
                    <Image w="26px" h="26px"  align="flex-start" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665683216/Med%20Donner/Rectangle_3_aajbgu.svg" />
                        
                            <Heading 
                                pl="5" fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                                fontSize={["4xl","5xl","6xl"]} line-height="88px" letterSpacing="0.023em"
                                >Your Donations<br></br>can make one<br></br>breathe happily
                            </Heading>
                    <Text 
                        p="5" fontWeight="400" fontFamily="IBM Plex Sans" fontStyle="normal"
                        fontSize="21px" line-height="28px" letterSpacing="0.023em" color="#7C7C7C"
                    > We're always available for our users with emergency medicine requirements.                    
                    <br></br>You can easily reach us 24/7. We focused on our user's care.</Text>
                    <Flex direction="row-reverse">
                        <Image w="26px" h="26px"   src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665685545/Med%20Donner/Rectangle_4_yafxif.svg" />
                    </Flex>
                    <Link href='/donnor' w="full" alignSelf="center" >
                        <Button
                            size='lg' variant='solid' bg='#20BC7E' _hover="#FFB87A" color="white" transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            borderRadius='47px' w={["80%","50%","40%"]} 
                        >Find Your Donor
                        </Button>
                     </Link>
                </Flex>
                {/* second half  */}
                <Flex direction="column" w={["100%","50%","50%"]} >
                    <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1666771237/Med%20Donner/Homepage_Design_2_nxv1ur.svg" />
                </Flex>
            </Stack>
            </ScaleFade>
        </Box>
    </Flex>
    // </Stack>
  )
}
