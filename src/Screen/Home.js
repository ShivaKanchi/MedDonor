import React from 'react'
import About from '../Component/About'
import BoxSection from '../Component/BoxSection'
import Head from '../Component/Head'
import Hero from '../Component/Hero'
import OurServices from '../Component/OurServices'

function Home() {
  return (
    <>
      <Head />
      <Hero />
      <About />
      <OurServices />
      <BoxSection />
    </>
  )
}

export default Home