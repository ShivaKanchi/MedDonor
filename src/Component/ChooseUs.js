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
            Why Choose Us ?
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
            <Stack direction={['column','row','row']}>
              {/* first half  */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">
                <Accordion allowMultiple>
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
              </Flex>
              {/* second half */}
              <Flex direction="column" w={["100%","50%","50%"]} p="10">  
                <Image src="https://res.cloudinary.com/ssdeveloper/image/upload/v1667156104/Med%20Donner/03_1_eqaby6.svg" />
              </Flex>
            </Stack>
        {/* </Box> */}
    </Stack>
  )
}
