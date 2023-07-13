"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 22.811006, lng: 35.815725 };

const MapComponent = ({ arabic, addressContainer }) => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyAniunwXPqbRC4D6yTcbwKXW5kWIyw2y18",
  // });
  // const [map, setMap] = useState(null);
  // const onLoad = useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  return (
    <div className="hidden relative lg:block overflow-hidden mx-[auto] lg:mx-[unset] w-[90%] lg:w-[62.5vw] rounded-[unset]">
      {/* <img
        src="/images/locations/map.jpg"
        alt="map"
        className="w-full h-[100vw] lg:h-full object-cover"
      /> */}
      <LoadScript googleMapsApiKey="AIzaSyAniunwXPqbRC4D6yTcbwKXW5kWIyw2y18">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4.5}
        >
          {/* Child components, such as markers, info windows, etc. */}

          {addressContainer.map(({ address: { position } }) => (
            <Marker
              position={position}
              key={position.lng}
              icon={{
                // path: google.maps.SymbolPath.CIRCLE,
                url: "/images/icons/marker.svg",
                // scale: 7,
              }}
            />
          ))}

          <></>
        </GoogleMap>
      </LoadScript>

      <div className="absolute lg:top-[0.83333333333vw] leftRightFixer1 w-full lg:px-[1.25vw]">
        <div className="bg-[#F0F0F0] lg:rounded-[1.35416666667vw] lg:w-[27.0833333333vw] lg:h-[2.60416666667vw] flex items-center justify-between lg:px-[1.25vw]">
          <input
            type="text"
            placeholder={arabic ? "منطقة البحث" : "Search area"}
            className="w-[90%] outline-none bg-transparent lg:text-[0.9375vw] PingAR-Light placeholder:text-[#8F8F8F] h-full"
          />
          <img
            src="/images/icons/search.svg"
            alt="search"
            className="lg:w-[0.83333333333vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
