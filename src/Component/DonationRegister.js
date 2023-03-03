import { Flex, Heading, Image, Input, Button, Box, Stack } from '@chakra-ui/react'
import { FcExpired } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from 'react'
import { BsEmojiSmile, BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaClinicMedical } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function DonationRegister() {
  const [startDate, setStartDate] = useState(new Date());
  const [medicinedata, setMedicinedata] = useState({
    medname: "",
    medimage: "",
    category: "",
    desc: "",
    donorname: "",
    donorimage: "",
    expiry: "",
    quantity: "",
    address: "",
    phone: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [images, setImages] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (images) {
      uploadImage()
      console.log("hello")
    }
  }, [images])
  useEffect(() => {
    if (url) {
      setMedicinedata({ ...medicinedata, medpic: url })
      console.log("bye")
    }
  }, [url])

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", images)
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

  const handleChange = ({ currentTarget: Input }) => {
    setMedicinedata({ ...medicinedata, [Input.name]: Input.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    console.log("MEdicine data", medicinedata)
    setisLoading(true);
    e.preventDefault()
    if (url) {
      //setMedicinedata({})
      setisLoading(false);
      //await dispatch();
      // navigate("/")
    }

  };

  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666944220/Med%20Donner/doctorBackLogo_1_otk1lt.svg', 'https://res.cloudinary.com/ssdeveloper/image/upload/v1666944108/Med%20Donner/doctorBackLogo_q2si8u.svg')

  return (
    <>
      <Flex w="full" justifyContent="center" mt="50"  >
        <Flex w="80%" borderRadius="lg" boxShadow="0px 0px 5px" h="fit-content"    >
          <Flex w={["100%", "80%", "80%"]} p={["5", "10", "10"]} direction="column" justifyContent={["center", "none", "none"]}
            alignSelf={["center", "none", "none"]}
          >
            <Heading
              color="#FFB87A" fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
              fontSize="21px" lineHeight="28px" letterSpacing="0.023em" >
              Want to donate medicine ?
            </Heading>
            <Heading
              fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600"
              fontSize={["4xl", "5xl", "6xl"]} lineHeight={["4xl", "5xl", "6xl"]} letterSpacing="0.023em" >
              Get Yourself Register
            </Heading>
            {/* first row */}
            <Flex direction={["column", "row", "row"]} p="10" justifyContent={["center", "space-between", "space-between"]} >
              <GiMedicines size="60px" />
              <Flex direction="column" p={["3", "0", "0"]}>
                <Heading
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                  fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                >
                  Medicine name
                </Heading>
                <Input
                  variant='flushed'
                  placeholder="Enter Medicine name here"
                  focusBorderColor="#ACACAC"
                  name="medname"
                  onChange={handleChange}
                  value={medicinedata.medname}
                  required
                />
              </Flex >
              <FcExpired size="50px" />
              <Flex direction="column" p={["3", "0", "0"]}>
                <Heading
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                  fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                >
                  Medicine expire date
                </Heading>
                <DatePicker pt="10" selected={startDate} onChange={(date) => setStartDate(date)} />
              </Flex>
            </Flex>
            {/* second row */}
            <Flex direction={["column", "row", "row"]} mt={["-14", "0", "0"]} p={["10", "10", "10"]} justifyContent="space-between" >
              <BsTelephoneFill size="50px" />
              <Flex direction="column">
                <Heading
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                  fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                >
                  Phone
                </Heading>
                <Input
                  variant='flushed'
                  placeholder="9876543210"
                  name="phone"
                  onChange={handleChange}
                  value={medicinedata.phone}
                  required
                  color="#ACACAC"
                  focusBorderColor="#ACACAC" />
              </Flex>
              <FaClinicMedical size="50px" p={["3", "0", "0"]} />
              <Flex direction="column">
                <Heading
                  fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                  fontSize="21px" lineHeight="28px" letterSpacing="0.023em"
                >
                  Address
                </Heading>
                <Input
                  variant='flushed'
                  placeholder="Enter your Address"
                  name="address"
                  onChange={handleChange}
                  value={medicinedata.address}
                  required
                  color="#ACACAC"
                  focusBorderColor="#ACACAC" />
              </Flex>
            </Flex>
            <Button rightIcon={<GrGallery />} w="full" background="#FFB87A" varient="soild" p="5"  >Upload Medicine Image</Button>
            <Button onClick={handleSubmit} background="#20BC7E" varient="soild" p="5" w="20%" mt="10" alignSelf="center" >Submit</Button>
            {/*second row end */}
          </Flex>
          <Flex w="30%" border="medium" h="fit-content" display={["none", "none", "flex"]}>
            <Image opacity="100%" objectFit='cover' h="full" src={image} />
          </Flex>
        </Flex>
      </Flex>
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


