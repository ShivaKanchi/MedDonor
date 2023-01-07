import React,{useEffect, useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, IconButton, Image, Heading, Text, Button, Box } from '@chakra-ui/react'

export default function EventCard() {

  const [Data,setData]= useState([])

  useEffect (async ()=>  {
      const data = await fetch('http://localhost:8081/events', {
      method: 'GET',
      // mode: 'no-cors',
      headers: { 'Content-type': 'application/json' },
  }).then((t) =>
      // console.log(t)
      t.json()
  ).then((data) =>
 
    console.log(data["message"]),
    setData(data)
  )},[])
  
  return (
    <>

    <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>{Data}</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
      
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

 
</Card>
    </>
   
  );
}