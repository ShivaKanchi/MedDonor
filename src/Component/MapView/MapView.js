import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import { useSelector } from 'react-redux';
//import { useState } from 'react';

const MapView = (props) => {
    const position = [51.505, -0.09]
    return (
        <div >
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full"
            >
                <TileLayer
                    attribution='<a href="https://www.openstreetmap.org/copyright">OSM</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>{props.title}</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapView