import { Stack, Box, Heading, Image, Input, Button, VStack } from '@chakra-ui/react'
import { cleanup } from '@testing-library/react';
import React,{useState} from 'react'
import { MdDelete , MdFileUpload} from "react-icons/md";

function TalkNow() {

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    // image upload code
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

    const Remove = ()=> {
        if(image){
           setImage = ""
        }
    }

  return (
    <Stack W="100%" >
        <Box w={["70%","80%","90%"]} mt={10} h={["100%","100%","90vh"]} rounded={20} p="10" alignSelf="center" bg="gray.300">
            <Heading as="h4" fontSize={["xl","lg","lg"]} textAlign="center" color="red" >NOTE : Please upload image clearly so the donor can read prescription .</Heading>
            <Heading mt={5} as="h4" fontSize={["xl","lg","lg"]} textAlign="center" color="red" >This Is A Demo</Heading>
            <Image mt={5}  w="full" h="60%" objectFit="contain"
            src="https://res.cloudinary.com/ssdeveloper/image/upload/v1676965105/Med%20Donner/photo_6316592635858499397_y_dbhzju.jpg" />
            <Stack align="center">
                <Input mt={5} w={["100%","100%","50%"]} isReadOnly="true" type="file" onChange= {(e)=> setImage(e.target.files[0])}></Input>
                <Button onClick={uploadImage} leftIcon={<MdFileUpload />} > Upload</Button> 
            </Stack>
        </Box>
    </Stack>
  )
}

export default TalkNow