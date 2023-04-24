import { Stack, Select, InputGroup, Input, Button, InputRightElement, Heading, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaNotesMedical } from 'react-icons/fa';
import { ImSearch } from "react-icons/im";
import { getMedicines, searchMedicine } from '../../Redux/Reducers/Medicine/medicine.action';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

// import { HashLink } from 'react-router-hash-link';
export default function Filter() {
    // const ref = useRef(null);
    //MedicalFilter
    const [searchtext, setSearchtext] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchtext(e.target.value);
    };

    const dispatch = useDispatch()

    const search = async () => {
        console.log(searchtext)
        if (searchtext.length === 0) {
            await dispatch(getMedicines())
        }
        else {
            await dispatch(searchMedicine(searchtext))
        }
    }

    console.log(searchtext)
    const handleClick = () => {
        // animateScroll.scrollTo(this.scrollTarget.offsetTop);
    };

    return (
        <Stack p={["5", "10", "10"]} w="full" spacing={10}>
            <Stack direction="row" spacing={10}>
                <Select icon={< FaNotesMedical />} w={["30%", "30%", "10%"]} alignSelf="flex-start" placeholder='Cough' />
                <InputGroup w={["50%", "50%", "85%"]} alignSelf="center">
                    <Input placeholder='Search Medicines' onChange={handleChange} />
                    <Button onClick={() => search()}>
                        <ImSearch />
                    </Button>
                </InputGroup>
                <Link href='/donnorregister' >
                    <Button
                        background="#20BC7E" rounded="47px"
                        display={['none', "flex", "flex"]}
                    // onClick={handleClick}
                    >
                        Donate Medicines
                    </Button>
                </Link>
            </Stack>
            {/* for mobile  */}
            {/* <Button
                w="50%" background="#20BC7E" boxShadow="0px 2px 10px" rounded="47px" alignSelf="center"
                display={['flex', "none", "none"]}
            >
                Donate
            </Button> */}
            <Heading
                fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="700"
                fontSize={["lg", "xl", "2xl"]} lineHeight={["lg", "xl", "2xl"]}
                letterSpacing="0.023em" pt={["5", "0", "0"]} alignSelf="center" w="full"
                textAlign="center" color="#FFB87A"
                id='DonationRegister'
            >
                Search result
            </Heading>
            {/* search result */}
            {/* medicinedetails */}

        </Stack>
    )
}
