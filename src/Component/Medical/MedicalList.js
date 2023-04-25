import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Card, CardHeader, CardBody, Avatar, Box, Heading, Text, Stack, WrapItem, Spinner, Button, IconButton, Link, Flex, Image, VStack } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicals } from "../../Redux/Reducers/Medical/medical.action.js";
import MapView from '../MapView/MapView.js';
import Pagination from '../Pagination/Pagination.js';
import geolib from 'geolib';
import MapG from '../MapView/GoogleMap/MapG.jsx';
export default function MedicalList({ currentlocation }) {
    // const map = useMap()
    // console.log('map center:', map.getCenter())
    const [medicals, setMedicals] = useState([])
    // const [currentlocation, setCurrentlocation] = useState({});
    const [mapmarker, setMapmarker] = useState();
    const [nearby, setNearby] = useState([]);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(10)

    //Get current pots
    const indexOfLastCard = currentPage * cardsPerPage;                    // 1*5=5  
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;               // 5-5=0
    const currentCards = medicals.slice(indexOfFirstCard, indexOfLastCard)    // 
    //Change page
    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }


    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const medicalData = useSelector(state => state.medical.medicals)

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         setCurrentlocation({
    //             latitude: position.coords.latitude,
    //             longitude: position.coords.longitude
    //         });
    //         console.log(currentlocation)
    //     });
    // }, []);
    useEffect(() => {
        dispatch(getAllMedicals()).then((data) => {
            setLoading(false)
            // console.log(data.payload)
            const mappoint = [];
            data.payload?.map(({ coords, medicalname, address, _id, ownerphone }) => mappoint.push(

                {
                    id: _id,
                    medicalname: medicalname,
                    address: address,
                    phone: ownerphone,
                    location: { lat: parseFloat(coords.split(",")[0]), lng: parseFloat(coords.split(",")[1]) },
                }

            ));
            // console.log(mappoint)
            setMapmarker(mappoint);
            // console.log("mapmarker", mapmarker, currentlocation)
        })
    }, [])

    useEffect(() => {
        if (medicalData) {
            setMedicals(medicalData);
        }
    }, [medicalData]);
    //   fetch(`${process.env.REACT_APP_CLIENT_URL
    //     }/medicine`)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       setMedicines({ data: responseJson })
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // console.log("set medicals worked",medicines)
    // console.log("set medicals worked", medicals, currentCards)
    // const getNearbyUsers = () => {
    //     const lat = currentlocation.latitude;
    //     const lng = currentlocation.longitude;

    //     console.log(lat, lng)
    //     const nearbyMedicals = [];

    //     medicals.forEach((medical) => {
    //         const medicalcord = medical.coords.split(",")
    //         console.log(medical.coords.split(","), medicalcord)
    //         const R = 6371; // Radius of the Earth in km
    //         const dLat = (medicalcord[0] - lat) * (Math.PI / 180);
    //         const dLng = (medicalcord[1] - lng) * (Math.PI / 180);
    //         const a =
    //             Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //             Math.cos(lat * (Math.PI / 180)) *
    //             Math.cos(medicalcord[0] * (Math.PI / 180)) *
    //             Math.sin(dLng / 2) *
    //             Math.sin(dLng / 2);
    //         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //         const d = R * c; // Distance between the two points in km

    //         if (d <= 1) {
    //             nearbyMedicals.push(medical);
    //         } else {
    //             console.log("no near by medicals")
    //         }
    //     });

    //     console.log(nearbyMedicals)
    // };

    // console.log(getNearbyUsers(19.203202, 72.848688));
    return (
        <>
            {loading &&
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
            {
                currentCards.map((item, index) => (
                    <Stack p="10" w="100%" key={index}>
                        <Card key={index}>
                            <Stack direction={['column', "row", "row"]}>
                                <Stack w={["100%", "25%", "25%"]} >
                                    <Box >
                                        <Image
                                            src={item.medicalimage}
                                            alt="Medical image"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </Box>
                                </Stack>
                                <Stack w={["100%", "50%", "80%"]}>
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
                                                > Working Hours : {item.workinghour ? item.workinghour : "6Am-12Pm"}</Heading>
                                                <Heading
                                                    fontFamily="IBM Plex Sans" fontStyle="normal" fontWeight="500" fontSize="16px"
                                                    lineHeight="21px"
                                                > Address: {item.landmark + " " + item.address}</Heading>
                                            </Stack>
                                        </Stack>
                                    </CardBody>
                                </Stack>

                                <Stack w={["100%", "50%", "20%"]}>
                                    <CardHeader>
                                        <Flex spacing='4' direction={["column", "column", "row"]}>
                                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                <Avatar name={item.owner} src={item.ownerimage ? item.ownerimage : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1"} />
                                                <Box>
                                                    <Heading size='sm'>{item.ownername}</Heading>
                                                    <Text>Owner</Text>
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
            <Pagination cardsPerPage={cardsPerPage} totalCards={medicals.length} paginate={paginate} currentnumber={currentPage} />
            {/* <MapView data={mapmarker} /> */}

            <MapG data={mapmarker} />

            {/* <Box className='map-box' border="3px solid white" display='flex' ml={5}> */}

            {/* <MapContainer center={[19.203611, 72.848344]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[19.203611, 72.848344]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}


            {/* <Text>Map SHOULD display here</Text>
                <MapContainer
                    center={[19.203611, 72.848344]}//[medicals[0]?.coords]
                    zoom={14}
                    scrollWheelZoom={false}
                    z-index={2}
                >
                    <TileLayer
                        attribution='<a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    < Marker position={[19.203611, 72.848344]} >
                        <Popup>"Shiv Medical"</Popup>
                    </Marker>

                    < Marker position={[19.203202, 72.848688]} >
                        <Popup>"Rudra Medical"</Popup>
                    </Marker>

                </MapContainer> */}



            {/* </Box> */}
        </>
    );
}