import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Flex } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const AnyReactComponent = ({ text }) => <ImLocation size={50} color="#0B63C7" />;
// const Marker = ({ text }) => <ImLocation size={40} color="red" />;

const MapG = ({ data }) => {
    // console.log(data.location)
    const [latitude, setLatitude] = useState();
    const [longitude, setLongtitude] = useState();
    const [selectedMarker, setSelectedMarker] = useState("");
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(parseFloat(position.coords.latitude))
            setLongtitude(parseFloat(position.coords.longitude))
        });
    }, []);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP
    })
    const containerStyle = { height: '70vh', width: '80%' };

    const center = {
        lat: latitude,
        lng: longitude
    };
    // const mappoint = [];
    // const [mapmarker, setMapmarker] = useState([]);
    // useEffect(() => {
    //     // data.map((value) => {
    //     //   console.log(value[0])
    //     //   mappoint.push([value[0]])
    //     // })
    //     setMapmarker(data)
    // }, [data])
    // console.log("okay", mapmarker)
    // const defaultProps = {
    //     center: {
    //         lat: 19.3505971,// ? latitude : 19.2118784,19.207471, 72.978321
    //         lng: 72.9142051//? longitude : 72.8563712,19.3505971,72.9142051
    //     },
    //     zoom: 11
    // };

    return (
        // Important! Always set the container height explicitly
        isLoaded && (
            <Flex justifyContent="center" flexDirection="row" padding="15px">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <div>
                        <Marker position={center} options={{}} />

                    </div>

                    {
                        data?.map((marker) => {
                            return (
                                <div key={marker.id}>
                                    < Marker position={marker.location} onClick={() => {
                                        // console.log(marker)
                                        setSelectedMarker(marker);
                                    }} />
                                </div>
                            )
                        })
                    }
                    {console.log(selectedMarker)}

                    {

                        selectedMarker && (
                            < InfoWindow
                                position={selectedMarker.location}
                                options={{
                                    pixelOffset: new window.google.maps.Size(0, -40),
                                }}
                            >
                                <div >
                                    <h1>Name -{selectedMarker.medicalname}</h1>
                                    <h2>id - {selectedMarker.id}</h2>
                                    {/* <h2>location - {selectedMarker.location}</h2> */}
                                    <button onClick={() => setSelectedMarker("")}>close</button>
                                </div>
                            </InfoWindow>
                        )

                    }

                </GoogleMap>
            </Flex >)



        //     <Flex justifyContent="center" flexDirection="row" padding="15px">
        //     <div style={{ height: '70vh', width: '80%' }}>
        //         <GoogleMapReact
        //             bootstrapURLKeys={{ key: process.env.google_map }}
        //             defaultCenter={defaultProps.center}
        //             defaultZoom={defaultProps.zoom}
        //         >
        //             <AnyReactComponent
        //                 lat={latitude}
        //                 lng={longitude}
        //                 text="Your Here"
        //             />

        //     < Marker
        //     lat={19.203611}
        //     lng={72.848344}
        //   />
        //   < Marker
        //     lat={19.203202}
        //     lng={72.848688}
        //   />

        //          {
        //     mapmarker.map((medical) => {
        //         {
        //             console.log(medical[0])
        //             medical[0] &&
        //                 < AnyReactComponent
        //                     lat={medical[0]}
        //                     lng={medical[1]}
        //                     text={medical[2]}
        //                 />
        //         }
        //     })
        // }
        //         </GoogleMapReact>
        //     </div>
        // </Flex >

    );
}

export default MapG
