import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link, Flex, Image, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";

export default class MedicineCard extends React.Component {

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
                {this.state.data ? <p>
                    {this.state.data.Medicines.slice(0, 9).map((item, i) => (
                        <>
                            <Flex
                                w="full" bgColor="#D9D9D9" direction={["column", "row", "row"]} p="10"
                            >
                                {/* Medicen image */}
                                <Flex alignSelf={["center", "flex-start", "flex-start"]} w={["none", "15%", "15%"]}>
                                    <Image w="150px" h="150px" borderRadius="full" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667166964/Med%20Donner/91bz6RZlHZL._SX466__aaxevm.jpg" />
                                </Flex>

                                <VStack w={["none", "55%", "55%"]} >
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
                                        fontSize={["lg", "xl", "2xl"]} lineHeight={["lg", "xl", "2xl"]}
                                        letterSpacing="0.023em" pt={["5", "0", "0"]} alignSelf={["center", "center", "flex-Start"]}
                                        textAlign="center" pl={["0", "0", "10"]}
                                    >
                                        {item.medname}
                                    </Heading>
                                    <Stack direction={["column", "column", "row"]} alignSelf={["center", "flex-Start", "flex-Start"]} w="full" >
                                        {/* made a row for event and time */}
                                        <Flex direction="row">
                                            {/* for laptop */}

                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="400"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["none", "flex", "flex"]}
                                                pl="10"
                                            >
                                                Quantity : {item.quantity}
                                            </Heading>

                                            {/* mobile responsive */}

                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="600"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["flex", "none", "none"]}
                                            >
                                                Quantity :
                                            </Heading>
                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["flex", "none", "none"]}
                                                pl="10"
                                            >
                                                Expiry Date :
                                            </Heading>

                                            {/* mobile responsive end */}
                                        </Flex>

                                        {/* made a row for date & time value  */}

                                        <Flex direction="row">

                                            {/* for laptop view */}
                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["none", "flex", "flex"]}
                                                pl="10"
                                            >
                                                Expiry  Date: {item.expiry}
                                            </Heading>

                                            {/* for mobile responsive  */}

                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="medium" fontWeight="400"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["flex", "none", "none"]}
                                            >
                                                {item.quantity}
                                            </Heading>

                                            <Heading
                                                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                                fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                                letterSpacing="0.023em" display={["flex", "none", "none"]}
                                                pl="10"
                                            >
                                                {item.expiry}
                                            </Heading>
                                        </Flex>
                                        {/*  mobile responsive  end*/}

                                    </Stack>

                                    {/* for laptop */}
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" alignSelf="flex-Start" pl={["0", "0", "10"]}
                                        display={["none", "flex", "flex"]}
                                    >
                                        Address : 505, 11-A, Ashish complex , dahiiser (E)
                                    </Heading>
                                    {/* for mobile device */}
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" alignSelf="flex-Start" pl={["0", "0", "10"]}
                                        display={["flex", "none", "none"]}
                                    >
                                        Address
                                    </Heading>
                                    <Heading
                                        fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="400"
                                        fontSize={["md", "lg", "xl"]} lineHeight={["md", "lg", "xl"]}
                                        letterSpacing="0.023em" alignSelf="flex-Start" pl={["0", "0", "10"]}
                                        display={["flex", "none", "none"]}
                                    >
                                        505, 11-A, Ashish complex , dahiiser (E)
                                    </Heading>

                                    {/* for laptop */}



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
                                        {item.donor}
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
                    ))
                    }

                </p> :
                    // if no data spinner
                    <Stack w="100%" align={"center"}>

                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Stack>
                }
            </div >
        );
    }
}