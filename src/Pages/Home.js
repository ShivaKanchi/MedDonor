import { Stack , ScaleFade} from '@chakra-ui/react'
import React from 'react'
import About from '../Component/About'
import BoxSection from '../Component/BoxSection'
import Count from '../Component/Count'
import DonationRegister from '../Component/DonationRegister'
import Footer from '../Component/Footer/Footer'
import GetOffer from '../Component/GetOffer'
import Head from '../Component/Head'
import Hero from '../Component/Hero'
// import MedicenDonateRegister from '../Component/MedicenDonateRegister'
import OurServices from '../Component/OurServices'


function Home() {
  const user = localStorage.getItem('token')
  console.log(user)

  return (
    <>
      <Head />
      {/* animation  */}
      <ScaleFade in={true} direction="bottom" duration={0.3} easing="ease-out" position="fixed" zIndex={1}>
        {/* component */}
        <Hero />
        {/* component */}
      </ScaleFade>
      {/* animation end */}
      <About />
      <OurServices />
      <BoxSection />
      <Count />      
      <Stack display={["flex","none","none"]}>
        <DonationRegister />
      </Stack>   
      <GetOffer />
      <Footer />
    </>
  )
}

export default Home