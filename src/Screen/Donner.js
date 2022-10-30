
import Footer from '../Component/Footer'
import Head from '../Component/Head'
import Medicinecard from '../Component/Medicinecard'
import React from 'react'
const medicines = [
  {
    "MedName": "Dolo 650",
    "MedDetails": "For fever",
    "MedExpiry": "04/01/2023",
    "MedPic": "med1",
    "Donor": "Shiva"
  }, {
    "MedName": "dala 650",
    "MedDetails": "For fever",
    "MedExpiry": "04/01/2023",
    "MedPic": "med2",
    "Donor": "Shiva"
  }, {
    "MedName": "popo 650",
    "MedDetails": "For fever",
    "MedExpiry": "04/01/2023",
    "MedPic": "med1",
    "Donor": "Shiva"
  }, {
    "MedName": "ropo 650",
    "MedDetails": "For fever",
    "MedExpiry": "04/01/2023",
    "MedPic": "med2",
    "Donor": "Shiva"
  }
];

export default function Donner() {
  return (
    <>
      <Head />
      <div >
        {
          medicines.map((med) => (
            <Medicinecard MedName={med.MedName} MedDetails={med.MedDetails} MedExpiry={med.MedExpiry} MedPic={med.MedPic} MedDonor={med.Donor} />
          ))
        }
      </div>
      <Footer top="50%" />
    </>
  )
}
