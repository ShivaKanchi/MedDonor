import { Stack, Select, InputGroup, Input, InputRightElement, Button ,Heading, Flex, Image, VStack  } from '@chakra-ui/react'
import React from 'react'
import { ImLocation2, ImSearch } from "react-icons/im";
// ImLocation2

export default function Filter() {


  return (
    <Stack p={["5","10","10"]}  w="full" spacing={10}>
        <Stack direction="row" spacing={10}>
            <Select icon={< ImLocation2 />} w={["30%","30%","10%"]} alignSelf="flex-start" placeholder='Mumbai'  />
            <InputGroup w={["50%","50%","85%"]} alignSelf="center">
                <Input placeholder='Search Collage Name' />
                <InputRightElement children={<ImSearch />} />
            </InputGroup>
            <Button
                w="15%" background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf="end"
                display={['none',"flex","flex"]}
            >
                Register Now
            </Button>
        </Stack>
            {/* for mobile  */}
             {/* <Button
                w="50%" background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf="center"
                display={['flex',"none","none"]}
            >
                Register Now
            </Button> */}
            <Heading 
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700" 
                fontSize={["lg","xl","2xl"]} lineHeight={["lg","xl","2xl"]} 
                letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" w="full"
                textAlign="center" color="#FFB87A"
            >
                Search result
            </Heading>
            {/* search result */}

            <Flex
                w="full" bgColor="#D9D9D9" direction={["column","row","row"]} p="10" 
            >
                {/* Collage image */}
                <Flex alignSelf={["center","flex-start","flex-start"]} w={["none","15%","15%"]}>
                    <Image w="150px" h="150px"  borderRadius="full" src="https://images.shiksha.com/mediadata/images/1590151182phpyBRFJd.jpeg" />
                </Flex>

                <VStack  w={["none","55%","55%"]} >
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                        fontSize={["lg","xl","2xl"]} lineHeight={["lg","xl","2xl"]} 
                        letterSpacing="0.023em" pt={["5","0","0"]} alignSelf={["center","center","flex-Start"]} 
                        textAlign="center" pl={["0","0","10"]}
                    >
                        Thakur  Polytechinc
                    </Heading>
                    <Stack direction={["column","column","row"]}  alignSelf={["center","flex-Start","flex-Start"]} w="full" >
                        {/* made a row for event and time */}
                        <Flex direction="row">
                            {/* for laptop */}
                            
                            <Heading 
                                fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="400" 
                                fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                                letterSpacing="0.023em" display={["none","flex","flex"]}
                                pl="10"
                            >
                                Event Date : 10 /5/2024
                            </Heading>

                            {/* mobile responsive */}

                            <Heading 
                                fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="600" 
                                fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                                letterSpacing="0.023em" display={["flex","none","none"]}
                            >
                                Event Date
                            </Heading>
                            <Heading 
                                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                                fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                                letterSpacing="0.023em" display={["flex","none","none"]}
                                pl="10"
                            >
                                Time 
                            </Heading>

                            {/* mobile responsive end */}
                        </Flex>
                        
                        {/* made a row for date & time value  */}
                        
                        <Flex direction="row">
                        
                        {/* for laptop view */}
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em" display={["none","flex","flex"]}
                            pl="10"
                        >
                            Time : 10 am to  4 pm
                        </Heading>

                        {/* for mobile responsive  */}
                        
                        <Heading    
                            fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="400" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em" display={["flex","none","none"]} 
                        >
                            10 /5/2024
                        </Heading>
                        
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em" display={["flex","none","none"]}
                            pl="10"
                        >
                            10 am to  4 pm
                        </Heading>
                        </Flex>
                        {/*  mobile responsive  end*/}
                        
                    </Stack>

                        {/* for laptop */}
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em"  alignSelf="flex-Start" pl={["0","0","10"]}
                            display={["none","flex","flex"]} 
                        >
                            Address : Kandivali, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101
                        </Heading>
                        {/* for mobile device */}
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em"  alignSelf="flex-Start" pl={["0","0","10"]}
                            display={["flex","none","none"]}
                        >
                            Address 
                        </Heading>
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                            fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                            letterSpacing="0.023em"  alignSelf="flex-Start" pl={["0","0","10"]}
                            display={["flex","none","none"]}
                        >
                            Kandivali, Thakur Complex, Kandivali East, Mumbai, Maharashtra 400101
                        </Heading>

                    {/* for laptop */}
                    
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  alignSelf="flex-Start" pl="10" 
                        display={["none","flex","flex"]}
                    >
                        Certificate : yes
                    </Heading>

                    {/* mobile responsive */}

                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  alignSelf="flex-Start" 
                        display={["flex","none","none"]}
                    >
                        Certificate 
                    </Heading>
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  alignSelf="flex-Start" 
                        display={["flex","none","none"]} 
                    >
                        yes
                    </Heading>

                    {/* mobile responsive end */}

                </VStack>
                
                {/* Profile image */}
                <Flex alignSelf="center" w={["none","10%","10%"]}>
                    <Image w="80px" h="80px"  borderRadius="full" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667032050/Med%20Donner/user_1_mgfqpg.svg" />
                </Flex>

                <Flex  alignSelf={["center","flex-start","flex-start"]} direction="column" w={["none","20%","20%"]} p="5">
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  pb="2" alignSelf={["center","flex-start","flex-start"]}
                    >
                        Co-odinator 
                    </Heading>          
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  alignSelf={["center","flex-start","flex-start"]} pb="2"
                    >
                        Shreya Sanke 
                    </Heading>          
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                        fontSize={["md","lg","xl"]} lineHeight={["md","lg","xl"]} 
                        letterSpacing="0.023em"  alignSelf={["center","flex-start","flex-start"]} pb="5" 
                    >
                        +91 8850293795
                    </Heading>          
                    <Button
                         background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf={["center","flex-start","flex-start"]} 
                        
                    >
                        Chat Now 
                    </Button>                    
                </Flex>

            </Flex>
            
    </Stack>
  )
}
