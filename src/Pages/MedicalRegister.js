import {
    Heading,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Select,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Box,
} from '@chakra-ui/react'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { createRef, useEffect, useState } from 'react'
import * as Yup from "yup"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Lottie from 'react-lottie';
import register from './../lotties/register.json';
import ImageUpload from '../Component/ImageUpload'
import { addEvent } from '../Redux/Reducers/Event/event.action'
import { useDispatch } from 'react-redux'


export default function MedicalRegister(props) {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [value, setValue] = React.useState({
        medicalname: "",
        medicalimage: "",
        type: true,
        landmark: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        holiday: "",
        workinghour: "",
        coords: ""
    })
    const [setError] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Med_Donor")
        data.append("cloud_name", "ssdeveloper")
        fetch("  https://api.cloudinary.com/v1_1/ssdeveloper/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }
    // const response = await axios
    // .post(`${process.env.REACT_APP_CLIENT_URL}/event/new` ,values)
    // .catch((err) => {
    //     if (err && err.response) setError(err.response.data.data);
    // });
    // if (response) {
    // alert("Register done");
    // }
    //  const navigate = useNavigate();
    useEffect(() => {
        console.log("USEeffect")
        setValue({ ...value, eventimage: url });
        setValue({ ...value, ...formik.values });
    }, [url])
    const dispatch = useDispatch();

    const onSubmit = () => {

        console.log("yaaaaaaaaaaaaa", value)
        // console.log("naaaaaaaaaaaaa", url)
        // dispatch(addEvent(formik.values));
        // setValue({})
        // navigate("/")
        // try {
        //     // const url = "http://localhost:8080/api/users";
        //     const url = `${process.env.REACT_APP_CLIENT_URL}/event/new`;

        //     const { values: res } = await axios.post(url, formik.values);
        //     console.log(res.message);
        //     window.location = "/";

        // } catch (error) {
        //     if (
        //         error.response &&
        //         error.response.status >= 400 &&
        //         error.response.status <= 500
        //     ) {
        //         setError(error.response.data.message);
        //     }
        // }
    }

    const formik = useFormik({
        initialValues: {
            medicalname: "",
            // medicalimage: "",
            type: "",
            landmark: "",
            address: "",
            phone: "",
            city: "",
            state: "",
            pincode: "",
            holiday: "",
            workinghour: "",
            coords: ""
        },
        validationSchema: Yup.object({
            medicalname: Yup.string(),
            //dateTime: Yup.date().required("College Name requried"),
            landmark: Yup.string(),
            address: Yup.string(),
            //appartment: Yup.string().required("appartment required"),
            city: Yup.string(),
            state: Yup.string(),
            // pincode: Yup.number(),
            coordinatorname: Yup.string(),
            // certificate: Yup.boolean().required("certificate required"),
            pincode: Yup.number(),
            phone: Yup.number(),
            //whatsappNumber: Yup.number().min(10, "mobile no. should be 10 digit")
        }),
        onSubmit
    });

    // const handleSubmit = async () => {
    //     // e.preventDefault();
    //     try {
    //         // const url = "http://localhost:8080/api/users";
    //         const url = "http://localhost:8081/events";

    //         const { values: res } = await axios.post(url, formik.values);
    //         // navigate("/login");
    //         console.log(res.message);
    //         window.location = "/";
    //     } catch (error) {
    //         console.log(error)
    //     }

    // };

    // lottie animation loop control
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: register,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    // console.log(formik.values);
    return (
        <VStack h="100vh" p="50">
            <Box boxShadow='dark-lg' w="full" pb={["20", "0", "0"]} rounded='md'  >
                <Stack direction={["column", "row", "row"]} w="full" h="full" >
                    <VStack w={["full", "50%", "50%"]} alignSelf="center" justifyContent="center" h="full" display={["none", "flex", "flex"]} bg="#FFB87A" spacing="5vh" >

                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                        {/* <Text fontWeight="semibold" fontSize="50"> Welcome back</Text>
                <Center>  
                  <Link href="/signin" w="full" >
                    <Button rounded='md'  bg="#20BC7E" > Sign In</Button>
                  </Link>
                </Center> */}

                    </VStack>

                    <VStack
                        as="form"
                        mx="auto"
                        w={["full", "50%", "50%"]}
                        h="full"
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                        spacing="5"
                        padding={["5", "10", "20"]}
                    >
                        <Heading>Medical Registration</Heading>

                        <FormControl isInvalid={formik.errors.medicalname && formik.touched.medicalname}>
                            <FormLabel>Medical Name</FormLabel>
                            <Input
                                name="medicalname"
                                onChange={formik.handleChange}
                                value={formik.values.medicalname}
                                placeholder="enter college name"
                            />
                            <FormErrorMessage>{formik.errors.medicalname}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.phone && formik.touched.phone}>
                            <FormLabel>Contact Number</FormLabel>
                            <Input
                                name="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                placeholder="phone"
                                size="md"
                                type="number"
                            />
                            <FormErrorMessage>{formik.errors.pincode}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.landmark && formik.touched.landmark}>
                            <FormLabel>Landmark</FormLabel>
                            <Input
                                name="landmark"
                                onChange={formik.handleChange}
                                value={formik.values.landmark}
                                placeholder="near shaktinagri"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.landmark}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.address && formik.touched.address}>
                            <FormLabel>Address</FormLabel>
                            <Input
                                name="address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                placeholder="Landmark, Road, Area"
                                size="md"
                                type="address"
                            />
                            <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.city && formik.touched.city}>
                            <FormLabel>City</FormLabel>
                            <Select
                                id="city"
                                name="city"
                                onChange={formik.handleChange}
                                placeholder='City'
                                value={formik.values.city} >
                                <option value='Andhra Pradesh'>Andhra Pradesh</option>

                            </Select>
                            <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.state && formik.touched.state}>
                            <FormLabel>State</FormLabel>
                            <Select placeholder='state' name="state" value={formik.values.state} onChange={formik.handleChange}>
                                <option value='Andhra Pradesh'>Andhra Pradesh</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.state}</FormErrorMessage>
                        </FormControl>

                        {/* <FormControl>
                            <FormLabel>Start Date</FormLabel>
                            <Input
                                name="startdate"
                                onChange={formik.handleChange}
                                value={formik.values.startdate}
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>End Date</FormLabel>
                            <Input
                                name="enddate"
                                onChange={formik.handleChange}
                                value={formik.values.enddate}
                                placeholder="Select Date and Time"
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl> */}


                        <FormControl isInvalid={formik.errors.pincode && formik.touched.pincode}>
                            <FormLabel>Pincode</FormLabel>
                            <Input
                                name="pincode"
                                onChange={formik.handleChange}
                                value={formik.values.pincode}
                                placeholder="pincode"
                                size="md"
                                type="number"
                            />
                            <FormErrorMessage>{formik.errors.pincode}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.coordinator && formik.touched.coordinator} >
                            <FormLabel>Owner Name</FormLabel>
                            <Input
                                name="coordinator"
                                onChange={formik.handleChange}
                                value={formik.values.coordinator}
                                placeholder="Sasuke"
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.coordinator}</FormErrorMessage>
                        </FormControl>

                        {/* <FormControl isInvalid={formik.errors.coordinatorphno && formik.touched.coordinatorphno} >
                            <FormLabel>Co-Ordinator Phone No.</FormLabel>
                            <Input
                                name="coordinatorphno"
                                onChange={formik.handleChange}
                                value={formik.values.coordinatorphno}
                                placeholder="8850293795"
                                size="md"
                                type="number"
                            />
                            <FormErrorMessage>{formik.errors.coordinatorphno}</FormErrorMessage>
                        </FormControl> */}

                        {/* <FormControl isInvalid={formik.errors.certificate && formik.touched.certificate} >
                            <FormLabel>Certificate</FormLabel>
                            <RadioGroup name="certificate" onChange={formik.handleChange} value={value} >
                                <Stack direction='row'>
                                    <Radio colour="" value="true">yes</Radio>
                                    <Radio value="false">no</Radio>
                                </Stack>
                            </RadioGroup>
                            <FormErrorMessage>{formik.errors.certificate}</FormErrorMessage>
                        </FormControl> */}

                        <FormLabel>Upload Medical Photo</FormLabel>
                        <Input isReadOnly="true" type="file" onChange={(e) => setImage(e.target.files[0])}></Input>
                        <button onClick={uploadImage}>Upload</button>

                        <Button type="submit" variant="outline" >
                            Submit
                        </Button>

                    </VStack >
                </Stack>
            </Box>
        </VStack>
    )
}