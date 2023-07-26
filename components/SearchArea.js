import React, {useState} from "react";
import Map from "./Map"
import MapSearch from "./MapSearch"

export default function SearchArea() {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return(
    <div>
      <MapSearch onLocationSelect={handleLocationSelect} />
      <Map width="500px" height="400px" location={selectedLocation} />
    </div>
  )
}