import React from 'react'
import About from '../Component/About'
import BoxSection from '../Component/BoxSection'
import Count from '../Component/Count'
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
      <Hero />
      <About />
      <OurServices />
      <BoxSection />
      <Count />
      {/* <MedicenDonateRegister /> */}
      <GetOffer />
      <Footer />
    </>
  )
}

export default Home