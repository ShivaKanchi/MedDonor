import { Box, Stack, Flex, Heading, Text, Image, Input, Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { BsEmojiSmile, BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaClinicMedical } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FcExpired } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import {useColorModeValue} from "@chakra-ui/color-mode"
// GrGallery 
// FcExpired
// GiMedicines

export default function Count() {

    const [startDate, setStartDate] = useState(new Date()); 
    const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666942312/Med%20Donner/Logo_pstfy6.svg','https://res.cloudinary.com/ssdeveloper/image/upload/v1666942349/Med%20Donner/Logo_1_n8cjgq.svg')

  return (
    <Stack >
        {/* firt layer of bg */}
        <Box
            w="full"
            h={["700","","633"]}
            bgImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665842919/Med%20Donner/Frame_25_1_cblrry.svg)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            
        >
            {/* second layer for grdiant */}
            <Box
                w="full"
                h="full"
                bgColor="#20BC7E"
                opacity="85%"
                
            >
                {/* content */}
                <Flex direction={["column","row","row"]} w="full" justifyContent={["center","space-around","space-around"]}   alignItems="center" pt="20" color="#FFFFFF" >
                    <Flex direction="column" alignItems="center" >
                        <BsEmojiSmile size="54" />
                        <Heading fontFamily="IBM Plex Sans" fontWeight="bold" 
                            fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                        > 30,00,000+</Heading>
                        <Text
                            fontFamily="IBM Plex Sans" fontWeight="400"  fontStyle="normal"
                            fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                        >Happy Donor</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" pt="10" >
                        <FaHandsHelping size="54" />
                        <Heading fontFamily="IBM Plex Sans" fontWeight="bold" 
                            fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                        > 409+</Heading>
                        <Text
                            fontFamily="IBM Plex Sans" fontWeight="400"  fontStyle="normal"
                            fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                        >Helped people</Text>
                    </Flex>
                    <Flex direction="column" alignItems="center" pt="10" >
                        <SlCalender size="54" />
                        <Heading fontFamily="IBM Plex Sans" fontWeight="bold" 
                            fontSize="38" lineHeight="49px" letterSpacing="0.023em" pt="5"
                        > 18+</Heading>
                        <Text
                            fontFamily="IBM Plex Sans" fontWeight="400"  fontStyle="normal"
                            fontSize="21" lineHeight="28px" letterSpacing="0.023em" pt="5"
                        >Years of experience</Text>
                    </Flex>
                </Flex>  
                {/* Meddoner Regiseter */}
                <Flex w="full" justifyContent="center" mt="50"  >
     <Flex w="80%" borderRadius="lg"  boxShadow="0px 4px 10px" h="fit-content"    >
        <Flex w={["100%","80%","80%"]} p={["5","10","10"]} direction="column" justifyContent={["center","none","none"]} 
            alignSelf={["center","none","none"]} 
        >
             <Heading 
             color="#FFB87A" fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
             fontSize="21px" lineHeight="28px" letterSpacing="0.023em" >
             Want to donate medicine ?
             </Heading>
             <Heading 
                 fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                 fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} letterSpacing="0.023em" >
                    Get Regiseter Your Self
             </Heading>
             {/* first row */}
             <Flex direction={["column","row","row"]} p="10" justifyContent={["center","space-between","space-between"]} >
                <GiMedicines size="60px" />
                <Flex direction="column" p={["3","0","0"]}>
                    <Heading
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                        fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                    >
                        Medicine name
                    </Heading>
                    <Input variant='flushed' placeholder="Enter name here" 
                            focusBorderColor="#ACACAC"  />
                </Flex >
                <FcExpired size="50px"  />
                <Flex direction="column" p={["3","0","0"]}>
                    <Heading
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                        fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                    >
                        Medicine expire date
                    </Heading>
                    <DatePicker pt="10" selected={startDate} onChange={(date) => setStartDate(date)} />  
                </Flex>
            </Flex>
            {/* second row */}
             <Flex direction={["column","row","row"]} mt={["-14","0","0"]} p={["10","10","10"]} justifyContent="space-between" >
                <BsTelephoneFill size="50px" />
                <Flex direction="column">
                    <Heading
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                        fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                    >
                        Phone
                    </Heading>
                    <Input variant='flushed' placeholder="Enter phone no. here" color="#ACACAC"
                            focusBorderColor="#ACACAC"  />
                </Flex>
                <FaClinicMedical size="50px" p={["3","0","0"]}/>
                <Flex direction="column">
                    <Heading
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                        fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                    >
                        Address
                    </Heading>
                    <Input variant='flushed' placeholder="Enter your Address" color="#ACACAC"
                            focusBorderColor="#ACACAC"  />  
                </Flex>
            </Flex>
         <Button rightIcon={<GrGallery />} w="full" background="#FFB87A" varient="soild" p="5"  >Upload Medicine Image</Button>
         <Button background="#20BC7E" varient="soild" p="5" w="20%" mt="10"  alignSelf="center" >Submit</Button>
         {/*second row end */}
         </Flex>
         <Flex w="30%" border="medium" h="fit-content" display={["none","none","flex"]}>
             <Image  opacity="100%" objectFit='cover' h="full" src={image} />
         </Flex>
     </Flex> 
 </Flex>
 {/* Meddoner register */}
            </Box>
        </Box>
    </Stack>
  )
}
