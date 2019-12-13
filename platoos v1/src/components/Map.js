import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 13.018482, lng: 77.654182 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 13.018482, lng: 77.654182 }} />
        )}
      </GoogleMap>
    );
  })
);
export default Map;
