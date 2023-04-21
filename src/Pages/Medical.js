import React, { useEffect, useState } from 'react'
import Filter from '../Component/Filter/Filter3';
import Head from '../Component/Head';
import Count from '../Component/Count'
import Footer from '../Component/Footer/Footer2'
import MedicalList from '../Component/Medical/MedicalList';
import MapView from '../Component/MapView/MapView';
import MapG from '../Component/MapView/GoogleMap/MapG';

export default function Medical() {


    return (
        <>
            <Head />
            <Filter />
            <MedicalList />
            <MapView />
            {/* <MapG /> */}
            <Count />
            <Footer />
        </>
    )
}
