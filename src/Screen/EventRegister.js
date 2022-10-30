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
    Button
} from '@chakra-ui/react'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"

export default function EventRegister() {

    const [value, setValue] = React.useState('no')
    const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            startDate: "",
            endDate: "",
            city: "",
            state: "",
            pincode: "",
            coordinator: "",
            coordinatorphno: "",
            certificate: "",
        },
        validationSchema: Yup.object({
            collageName: Yup.string().required("College Name required").min(6, " Collage Name is too short"),
            dateTime: Yup.date().required("College Name requried"),
            address: Yup.string().required("address required"),
            appartment: Yup.string().required("appartment required"),
            city: Yup.string().required("City required"),
            state: Yup.string().required("State required"),
            pincode: Yup.number().required("pincode required").min(6, " please enter pincode properly"),
            personName: Yup.string().required("Co-ordinator Name required").min(6, " Enter FullName"),
            // certificate: Yup.boolean().required("certificate required"),
            number: Yup.number().required("Number is Required").min(10, "mobile no. should be 10 digit"),
            whatsappNumber: Yup.number().min(10, "mobile no. should be 10 digit")
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null));
            actions.resetForm();
            handleSubmit();
        },
        onChange: () => {
            handleChange();
        }
    });
    const [data, setData] = useState({
        name: "",
        address: "",
        startDate: "",
        endDate: "",
        city: "",
        state: "",
        pincode: "",
        coordinator: "",
        coordinatorphno: "",
        certificate: "",
    });
    const [err, setError] = useState("");
    // const { isOpen } = useDisclosure({isOpen})

    const handleChange = ({ currentTarget: Input }) => {
        setData({ ...data, [Input.name]: Input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = "http://localhost:8080/api/users";
            const url = "http://localhost:8081/Events";
            const { data: res } = await axios.post(url, data);
            // navigate("/login");
            console.log(res.message);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(err.response.data.message);
            }
        }
        console.log(data);
    };

    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: "90%", md: 500 }}
            h="full"
            justifyContent="center"
            onSubmit={handleSubmit}
            spacing="5"
        >
            <Heading>Event Registration</Heading>

            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                <FormLabel>College Name</FormLabel>
                <Input
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="enter college name"
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input
                    name="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
            </FormControl>
            <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                    name="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
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
                <Input
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    placeholder="Mumbai"
                    size="md"
                    type="address"
                />
                <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.state && formik.touched.state}>
                <FormLabel>State</FormLabel>
                <Select placeholder='Maharashtra'>
                    <option value='Andhra Pradesh'>Andhra Pradesh</option>
                    <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                    <option value='Assam'>Assam</option>
                    <option value='Bihar'>Bihar</option>
                    <option value='Chhattisgarh'>Chhattisgarh</option>
                    <option value='Goa'>Goa</option>
                    <option value='Gujarat'>Gujarat</option>
                    <option value='Haryana'>Haryana</option>
                    <option value='Himachal Pradesh'>Himachal Pradesh</option>
                    <option value='Jharkhand'>Jharkhand</option>
                    <option defaultValue="Maharashtra"> Maharashtra</option>
                </Select>
                <FormErrorMessage>{formik.errors.state}</FormErrorMessage>
            </FormControl>

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
                <FormLabel>Co-Ordinator Name</FormLabel>
                <Input
                    name="coordinator"
                    onChange={formik.handleChange}
                    value={formik.values.coordinator}
                    placeholder="Sasuke"
                    size="md"
                />
                <FormErrorMessage>{formik.errors.coordinator}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.certificate && formik.touched.certificate} >
                <FormLabel>Certificate</FormLabel>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                        <Radio value='yes'>yes</Radio>
                        <Radio value='no'>no</Radio>
                    </Stack>
                </RadioGroup>
                <FormErrorMessage>{formik.errors.certificate}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.coordinatorphno && formik.touched.coordinatorphno}>
                <FormLabel>Contact Number</FormLabel>
                <Input
                    name="coordinatorphno"
                    onChange={formik.handleChange}
                    value={formik.values.coordinatorphno}
                    placeholder="9876543210"
                    size="md"
                    type="number"
                />
                <FormErrorMessage>{formik.errors.coordinatorphno}</FormErrorMessage>
            </FormControl>

            <Button type="submit" variant="outline" >
                Submit
            </Button>
            console.log(...formik);
        </VStack>
    )
}
