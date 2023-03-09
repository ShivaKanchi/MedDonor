import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link, Flex, Image, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getMedicines } from "../Redux/Reducers/Medicine/medicine.action.js";
import { SlUser } from "react-icons/sl";
import Pagination from './Pagination/Pagination.js';

export default function MedicineCard() {
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)

  //Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(10)

  // token 
  const token = localStorage.getItem("Donor");
  const dispatch = useDispatch()
  const medData = useSelector((state) => state.medicine.medicinelist)
  useEffect(() => {
    dispatch(getMedicines()).then((data) => {
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    if (medData) {
      setMedicines(medData);
    }
  }, [medData]);
  //Get current pots
  const indexOfLastCard = currentPage * cardsPerPage;                    // 1*5=5  
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;               // 5-5=0
  const currentCards = medicines.slice(indexOfFirstCard, indexOfLastCard)    // 
  //Change page
  const paginate = (pageNumber) => { setCurrentPage(pageNumber) }

  //   fetch(`${process.env.REACT_APP_CLIENT_URL
  //     }/medicine`)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setMedicines({ data: responseJson })
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  console.log("set mediciens worked", medicines, currentCards)

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
      {currentCards.map((item, index) => (
        <Stack p="10" w="100%">
          <Card key={index}>
            <Stack direction={['column', "row", "row"]}>
              <Stack w={["100%", "25%", "25%"]} >
                <Image
                  objectFit='cover'
                  src={item.medimage}
                  alt="Medicine image"
                  height="fit-content" w="auto"
                />
              </Stack>
              <Stack w={["100%", "50%", "50%"]}>
                <CardHeader>
                  <Heading as="h3" >{item.medname}</Heading>
                </CardHeader>
                <CardBody>
                  <Stack direction={["column", "column", "row"]}>
                    {/* event start date */}
                    <Stack direction="column">
                      <Heading
                        fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                        lineHeight="21px"
                      > Category : {item.category}</Heading>
                      <Heading
                        fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                        lineHeight="21px"
                      > Description : {item.desc}</Heading>
                      <Heading
                        fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                        lineHeight="21px"
                      > Expiry  Date: {item.expiry}</Heading>
                    </Stack>
                  </Stack>
                </CardBody>
              </Stack>

              <Stack w={["100%", "50%", "20%"]} alignSelf="center">
                <CardHeader>
                  <Flex spacing='4' direction={["column", "column", "row"]} >
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                      <Avatar name={item.donorname} src={item.donorimage ? item.donorimage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1"} />
                      <Box>
                        <Heading size='sm'>{item.donorname ? item.donorname : "Shiva"}</Heading>
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

                    <Link href={token ? "/talknow" : "/signin"}>
                      <Button leftIcon={token ? <PhoneIcon /> : <SlUser />} align="center" rounded="20" bgColor="#20BC7E" variant='solid'>
                        {token ? "Talk Now" : "Sigin"}
                      </Button>
                    </Link>

                  </Stack >
                </CardBody >
              </Stack >

            </Stack >
          </Card >
        </Stack >
      )
      )
      }
      <Pagination mb={10} cardsPerPage={cardsPerPage} totalCards={medicines.length} paginate={paginate} />
    </>
  );
}