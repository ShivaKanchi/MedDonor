import { Box, Stack, Flex, Heading, Text, Image, Input, Button, ScaleFade } from '@chakra-ui/react'
import React,{ useState, useEffect, useRef } from 'react'
import { BsEmojiSmile, BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaClinicMedical } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import DonationRegister from "./DonationRegister"
// GrGallery 
// FcExpired
// GiMedicines

export default function Count() {

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
        <Stack >
            {/* firt layer of bg */}
            {/* animation  */}
                <ScaleFade in={inView} initialScale={0.5}>
            {/* animationend  */}
            <Box
                w="full"
                h={["700", "", "633"]}
                bgImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665842919/Med%20Donner/Frame_25_1_cblrry.svg)"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                ref={animatedBoxRef}

            >
                {/* second layer for grdiant */}
                <Box
                    w="full"
                    h="full"
                    bgColor="#20BC7E"
                    opacity="85%"

                >
                    {/* content */}
                    <Flex direction={["column", "row", "row"]} w="full" justifyContent={["center", "space-around", "space-around"]} alignItems="center" pt="20" color="#FFFFFF" >
                        <Flex direction="column" alignItems="center" >
                            <BsEmojiSmile size="54" />
                            <Heading fontFamily="IBM Plex Sans" fontWeight="bold"
                                fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                            > 30,00,000+</Heading>
                            <Text
                                fontFamily="IBM Plex Sans" fontWeight="400" fontStyle="normal"
                                fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                            >Happy Donor</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center"  pt={["10","5","0"]}>
                            <FaHandsHelping size="54" />
                            <Heading fontFamily="IBM Plex Sans" fontWeight="bold"
                                fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                            > 409+</Heading>
                            <Text
                                fontFamily="IBM Plex Sans" fontWeight="400" fontStyle="normal"
                                fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                            >Helped people</Text>
                        </Flex>
                        <Flex direction="column" alignItems="center" pt={["10","5","0"]} >
                            <SlCalender size="54" />
                            <Heading fontFamily="IBM Plex Sans" fontWeight="bold"
                                fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                            > 18+</Heading>
                            <Text
                                fontFamily="IBM Plex Sans" fontWeight="400" fontStyle="normal"
                                fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                            >Years of experience</Text>
                        </Flex>
                    </Flex>
                    {/* Meddoner Regiseter */}
                    <Stack display={["none","flex","flex"]}>
                        <DonationRegister />
                    </Stack>
                </Box>
            </Box>
            </ScaleFade>
        </Stack>
    )
}
