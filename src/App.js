import React from 'react';
import './App.css';

import { PulseDot, PulseCircle, PulseRing } from "@opentripplanner/pulse-dot";
import LocationField from "@opentripplanner/location-field";
import ItineraryBody from "@opentripplanner/itinerary-body";

const currentPosition = {
  coords: { latitude: 45.508246, longitude: -122.711574 }
};
const geocoderConfig = {
  baseUrl: "https://newplanner.trimet.org/ws/solrwrap/v0/pelias", // TriMet-specific default
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

function trip() {
  let retVal = null;

  // eg: https://maps.trimet.org/gtfs/rt/vehicles/routes/100
  const pdx_zoo="https://maps.trimet.org/otp_mod/plan?fromPlace=PDX%3A%3A45.5892%2C-122.5934&toPlace=Zoo%3A%3A45.510%2C-122.7158";
  fetch(pdx_zoo)
  .then(res => {
    retVal = res.json();
    // retVal;
    console.log(retVal);
  })

  retVal = (
    <PulseDot>
      <PulseCircle></PulseCircle>
      <PulseRing></PulseRing>
    </PulseDot>
  );

  return retVal;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

      <LocationField
        currentPosition={currentPosition}
        geocoderConfig={geocoderConfig}
        inputPlaceholder="Select from location"
        locationType="from"
        onLocationSelected={onLocationSelected}
      />
      {trip()}
      </header>
    </div>
  );
}

export default App;
