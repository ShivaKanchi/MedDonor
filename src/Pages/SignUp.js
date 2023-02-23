import {
  Stack,
  Box,
  VStack,
  Image,
  Text,
  Button,
  Heading,
  Input,
  HStack,
  Link,
  Center,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import Head from '../Component/Head'
import styles from "./styles.module.css";
import { useColorModeValue } from "@chakra-ui/color-mode"
import { signUp } from '../Redux/Reducers/Auth/auth.action';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"

function SignUp() {

  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666942312/Med%20Donner/Logo_pstfy6.svg', 'https://res.cloudinary.com/ssdeveloper/image/upload/v1666942349/Med%20Donner/Logo_1_n8cjgq.svg')
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    profilepic: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // const { isOpen } = useDisclosure({isOpen})

    const [images, setimage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
    const data = new FormData()
    data.append("file", images)
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

  const handleChange = ({ currentTarget: Input }) => {
    setData({ ...data, [Input.name]: Input.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setisLoading(true);
    e.preventDefault()
    console.log(data)
    await dispatch(signUp(data));
    setData({ email: "", password: "", firstname: "", lastname: "", profilepic:"" })
    setisLoading(false);
    navigate("/")
  };

  return (
    <>
      <Head />
      <VStack h="100vh" p="50">
        <Box boxShadow='dark-lg' w="full" pb={["20", "0", "0"]} rounded='md'  >
          <Stack direction={["column", "row", "row"]} w="full">
            <VStack w={["full", "50%", "50%"]} alignSelf="center" justifyContent="center" h="80vh" display={["none", "flex", "flex"]} bg="#FFB87A" spacing="5vh" >

              <Image src={image}  ></Image>
              <Text fontWeight="semibold" fontSize="50"> Welcome back</Text>
              <Center>
                <Link href="/signin" w="full" >
                  <Button rounded='md' bg="#20BC7E" > Sign In</Button>
                </Link>
              </Center>

            </VStack>
            <VStack w={["full", "50%", "50%"]} h={["90vh", "80vh", "80vh"]} spacing="5vh" >
              <Heading pt="10vh"> Create Account</Heading>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                  required
                  variant='filled'
                  size='md'
                  className={styles.input}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                  required
                  className={styles.input}
                  variant='filled'
                  size='md'
                />
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                  variant='filled'
                  size='md'
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                  variant='filled'
                  size='md'
                />
                
                <Input isReadOnly="true" type="file" onChange= {(e)=> setimage(e.target.files[0])}></Input>      
                
                {error && <div className={styles.error_msg}>{error}</div>}
<<<<<<< HEAD
                <Button mt={[10, 5, 5]} isLoading={isLoading} 
                  loadingText='SignUp...' rounded='lg' bg="#20BC7E" type="submit" onClick={uploadImage}>
=======
                <Button mt={[10, 5, 5]} isLoading={isLoading}
                  loadingText='SignUp...' rounded='lg' bg="#20BC7E" type="submit">
>>>>>>> b4142ba6298ce2033162d7120a78f7ebe070bed2
                  Sign Up
                </Button>

              </form>
              <HStack display={['flex', 'none', 'none']}>
                <Text>alredy have account ?</Text>
                <Link href="/signin" >
                  <Button rounded='md' bg="#20BC7E"  > Sign In</Button>
                </Link>
              </HStack>
            </VStack>
          </Stack>
        </Box>
      </VStack>
    </>
  )
}

export default SignUp



    // e.preventDefault();
    // try {
    //   // const url = "http://localhost:8080/api/users";
    //   const url = "http://localhost:4000/user/register";
    //   // const url = "https://med-donner.herokuapp.com/api/users";
    //   // const url = "https://med-serer.vercel.app/api/users"
    //   const { data: res } = await axios.post(url, data);
    //   // navigate("/login");
    //   console.log(res.message);
    //   console.log(data);
    //   window.location = "/";
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }