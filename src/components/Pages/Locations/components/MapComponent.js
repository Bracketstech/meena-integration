"use client";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  useGoogleMap,
} from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 22.811006, lng: 35.815725 };

const MapComponent = ({
  arabic,
  addressContainer,
  currentBounds,
  isNearestActive,
}) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
  };

  const handleMapClick = () => {
    setActiveMarker(null);
  };
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
  // const mapRef = useRef(null);

  // useEffect(() => {
  //   console.log(addressContainer);
  //   if (mapRef.current && addressContainer.length > 0) {
  //     const bounds = new window.google.maps.LatLngBounds();

  //     // Extend the bounds to include each location
  // addressContainer.forEach(({ address: { position } }) => {
  //   bounds.extend(position);
  // });

  //     // Fit the map to the bounds
  //     console.log(mapRef.current);
  //     // mapRef.current?.fitBounds(bounds);
  //   }
  // }, [addressContainer]);

  const fitBoundsToMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds();

    // Extend the bounds to include each location
    currentBounds.forEach((bound) => {
      bounds.extend(bound);
    });

    // Fit the map to the bounds
    map.fitBounds(bounds);
  };

  function MapMarkers() {
    const map = useGoogleMap();

    useEffect(() => {
      if (currentBounds.length > 0) {
        fitBoundsToMarkers(map);
      }
    }, [currentBounds, map]);
    const width = (window.innerWidth / 100) * 3.85416666667;
    return (
      <>
        {addressContainer.map(
          ({ title, isAr, phone, timing, address: { position } }, index) => (
            <Marker
              key={index}
              position={position}
              icon={{
                // path: google.maps.SymbolPath.CIRCLE,
                url: "/images/icons/marker.svg",
                scaledSize: new window.google.maps.Size(width, width),
              }}
              label={{
                text: arabic ? isAr.title : title,
                className: "markerLabel",
              }}
              onClick={() => handleMarkerClick(position)}
            >
              {activeMarker === position && (
                <InfoWindow
                  position={position}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div
                    key={index}
                    className={addressContainer.length == index + 1 || ""}
                  >
                    <h5 className="text22 text-[#3B3659]">
                      {arabic ? isAr.title : title}
                    </h5>
                    <div className="lg:pt-[0.41666666666vw] pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
                      <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                        <img
                          src="/images/icons/clock1.svg"
                          alt="clock"
                          className="lg:w-[1.04166666667vw]"
                        />
                        <span className="text18 text-[#505050] PingAR-Light">
                          {arabic ? isAr.timing : timing}
                        </span>
                      </div>
                      <a
                        href={`tel:${phone}`}
                        className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
                      >
                        <img
                          src="/images/icons/phone1.svg"
                          alt="phone"
                          className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                        />
                        <span
                          style={{ direction: "ltr" }}
                          className="text18 text-[#505050] PingAR-Light"
                        >
                          {phone}
                        </span>
                      </a>
                      <a
                        href=""
                        className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
                      >
                        <img
                          src="/images/icons/open.svg"
                          alt="open"
                          className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                        />
                        <span className="text18 text-[#3B3659] PingAR-Medium">
                          {arabic ? "افتح في خريطة جوجل" : "Open In Google Map"}
                        </span>
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          )
        )}
        {isNearestActive &&
          currentBounds.map((bound) => (
            <Marker
              key={bound.lng}
              position={bound}
              // icon={{
              //   // path: google.maps.SymbolPath.CIRCLE,
              //   url: "/images/icons/marker.svg",
              // scale: 7,
              // }}
              label={{
                text: arabic ? "You" : "You",
                className: "markerLabel",
              }}
            />
          ))}
      </>
    );
  }
  return (
    <div className="hidden relative lg:block overflow-hidden mx-[auto] lg:mx-[unset] w-[90%] lg:w-[62.5vw] rounded-[unset]">
      {/* <img
        src="/images/locations/map.jpg"
        alt="map"
        className="w-full h-[100vw] lg:h-full object-cover"
      /> */}
      <LoadScript googleMapsApiKey="AIzaSyAniunwXPqbRC4D6yTcbwKXW5kWIyw2y18">
        <GoogleMap
          // ref={mapRef}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4.5}
          onClick={handleMapClick}
        >
          {/* Child components, such as markers, info windows, etc. */}

          {addressContainer.map(({ title, isAr, address: { position } }) => (
            <MapMarkers />
            // <Marker
            //   label={{
            //     text: arabic ? "You" : "You",
            //     className: "markerLabel",
            //   }}
            //   position={position}
            //   key={position.lng}
            //   icon={{
            //     // path: google.maps.SymbolPath.CIRCLE,
            //     url: "/images/icons/marker.svg",
            //     // scale: 7,
            //   }}
            // />
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
