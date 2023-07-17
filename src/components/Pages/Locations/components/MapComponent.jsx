import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  useGoogleMap,
} from "@react-google-maps/api";
import { useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 22.811006, lng: 35.815725 };

const MapComponent = ({
  arabic,
  currentBounds,
  addressContainer,
  activeMarker,
  setActiveMarker,
  isNearestActive,
  handleMapClick,
  handleMarkerClick,
}) => {
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
    const width =
      window.innerWidth > 1024
        ? (window.innerWidth / 100) * 2.45416666667
        : window.innerWidth > 640
        ? 36
        : 24;

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
                        <span className="text18 relative top-[4px] lg:top-0 text-[#505050] PingAR-Light">
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
                          className="text18 relative top-[4px] lg:top-0 text-[#505050] PingAR-Light"
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
                        <span className="text18 relative top-[6px] lg:top-0  text-[#3B3659] PingAR-Medium">
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
    <LoadScript googleMapsApiKey="AIzaSyAniunwXPqbRC4D6yTcbwKXW5kWIyw2y18">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4.5}
        onClick={handleMapClick}
      >
        <MapMarkers />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
