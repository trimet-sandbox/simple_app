import React from 'react';
import './App.css';

import BaseMap from "@opentripplanner/base-map";
import Vehicles from "@ott_test/transit-vehicle-overlay";

/*
import LocationField from "@opentripplanner/location-field";
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

      <LocationField
        currentPosition={currentPosition}
        geocoderConfig={geocoderConfig}
        inputPlaceholder="Select from location"
        locationType="from"
        onLocationSelected={onLocationSelected}
      />

*/

const geometryUrl = "https://newplanner.trimet.org/ws/ti/v0/index";
const vehicleUrl = "https://maps.trimet.org/gtfs/rt/vehicles/";


function vehicles(id="2020", routes="routes/all", panX=0, panY=0, color="#ec8284", follow=true, popup=true, tool=true) {
  const portland = [45.523, -122.671];
  return (
    <BaseMap center={portland}>
      <Vehicles
        name="Real-Time Buses and Trains"
        geometryUrl={geometryUrl}
        vehicleUrl={vehicleUrl}
        tracked={id}
        vehicleQuery={routes}
        panOffsetX={panX}
        panOffsetY={panY}
        color={color}
        recenterMap={follow}
        hasPopup={popup}
        hasTooltip={tool}
        visible
      />
    </BaseMap>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Sample Real-time Vehicle App</header>
      {vehicles()}
      <div><button>blah</button></div>
    </div>
  );
}

export default App;
