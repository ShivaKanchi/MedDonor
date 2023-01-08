import React from 'react'
import AboutPage from '../Component/AboutPage'
import ChooseUs from '../Component/ChooseUs'
// import Accordion from '../Component/ChooseUs'
import Head from '../Component/Head'
import OurMission from '../Component/OurMission'
import Count from '../Component/Count'
import Footer from '../Component/Footer'
import GetOffer from '../Component/GetOffer'

export default function About() {
  return (
    <>
      <Head />
      <AboutPage />
      <OurMission />
      <ChooseUs />
      <Count />
      <GetOffer />
      <Footer />
    </>
  )
}
