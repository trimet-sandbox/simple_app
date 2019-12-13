import React from 'react';
import logo from './logo.svg';
import './App.css';

import { PulseDot, PulseCircle, PulseRing } from "@ott_test/pulse-dot";
import LocationField from "@ott_test/location-field";

const currentPosition = {
  coords: { latitude: 45.508246, longitude: -122.711574 }
};
const geocoderConfig = {
  baseUrl: "https://ws-st.trimet.org/pelias/v1", // TriMet-specific default
  boundary: {
    // TriMet-specific default
    rect: {
      minLon: -123.2034,
      maxLon: -122.135,
      minLat: 45.273,
      maxLat: 45.7445
    }
  },
  maxNearbyStops: 4,
  type: "PELIAS"
};
const onLocationSelected = (m) => console.log(m);

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <PulseDot>
        <PulseCircle></PulseCircle>
        <PulseRing></PulseRing>
      </PulseDot>

      <br/><br/>

      <LocationField
        currentPosition={currentPosition}
        geocoderConfig={geocoderConfig}
        inputPlaceholder="Select from location"
        locationType="from"
        onLocationSelected={onLocationSelected}
      />


      </header>
    </div>
  );
}

export default App;
