import { Flex,Heading, ScaleFade} from '@chakra-ui/react'
import React from 'react'
import { GiMedicines, GiMedicinePills, GiPlagueDoctorProfile } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { useInView } from "react-intersection-observer";


export default function BoxSection() {

  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger animation when the component is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <ScaleFade in={inView} initialScale={0.5}>
      <Flex ref={ref} direction={["column","row","row"]} p={["10","10","5"]} justifyContent="space-between" >

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
              <GiMedicines  alignSelf="center" size="35" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Urgent Medicine </Heading>
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
            {/* <Center> */}
              <GiMedicinePills  alignSelf="center" size="35" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Medicine in bulk </Heading>
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
              <GiPlagueDoctorProfile  alignSelf="center" size="35" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Doctor consult </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
        {/* Four */}
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
              <MdDeliveryDining  alignSelf="center" size="35" />
              <Heading 
                fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
                fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center" mt="5"
              > Delivery </Heading>
            {/* </Center> */}
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  )
}
