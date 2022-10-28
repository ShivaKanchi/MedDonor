import { Stack, Select, InputGroup, Input, InputRightElement, Button ,Heading, Box, Flex, Image, Text, VStack, HStack} from '@chakra-ui/react'
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
                w="full" bgColor="#D9D9D9" direction="row" p="10" 
            >
                <Flex>
                    <Image w="150px" h="150px" borderRadius="full" src="https://images.shiksha.com/mediadata/images/1590151182phpyBRFJd.jpeg" />
                </Flex>
                <VStack>
                    <Heading 
                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                        fontSize={["lg","xl","2xl"]} lineHeight={["lg","xl","2xl"]} 
                        letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" 
                        textAlign="center" pl="10"
                    >
                        Thakur  Polytechinc
                    </Heading>
                    <HStack direction="row"  border="2px solid red"  >
                        <Heading 
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                            fontSize={["lg","xl","2xl"]} lineHeight={["lg","xl","2xl"]} 
                            letterSpacing="0.023em" pt={["5","0","0"]} 
                             pl="10"
                        >
                            Event Date : 
                        </Heading>
                        <Text
                            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400" 
                            fontSize={["lg","xl","2xl"]} lineHeight={["lg","xl","2xl"]} 
                            letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" w="full"
                            textAlign="center" pl="2"
                        >
                            10 /5/2024
                        </Text>
                    </HStack>
                </VStack>
            </Flex>
            
    </Stack>
  )
}
