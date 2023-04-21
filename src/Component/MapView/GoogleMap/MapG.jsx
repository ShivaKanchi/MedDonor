import React from 'react'
import { GoogleMap, LoadScript } from 'react-google-maps';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MapG() {
    return (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    )
}

export default React.memo(MapG)