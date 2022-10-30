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
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

export default function EventRegister() {

    const [value, setValue] = React.useState('no')

    const formik = useFormik({
        initialValues: {
            collageName: "",
            dateTime:"",
            address:"",
            appartment:"",
            city:"",
            state:"",
            pincode:"",
            personName:"",
            certificate:"",
            number:"",
            whatsappNumber:"",
        },
        validationSchema: Yup.object ({
            collageName: Yup.string().required("Collage Name required").min(6," Collage Name is too short"),
            dateTime: Yup.date().required("Collage Name requried"),
            address: Yup.string().required("address required"),
            appartment: Yup.string().required("appartment required"),
            city: Yup.string().required("appartment required"),
            state: Yup.string().required("appartment required"),
            pincode: Yup.number().required("pincode required").min(6," please enter pincode properly"),
            personName: Yup.string().required("Co-ordinator Name required").min(6," name is too short"),
            // certificate: Yup.boolean().required("certificate required"),
            number: Yup.number().required("Number is Required").min(10,"mobile no. should be 10 digit"),
            whatsappNumber: Yup.number().min(10,"mobile no. should be 10 digit")
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values,null));
            actions.resetForm();
        },
    });

  return (
    <VStack
        as="form"
        mx="auto"
        w={{base : "90%", md : 500}}
        h="full"
        justifyContent="center"
        onSubmit={formik.handleSubmit}
        spacing="5"
    >
        <Heading>Register for Event</Heading>
        <FormControl isInvalid={formik.errors.collageName && formik.touched.collageName}>
            <FormLabel>Collage Name</FormLabel>
            <Input 
                name="collageName"
                onChange={formik.handleChange}
                value={formik.values.collageName}
                placeholder="enter collage name"
            />
            <FormErrorMessage>{formik.errors.collageName}</FormErrorMessage>
        </FormControl>
        <FormControl>
            <FormLabel>Date & Time</FormLabel>
            <Input 
                name="dateTime"
                onChange={formik.handleChange}
                value={formik.values.dateTime}
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
                placeholder="House number and street name"
                size="md"
                type="address"
            />
            <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.appartment && formik.touched.appartment}>
            <FormLabel>Appartment</FormLabel>
            <Input 
                name="appartment"
                onChange={formik.handleChange}
                value={formik.values.appartment}
                placeholder="Appartment, suite, unit, etc"
                size="md"
                type="address"
            />
            <FormErrorMessage>{formik.errors.appartment}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.city && formik.touched.city}>
            <FormLabel>Town/city</FormLabel>
            <Input 
                name="appartment"
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
            <Select placeholder='Maharastra'>
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
        <FormControl isInvalid={formik.errors.personName && formik.touched.personName} >
            <FormLabel>Co-Ordinator Name</FormLabel>
            <Input 
                name="personName"
                onChange={formik.handleChange}
                value={formik.values.personName}
                placeholder="Sasuke"
                size="md"
            />
            <FormErrorMessage>{formik.errors.personName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.certificate && formik.touched.certificate} >
            <FormLabel>Certificate</FormLabel>
            <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
                <Radio value='yes'>yes</Radio>
                <Radio defaultValue='no'>no</Radio>
            </Stack>
            </RadioGroup>
            <FormErrorMessage>{formik.errors.certificate}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.number && formik.touched.number}>
            <FormLabel>Contact Number</FormLabel>
            <Input 
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                placeholder="+91 8850293795"
                size="md"
                type="number"
            />
            <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.whatsappNumber && formik.touched.whatsappNumber}>
            <FormLabel>Whatsapp Number</FormLabel>
            <Input 
                name="whatsappNumber"
                onChange={formik.handleChange}
                value={formik.values.whatsappNumber}
                placeholder="+91 8850293795"
                size="md"
                type="number"
            />
            <FormErrorMessage>{formik.errors.whatsappNumber}</FormErrorMessage>
        </FormControl>
        <Button
            type="submit" variant="outline"   
        >
            submit
        </Button>
    </VStack>
  )
}
