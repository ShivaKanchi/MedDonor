import React, { useEffect, useState } from 'react'
import Filter from '../Component/Filter/Filter';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer/Footer2'
import MedicalList from '../Component/Medical/MedicalList';

export default function Medical() {


    return (
        <>
            <Head />
            <Filter />
            <MedicalList />
            <Count />
            <Footer />
        </>
    )
}
