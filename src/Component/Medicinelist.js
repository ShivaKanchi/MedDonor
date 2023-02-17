import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link, Flex, Image, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
//redux
// import { useDispatch } from "react-redux";
// import { getMedicines } from "../Redux/Reducers/Medicine/medicine.action.js";

export default class MedicineCard extends React.Component {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getMedicines());
    // }, [localStorage]);
  
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData() {
        // const [events, setEvents] = useState([])
        // const dispatch = useDispatch()

        // const eventData = useSelector(state => state.events)
        // useEffect(() => {
        //   if (!events) {
        //     dispatch(getAllEvents())
        //     setEvents(eventData)
        //   }

        // }, [])
        fetch(`${process.env.REACT_APP_CLIENT_URL}/medicine`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                {this.state.data ? <p>
                    {this.state.data.data.map((item, i) => (
                        <>
                            <Flex key={item._id}
                                w="full" bgColor="#D9D9D9" direction={["column", "row", "row"]} p="10"
                            >
                                {/* Medicen image */}
                                <Flex alignSelf={["center", "flex-start", "flex-start"]} w={["none", "15%", "15%"]}>
                                    <Image w="150px" h="150px" borderRadius="full" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667166964/Med%20Donner/91bz6RZlHZL._SX466__aaxevm.jpg" />
                                </Flex>
=======
        {this.state.data ? <p>
          {this.state.data.data.slice(0, 9).map((item, i) => (
            <Stack p="10" w="100%">
>>>>>>> d09d999b990bf01366f1186942638b8d967ebf2c

              <Card key={WrapItem._id}>
                <Stack direction={['column', "row", "row"]}>

                  <Stack w={["100%", "25%", "25%"]} >
                    <Image
                      objectFit='cover'
                      src={item.eventimage ? item.eventimage : "https://images.shiksha.com/mediadata/images/1627553136phphvAxM1.jpeg"}
                      alt="https://images.shiksha.com/mediadata/images/1627553136phphvAxM1.jpeg"
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
                        <Stack direction="row">
                          <Heading
                            fontFamily="IBM Plex Sans" fontWeight="bold" fontSize="16px"
                            lineHeight="21px"
                          > Quantity : {item.quantity}</Heading>

                          <Heading
                            fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                            lineHeight="21px"
                          > Expiry  Date: {item.expiry}</Heading>
                          
                
                        </Stack>
                      </Stack>
                      {/* address
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
                      {/* <Stack direction={["column", "column", "row"]} pt={["5", "0", "2"]}>
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
                      </Stack> */}
                      {/* Certificate */}
                      {/* <Stack direction={["column", "column", "row"]} pt={["5", "0", "2"]}>
                        <Stack direction="row">
                          <Heading
                            fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="bold" fontSize="16px"
                            lineHeight="21px"
                          > Certificate :
                          </Heading>
                          <Text >
                            {item.certificate}
                          </Text>
                        </Stack>
                      </Stack> */} 

                    </CardBody>

                  </Stack>

                  <Stack w={["100%", "50%", "30%"]}>
                    <CardHeader>

                      <Flex spacing='4' direction={["column", "column", "row"]}>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                          <Avatar name={item.coordinator} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1" />

                          <Box>
                            <Heading size='sm'>{item.coordinator}</Heading>
                            <Text>Donner</Text>
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
                          <Button leftIcon={<PhoneIcon />} align="center" rounded="20" bgColor="#20BC7E" variant='solid'>
                            Call Us
                          </Button>
                        </Link>

                        <Link href={`https://wa.me/${item.coordinatorphno}`}>
                          <Button leftIcon={<BsWhatsapp />} align="center" rounded="20" bgColor="#20BC7E" variant='solid'>
                            Whatsapp Now
                          </Button>
                        </Link>
                      </Stack>
                    </CardBody>
                  </Stack>


<<<<<<< HEAD

                                </VStack>

                                {/* Profile image */}
                                <Flex alignSelf="center" w={["none", "10%", "10%"]}>
                                    <Image w="80px" h="80px" borderRadius="full" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667032050/Med%20Donner/user_1_mgfqpg.svg" />
                                </Flex>

                                <Flex alignSelf={["center", "flex-start", "flex-start"]} direction="column" w={["none", "20%", "20%"]} p="5">
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" pb="2" alignSelf={["center", "flex-start", "flex-start"]}
                                    >
                                        Donor :
                                    </Heading>
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" alignSelf={["center", "flex-start", "flex-start"]} pb="2"
                                    >
                                        {item.donorname}
                                    </Heading>
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" alignSelf={["center", "flex-start", "flex-start"]} pb="5"
                                    >
                                        +91 8850293795
                                    </Heading>
                                    <Button
                                        background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf={["center", "flex-start", "flex-start"]}

                                    >
                                        Chat Now
                                    </Button>
                                </Flex>

                            </Flex></>
=======
                </Stack>
              </Card>
            </Stack>
>>>>>>> d09d999b990bf01366f1186942638b8d967ebf2c
                    ))
                    }

                </p> :
                    // if no data spinner
                    <Stack w="100%" align={"center"}>

                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='#20BC7E'
                            size='xl'
                            mb={5}
                        />
                    </Stack>
                }
            </div >
        );
    }
}