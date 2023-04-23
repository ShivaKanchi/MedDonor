import { Box, Button, Center, Flex, HStack, Heading } from '@chakra-ui/react';
import React from 'react'
import './Pagination.css'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'


const Pagination = ({ cardsPerPage, totalCards, paginate, currentnumber }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumbers, "----", currentnumber, "----", pageNumbers.length)
    return (
        <>
            {
                totalCards &&
                <Box >
                    <Flex justifyContent="center" flexDirection="row" padding="15px">
                        <HStack spacing={4} overflowX="auto">
                            {
                                currentnumber === 1 ?
                                    <Button disabled key={currentnumber}>Previous</Button>
                                    :
                                    <Button key={currentnumber} onClick={() => { paginate(currentnumber - 1) }}>Previous</Button>
                            }

                            {pageNumbers.map((number) => (
                                <>
                                    {currentnumber === number ?
                                        <Button  border='2px' borderColor='green.500' key={number} onClick={() => { paginate(number) }} href='!#' x>{number}</Button>
                                        :
                                        <Button key={number} onClick={() => { paginate(number) }} href='!#' x>{number}</Button>
                                    }
                                </>
                            ))}
                            {
                                currentnumber === pageNumbers.length ?
                                    <Button disabled key={currentnumber}>Next</Button>
                                    :
                                    <Button key={currentnumber} onClick={() => { paginate(currentnumber + 1) }}>Next</Button>
                            }
                        </HStack>
                    </Flex >
                </Box >
            }
        </>
    )
}

export default Pagination

// {if(currentnumber==totalCards){disabled}}

//   {/* <Box>
//             <Flex p={2}>
//                 <Spacer />
//                 <Paginator
//                 // onPageChange={handlePageChange}
//                 // pagesQuantity={pagesQuantity - 1}
//                 >
//                     <Previous bg="white">
//                         <CgChevronLeft />
//                     </Previous>
//                     <PageGroup>
//                         {pageNumbers?.map((page) => (
//                             <Page
//                                 key={`paginator_page_${page}`}
//                                 page={page}
//                                 onClick={() => { paginate(page) }}
//                             />
//                         ))}
//                     </PageGroup>
//                     <Next bg="white">
//                         <CgChevronRight />
//                     </Next>
//                 </Paginator>
//             </Flex>
//         </Box> */}




//     {/* <div className="pagination">
//             {p.map((number) => (
//                 < button onClick={() => { paginate(number) }} href='!#' className='page-link' >
//                     {number}
//                 </button>


//             ))}
//         </div > */}

// {/* <Flex justifyContent="center" flexDirection="row" padding="15px">
// {/* <ArrowBackIcon  alignSelf="center"/> */}
// {pageNumbers.map((number) => (
//     <>
//         &nbsp;
//         < button onClick={() => { paginate(number) }} href='!#' className='page-link' >
//             {number}
//         </button>
//         &nbsp;
//     </>
//     // <Button mb={10}  ml={5} mr={5} alignSelf="center" onClick={() => { paginate(number) }} >
// ))}
// {/* <ArrowForwardIcon alignSelf="center" /> */}
// </Flex > */}