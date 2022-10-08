import React,{useState} from 'react'
import { Flex, Heading, IconButton, VStack, Spacer, Tooltip, Link, Button, Box, Icon, Divider, Text, Image  } from "@chakra-ui/react";
import {FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun } from 'react-icons/fa'
import {useColorMode, useColorModeValue} from "@chakra-ui/color-mode"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Head() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const [display,changeDisplay] = useState('none')
    const color = useColorModeValue('white', 'gray.800')

    return (
     <VStack p={3}>
       <Flex w="100%" >
       <Image h="40px" pl="15px" src="https://res.cloudinary.com/ssdeveloper/image/upload/v1665256771/Med%20Donner/Logo_ujcyxi.svg"  ></Image>
        <Spacer></Spacer>
        
        {/* Desktop navigation  */}
        <Flex alignSelf="center" display={["none","flex","flex"]}>
          <Link href='/' _focus="none" >
              <Button as="a"  variant='ghost'  >
                Home
              </Button>
            </Link>
          <Link href='/work' _focus="none" >
              <Button as="a"  variant='ghost' >
                Work
              </Button>
            </Link>
            <Link href='/services' _focus="none" >
              <Button as="a"  variant='ghost' >
                Services
              </Button>
            </Link>
            <Link href='/contact' _focus="none" >
              <Button as="a"  variant='ghost' >
                Contact
              </Button>
            </Link>
        </Flex>
        <Flex alignSelf="flex-end" pl={15}>
          
          <Tooltip label='Instagram'>
            <Link href='https://www.instagram.com/ss_devloper/' _focus="none" isExternal>
              <IconButton ml={2}  icon={<FaInstagram />} isRound='true' ></IconButton>
            </Link>
          </Tooltip>
          <Tooltip label='Linkedin'>
            <Link href='https://www.linkedin.com/in/saurabh-shinde-5a40b5174/' _focus="none" isExternal>
              <IconButton ml={2} icon={<FaLinkedin />} isRound='true' ></IconButton>
            </Link>
          </Tooltip>
          <Tooltip label='Github' >
            <Link href='https://github.com/saurabh7582' _focus="none" isExternal>
              <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
            </Link>
          </Tooltip>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        
       </Flex>

       {/* Mobile Navigation */}
       <Flex alignSelf="end" >
        <IconButton 
          as={HamburgerIcon}
          mt={5} mr={["0","2","none","none"]}
          size="md"
          display={["flex","none","none"]}
          onClick={()=> changeDisplay('flex')}  
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
              bg={"cyan.400"}
              mr={10}
              p="25"
            >
              <Icon
                size="sm"
                as={CloseIcon}
                color={["dark","white"]}
                onClick={()=> changeDisplay('none')}
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
                <Button as="a"  variant='ghost' fontSize='4xl' pt='10' pb="5" >
                    Home
                  </Button>
              </Link>
              <Link href='/work' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='4xl' pt='10' pb="5" >
                    Work
                  </Button>
              </Link>
              <Link href='/services' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='4xl' pt='10' pb="5">
                  Services
                </Button>
              </Link>
              <Link href='/contact' _focus="none" >
                <Button as="a"  variant='ghost' fontSize='4xl' pt='10'>
                  Contact
                </Button>
              </Link>
          </Flex>
          {/* social part */}
          <Flex mt="20" pt="5">
            <Divider ml="5" mr="5" orientation='horizontal' />
          </Flex>
          {/* social Divider */}
          <Flex ml="5">
            <Text fontWeight="450" fontStyle="normal" fontFamily="Dennis Sans', sans-serif" fontSize='xs' >Social</Text>
          </Flex>
          {/* social icon */}
          <Flex flexDirection="row" justifyContent="center" pb="20"> 
            <Tooltip label='Instagram'>
              <Link href='https://www.instagram.com/ss_devloper/' _focus="none" isExternal>
                <IconButton alignself={["center","flex-end"]}  ml={2} size='lg' icon={<FaInstagram />} isRound='true' ></IconButton>
              </Link>
            </Tooltip>
            <Tooltip label='Linkedin'>
              <Link href='https://www.linkedin.com/in/saurabh-shinde-5a40b5174/' _focus="none" isExternal>
                <IconButton alignself={["center","flex-end"]} ml={2} size='lg' icon={<FaLinkedin />} isRound='true' ></IconButton>
              </Link>
            </Tooltip>
            <Tooltip label='Github' >
              <Link href='https://github.com/saurabh7582' _focus="none" isExternal>
                <IconButton alignself={["center","flex-end"]} ml={2} size='lg' icon={<FaGithub />} isRound='true' ></IconButton>
              </Link>
            </Tooltip>
          </Flex>
       </Flex>
    </VStack>
)}

export default Head