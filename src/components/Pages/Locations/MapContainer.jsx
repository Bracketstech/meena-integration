"use client";
import DekstopFilter from "./components/DekstopFilter";
import MobFilter from "./components/MobFilter";
import DesktopMap from "./components/DesktopMap";
import { useEffect, useRef, useState } from "react";
import MapComponent from "./components/MapComponent";

// const addressContainer = [
//   {
//     isAr: {
//       title: "عيادة الباحة",
//       timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
//     },
//     filterId: "Yalla Clinic",
//     title: "Yalla Clinic",
//     timing: "Sat-Thu (7AM - 4PM)",
//     phone: "+966 000 0000 00",
//     isOpen: false,
//     isActive: false,
//     address: {
//       position: {
//         lat: 24.763221,
//         lng: 46.713752,
//       },
//     },
//   },
//   {
//     isAr: {
//       title: "عيادة الباحة",
//       timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
//       filterTitle: "عيادة نيست",
//     },
//     filterId: "NEST Clinic",
//     filterTitle: "NEST Clinic",
//     title: "NEST Clinic",
//     timing: "Sat-Thu (7AM - 4PM)",
//     phone: "+966 000 0000 00",
//     isOpen: false,
//     isActive: false,
//     address: {
//       position: {
//         lat: 24.649691,
//         lng: 46.57093,
//       },
//     },
//   },
//   {
//     isAr: {
//       title: "عيادة الباحة",
//       timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
//     },
//     filterId: "Yalla Clinic",
//     title: "Yalla Clinic",
//     timing: "Sat-Thu (7AM - 4PM)",
//     phone: "+966 000 0000 00",
//     isOpen: false,
//     isActive: false,
//     address: {
//       position: {
//         lat: 24.739525,
//         lng: 46.844215,
//       },
//     },
//   },
//   {
//     isAr: {
//       title: "عيادة الباحة",
//       timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
//     },
//     filterId: "NEST Clinic",
//     title: "NEST Clinic",
//     timing: "Sat-Thu (7AM - 4PM)",
//     phone: "+966 000 0000 00",
//     isOpen: false,
//     isActive: false,
//     address: {
//       position: {
//         lat: 24.819323,
//         lng: 46.642341,
//       },
//     },
//   },
// ];

// const filters = [
//   {
//     filterId: "All",
//     filterTitleAr: "الكل",
//     filterTitle: "All",
//   },
//   {
//     filterId: "Yalla Clinic",
//     filterTitleAr: "عيادة يلا",
//     filterTitle: "Yalla Clinic",
//   },
//   {
//     filterId: "NEST Clinic",
//     filterTitleAr: "عيادة نيست",
//     filterTitle: "NEST Clinic",
//   },
//   {
//     filterId: "Open Now",
//     filterTitleAr: "مفتوح الان",
//     filterTitle: "Open Now",
//   },
// ];

const MapContainer = ({ arabic, filters, addressContainer }) => {
  const [appliedFilters, setAppliedFilters] = useState(["All"]);
  const [bounds, setBounds] = useState([]);
  const [isWindowLoaded, setIsWindowLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNearestActive, setIsNearestActive] = useState(false);
  const myMap = useRef(null);
  const [renderingAddresses, setRenderingAddresses] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [usersPosition, setUsersPosition] = useState({});
  const [isLoadingCurrentLocation, setIsLoadingCurrentLocation] =
    useState(false);
  const scrollTo = () => {
    const scrollOptions = {
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    };

    const element = myMap.current;
    const topOffset = -100; // Adjust the value to scroll above by desired pixels
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset + topOffset;

    window.scrollTo({
      top: topPosition,
      ...scrollOptions,
    });
  };

  const handleAddresses = (fltrs) => {
    const newList = [];
    if (fltrs.length == 0) {
      setRenderingAddresses(addressContainer);
      settingBounds(addressContainer);

      return;
    }
    if (fltrs.includes("All")) {
      setRenderingAddresses(addressContainer);
      settingBounds(addressContainer);

      return;
    } else {
      addressContainer.map((address) => {
        let isIncluded = false;
        fltrs.map((f) => {
          if (address.filterId == f) {
            isIncluded = true;
          }
        });
        if (isIncluded) {
          newList.push(address);
        }
      });
      if (fltrs.includes("Open Now")) {
        addressContainer.map((address) => {
          if (address.isOpen) {
            let isInNewList = false;
            newList.forEach((item) => {
              if (item.address.position.lng == address.address.position.lng) {
                isInNewList = true;
              }
            });
            if (!isInNewList) {
              newList.push(address);
            }
          }
        });
      }
      setRenderingAddresses(newList);
      settingBounds(newList);
    }
  };

  const handleCheckChange = (event) => {
    const filtersList = appliedFilters;
    if (event.target.checked) {
      if (!filtersList.includes(event.target.id)) {
        filtersList.push(event.target.id);
      }
    } else {
      if (filtersList.includes(event.target.id)) {
        filtersList.splice(filtersList.indexOf(event.target.id), 1);
      }
    }
    setAppliedFilters(filtersList);
    handleAddresses(filtersList);
  };
  const handleNearest = () => {
    setIsLoadingCurrentLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;
        let addresses = [
          {
            address: {
              position: {
                lat: userLat,
                lng: userLong,
              },
            },
          },
        ];

        setUsersPosition({ ...addresses[0].address.position });
        settingBounds(isNearestActive ? renderingAddresses : addresses);
        setIsNearestActive(!isNearestActive);
        setIsLoadingCurrentLocation(false);
      },
      (error) => {
        setIsLoadingCurrentLocation(false);
      }
    );
  };

  const settingBounds = (addresses) => {
    let newBounds = [];
    addresses.forEach(({ address: { position } }) => {
      newBounds.push(position);
    });
    setBounds(newBounds);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
    setIsWindowLoaded(window);
  };
  useEffect(() => {
    setRenderingAddresses(addressContainer);
  }, [addressContainer, filters]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (renderingAddresses.length != 0) {
      if (!isNearestActive) {
        settingBounds(renderingAddresses);
      }
    }
  }, [renderingAddresses]);

  const settingActiveMarker = (marker) => {
    let newAddresses = [];
    renderingAddresses.forEach((address, index) => {
      if (
        address.address.position.lat == marker?.lat &&
        address.address.position.lng == marker?.lng
      ) {
        let newAddress = { ...address };
        newAddress.isActive = true;
        newAddresses.push(newAddress);
      } else {
        let newAddress = { ...address };
        newAddress.isActive = false;
        newAddresses.push(newAddress);
      }
    });
    setRenderingAddresses(newAddresses);
  };

  const handleMarkerClick = (marker) => {
    setActiveMarker(marker);
    settingActiveMarker(marker);
  };
  const handleMapClick = () => {
    setActiveMarker(null);
    settingActiveMarker();
  };
  const handleSearch = (event) => {
    let newAddresses = [];
    let searchedValue = event.target.value.toLowerCase();
    renderingAddresses.forEach((address) => {
      const {
        title,
        isAr: { title: arTitle },
      } = address;
      if (
        title.toLowerCase().includes(searchedValue) ||
        arTitle.toLowerCase().includes(searchedValue)
      ) {
        newAddresses.push(address);
      }
    });
    setRenderingAddresses(newAddresses);
    if (!searchedValue) {
      handleAddresses(appliedFilters);
    }
  };

  return (
    <div className="z-[2] lg:w-full w-[88.7179487179vw] mx-[auto] lg:mx-[unset] relative lg:pt-[4.16666666667vw] gap-y-[8.33333333333vw] lg:pb-[10.4166666667vw] flex justify-center items-stretch flex-col lg:flex-row">
      <div className="flex min-h-70vw lg:min-h-[50vw] justify-center lg:h-[50.9895833333vw] items-stretch flex-col lg:flex-row lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] overflow-hidden">
        {isWindowLoaded ? (
          isMobile ? (
            <MobFilter
              arabic={arabic}
              handleCheckChange={handleCheckChange}
              filters={filters}
              addressContainer={renderingAddresses}
              handleNearest={handleNearest}
              isNearestActive={isNearestActive}
              handleMarkerClick={handleMarkerClick}
              appliedFilters={appliedFilters}
              handleSearch={handleSearch}
              scrollTo={scrollTo}
              myMap={myMap}
              isLoadingCurrentLocation={isLoadingCurrentLocation}
            >
              <MapComponent
                arabic={arabic}
                currentBounds={bounds}
                addressContainer={renderingAddresses}
                isNearestActive={isNearestActive}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
                handleMapClick={handleMapClick}
                handleMarkerClick={handleMarkerClick}
                handleSearch={handleSearch}
                usersPosition={usersPosition}
              />
            </MobFilter>
          ) : (
            <>
              <DekstopFilter
                handleCheckChange={handleCheckChange}
                filters={filters}
                addressContainer={renderingAddresses}
                arabic={arabic}
                handleNearest={handleNearest}
                isNearestActive={isNearestActive}
                handleMarkerClick={handleMarkerClick}
                appliedFilters={appliedFilters}
                isLoadingCurrentLocation={isLoadingCurrentLocation}
              />
              <DesktopMap arabic={arabic} handleSearch={handleSearch}>
                <MapComponent
                  arabic={arabic}
                  currentBounds={bounds}
                  addressContainer={renderingAddresses}
                  isNearestActive={isNearestActive}
                  activeMarker={activeMarker}
                  setActiveMarker={setActiveMarker}
                  handleMapClick={handleMapClick}
                  handleMarkerClick={handleMarkerClick}
                  usersPosition={usersPosition}
                />
              </DesktopMap>
            </>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MapContainer;
