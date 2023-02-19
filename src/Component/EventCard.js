import React, { Component, useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Image, Flex, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../Redux/Reducers/Event/event.action';

export default function EventCard() {
  const [events, setEvents] = useState([])
  const dispatch = useDispatch()
  const eventData = useSelector(state => state.event.events)
  useEffect(() => {
    dispatch(getAllEvents())
    setEvents(eventData)
  }, [eventData])

  return (
    <div>
      {events ? <p>
        {events.map((item, i) => (
          <Stack p="10" w="100%">

            <Card key={WrapItem._id}>
              <Stack direction={['column', "row", "row"]}>

                <Stack w={["100%", "25%", "25%"]} >
                  <Image
                    objectFit='cover'
                    src={item.eventimage ? item.eventimage : "https://images.shiksha.com/mediadata/images/1627553136phphvAxM1.jpeg"}
                    alt="https://images.shiksha.com/mediadata/images/1627553136phphvAxM1.jpeg"
                    height="auto" w="auto"
                  />
                </Stack>

                <Stack w={["100%", "50%", "50%"]}>

                  <CardHeader>
                    <Heading as="h3" >{item.eventname}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack direction={["column", "column", "row"]}>
                      {/* event start date */}
                      <Stack direction="row">
                        <Heading
                          fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                          lineHeight="21px"
                        > Event Date :</Heading>

                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                          lineHeight="21px"
                        > {item.startdate}</Heading>
                        {/* event end date */}
                        <Heading
                          fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                          lineHeight="21px" pl={["2", "2", "5"]}
                        > Event End Date :</Heading>
                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                          lineHeight="21px"
                        > {item.enddate}</Heading>
                      </Stack>
                    </Stack>
                    {/* address */}
                    <Stack direction={["column", "column", "row"]} pt={["5", "0", "2"]}>
                      <Stack direction="row">
                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="bold" fontSize="16px"
                          lineHeight="21px"
                        > Address :
                        </Heading>
                        <Text >
                          {item.landmark},
                        </Text>
                        <Text >
                          {item.address}
                        </Text>
                      </Stack>
                    </Stack>
                    {/* address */}
                    <Stack direction={["column", "column", "row"]} pt={["5", "0", "2"]}>
                      <Stack direction="row">
                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="bold" fontSize="16px"
                          lineHeight="21px"
                        > City :
                        </Heading>
                        <Text >
                          {item.city}
                        </Text>
                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="bold" fontSize="16px"
                          lineHeight="21px"
                        > state :
                        </Heading>
                        <Text  >
                          {item.state}
                        </Text>
                      </Stack>
                    </Stack>
                    {/* Certificate */}
                    <Stack direction={["column", "column", "row"]} pt={["5", "0", "2"]}>
                      <Stack direction="row">
                        <Heading
                          fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="bold" fontSize="16px"
                          lineHeight="21px"
                        > Certificate :
                        </Heading>
                        <Text >
                          {item.certificate.toString()}
                        </Text>
                      </Stack>
                    </Stack>

                  </CardBody>

                </Stack>

                <Stack w={["100%", "50%", "25%"]}>
                  <CardHeader>

                    <Flex spacing='4' direction={["column", "column", "row"]}>
                      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={item.coordinator} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1" />

                        <Box>
                          <Heading size='sm'>{item.coordinator}</Heading>
                          <Text>Co-ordinator</Text>
                        </Box>
                      </Flex>

                      <Link display={["none", "flex", "flex"]} href={`tel:${item.coordinatorphno}`}>
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

                      <Link display={["flex", "none", "none"]} href={`tel:${item.coordinatorphno}`}>
                        <Button leftIcon={<PhoneIcon />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                          Call Us
                        </Button>
                      </Link>

                      <Link href={`https://wa.me/${item.coordinatorphno}`}>
                        <Button leftIcon={<BsWhatsapp />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                          Whatsapp Now
                        </Button>
                      </Link>
                    </Stack>
                  </CardBody>
                </Stack>


              </Stack>
            </Card>
          </Stack>
        ))}

      </p> :
        // if no data spinner
        <Stack w="100%" align={"center"}>

          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#20BC7E'
            size='xl'
          />
        </Stack>
      }
    </div>
  );
}
