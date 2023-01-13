import React from 'react'
import Filter from '../Component/Filter';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer2'
import EventCard from '../Component/EventCard';

export default function Event() {
  return (
    <>
      <Head />
      <Filter />
      <EventCard />/
      <Count />
      <Footer />
    </>
  )
}
