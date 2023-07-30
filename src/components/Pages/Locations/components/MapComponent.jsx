import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  useGoogleMap,
  useJsApiLoader,
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
                        <span className="text18 relative top-[4px] lg:top-0 text-[#505050] PingAR-Regular">
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
                          className="text18 relative top-[4px] lg:top-0 text-[#505050] PingAR-Regular"
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

  function LoadingComponent() {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-[120px] h-[120px] sm:w-[10vw] sm:h-[10vw]  mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const googleMapsApiKey = "AIzaSyAniunwXPqbRC4D6yTcbwKXW5kWIyw2y18";

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey,
  });

  if (!isLoaded) {
    return <LoadingComponent />;
  }

  const fitBoundsToMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds();

    // Extend the bounds to include each location
    currentBounds.forEach((bound) => {
      bounds.extend(bound);
    });

    // Fit the map to the bounds
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4.5}
      onClick={handleMapClick}
    >
      <MapMarkers />
    </GoogleMap>
  );
};

export default MapComponent;
