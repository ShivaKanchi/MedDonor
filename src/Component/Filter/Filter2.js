import { Stack, Select, InputGroup, Input, InputRightElement, Heading } from '@chakra-ui/react'
import React from 'react'
import { ImLocation2, ImSearch } from "react-icons/im";
// ImLocation2
import MedicineCard from '../Medicinelist'

export default function Filter() {


    return (
        <Stack p={["5", "10", "10"]} w="full" spacing={10}>
            <Stack direction="row" spacing={10}>
                <Select icon={< ImLocation2 />} w={["30%", "30%", "10%"]} alignSelf="flex-start" placeholder='Mumbai' />
                <InputGroup w={["50%", "50%", "85%"]} alignSelf="center">
                    <Input placeholder='Search College Name' />
                    <InputRightElement children={<ImSearch />} />
                </InputGroup>
                {/* <Link href="/eventregister" w="15%" alignSelf="end"> 
                <Button
                     background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" 
                    display={['none',"flex","flex"]}
                >
                    Register Now
                </Button>
            </Link> */}
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
                fontSize={["lg", "xl", "2xl"]} lineHeight={["lg", "xl", "2xl"]}
                letterSpacing="0.023em" pt={["5", "0", "0"]} alignSelf="center" w="full"
                textAlign="center" color="#FFB87A"
            >
                Search result
            </Heading>
            {/* search result */}
            <MedicineCard />
        </Stack>
    )
}
