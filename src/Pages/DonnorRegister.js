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
import { add } from '../Redux/Reducers/Medicine/medicine.action'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function DonnerRegister(props) {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [value, setValue] = React.useState({
        medname: "",
        medimage: "",
        category: "",
        desc: "",
        expiry: "",
        quantity: "",
        address: "",
        phone: "",
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
            donorname: "",
            medname: "",
            medimage: "",
            category: "",
            desc: "",
            expiry: "",
            quantity: "",
            address: "",
            phone: "",
        },
        validationSchema: Yup.object({
            donorname: Yup.string(),
            medname: Yup.string(),
            category: Yup.string(),
            desc: Yup.string(),
            expiry: Yup.string(),
            quantity: Yup.string(),
            address: Yup.string(),
            phone: Yup.number().min(10),
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
                        <Heading>Donnor Registration</Heading>

                        <FormControl isInvalid={formik.errors.donorname && formik.touched.donorname}>
                            <FormLabel> Donor name</FormLabel>
                            <Input
                                name="donorname"
                                onChange={formik.handleChange}
                                value={formik.values.donorname}
                                placeholder="Suske Uchiha"
                            />
                            <FormErrorMessage>{formik.errors.donorname}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.phone && formik.touched.phone}>
                            <FormLabel>Contact Number</FormLabel>
                            <Input
                                name="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                placeholder="8928656498"
                                size="md"
                                type="number"
                            />
                            <FormErrorMessage>{formik.errors.pincode}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.medname && formik.touched.medname}>
                            <FormLabel>Medicine Name</FormLabel>
                            <Input
                                name="medname"
                                onChange={formik.handleChange}
                                value={formik.values.medname}
                                placeholder="DOlo 65"
                            />
                            <FormErrorMessage>{formik.errors.medname}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.category && formik.touched.category}>
                            <FormLabel>Medicine Category</FormLabel>
                            <Select placeholder='Select Category' name="" value={formik.values.category} onChange={formik.handleChange}>
                                <option value='Analgesics'>Analgesics</option>
                                <option value='Antacids'>Antacids</option>
                                <option value='Antianxiety Drugs'>Antianxiety Drugs</option>
                                <option value='Antiarrhythmics'>Antiarrhythmics</option>
                                <option value='Antibacterials'>Antibacterials</option>
                                <option value='Antibiotics'>Antibiotics</option>
                                <option value='Anticoagulants and Thrombolytics'>Anticoagulants and Thrombolytics</option>
                                <option value='Anticonvulsants'>Anticonvulsants</option>
                                <option value='Antidepressants'>Antidepressants</option>
                                <option value='Antidiarrheals'>Antidiarrheals</option>
                                <option value='Antiemetics'>Antiemetics</option>
                                <option value='Antifungals'>Antifungals</option>
                                <option value='Antihistamines'>Antihistamines</option>
                                <option value='Antihypertensives'>Antihypertensives</option>
                                <option value='Anti-Inflammatories'>Anti-Inflammatories</option>
                                <option value='Antineoplastics'>Antineoplastics</option>
                                <option value='Antineoplastics'>Antineoplastics</option>
                                <option value='Antipyretics'>Antipyretics</option>
                                <option value='Antivirals'>Antivirals</option>
                                <option value='Barbiturates'>Barbiturates</option>
                                <option value='Beta-Blockers'>Beta-Blockers</option>
                                <option value='Bronchodilators'>Bronchodilators</option>
                                <option value='Cold Cures'>Cold Cures</option>
                                <option value='Corticosteroids'>Corticosteroids</option>
                                <option value='Cough Suppressants'>Cough Suppressants</option>
                                <option value='Cytotoxics'>Cytotoxics</option>
                                <option value='Decongestants'>Decongestants</option>
                                <option value='Diuretics'>Diuretics</option>
                                <option value='Expectorant'>Expectorant</option>
                                <option value='Hormones'>Hormones</option>
                                <option value='Hypoglycemics (Oral)'>Hypoglycemics (Oral)</option>
                                <option value='Immunosuppressives'>Immunosuppressives</option>
                                <option value='Laxatives'>Laxatives</option>
                                <option value='Muscle Relaxants'>Muscle Relaxants</option>
                                <option value='Sedatives'>Sedatives</option>
                                <option value='Tranquilizer'>Tranquilizer</option>
                                <option value='Vitamins'>Vitamins</option>
                                <option value=''>other type</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.desc && formik.touched.desc}>
                            <FormLabel>Description</FormLabel>
                            <Input
                                name="desc"
                                onChange={formik.handleChange}
                                value={formik.values.desc}
                                placeholder=""
                                size="md"
                            />
                            <FormErrorMessage>{formik.errors.desc}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.expiry && formik.touched.expiry}>
                            <FormLabel>Expiry</FormLabel>
                            <Input
                                name="expiry"
                                onChange={formik.handleChange}
                                value={formik.values.expiry}
                                placeholder="Select Date "
                                size="md"
                                type="datetime-local"
                            />
                        </FormControl>

                        <FormControl isInvalid={formik.errors.quantity && formik.touched.quantity}>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                name="quantity"
                                onChange={formik.handleChange}
                                value={formik.values.quantity}
                                placeholder="2"
                                size="md"
                                type="number"
                            />
                            <FormErrorMessage>{formik.errors.quantity}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.address && formik.touched.address}>
                            <FormLabel>Address</FormLabel>
                            <Input
                                name="address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                placeholder="Society, Road, Area"
                                size="md"
                                type="address"
                            />
                            <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                        </FormControl>

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