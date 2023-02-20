import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link, Flex, Image, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../Redux/Reducers/Medicine/medicine.action.js";

export default function MedicalList() {
    const [medicals, setMedicals] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMedicals()).then(() => {
            setLoading(false)
        })
        setMedicals(medicalData)
    }, [])
    const medicalData = useSelector(state => state.medical.medicallist)

    //   fetch(`${process.env.REACT_APP_CLIENT_URL
    //     }/medicine`)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       setMedicines({ data: responseJson })
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // console.log("set mediciens worked",medicines)
    return (
        <>
            {loading ?
                <Stack w="100%" align={"center"}>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='#20BC7E'
                        size='xl'
                        mb={5}
                    />
                </Stack> : <></>
            }
            {medicals.map((item, index) => (
                <Stack p="10" w="100%">
                    <Card key={index}>
                        <Stack direction={['column', "row", "row"]}>
                            <Stack w={["100%", "25%", "25%"]} >
                                <Image
                                    objectFit='cover'
                                    src={item.medicalimage}
                                    alt="Medical image"
                                    height="fit-content" w="auto"
                                />
                            </Stack>
                            <Stack w={["100%", "50%", "50%"]}>
                                <CardHeader>
                                    <Heading as="h3" >{item.medicalname}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack direction={["column", "column", "row"]}>
                                        {/* event start date */}
                                        <Stack direction="row">
                                            <Heading
                                                fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                                                lineHeight="21px"
                                            > Quantity : {item.quantity}</Heading>
                                            <Heading
                                                fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                                                lineHeight="21px"
                                            > Address: {item.landmark}</Heading>
                                        </Stack>
                                    </Stack>
                                </CardBody>
                            </Stack>

                            <Stack w={["100%", "50%", "30%"]}>
                                <CardHeader>
                                    <Flex spacing='4' direction={["column", "column", "row"]}>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                            <Avatar name={item.donorname} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1" />
                                            <Box>
                                                <Heading size='sm'>{item.donorname}</Heading>
                                                <Text>Donor</Text>
                                            </Box>
                                        </Flex>

                                        <Link display={["none", "flex", "flex"]} href={`tel:${item.phone} `}>
                                            <IconButton
                                                variant='outline'
                                                colorScheme='teal'
                                                aria-label='Call Sage'
                                                fontSize='20px'
                                                icon={<PhoneIcon />}

                                            />
                                        </Link>
                                    </Flex>
                                </CardHeader>

                                <CardBody>
                                    <Stack direction='row' spacing={4} justifyContent="center" w="100%">

                                        <Link display={["flex", "none", "none"]} href={`tel:${item.phone} `}>
                                            <Button leftIcon={<PhoneIcon />} align="center" rounded="20" bgColor="#20BC7E" variant='solid'>
                                                Call Us
                                            </Button>
                                        </Link>

                                        <Link href={`https://wa.me/${item.phone}`}>
                                            <Button leftIcon={<BsWhatsapp />} align="center" rounded="20" bgColor="#20BC7E" variant='solid'>
                                                Whatsapp Now
                                            </Button>
                                        </Link >
                                    </Stack >
                                </CardBody >
                            </Stack >

                        </Stack >
                    </Card >
                </Stack >
            )
            )
            }
        </>
    );
}