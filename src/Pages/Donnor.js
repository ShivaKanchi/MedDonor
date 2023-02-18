import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//component
import Count from '../Component/Count'
import Filter from '../Component/Filter/Filter2'
import Footer from '../Component/Footer/Footer'
import GetOffer from '../Component/GetOffer'
import Head from '../Component/Head'
import MedicineCard from '../Component/Medicinelist'
import { getMedicines } from '../Redux/Reducers/Medicine/medicine.action'

export default function Donnor() {
  // const [medicines, setMedicines] = useState([])
  // const dispatch = useDispatch()
  // const reduxState = useSelector(state => state.medicines);
  // useEffect(() => {
  //   dispatch(getMedicines())
  //   console.log("from donor js")
  // }, [])
  return (
    <>
      <Head />
      <Filter />
      <MedicineCard />
      <Count />
      <GetOffer />
      <Footer />
    </>
  )
}
