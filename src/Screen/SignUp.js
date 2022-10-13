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
  Center
} from '@chakra-ui/react'

import React,{useState} from 'react'
import Head from '../Component/Head'
import axios from 'axios'
import styles from "./styles.module.css";


function SignUp() {
  
  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: Input }) => {
		setData({ ...data, [Input.name]: Input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			// navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (    
    <>
    <Head />
    <VStack  h="100vh"  p="50">
      <Box boxShadow='dark-lg' w="full" pb={["20","0","0"]} rounded='md'  >
        <Stack direction={["column","row","row"]}  w="full">
          <VStack w={["full","50%","50%"]}  alignSelf="center" justifyContent="center" h="80vh" display={["none","flex","flex"]} bg="#FFB87A" spacing="5vh" >
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665256771/Med%20Donner/Logo_ujcyxi.svg"  ></Image>
              <Text fontWeight="semibold" fontSize="50"> Welcome back</Text>
              <Center>  
                <Link href="/signin" w="full" >
                  <Button rounded='md'  bg="#20BC7E" > Signin</Button>
                </Link>
              </Center>
          </VStack>
          <VStack w={["full","50%","50%"]} h={["90vh","80vh","80vh"]} spacing="5vh" >
              <Heading pt="10vh"> Create Account</Heading>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  variant='filled' 
                  size='md'
                  className={styles.input}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className={styles.input}
                  variant='filled' 
                  size='md'
                />
                <Input
                  type="email"
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
                {error && <div className={styles.error_msg}>{error}</div>}
                <Button mt={[10,5,5]} rounded='lg'  bg="#20BC7E" type="submit">
                  Sing Up
                </Button>
               
				    	</form>
              <HStack display={['flex','none','none']}>
                <Text>alredy have account ?</Text>
                <Text color="#20BC7E" > Sigin</Text>
              </HStack>
            </VStack>
        </Stack>
      </Box>
    </VStack>
    </>
  )
}

export default SignUp