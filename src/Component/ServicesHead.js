import React from 'react'
import {  Stack, Flex, Image, Heading, Divider, ScaleFade } from '@chakra-ui/react'
import { useInView } from "react-intersection-observer";

export default function ServicesHead() {

  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger animation when the component is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <ScaleFade in={inView} initialScale={0.5}>

      <Stack ref={ref} direction="column" w="full" h="fit-content" pt="5%">
          <Heading 
              fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
              fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
              letterSpacing="0.023em"  alignSelf="center"
          >
              Our Services
          </Heading>
          <Flex justifyContent="center" >
              <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
          </Flex>
          {/* service display */}
          <Flex direction={["column","row","row"]} p={["10","10","10"]} justifyContent="space-between" >
        {/* first  */}
        <Flex
          w="309px"
          h="260px"
          _hover={{boxShadow: "0px 0px 10px"}}
          boxShadow="0px 0px 5px"
          borderRadius="16px"
          // border="1px "
          p="10"
          alignSelf="center"
          mb="5"
        >
          <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5">
            {/* <Center> */}
              {/* <GiMedicines  alignSelf="center" size="35" /> */}
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667159751/Med%20Donner/search_1_1_g3dkmi.svg" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em"
                  alignSelf="center" textAlign="center" mt="5"
              > Find <br></br>Medicine Quickly </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
        {/* second */}
        <Flex
          w="309px"
          h="260px"
          _hover={{boxShadow: "0px 0px 10px"}}
          boxShadow="0px 0px 5px"
          borderRadius="16px"
          // border="1px "
          p="10"
          alignSelf="center"
          mb="5"
        >
          <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5">
          {/* <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5"> */}
            {/* <Center> */}
              {/* <GiMedicinePills  alignSelf="center" size="35" /> */}
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667160646/Med%20Donner/trust_1_otzvkd.svg" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Trust </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
        {/* Third */}
        <Flex
          w="309px"
          h="260px"
          _hover={{boxShadow: "0px 0px 10px"}}
          boxShadow="0px 0px 5px"
          borderRadius="16px"
          // border="1px "
          p="10"
          alignSelf="center"
          mb="5"
        >
          <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5">
            {/* <Center> */}
              {/* <GiPlagueDoctorProfile  alignSelf="center" size="35" /> */}
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667160779/Med%20Donner/ux_1_bn00x9.svg" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > User Friendly </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
        {/* Fourth mobile */}
        <Flex
          w="309px"
          h="260px"
          _hover={{boxShadow: "0px 0px 10px"}}
          boxShadow="0px 0px 5px"
          borderRadius="16px"
          // border="1px "
          p="10"
          alignSelf="center"
          mb="5" 
          display={["flex","none","none"]}
        >
          <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5">
            {/* <Center> */}
              {/* <GiPlagueDoctorProfile  alignSelf="center" size="35" /> */}
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667160928/Med%20Donner/authorize_1_kqgze4.svg" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
                > Authorize <br/> Person </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
        </Flex>
        {/* Fourth laptop */}
        <Flex
          w="309px"
          h="260px"
          _hover={{boxShadow: "0px 0px 10px"}}
          boxShadow="0px 0px 5px"
          borderRadius="16px"
          // border="1px "
          p="10"
          alignSelf="center"
          mb="5"
          display={["none","flex","flex"]}
        >
          <Flex direction="column" w="full" alignItems="center" justifyContent="center" p="5">
            {/* <Center> */}
              {/* <GiPlagueDoctorProfile  alignSelf="center" size="35" /> */}
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667160928/Med%20Donner/authorize_1_kqgze4.svg" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Authorize <br/> Person </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
      </Stack>
    </ScaleFade>
  )
}
