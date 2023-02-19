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
    Image,
    Center,
    Text,
    Link,
    Avatar
} from '@chakra-ui/react'
import axios, { Axios } from 'axios'
import { useFormik } from 'formik'
import React, { createRef, useState } from 'react'
import * as Yup from "yup"
import { useColorModeValue} from "@chakra-ui/color-mode"
import Lottie from 'react-lottie';
import register from './../lotties/register.json';
import ImageUpload from '../Component/ImageUpload'


export default function EventRegister(props) {

    const [value, setValue] = React.useState('')
    const [setError] = useState("");
    // const [imageUpload,] = useState({});
    // const [, setImg] = useState({});
    // const [logo, setLogo] = useState('')

    // const handleImg = (e) => {
    //     if (e.target.files[0]) {
    //         setImg({
    //             src: URL.createObjectURL(e.target.files[0]),
    //             alt: e.target.files[0].name
    //         });
    //         setLogo(e.target.files[0]);
    //     }
    // }

    // const profileUpload = async (file) => {
    //     const formData = new FormData()
    //     formData.append("file",file)
    //     formData.append("upload_perset","Med_Donor")
    //     let data = "";
    //     await axios.post(
    //         "https://api.cloudinary.com/v1_1/ssdeveloper/image/upload", 
    //         formData).then((response) => {
    //             data = response.data["https://api.cloudinary.com/v1_1/ssdeveloper/image/upload"];
    //         });
    //     return data;
    // }

    // const handleSubmite = async (e) => {
    //     imageUpload.image = logo;
    //     await profileUpload(logo);
    // }

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "Med_Donor")
    data.append("cloud_name","ssdeveloper")
    fetch("  https://api.cloudinary.com/v1_1/ssdeveloper/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setUrl(data.url)
    })
    .catch(err => console.log(err))
    }

    const onSubmit = async (values) => {

            // const response = await axios
            // .post(`${process.env.REACT_APP_CLIENT_URL}/event/new` ,values)
            // .catch((err) => {
            //     if (err && err.response) setError(err.response.data.data);
            // });
        
            // if (response) {
            // alert("Register done");
            // }
        
        try {
            // const url = "http://localhost:8080/api/users";
            const url = `${process.env.REACT_APP_CLIENT_URL}/event/new`;

            const { values: res } = await axios.post(url, formik.values);
            console.log(res.message);
            window.location = "/";

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            eventname: "",
            eventimage: "",
            landmark: "",
            address: "",
            city: "",
            state: "",
            startDate: "",
            endDate: "",
            coordinatorname: "",
            coordinatorimage: "",
            coordinatorphno: "",
            certificate: value,
        },
        validationSchema: Yup.object({
            eventname: Yup.string(),
            //dateTime: Yup.date().required("College Name requried"),
            landmark: Yup.string(),
            address: Yup.string(),
            //appartment: Yup.string().required("appartment required"),
            city: Yup.string(),
            state: Yup.string(),
            // pincode: Yup.number(),
            coordinatorname: Yup.string(),
            // certificate: Yup.boolean().required("certificate required"),
            coordinatorphno: Yup.number(),
            //whatsappNumber: Yup.number().min(10, "mobile no. should be 10 digit")
        }),
        onSubmit
    });

    const handleSubmit = async () => {
        // e.preventDefault();
        try {
            // const url = "http://localhost:8080/api/users";
            const url = "http://localhost:8081/events";

            const { values: res } = await axios.post(url, formik.values);
            // navigate("/login");
            console.log(res.message);
            window.location = "/";
        } catch (error) {
           console.log(error)
        }

    };

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
        <VStack  h="100vh"  p="50">
        <Box boxShadow='dark-lg' w="full" pb={["20","0","0"]} rounded='md'  >
        <Stack direction={["column","row","row"]}  w="full" h="full" >
            <VStack w={["full","50%","50%"]}  alignSelf="center" justifyContent="center" h="full" display={["none","flex","flex"]} bg="#FFB87A" spacing="5vh" >
                
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
            w={["full","50%","50%"]}
            h="full"
            justifyContent="center"
            onSubmit={formik.handleSubmit}
            spacing="5"
            padding={["5","10","20"]}
        >
            <Heading>Event Registration</Heading>

            <FormControl isInvalid={formik.errors.eventname && formik.touched.eventname}>
                <FormLabel>Collage Name</FormLabel>
                <Input
                    name="eventname"
                    onChange={formik.handleChange}
                    value={formik.values.eventname}
                    placeholder="enter college name"
                />
                <FormErrorMessage>{formik.errors.eventname}</FormErrorMessage>
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
                <option value='Abu'>Abu</option>
                <option value='Adoni'>Adoni</option>
                <option value='Agartala'>Agartala</option>
                <option value='Agra'>Agra</option>
                <option value='Ahmadabad'>Ahmadabad</option>
                <option value='Aizawl'>Aizawl</option>
                <option value='Ajmer'>Ajmer</option>
                <option value='Akola'>Akola</option>
                <option value='Alappuzha'>Alappuzha</option>
                <option value='Aligarh'>Aligarh</option>
                <option value='Alipore'>Alipore</option>
                <option value='Alipur Duar'>Alipur Duar</option>
                <option value='Almora'>Almora</option>
                <option value='Alwar'>Alwar</option>
                <option value='Amaravati'>Amaravati</option>
                <option value='Ambala'>Ambala</option>
                <option value='Ambikapur'>Ambikapur</option>
                <option value='Amer'>Amer</option>
                <option value='Amravati'>Amravati</option>
                <option value='Amreli'>Amreli</option>
                <option value='Amritsar'>Amritsar</option>
                <option value='Amroha'>Amroha</option>
                <option value='Anantapur'>Anantapur</option>
                <option value='Ara'>Ara</option>
                <option value='Arcot'>Arcot</option>
                <option value='Asansol'>Asansol</option>
                <option value='Aurangabad'>Aurangabad</option>
                <option value='Ayodhya'>Ayodhya</option>
                <option value='Azamgarh'>Azamgarh</option>
                <option value='Badami'>Badami</option>
                <option value='Baharampur'>Baharampur</option>
                <option value='Bahraich'>Bahraich</option>
                <option value='Balaghat'>Balaghat</option>
                <option value='Balangir'>Balangir</option>
                <option value='Baleshwar'>Baleshwar</option>
                <option value='Ballari'>Ballari</option>
                <option value='Ballia'>Ballia</option>
                <option value='Bally'>Bally</option>
                <option value='Balurghat'>Balurghat</option>
                <option value='Banda'>Banda</option>
                <option value='Bankura'>Bankura</option>
                <option value='Bara Banki'>Bara Banki</option>
                <option value='Baramula'>Baramula</option>
                <option value='Baranagar'>Baranagar</option>
                <option value='Barasat'>Barasat</option>
                <option value='Barauni'>Barauni</option>
                <option value='Bareilly'>Bareilly</option>
                <option value='Baripada'>Baripada</option>
                <option value='Barmer'>Barmer</option>
                <option value='Barrackpore'>Barrackpore</option>
                <option value='Barwani'>Barwani</option>
                <option value='Basirhat'>Basirhat</option>
                <option value='Basti'>Basti</option>
                <option value='Batala'>Batala</option>
                <option value='Beawar'>Beawar</option>
                <option value='Begusarai'>Begusarai</option>
                <option value='Belagavi'>Belagavi</option>
                <option value='Bengaluru'>Bengaluru</option>
                <option value='Bettiah'>Bettiah</option>
                <option value='Betul'>Betul</option>
                <option value='Bhadravati'>Bhadravati</option>
                <option value='Bhagalpur'>Bhagalpur</option>
                <option value='Bhandara'>Bhandara</option>
                <option value='Bharatpur'>Bharatpur</option>
                <option value='Bharhut'>Bharhut</option>
                <option value='Bharuch'>Bharuch</option>
                <option value='Bhatpara'>Bhatpara</option>
                <option value='Bhavnagar'>Bhavnagar</option>
                <option value='Bhilai'>Bhilai</option>
                <option value='Bhilwara'>Bhilwara</option>
                <option value='Bhind'>Bhind</option>
                <option value='Bhiwani'>Bhiwani</option>
                <option value='Bhojpur'>Bhojpur</option>
                <option value='Bhopal'>Bhopal</option>
                <option value='Bhubaneshwar'>Bhubaneshwar</option>
                <option value='Bhuj'>Bhuj</option>
                <option value='Bhusawal'>Bhusawal</option>
                <option value='Bid'>Bid</option>
                <option value='Bidar'>Bidar</option>
                <option value='Bihar Sharif'>Bihar Sharif</option>
                <option value='Bijnor'>Bijnor</option>
                <option value='Bikaner'>Bikaner</option>
                <option value='Bilaspur'>Bilaspur</option>
                <option value='Bishnupur'>Bishnupur</option>
                <option value='Bithur'>Bithur</option>
                <option value='Bodh Gaya'>Bodh Gaya</option>
                <option value='Brahmapur'>Brahmapur</option>
                <option value='Budaun'>Budaun</option>
                <option value='Budge Budge'>Budge Budge</option>
                <option value='Bulandshahr'>Bulandshahr</option>
                <option value='Buldhana'>Buldhana</option>
                <option value='Bundi'>Bundi</option>
                <option value='Burdwan'>Burdwan</option>
                <option value='Burhanpur'>Burhanpur</option>
                <option value='Buxar'>Buxar</option>
                <option value='Chaibasa'>Chaibasa</option>
                <option value='Chamba'>Chamba</option>
                <option value='Chandernagore'>Chandernagore</option>
                <option value='Chandigarh'>Chandigarh</option>
                <option value='Chandragiri'>Chandragiri</option>
                <option value='Chandrapur'>Chandrapur</option>
                <option value='Chapra'>Chapra</option>
                <option value='Chengalpattu'>Chengalpattu</option>
                <option value='Chennai'>Chennai</option>
                <option value='Cherrapunji'>Cherrapunji</option>
                <option value='Chhatarpur'>Chhatarpur</option>
                <option value='Chhindwara'>Chhindwara</option>
                <option value='Chidambaram'>Chidambaram</option>
                <option value='Chikkamagaluru'>Chikkamagaluru</option>
                <option value='Chitradurga'>Chitradurga</option>
                <option value='Chittaurgarh'>Chittaurgarh</option>
                <option value='Chittoor'>Chittoor</option>
                <option value='Churu'>Churu</option>
                <option value='Coimbatore'>Coimbatore</option>
                <option value='Cooch Behar'>Cooch Behar</option>
                <option value='Cuddalore'>Cuddalore</option>
                <option value='Cuttack'>Cuttack</option>
                <option value='Dalhousie'>Dalhousie</option>
                <option value='Daman'>Daman</option>
                <option value='Damoh'>Damoh</option>
                <option value='Darbhanga'>Darbhanga</option>
                <option value='Darjeeling'>Darjeeling</option>
                <option value='Datia'>Datia</option>
                <option value='Daulatabad'>Daulatabad</option>
                <option value='Davangere'>Davangere</option>
                <option value='Dehra Dun'>Dehra Dun</option>
                <option value='Dehri'>Dehri</option>
                <option value='Delhi'>Delhi</option>
                <option value='Deoghar'>Deoghar</option>
                <option value='Deoria'>Deoria</option>
                <option value='Dewas'>Dewas</option>
                <option value='Dhamtari'>Dhamtari</option>
                <option value='Dhanbad'>Dhanbad</option>
                <option value='Dhar'>Dhar</option>
                <option value='Dharmapuri'>Dharmapuri</option>
                <option value='Dharmshala'>Dharmshala</option>
                <option value='Dhaulpur'>Dhaulpur</option>
                <option value='Dhenkanal'>Dhenkanal</option>
                <option value='Dhuburi'>Dhuburi</option>
                <option value='Dhule'>Dhule</option>
                <option value='Diamond Harbour'>Diamond Harbour</option>
                <option value='Dibrugarh'>Dibrugarh</option>
                <option value='Dinapur Nizamat'>Dinapur Nizamat</option>
                <option value='Dindigul'>Dindigul</option>
                <option value='Dispur'>Dispur</option>
                <option value='Diu'>Diu</option>
                <option value='Doda'>Doda</option>
                <option value='Dowlaiswaram'>Dowlaiswaram</option>
                <option value='Dr. Ambedkar Nagar (Mhow)'>Dr. Ambedkar Nagar (Mhow)</option>
                <option value='Dum Dum'>Dum Dum</option>
                <option value='Dumka'>Dumka</option>
                <option value='Dungarpur'>Dungarpur</option>
                <option value='Durg'>Durg</option>
                <option value='Durgapur'>Durgapur</option>
                <option value='Dwarka'>Dwarka</option>
                <option value='Eluru'>Eluru</option>
                <option value='Erode'>Erode</option>
                <option value='Etah'>Etah</option>
                <option value='Etawah'>Etawah</option>
                <option value='Faizabad'>Faizabad</option>
                <option value='Faridabad'>Faridabad</option>
                <option value='Faridkot'>Faridkot</option>
                <option value='Farrukhabad-cum-Fatehgarh'>Farrukhabad-cum-Fatehgarh</option>
                <option value='Farrukhabad-cum-Fatehgarh'>Farrukhabad-cum-Fatehgarh</option>
                <option value='Fatehpur'>Fatehpur</option>
                <option value='Fatehpur Sikri'>Fatehpur Sikri</option>
                <option value='Firozpur'>Firozpur</option>
                <option value='Firozpur Jhirka'>Firozpur Jhirka</option>
                <option value='Gandhinagar'>Gandhinagar</option>
                <option value='Ganganagar'>Ganganagar</option>
                <option value='Gangtok'>Gangtok</option>
                <option value='Gaya'>Gaya</option>
                <option value='Ghaziabad'>Ghaziabad</option>
                <option value='Ghazipur'>Ghazipur</option>
                <option value='Giridih'>Giridih</option>
                <option value='Godhra'>Godhra</option>
                <option value='Gonda'>Gonda</option>
                <option value='Gorakhpur'>Gorakhpur</option>
                <option value='Gulmarg'>Gulmarg</option>
                <option value='Guna'>Guna</option>
                <option value='Guntur'>Guntur</option>
                <option value='Gurdaspur'>Gurdaspur</option>
                <option value='Gurugram'>Gurugram</option>
                <option value='Guwahati'>Guwahati</option>
                <option value='Gwalior'>Gwalior</option>
                <option value='Gyalshing'>Gyalshing</option>
                <option value='Hajipur'>Hajipur</option>
                <option value='Halebid'>Halebid</option>
                <option value='Halisahar'>Halisahar</option>
                <option value='Hamirpur'>Hamirpur</option>
                <option value='Hansi'>Hansi</option>
                <option value='Hanumangarh'>Hanumangarh</option>
                <option value='Haora'>Haora</option>
                <option value='Hardoi'>Hardoi</option>
                <option value='Haridwar'>Haridwar</option>
                <option value='Hassan'>Hassan</option>
                <option value='Hathras'>Hathras</option>
                <option value='Hisar'>Hisar</option>
                <option value='Hoshangabad'>Hoshangabad</option>
                <option value='Hoshiarpur'>Hoshiarpur</option>
                <option value='Hubballi-Dharwad'>Hubballi-Dharwad</option>
                <option value='Hugli'>Hugli</option>
                <option value='Hyderabad'>Hyderabad</option>
                <option value='Idukki'>Idukki</option>
                <option value='Imphal'>Imphal</option>
                <option value='Indore'>Indore</option>
                <option value='Ingraj Bazar'>Ingraj Bazar</option>
                <option value='Itanagar'>Itanagar</option>
                <option value='Itarsi'>Itarsi</option>
                <option value='Jabalpur'>Jabalpur</option>
                <option value='Jagdalpur'>Jagdalpur</option>
                <option value='Jaipur'>Jaipur</option>
                <option value='Jaisalmer'>Jaisalmer</option>
                <option value='Jalandhar'>Jalandhar</option>
                <option value='Jalaun'>Jalaun</option>
                <option value='Jalgaon'>Jalgaon</option>
                <option value='Jalor'>Jalor</option>
                <option value='Jalpaiguri'>Jalpaiguri</option>
                <option value='Jamalpur'>Jamalpur</option>
                <option value='Jammu'>Jammu</option>
                <option value='Jamnagar'>Jamnagar</option>
                <option value='Jamshedpur'>Jamshedpur</option>
                <option value='Jaunpur'>Jaunpur</option>
                <option value='Jhabua'>Jhabua</option>
                <option value='Jhalawar'>Jhalawar</option>
                <option value='Jhansi'>Jhansi</option>
                <option value='Jharia'>Jharia</option>
                <option value='Jhunjhunu'>Jhunjhunu</option>
                <option value='Jind'>Jind</option>
                <option value='Jodhpur'>Jodhpur</option>
                <option value='Jorhat'>Jorhat</option>
                <option value='Junagadh'>Junagadh</option>
                <option value='Kadapa'>Kadapa</option>
                <option value='Kaithal'>Kaithal</option>
                <option value='Kakinada'>Kakinada</option>
                <option value='Kalaburagi'>Kalaburagi</option>
                <option value='Kalimpong'>Kalimpong</option>
                <option value='Kalyan'>Kalyan</option>
                <option value='Kamarhati'>Kamarhati</option>
                <option value='Kanchipuram'>Kanchipuram</option>
                <option value='Kanchrapara'>Kanchrapara</option>
                <option value='Kandla'>Kandla</option>
                <option value='Kangra'>Kangra</option>
                <option value='Kannauj'>Kannauj</option>
                <option value='Kanniyakumari'>Kanniyakumari</option>
                <option value='Kannur'>Kannur</option>
                <option value='Kanpur'>Kanpur</option>
                <option value='Kapurthala'>Kapurthala</option>
                <option value='Karaikal'>Karaikal</option>
                <option value='Kargil'>Kargil</option>
                <option value='Karimnagar'>Karimnagar</option>
                <option value='Karli'>Karli</option>
                <option value='Karnal'>Karnal</option>
                <option value='Kathua'>Kathua</option>
                <option value='Katihar'>Katihar</option>
                <option value='Kendujhar'>Kendujhar</option>
                <option value='Khajuraho'>Khajuraho</option>
                <option value='Khambhat'>Khambhat</option>
                <option value='Khammam'>Khammam</option>
                <option value='Khandwa'>Khandwa</option>
                <option value='Kharagpur'>Kharagpur</option>
                <option value='Khargone'>Khargone</option>
                <option value='Kheda'>Kheda</option>
                <option value='Kishangarh'>Kishangarh</option>
                <option value='Kochi'>Kochi</option>
                <option value='Kodaikanal'>Kodaikanal</option>
                <option value='Kohima'>Kohima</option>
                <option value='Kolar'>Kolar</option>
                <option value='Kolhapur'>Kolhapur</option>
                <option value='Kolkata'>Kolkata</option>
                <option value='Kollam'>Kollam</option>
                <option value='Konark'>Konark</option>
                <option value='Koraput'>Koraput</option>
                <option value='Kota'>Kota</option>
                <option value='Kottayam'>Kottayam</option>
                <option value='Kozhikode'>Kozhikode</option>
                <option value='Krishnanagar'>Krishnanagar</option>
                <option value='Kullu'>Kullu</option>
                <option value='Kumbakonam'>Kumbakonam</option>
                <option value='Kurnool'>Kurnool</option>
                <option value='Kurukshetra'>Kurukshetra</option>
                <option value='Lachung'>Lachung</option>
                <option value='Lakhimpur'>Lakhimpur</option>
                <option value='Lalitpur'>Lalitpur</option>
                <option value='Leh'>Leh</option>
                <option value='Lucknow'>Lucknow</option>
                <option value='Ludhiana'>Ludhiana</option>
                <option value='Lunglei'>Lunglei</option>
                <option value='Machilipatnam'>Machilipatnam</option>
                <option value='Madgaon'>Madgaon</option>
                <option value='Madhubani'>Madhubani</option>
                <option value='Madikeri'>Madikeri</option>
                <option value='Madurai'>Madurai</option>
                <option value='Mahabaleshwar'>Mahabaleshwar</option>
                <option value='Mahbubnagar'>Mahbubnagar</option>
                <option value='Mahe'>Mahe</option>
                <option value='Mahesana'>Mahesana</option>
                <option value='Maheshwar'>Maheshwar</option>
                <option value='Mainpuri'>Mainpuri</option>
                <option value='Malda'>Malda</option>
                <option value='Malegaon'>Malegaon</option>
                <option value='Mamallapuram'>Mamallapuram</option>
                <option value='Mandi'>Mandi</option>
                <option value='Mandla'>Mandla</option>
                <option value='Mandsaur'>Mandsaur</option>
                <option value='Mandya'>Mandya</option>
                <option value='Mangaluru'>Mangaluru</option>
                <option value='Mangan'>Mangan</option>
                <option value='Matheran'>Matheran</option>
                <option value='Mathura'>Mathura</option>
                <option value='Mattancheri'>Mattancheri</option>
                <option value='Meerut'>Meerut</option>
                <option value='Merta'>Merta</option>
                <option value='Midnapore'>Midnapore</option>
                <option value='Mirzapur-Vindhyachal'>Mirzapur-Vindhyachal</option>
                <option value='Mon'>Mon</option>
                <option value='Moradabad'>Moradabad</option>
                <option value='Morbi'>Morbi</option>
                <option value='Morena'>Morena</option>
                <option value='Motihari'>Motihari</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Munger'>Munger</option>
                <option value='Murshidabad'>Murshidabad</option>
                <option value='Murwara'>Murwara</option>
                <option value='Mussoorie'>Mussoorie</option>
                <option value='Muzaffarnagar'>Muzaffarnagar</option>
                <option value='Muzaffarpur'>Muzaffarpur</option>
                <option value='Mysuru'>Mysuru</option>
                <option value='Nabadwip'>Nabadwip</option>
                <option value='Nabha'>Nabha</option>
                <option value='Nadiad'>Nadiad</option>
                <option value='Nagaon'>Nagaon</option>
                <option value='Nagappattinam'>Nagappattinam</option>
                <option value='Nagarjunakoṇḍa'>Nagarjunakoṇḍa</option>
                <option value='Nagaur'>Nagaur</option>
                <option value='Nagercoil'>Nagercoil</option>
                <option value='Nagpur'>Nagpur</option>
                <option value='Nahan'>Nahan</option>
                <option value='Nainital'>Nainital</option>
                <option value='Nanded'>Nanded</option>
                <option value='Narsimhapur'>Narsimhapur</option>
                <option value='Narsinghgarh'>Narsinghgarh</option>
                <option value='Narwar'>Narwar</option>
                <option value='Nashik'>Nashik</option>
                <option value='Nathdwara'>Nathdwara</option>
                <option value='Navsari'>Navsari</option>
                <option value='Neemuch'>Neemuch</option>
                <option value='New Delhi'>New Delhi</option>
                <option value='Nizamabad'>Nizamabad</option>
                <option value='Nowgong'>Nowgong</option>
                <option value='Okha'>Okha</option>
                <option value='Orchha'>Orchha</option>
                <option value='Osmanabad'>Osmanabad</option>
                <option value='Palakkad'>Palakkad</option>
                <option value='Palanpur'>Palanpur</option>
                <option value='Palashi'>Palashi</option>
                <option value='Palayamkottai'>Palayamkottai</option>
                <option value='Pali'>Pali</option>
                <option value='Panaji'>Panaji</option>
                <option value='Pandharpur'>Pandharpur</option>
                <option value='Panihati'>Panihati</option>
                <option value='Panipat'>Panipat</option>
                <option value='Panna'>Panna</option>
                <option value='Paradip'>Paradip</option>
                <option value='Parbhani'>Parbhani</option>
                <option value='Partapgarh'>Partapgarh</option>
                <option value='Patan'>Patan</option>
                <option value='Patiala'>Patiala</option>
                <option value='Patna'>Patna</option>
                <option value='Pehowa'>Pehowa</option>
                <option value='Phalodi'>Phalodi</option>
                <option value='Phek'>Phek</option>
                <option value='Phulabani'>Phulabani</option>
                <option value='Pilibhit'>Pilibhit</option>
                <option value='Pithoragarh'>Pithoragarh</option>
                <option value='Porbandar'>Porbandar</option>
                <option value='Prayagraj'>Prayagraj</option>
                <option value='Puducherry'>Puducherry</option>
                <option value='Pudukkottai'>Pudukkottai</option>
                <option value='PunchPunch'>Punch</option>
                <option value='Pune'>Pune</option>
                <option value='Puri'>Puri</option>
                <option value='Purnia'>Purnia</option>
                <option value='Purulia'>Purulia</option>
                <option value='Pusa'>Pusa</option>
                <option value='Pushkar'>Pushkar</option>
                <option value='Rae Bareli'>Rae Bareli</option>
                <option value='Raichur'>Raichur</option>
                <option value='Raiganj'>Raiganj</option>
                <option value='Raipur'>Raipur</option>
                <option value='Raisen'>Raisen</option>
                <option value='Rajahmundry'>Rajahmundry</option>
                <option value='Rajapalayam'>Rajapalayam</option>
                <option value='Rajgarh'>Rajgarh</option>
                <option value='Rajkot'>Rajkot</option>
                <option value='Rajmahal'>Rajmahal</option>
                <option value='Rajnandgaon'>Rajnandgaon</option>
                <option value='Rajouri'>Rajouri</option>
                <option value='Ramanathapuram'>Ramanathapuram</option>
                <option value='Rampur'>Rampur</option>
                <option value='Ranchi'>Ranchi</option>
                <option value='Ratlam'>Ratlam</option>
                <option value='Ratnagiri'>Ratnagiri</option>
                <option value='Rewa'>Rewa</option>
                <option value='Rewari'>Rewari</option>
                <option value='Rohtak'>Rohtak</option>
                <option value='Rupnagar'>Rupnagar</option>
                <option value='Sagar'>Sagar</option>
                <option value='Saharanpur'>Saharanpur</option>
                <option value='Saharsa'>Saharsa</option>
                <option value='Salem'>Salem</option>
                <option value='Samastipur'>Samastipur</option>
                <option value='Sambalpur'>Sambalpur</option>
                <option value='Sambhal'>Sambhal</option>
                <option value='Sangareddi'>Sangareddi</option>
                <option value='Sangli'>Sangli</option>
                <option value='Sangrur'>Sangrur</option>
                <option value='Santipur'>Santipur</option>
                <option value='Saraikela'>Saraikela</option>
                <option value='Sarangpur'>Sarangpur</option>
                <option value='Sasaram'>Sasaram</option>
                <option value='Satara'>Satara</option>
                <option value='Satna'>Satna</option>
                <option value='Sawai Madhopur'>Sawai Madhopur</option>
                <option value='Sehore'>Sehore</option>
                <option value='Seoni'>Seoni</option>
                <option value='Sevagram'>Sevagram</option>
                <option value='Shahdol'>Shahdol</option>
                <option value='Shahjahanpur'>Shahjahanpur</option>
                <option value='Shahpura'>Shahpura</option>
                <option value='Shajapur'>Shajapur</option>
                <option value='Shantiniketan'>Shantiniketan</option>
                <option value='Sheopur'>Sheopur</option>
                <option value='Shillong'>Shillong</option>
                <option value='Shimla'>Shimla</option>
                <option value='Shivamogga'>Shivamogga</option>
                <option value='Shivpuri'>Shivpuri</option>
                <option value='Shravanabelagola'>Shravanabelagola</option>
                <option value='Shrirampur'>Shrirampur</option>
                <option value='Shrirangapattana'>Shrirangapattana</option>
                <option value='Sikar'>Sikar</option>
                <option value='Silchar'>Silchar</option>
                <option value='Siliguri'>Siliguri</option>
                <option value='Silvassa'>Silvassa</option>
                <option value='Sirohi'>Sirohi</option>
                <option value='Sirsa'>Sirsa</option>
                <option value='Sitamarhi'>Sitamarhi</option>
                <option value='Sitapur'>Sitapur</option>
                <option value='Siuri'>Siuri</option>
                <option value='Sivasagar'>Sivasagar</option>
                <option value='Siwan'>Siwan</option>
                <option value='Solapur'>Solapur</option>
                <option value='Sonipat'>Sonipat</option>
                <option value='Srikakulam'>Srikakulam</option>
                <option value='Srinagar'>Srinagar</option>
                <option value='Sultanpur'>Sultanpur</option>
                <option value='Surat'>Surat</option>
                <option value='Surendranagar'>Surendranagar</option>
                <option value='Tamluk'>Tamluk</option>
                <option value='Tehri'>Tehri</option>
                <option value='Tezpur'>Tezpur</option>
                <option value='Thalassery'>Thalassery</option>
                <option value='Thane'>Thane</option>
                <option value='Thanjavur'>Thanjavur</option>
                <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
                <option value='Thoothukudi'>Thoothukudi</option>
                <option value='Thrissur'>Thrissur</option>
                <option value='Tinsukia'>Tinsukia</option>
                <option value='Tiruchchirappalli'>Tiruchchirappalli</option>
                <option value='Tirunelveli'>Tirunelveli</option>
                <option value='Tirupati'>Tirupati</option>
                <option value='Tiruppur'>Tiruppur</option>
                <option value='Titagarh'>Titagarh</option>
                <option value='Tonk'>Tonk</option>
                <option value='Tumakuru'>Tumakuru</option>
                <option value='Udaipur'>Udaipur</option>
                <option value='Udayagiri'>Udayagiri</option>
                <option value='Udhagamandalam'>Udhagamandalam</option>
                <option value='Udhagama'>Udhagama</option>
                <option value='Ujjain'>Ujjain</option>
                <option value='Ulhasnagar'>Ulhasnagar</option>
                <option value='Una'>Una</option>
                <option value='Valsad'>Valsad</option>
                <option value='Varanasi'>Varanasi</option>
                <option value='Vasai-Virar'>Vasai-Virar</option>
                <option value='Vatakara'>Vatakara</option>
                <option value='Vellore'>Vellore</option>
                <option value='Veraval'>Veraval</option>
                <option value='Vidisha'>Vidisha</option>
                <option value='Vijayapura'>Vijayapura</option>
                <option value='Vijayawada'>Vijayawada</option>
                <option value='Visakhapatnam'>Visakhapatnam</option>
                <option value='Vizianagaram'>Vizianagaram</option>
                <option value='Warangal'>Warangal</option>
                <option value='Wardha'>Wardha</option>
                <option value='Wokha'>Wokha</option>
                <option value='Yanam'>Yanam</option>
                <option value='Yavatmal'>Yavatmal</option>
                <option value='Yemmiganur'>Yemmiganur</option>
                <option value='Zunheboto'>Zunheboto</option>
            </Select>
            <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.state && formik.touched.state}>
                <FormLabel>State</FormLabel>
                <Select placeholder='state' name="state" value={formik.values.state} onChange={formik.handleChange}>
                <option value='Andhra Pradesh'>Andhra Pradesh</option>
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
                            <option value='Karnataka'>Karnataka</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Madhya Pradesh'>Madhya Pradesh</option>
                            <option value='Maharashtra'>Maharashtra</option>
                            <option value='Manipur'>Manipur</option>
                            <option value='Meghalaya'>Meghalaya</option>
                            <option value='Mizoram'>Mizoram</option>
                            <option value='Nagaland'>Nagaland</option>
                            <option value='Odisha'>Odisha</option>
                            <option value='Punjab'>Punjab</option>
                            <option value='Rajasthan'>Rajasthan</option>
                            <option value='Sikkim'>Sikkim</option>
                            <option value='Tamil Nadu'>Tamil Nadu</option>
                            <option value='Telangana'>Telangana</option>
                            <option value='Tripura'>Tripura</option>
                            <option value='Uttarakhand'>Uttarakhand</option>
                            <option value='Uttar Pradesh'>Uttar Pradesh</option>
                            <option value='West Bengal'>West Bengal</option>
                </Select>
                <FormErrorMessage>{formik.errors.state}</FormErrorMessage>
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


            {/* <FormControl isInvalid={formik.errors.pincode && formik.touched.pincode}>
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
            </FormControl> */}

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

            <FormControl isInvalid={formik.errors.coordinatorphno && formik.touched.coordinatorphno} >
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
            </FormControl>

            <FormControl isInvalid={formik.errors.certificate && formik.touched.certificate} >
                <FormLabel>Certificate</FormLabel>
                <RadioGroup name="certificate" onChange={setValue} value={value} >
                    <Stack direction='row'>
                        <Radio colour="" value='yes'>yes</Radio>
                        <Radio value='no'>no</Radio>
                    </Stack>
                </RadioGroup>
                <FormErrorMessage>{formik.errors.certificate}</FormErrorMessage>
            </FormControl>
            <FormLabel>Upload Co-Ordinator Photo</FormLabel>
                <Input isReadOnly="true" type="file" onChange= {(e)=> setImage(e.target.files[0])}></Input>
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