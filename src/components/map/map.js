import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  LoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 30.71312819645935,
  lng: 76.6866264462313,
};

function Map() {
  const [mapLoading, setMapLoading] = useState(false)

  const handleMapLoad = () =>  {
    setMapLoading(true)
  }
  return (
    <LoadScript 
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
    onLoad={handleMapLoad}>
      {mapLoading?
       <GoogleMap
       mapContainerStyle={containerStyle}
       center={center}
       zoom={12}
       onUnmount={() => {}}
       options={{
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [{ saturation: -100 }]
          }
        ]
      }}
     >
       <Marker position={center} />
     </GoogleMap>:
     <h1>Loading.....</h1>}
    </LoadScript>
  );
}

export default React.memo(Map);
