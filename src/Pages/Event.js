import React, { useEffect, useState } from 'react'
import Filter from '../Component/Filter/Filter';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer/Footer2'
import EventCard from '../Component/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../Redux/Reducers/Event/event.action';

export default function Event() {
  const [events, setEvents] = useState([])
  const dispatch = useDispatch()

  const eventData = useSelector(state => state.events)
  useEffect(() => {
    dispatch(getAllEvents())
    setEvents(eventData)
  }, [eventData])

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
