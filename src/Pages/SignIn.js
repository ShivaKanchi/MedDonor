import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

import Head from '../Component/Head'
import styles from "./styles.module.css";
import { useColorModeValue } from "@chakra-ui/color-mode"
import { signIn } from '../Redux/Reducers/Auth/auth.action';


function SignIn() {

  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666942312/Med%20Donner/Logo_pstfy6.svg', 'https://res.cloudinary.com/ssdeveloper/image/upload/v1666942349/Med%20Donner/Logo_1_n8cjgq.svg')
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // const [isLoading ] = useState(true)


  const handleChange = ({ currentTarget: Input }) => {
    setData({ ...data, [Input.name]: Input.value });
  };

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submit = async (e) => {
    setisLoading(true);
    e.preventDefault()
    await dispatch(signIn(data))
    setData({ email: "", password: "" })
    setData({ email: "", password: "" })
    setisLoading(false);
    navigate("/")
  };

  // cookies 


  return (
    <>
      <Head />
      <VStack h="100vh" p="50">
        <Box boxShadow='dark-lg' w="full" pb={["20", "0", "0"]} rounded="xl"  >
          <Stack direction={["column", "row", "row"]} w="full">
            <VStack w={["full", "50%", "50%"]} h={["90vh", "80vh", "80vh"]} pt={["5%", "5%", "5%"]} spacing="5vh" >
              <Heading pt="10vh">Login Account</Heading>
              <form className={styles.form_container} onSubmit={submit}>
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                {/* {error && <div className={styles.error_msg}>{error}</div>} */}
                <Button
                  mt={[10, 5, 5]} rounded='lg' bg="#20BC7E" type="submit" isLoading={isLoading}
                  loadingText='Loginig in...'
                >
                  Sign In
                </Button>
              </form>
              <HStack display={['flex', 'none', 'none']}>
                <Text>Want to create account?</Text>
                <Link href="/signup">
                  <Button rounded='md' bg="#20BC7E"  > Sign Up</Button>
                </Link>
              </HStack>
            </VStack>
            <VStack w={["full", "50%", "50%"]} roundedRight="xl" alignSelf="center" justifyContent="center" h="80vh" display={["none", "flex", "flex"]} bg="#FFB87A" spacing="5vh" >
              <Image src={image}  ></Image>
              <Text fontWeight="semibold" fontSize="50"> Want to create account ?</Text>
              <Center>
                <Link href='/signup' w="full"  >
                  <Button rounded='md' bg="#20BC7E"  > Sign Up</Button>
                </Link>
              </Center>
            </VStack>
          </Stack>
        </Box>
      </VStack>

    </>
  )
}

export default SignIn

  // e.preventDefault();
    // try {
    //   const url = "http://localhost:8080/api/auth";
    //   // const url = "https://med-donner.herokuapp.com/api/auth";
    //   // const url = "https://med-serer.vercel.app/auth"
    //   const { data: res } = await axios.post(url, data);
    //   localStorage.setItem("token", res.data);
    //   // isLoading=true;
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