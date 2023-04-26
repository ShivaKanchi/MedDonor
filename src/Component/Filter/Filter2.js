import { Stack, Select, InputGroup, Input, Button, InputRightElement, Heading, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaNotesMedical } from 'react-icons/fa';
import { ImSearch } from "react-icons/im";
import { getMedicines, searchMedicine, searchCategoryMedicine } from '../../Redux/Reducers/Medicine/medicine.action';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

// import { HashLink } from 'react-router-hash-link';
export default function Filter() {
    // const ref = useRef(null);
    //MedicalFilter
    const [selectedcategory, setSelectedcategory] = useState("")
    const [searchtext, setSearchtext] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchtext(e.target.value);
    };
    const handleChangeSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        searchCategory(e.target.value)
        setSelectedcategory(e.target.value);
    };
    const dispatch = useDispatch()

    const searchCategory = async (category) => {
        if (category == "Category") {
            await dispatch(getMedicines())
        }
        else {
            await dispatch(searchCategoryMedicine(category)).then(data => {
                console.log(data)
                // if (data.type == "ERROR")
                //     alert(data.payload.response.data.error)
            })
        }
    }

    const search = async () => {
        //console.log(searchtext)
        if (searchtext.length === 0) {
            await dispatch(getMedicines())
        }
        else {
            await dispatch(searchMedicine(searchtext)).then(data => {
                if (data.type == "ERROR")
                    alert(data.payload.response.data.message)
                setSearchtext("")
            })
        }
    }

    //console.log(searchtext)
    const handleClick = () => {
        // animateScroll.scrollTo(this.scrollTarget.offsetTop);
    };

    return (
        <Stack p={["5", "10", "10"]} w="full" spacing={10}>
            <Stack direction="row" spacing={10}>
                <Select icon={< FaNotesMedical />} w={["30%", "30%", "10%"]} alignSelf="flex-start" placeholder='Category' value={selectedcategory} onChange={handleChangeSelect}>
                    <option value='Pain Killers'>Pain Killers</option>
                    <option value='Analgesics'>Analgesics</option>
                    <option value='Antacids'>Antacids</option>
                    <option value='Antianxiety Drugs'>Antianxiety Drugs</option>
                    <option value='Antiarrhythmics'>Antiarrhythmics</option>
                    <option value='Antibacterials'>Antibacterials</option>
                    <option value='Antibiotics'>Antibiotics</option>
                    <option value='Anticoagulants and Thrombolytics'>Anticoagulants and Thrombolytics</option>
                    <option value='Anticonvulsants'>Anticonvulsants</option>
                    <option value='Antidepressants'>Antidepressants</option>
                    <option value='Antidiarrheals'>Antidiarrheals</option>
                    <option value='Antiemetics'>Antiemetics</option>
                    <option value='Antifungals'>Antifungals</option>
                    <option value='Antihistamines'>Antihistamines</option>
                    <option value='Antihypertensives'>Antihypertensives</option>
                    <option value='Anti-Inflammatories'>Anti-Inflammatories</option>
                    <option value='Antineoplastics'>Antineoplastics</option>
                    <option value='Antineoplastics'>Antineoplastics</option>
                    <option value='Antipyretics'>Antipyretics</option>
                    <option value='Antivirals'>Antivirals</option>
                    <option value='Barbiturates'>Barbiturates</option>
                    <option value='Beta-Blockers'>Beta-Blockers</option>
                    <option value='Bronchodilators'>Bronchodilators</option>
                    <option value='Cold Cures'>Cold Cures</option>
                    <option value='Corticosteroids'>Corticosteroids</option>
                    <option value='Cough Suppressants'>Cough Suppressants</option>
                    <option value='Cytotoxics'>Cytotoxics</option>
                    <option value='Decongestants'>Decongestants</option>
                    <option value='Diuretics'>Diuretics</option>
                    <option value='Expectorant'>Expectorant</option>
                    <option value='Hormones'>Hormones</option>
                    <option value='Hypoglycemics (Oral)'>Hypoglycemics (Oral)</option>
                    <option value='Immunosuppressives'>Immunosuppressives</option>
                    <option value='Laxatives'>Laxatives</option>
                    <option value='Muscle Relaxants'>Muscle Relaxants</option>
                    <option value='Sedatives'>Sedatives</option>
                    <option value='Tranquilizer'>Tranquilizer</option>
                    <option value='Vitamins'>Vitamins</option>
                    <option value=''>other type</option>
                </Select>

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
