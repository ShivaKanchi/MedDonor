import React from 'react'
import BreadCumb from '../Component/BreadCumb';
import Filter from '../Component/Filter';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer2'


export default function Event() {
  return (
    <>
      <Head />
      <BreadCumb name="Event" />
      <Filter />
      <Count />
      <Footer top="50%" />
    </>
  )
}
