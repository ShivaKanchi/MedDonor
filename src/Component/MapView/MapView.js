import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Flex } from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";

const AnyReactComponent = ({ text }) => <ImLocation size={50} color="#0B63C7" />;
const Marker = ({ text }) => <ImLocation size={40} color="red" />;

const MapView = ({ data }) => {
  const mappoint = [];
  const [latitude, setLatitude] = useState();
  const [longitude, setLongtitude] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(parseFloat(position.coords.latitude))
      setLongtitude(parseFloat(position.coords.longitude))
    });
  }, []);

  // console.log(data)
  // useEffect(() => {
  //   data.map((value) => {
  //     console.log(value[0])
  //     mappoint.push([value[0][0], value[0][1]])
  //   })
  // }, [])
  // console.log(mappoint)

  const defaultProps = {
    center: {
      lat: 19.3505971,// ? latitude : 19.2118784,19.207471, 72.978321
      lng: 72.9142051//? longitude : 72.8563712,19.3505971,72.9142051
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <Flex justifyContent="center" flexDirection="row" padding="15px">
      <div style={{ height: '70vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.google_map }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="Your Here"
          />

          < Marker
            lat={19.203611}
            lng={72.848344}
          />
          < Marker
            lat={19.203202}
            lng={72.848688}
          />

          {
            data.map((medical) => {
              {
                medical[0][0] &&
                  < Marker
                    lat={medical[0][0]}
                    lng={medical[0][1]}
                    text={medical[1]}
                  />
              }
            })
          }



        </GoogleMapReact>
      </div>
    </Flex >

  );
}

export default MapView
