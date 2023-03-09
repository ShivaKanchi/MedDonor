import { Box, Button, Center, Flex } from '@chakra-ui/react';
import React from 'react'
import './Pagination.css'


const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (<>

        <Box >
            <Flex >
                {pageNumbers.map((number) => (
                    < Button onClick={() => { paginate(number) }} >
                        {number}
                    </Button>

                ))}
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
