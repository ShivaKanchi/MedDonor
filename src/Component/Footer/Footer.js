import { Image, Text, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import {useColorModeValue} from "@chakra-ui/color-mode"
// IoLocationSharp

export default function Footer(props) {
  
  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666942312/Med%20Donner/Logo_pstfy6.svg','https://res.cloudinary.com/ssdeveloper/image/upload/v1666942349/Med%20Donner/Logo_1_n8cjgq.svg')
  return (
    <Flex direction={["column","row","row"]} w="full" justifyContent="space-around" p={["10","10","20"]} mb="-5%">
        {/* column 1 */}
        <Flex direction="column" w={["90%","25%","25%"]} alignSelf="center" >
            <Image w="200px" h="64px" alignSelf="center" src={image} />
            <Text
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                fontSize="16px" lineHeight="21px" letterSpacing="0.023em" color="#ACACAC" pt="5"
            >
                Join us in delivering happiness across india
            </Text>
        </Flex>
        {/* column 2 */}
        <Flex direction="column" w={["90%","25%","25%"]} alignSelf="center" p="5" >
            <Heading
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                fontSize="21px" lineHeight="28px" letterSpacing="0.023em" alignSelf="center"
            >
                Contact us
            </Heading>
            <Link href="https://goo.gl/maps/yFcJdU6S7afh72xs8">
                <Flex direction="row" pt="5" w="full" >
                    
                        <IoLocationSharp color='#20BC7E' size="32px"  />
                        <Text
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" w="full"
                            fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC" 
                        >
                        Ashish complex, Dahiser (East),Mumbai 400068
                        </Text>
                </Flex>
            </Link>
            <Link href="tel: +91885023795">
                <Flex direction="row" pt="5" >
                    <IoCall color='#20BC7E' size="32px"  />
                    <Text
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                        fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC" 
                    >
                    +91 8850293795
                    </Text>
                </Flex>
            </Link>
        </Flex>
        {/* column 3 */}
        <Flex direction="column" w={["90%","25%","25%"]} alignSelf="center" p="5" >
            <Heading
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                fontSize="21px" lineHeight="28px" letterSpacing="0.023em" alignSelf="center"
            >
                Useful Link
            </Heading>
            {/* list of navigation */}
                <Link href="/donner" alignSelf="center" pt="5"  _focus="none"  >    
                    <Text
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                        fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC"
                         
                    >
                    Donor
                    </Text>
                </Link>
                <Link href="/services" alignSelf="center" pt="2" _focus="none" >    
                    <Text
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                        fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC" 
                    >
                    Services
                    </Text>
                </Link>
                <Link href="/event" alignSelf="center" pt="2" _focus="none" >    
                    <Text
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="500" 
                        fontSize="21px" lineHeight="27px" letterSpacing="0.023em" color="#ACACAC" 
                    >
                    Events
                    </Text>
                </Link>
            
        </Flex>
        {/* column 4 */}
        <Flex direction="column" w={["90%","25%","25%"]} alignSelf="center" p="5" >
            <Heading
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                fontSize="21px" lineHeight="28px" letterSpacing="0.023em" alignSelf="center"
            >
                Our services
            </Heading>            
        </Flex>
    </Flex>
  )
}
