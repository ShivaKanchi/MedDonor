import React from "react";
import GoogleMapReact from 'google-map-react';
import { Flex } from "@chakra-ui/react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapView() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <Flex justifyContent="center" flexDirection="row" padding="15px">
      <div style={{ height: '50vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.google_map }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </Flex >

  );
}