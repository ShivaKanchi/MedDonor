import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import './Pagination.css'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'


const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (<>

        <Box >
            <Flex justifyContent="center" flexDirection="row" padding="15px">
                {/* <ArrowBackIcon  alignSelf="center"/> */}
                {pageNumbers.map((number) => (
                    <>
                        &nbsp;
                        < button onClick={() => { paginate(number) }} href='!#' className='page-link' >
                            {number}
                        </button>
                        &nbsp;
                    </>
                    // <Button mb={10}  ml={5} mr={5} alignSelf="center" onClick={() => { paginate(number) }} >
                ))}
                {/* <ArrowForwardIcon alignSelf="center" /> */}
            </Flex >
        </Box>
    </>





    )
}

export default Pagination



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
