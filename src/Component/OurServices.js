import { Stack, VStack, Heading, Divider, ScaleFade } from '@chakra-ui/react'
import React,{ useState, useEffect, useRef } from 'react'

export default function OurServices() {

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
    <>
    {/* animation  */}
    <ScaleFade in={inView} initialScale={0.5}>
        {/* animationend  */}
    <Stack ref={animatedBoxRef} direction={['column','row','row']} pt="10">
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
    </ScaleFade>
           
    </>
  )
}
