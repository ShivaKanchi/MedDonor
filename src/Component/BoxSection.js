import { Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'


export default function BoxSection() {
  return (
    <Flex direction={["column","row","row"]} p="20">
      {/* first  */}
      
      <Flex
        w="309px"
        h="260px"
        boxShadow="0px 0px 10px"
        borderRadius="16px"
        // border="1px "
        p="10"
        justifyContent="center"
      >
        <Flex direction="column" w="full" alignSelf="center">
          {/* <AiOutlineMedicineBox  justifyContent="center" w="63px" h="72px" /> */}
          <Heading 
            fontWeight="700" fontFamily="IBM Plex Sans" fontStyle="normal"
            fontSize="21px" line-height="88px" letterSpacing="0.023em" alignSelf="center"
          > Expert </Heading>
          <Text textAlign="center">
            We have a team of expert
            specialist doctor.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
