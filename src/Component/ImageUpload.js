import { Button, Input, Stack, Avatar } from '@chakra-ui/react';
import React, { createRef, useState } from 'react'
import { MdDelete, MdImage } from "react-icons/md";

function ImageUpload(props) {

    const [image, _setImage] = useState();
    const inputFileRef = createRef();
    const cleanup = () => {
        URL.revokeObjectURL(image && props.image);
        inputFileRef.current.value = null;
    };
    const setImage = (newImage) => {
        if (image) {
            cleanup();
        }
        _setImage(newImage);
    };

    const handleOnChange = (event) => {
        const newImage = event.target.files[0];
        if (newImage) {
            setImage(URL.createObjectURL(newImage));
        }
        props.imageUpload(event)
    };

    return (
        <Stack>
            <Avatar  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png1" />
            <Input 
                ref={inputFileRef}
                accept="image/*"
                id="avatar-image-upload"
                type="file"
                onChange={handleOnChange}
            />
            <Button
            
                leftIcon={image ? <MdDelete /> : <MdImage />}
            >
                {image ? "Uploaded" : "upload"}
            </Button>
        </Stack>
  )
}

export default ImageUpload