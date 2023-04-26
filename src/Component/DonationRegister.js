import {
  Flex, Heading, Image, Input, Button, Stack, ScaleFade, HStack, Card, CardHeader, CardBody, Avatar, Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure, FormControl, FormLabel,
} from '@chakra-ui/react'
import { FcExpired } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import DatePicker from "react-datepicker";
import React, { useState, useEffect, useRef, used } from 'react'
import { BsEmojiSmile, BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaClinicMedical } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assest/logo.png'
import { useInView } from "react-intersection-observer";
import { PhoneIcon } from "@chakra-ui/icons"
import { BsWhatsapp } from "react-icons/bs";
import { getRequests, addRequest } from '../Redux/Reducers/Request/request.action';

export default function DonationRegister() {
  const [requests, setRequests] = useState([])

  const dispatch = useDispatch()
  const requestdatagot = useSelector((state) => state.request.requestlist)
  useEffect(() => {
    dispatch(getRequests())
  }, [])

  useEffect(() => {
    if (requestdatagot) {
      setRequests(requestdatagot);
    }
  }, [requestdatagot]);

  console.log("MEdicine data", requests)

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  //model code end
  const textColor = useColorModeValue("black", "white")
  const bgcolor = useColorModeValue("white", '#1A202C')
  // const [startDate, setStartDate] = useState(new Date());
  const [requestdata, setRequestdata] = useState({
    request: "",
    desc: "",
    phone: "",
    username: "",
  });
  // const [isLoading, setisLoading] = useState(false);
  // const [images, setImages] = useState("");
  // const [url, setUrl] = useState("");
  // useEffect(() => {
  //   if (images) {
  //     uploadImage()
  //     console.log("hello")
  //   }
  // }, [images])
  // useEffect(() => {
  //   if (url) {
  //     setMedicinedata({ ...medicinedata, medpic: url })
  //     console.log("bye")
  //   }
  // }, [url])

  // const uploadImage = () => {
  //   const data = new FormData()
  //   data.append("file", images)
  //   data.append("upload_preset", "Med_Donor")
  //   data.append("cloud_name", "ssdeveloper")
  //   fetch("  https://api.cloudinary.com/v1_1/ssdeveloper/image/upload", {
  //     method: "post",
  //     body: data
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setUrl(data.url)

  //     })
  //     .catch(err => console.log(err))
  // }

  const handleChange = ({ currentTarget: Input }) => {
    setRequestdata({ ...requestdata, [Input.name]: Input.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("MEdicine data", requestdata)
    // e.preventDefault()
    // if (url) {
    //   //setMedicinedata({})
    //   setisLoading(false);
    //   //await dispatch();
    //   // navigate("/")
    // }

  };

  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666944220/Med%20Donner/doctorBackLogo_1_otk1lt.svg', 'https://res.cloudinary.com/ssdeveloper/image/upload/v1666944108/Med%20Donner/doctorBackLogo_q2si8u.svg')

  const { ref, inView } = useInView({
    threshold: 0.9, // Trigger animation when the component is 50% in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <>
      <ScaleFade in={inView} initialScale={0.5}>
        <Flex w="full" justifyContent="center" mt="50" ref={ref} >
          {/* animation  */}
          {/* animationend  */}
          {/* box */}
          <Flex w="80%" borderRadius="lg" boxShadow="0px 0px 5px" h="fit-content"    >
            {/* boxend */}
            <Flex bgColor={bgcolor} w={["100%", "80%", "80%"]} p={["5", "10", "10"]} direction="column" justifyContent={["center", "none", "none"]}
              alignSelf={["center", "none", "none"]}
            >
              <Heading
                color="#FFB87A" fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                fontSize="21px" lineHeight="28px" letterSpacing="0.023em" >
                Urgent medicine need ?
              </Heading>
              <HStack justifyContent="space-between" >
                <Heading
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
                  fontSize={["4xl", "5xl", "6xl"]} lineHeight={["4xl", "5xl", "6xl"]} letterSpacing="0.023em" >
                  Add your medicine request
                </Heading>
                <Button
                  onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                  }}
                > Add </Button>
              </HStack>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                  <ModalHeader>Add your request</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Medicine name</FormLabel>
                      <Input ref={initialRef} placeholder='Medicine' value={requestdata.request} onChange={() => handleChange()} />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Description</FormLabel>
                      <Input placeholder='Description' value={requestdata.desc} onChange={() => handleChange()} />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Contact</FormLabel>
                      <Input placeholder='9876543210' value={requestdata.phone} onChange={() => handleChange()} />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Name</FormLabel>
                      <Input placeholder='Shiva Kanchi' value={requestdata.username} onChange={() => handleChange()} />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onSubmit={handleSubmit}>
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>


              {/* first row */}
              <Flex direction={"column"} p="10" justifyContent={["center", "space-between", "space-between"]} >
                <></>
                {
                  requests.map((data) => { console.log(data) })
                }
                {
                  requests ? (
                    requests.map((onerequest) => (
                      < Card mb={10} >
                        <Stack direction={['column', "row", "row"]}>

                          <Stack alignSelf="center" alignItems="center" w={["100%", "25%", "25%"]} >
                            <Avatar
                              h="50%" w="50%" size='xs'
                              src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1"} />
                          </Stack>
                          <Stack w={["100%", "50%", "50%"]}>
                            <CardHeader >
                              <Heading as={"h4"} >{onerequest.username ? onerequest.username : "Shiva Kanchi"}</Heading>
                            </CardHeader>
                            <CardBody >
                              <Text>{onerequest.request ? onerequest.request : "Humulin"}</Text>
                            </CardBody>
                          </Stack>
                          <Stack w={["100%", "25%", "25%"]} alignSelf="center" pr={5}>
                            <Link display={["flex", "none", "none"]} href={`tel:${onerequest.phone ? onerequest.phone : 8928656498}`}>
                              <Button leftIcon={<PhoneIcon />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                                Call Us
                              </Button>
                            </Link>
                            <Link href={`https://wa.me/${onerequest.phone ? onerequest.phone : 8928656498}`}>
                              <Button leftIcon={<BsWhatsapp />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                                Whatsapp Now
                              </Button>
                            </Link>
                          </Stack>
                        </Stack>
                      </Card>


                    ))
                  ) : (
                    <Card mb={10}>
                      <Stack direction={['column', "row", "row"]}>

                        <Stack alignSelf="center" alignItems="center" w={["100%", "25%", "25%"]} >
                          <Avatar
                            h="50%" w="50%" size='xs'
                            src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1"} />
                        </Stack>
                        <Stack w={["100%", "50%", "50%"]}>
                          <CardHeader >
                            <Heading as={"h4"} >{onerequest.username ? onerequest.username : "Shiva Kanchi"}</Heading>
                          </CardHeader>
                          <CardBody >
                            <Text>{onerequest.request ? onerequest.request : "Humulin"}</Text>
                          </CardBody>
                        </Stack>
                        <Stack w={["100%", "25%", "25%"]} alignSelf="center" pr={5}>
                          <Link display={["flex", "none", "none"]} href={`tel:${onerequest.phone ? onerequest.phone : 8928656498}`}>
                            <Button leftIcon={<PhoneIcon />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                              Call Us
                            </Button>
                          </Link>
                          <Link href={`https://wa.me/${onerequest.phone ? onerequest.phone : 8928656498}`}>
                            <Button leftIcon={<BsWhatsapp />} align="center" rounded="20" colorScheme='teal' variant='solid'>
                              Whatsapp Now
                            </Button>
                          </Link>
                        </Stack>
                      </Stack>
                    </Card>

                  )
                }

              </Flex>
            </Flex>
            <Flex flexDirection="column" justifyContent="center" Position="relative" bgColor="#FFB87A" w="30%" display={["none", "none", "flex"]}>
              <Image alignSelf="center" src={logo} />
              <Heading fontWeight="bold" alignSelf="center" textColor={textColor} fontSize="lg" >MedDonor</Heading>
            </Flex>
          </Flex>
        </Flex>
      </ScaleFade >
      {/* Meddoner register */}
    </>
  )
}


    // useEffect (async ()=>  {

    //     const data = await fetch('http://localhost:8081/events', {
    //     method: 'GET',
    //     // mode: 'no-cors',
    //     headers: { 'Content-type': 'application/json' },
    // }).then((t) =>
    //     // console.log(t)
    //     t.json()
    // )
    // console.log(data.message);
    // },[])

    // POST METHOD
    // const data = await fetch('http://www.payment.ultronofficial.online/api/razorpay', {
    //     method: 'POST',
    //     // mode: 'no-cors',
    //     body: JSON.stringify({
    //         amount: document.getElementById("amount").value,
    //         name:document.getElementById("firstname").value,
    //     }),
    //     headers: { 'Content-type': 'application/json' },
    // }).then((t) =>
    //     // console.log(t)
    //     t.json()
    // )
    // console.log(data);


