import React, { useEffect, useState } from 'react'
import Filter from '../Component/Filter/Filter3';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer/Footer2'
import MedicalList from '../Component/Medical/MedicalList';
import MapView from '../Component/MapView/MapView';

export default function Medical() {


    return (
        <>
            <Head />
            <Filter />
            <MapView />
            <MedicalList />
            <Count />
            <Footer />
        </>
    )
}
