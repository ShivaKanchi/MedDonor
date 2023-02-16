import React, { useState } from 'react'
import { Flex, IconButton, VStack, Spacer, Tooltip, Link, Button, Box, Icon, Divider, Text, Image } from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa'
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { SlLogout } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { signOut } from '../Redux/Reducers/Auth/auth.action';
// SlLogout

function Head() {
  const user = localStorage.getItem('token')
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState('none')
  const color = useColorModeValue('white', 'gray.800')
  const image = useColorModeValue('https://res.cloudinary.com/ssdeveloper/image/upload/v1666942312/Med%20Donner/Logo_pstfy6.svg', 'https://res.cloudinary.com/ssdeveloper/image/upload/v1666942349/Med%20Donner/Logo_1_n8cjgq.svg')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    dispatch(signOut());
    // dispatch(clearUser());
    navigate("/signin");

  }

  return (
    <VStack p={3}>
      <Flex w="100%" >
        <Image h="40px" pl="15px" src={image}  ></Image>
        <Spacer></Spacer>

        {/* Desktop navigation  */}
        <Flex alignSelf="center" display={["none", "flex", "flex"]}>
          <Link href='/' _focus="none" >
            <Button as="a" variant='ghost'  >
              Home
            </Button>
          </Link>
          <Link href='/about' _focus="none" >
            <Button as="a" variant='ghost'  >
              About
            </Button>
          </Link>
          <Link href='/services' _focus="none" >
            <Button as="a" variant='ghost' >
              Services
            </Button>
          </Link>
          <Link href='/donnor' _focus="none" >
            <Button as="a" variant='ghost' >
              Donor
            </Button>
          </Link>
          <Link href='/event' _focus="none" >
            <Button as="a" variant='ghost' >
              Event
            </Button>
          </Link>
          <Link href='/contact' _focus="none" >
            <Button as="a" variant='ghost' >
              Contact
            </Button>
          </Link>
        </Flex>
        <Flex alignSelf="flex-end" pl={15}>
          <Tooltip label='Github' >
            <Link href='https://github.com/saurabh7582/med-donor' _focus="none" isExternal>
              <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
            </Link>
          </Tooltip>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          {

            user ? (
              <IconButton ml={8} icon={<SlLogout />} isRound='true' onClick={handleLogout}></IconButton>
            ) : (
              <IconButton ml={8} icon={<SlUser />} isRound='true' onClick={navigate("/signin")}></IconButton>
            )
          }
        </Flex>
      </Flex>

      {/* Mobile Navigation */}
      <Flex alignSelf="end" >
        <IconButton
          as={HamburgerIcon}
          mt={5} mr={["0", "2", "none", "none"]}
          size="md"
          display={["flex", "none", "none"]}
          onClick={() => changeDisplay('flex')}
        />
      </Flex>
      {/* <Icon as={HamburgerIcon}  boxSize={14} /> */}

      {/* hamburgercloseIcon */}
      <Flex
        w="100vw"
        display={display}
        bgColor={color}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justifyContent="flex-end" >
          <Box
            mt="10"
            borderRadius="50%"
            bg={"#20BC7E"}
            mr={10}
            p="25"
          >
            <Icon
              size="sm"
              as={CloseIcon}
              color={["dark", "white"]}
              onClick={() => changeDisplay('none')}
            >
            </Icon>
          </Box>
        </Flex>

        {/* navigation divder */}
        <Flex ml="5">
          <Text fontWeight="450" fontStyle="normal" fontFamily="Dennis Sans', sans-serif" fontSize='xs' >Navigation</Text>
        </Flex>
        <Flex pt="5">
          <Divider ml="5" mr="5" orientation='horizontal' />
        </Flex>
        <Flex
          flexDirection="column"
          align="left"
          mt="5"
          ml="5"
        >
          <Link href='/' _focus="none" >
            <Button as="a" variant='ghost'  >
              Home
            </Button>
          </Link>
          <Link href='/about' _focus="none" >
            <Button as="a" variant='ghost'  >
              About
            </Button>
          </Link>
          <Link href='/services' _focus="none" >
            <Button as="a" variant='ghost' >
              Services
            </Button>
          </Link>
          <Link href='/donner' _focus="none" >
            <Button as="a" variant='ghost' >
              Donor
            </Button>
          </Link>
          <Link href='/event' _focus="none" >
            <Button as="a" variant='ghost' >
              Event
            </Button>
          </Link>
          <Link href='/contact' _focus="none" >
            <Button as="a" variant='ghost' >
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default Head
