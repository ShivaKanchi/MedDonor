import {
    Heading,
    Box,
    Image,
    Text,
    Stack,
    Button,
    Flex,
} from '@chakra-ui/react';
// import medimg from './Medicines/med1.jpg';
const medicines = [
    {
        "MedName": "Dolo 650",
        "MedDetails": "For fever",
        "MedExpiry": "04/01/2023",
        "MedPic": "med1",
        "MedDonor": "Shiva"
    }]

export default function Medicinecard() {

    return (
        <>{
            medicines.map((med) => (
                <Flex flexDirection='row' w='full' padding={3}>
                    <Box
                        maxW={'270px'}
                        w={'full'}
                        bg={'white'}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                            h={'200px'}
                            w={'full'}
                            src={`https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg`}
                            objectFit={'cover'}
                        />
                        <Box p={8}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    {med.MedName}
                                </Heading>
                                <Text color={'gray.500'}>{med.MedDetails}</Text>
                            </Stack>

                            <Stack direction={'row'} justify={'center'} spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>Donor</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        {med.MedDonor}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>Expiry</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        {med.MedExpiry}
                                    </Text>
                                </Stack>
                            </Stack>
                            <Button
                                w={'full'}
                                mt={8}
                                bg={'#20BC7E'}
                                color={'white'}
                                rounded={'md'}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}>
                                Buy
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            ))}

        </>

    );
}
