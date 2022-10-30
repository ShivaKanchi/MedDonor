import { Box, HStack, Heading, Link, VStack, Divider } from '@chakra-ui/react'
import React from 'react'

export default function BreadCumb(props) {

    const bg="https://res.cloudinary.com/ssdeveloper/image/upload/v1666978903/Med%20Donner/banner-top_1_uu2zmy.png"
  
    return (
    <VStack>

    <Box
        backgroundImage={bg}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="full"
        h="full"
        justifyItems="center"
        alignSelf="center"
        // p="20"
    >
        <Heading 
            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
            fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
            letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" w="full"
            textAlign="center" color="white"
        >
            {props.name}
        </Heading>
        <HStack>
            <Link href="/" textAlign="end" alignSelf="center" w="full">
                <Heading
                    fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                    fontSize={["lg","lg","2xl"]} lineHeight={["2xl","3xl","4xl"]} 
                    letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" 
                     color="white" 
                    >
                    Home
                </Heading>
            </Link>
            <Divider orientation='vertical' border="2px solid white" height="20px" color="white" />
            <Heading
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
                fontSize={["lg","lg","2xl"]} lineHeight={["2xl","3xl","4xl"]} 
                letterSpacing="0.023em" pt={["5","0","0"]} alignSelf="center" 
                color="#20BC7E" w="full" textAlign="start"
            >
                {props.name}
            </Heading>
        </HStack>
    </Box>
    </VStack>
  )
}
