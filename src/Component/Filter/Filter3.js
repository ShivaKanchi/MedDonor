import { Stack, Select, InputGroup, Input, Link, Button, InputRightElement, Heading } from '@chakra-ui/react'
import React from 'react'
import { ImLocation2, ImSearch } from "react-icons/im";
export default function Filter() {
    //MedicalFilter
    return (
        <Stack p={["5", "10", "10"]} w="full" spacing={10}>
            <Stack direction="row" spacing={10}>
                <Select icon={< ImLocation2 />} w={["30%", "30%", "10%"]} alignSelf="flex-start" placeholder='Cough' />
                <InputGroup w={["50%", "50%", "85%"]} alignSelf="center">
                    <Input placeholder='Search Medicine' />
                    <InputRightElement children={<ImSearch />} />
                </InputGroup>
                <Link href="/medicalregister" w="15%" alignSelf="end">
                    <Button
                        background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px"
                        display={['none', "flex", "flex"]}
                    >
                        Register your medical
                    </Button>
                </Link>
            </Stack>
            {/* for mobile  */}
            {/* <Button
                w="50%" background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf="center"
                display={['flex', "none", "none"]}
            >
                Register your medical
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
            {/* medicinedetails */}

        </Stack>
    )
}
