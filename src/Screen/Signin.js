import { Flex, Stack, Box, VStack, HStack, Image, Text, Button, Heading, Input, InputGroup , InputRightElement  } from '@chakra-ui/react'

import React from 'react'
import Head from '../Component/Head'

function Signin() {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  

  return (
    // <div>Signin</div>
    <>
    <Head />
    <VStack  h="100vh" p="50">
      <Box boxShadow='dark-lg' w="full"  rounded='md'  >
        <HStack w="full">
          <VStack w="50%" h="80vh"  bg="#FFB87A" spacing="10vh" >
              <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665256771/Med%20Donner/Logo_ujcyxi.svg" pt="10vh" ></Image>
              <Text fontWeight="semibold" fontSize="50"> Welcome back</Text>
              <Button rounded='md' w="20%" bg="#20BC7E" > Signin</Button>
          </VStack>
          <VStack w="50%" h="80vh"   spacing="5vh" >
              <Heading pt="10vh"> Create Account</Heading>
              <Input w="70%"  placeholder='First Name' variant='filled' size='md'></Input>
              <Input w="70%"  placeholder='Last Name' variant='filled' size='md'></Input>
              <Input w="70%"  placeholder='Email' variant='filled' size='md'></Input>
              {/* password input */}
              <InputGroup size='md' variant='filled' w="70%">
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/* Button */}
              <Button rounded='md' w="20%" bg="#20BC7E"  > SignUp</Button>
          </VStack>
        </HStack>
      </Box>
    </VStack>
    </>
    // <Flex w="full" vh="full" p={50} border="2px solid red">

    // </Flex>
  )
}

export default Signin