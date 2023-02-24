import React from 'react'
import { 
    Box, 
    Stack,
    Text, 
    VStack, 
    Flex, 
    Image, 
    Heading, 
    Button, 
    Link, 
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'


export default function ChooseUs() {
  return (
    <Stack direction="column" w="full" h="fit-content" pt="5%">
        <Heading 
            fontFamily='IBM Plex Sans' fontStyle="normal" fontWeight="600" 
            fontSize={["4xl","5xl","6xl"]} lineHeight={["4xl","5xl","6xl"]} 
            letterSpacing="0.023em"  alignSelf="center"
        >
           FAQs
        </Heading>
        <Flex justifyContent="center" >
            <Divider w={["25%","20%","15%"]} align="center" borderColor="#20BC7E" orientation="horizontal" border="2px solid #20BC7E" />
        </Flex>
        {/* <Box
            backgroundImage="url(https://res.cloudinary.com/ssdeveloper/image/upload/v1665815768/Med%20Donner/ic_outline-health-and-safety_qjy7fv.svg)"
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            w="full"
            h="fit-content"
            pt="5%"
            // border="2px solid red"
        >    */}
            <Stack direction={['column','row','row']} spacing={10} >
              {/* first half  */}
              <Stack direction="column" w={["100%","50%","50%"]} spacing={20} p="10" >
                <Accordion allowMultiple >
                    <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Is there a limit on how many medicines I can raise?
                                </Box>
                                {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            There is no limit to how many medicines you can raise. 
                            We do recommend that start donating unused medicines frequently with a realistic
                            target as donors usually wish to support and help the needy.
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Do we have to pay as a donor?
                                </Box>
                                {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Meddonor is a completely free platform for all the donors.
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Who would be my point of contact at Meddonor ? 
                                    Would a specific relationship manager be appointed to me?
                                </Box>
                                {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Our team will be assisting you throughout the process and you can feel 
                                free to contact them regarding any kind of assistance you need.
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                    <AccordionItem>
                        {({ isExpanded }) => (
                        <>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Charity campagion for child education
                                </Box>
                                {isExpanded ? (
                                <MinusIcon fontSize='12px' />
                                ) : (
                                <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                        )}
                    </AccordionItem>
                </Accordion>
              </Stack>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667156104/Med%20Donner/03_1_eqaby6.svg" />
              </Flex>
            </Stack>
        {/* </Box> */}
    </Stack>
  )
}
