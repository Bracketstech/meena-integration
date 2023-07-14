"use client";
import DekstopFilter from "./components/DekstopFilter";
import MobFilter from "./components/MobFilter";
import MapComponent from "./components/MapComponent";
import { useEffect, useState } from "react";

const addressContainer = [
  {
    isAr: {
      title: "عيادة الباحة",
      timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
    },
    filterId: "Yalla Clinic",
    title: "Yalla Clinic",
    timing: "Sat-Thu (7AM - 4PM)",
    phone: "+966 000 0000 00",
    isOpen: false,
    address: {
      position: {
        lng: 20.9314494,
        lat: 24.1395481,
      },
    },
  },
  {
    isAr: {
      title: "عيادة الباحة",
      timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
      filterTitle: "عيادة نيست",
    },
    filterId: "NEST Clinic",
    filterTitle: "NEST Clinic",
    title: "NEST Clinic",
    timing: "Sat-Thu (7AM - 4PM)",
    phone: "+966 000 0000 00",
    isOpen: false,
    address: {
      position: {
        lng: 25.5789267,
        lat: 26.8170857,
      },
    },
  },
  {
    isAr: {
      title: "عيادة الباحة",
      timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
    },
    filterId: "Yalla Clinic",
    title: "Yalla Clinic",
    timing: "Sat-Thu (7AM - 4PM)",
    phone: "+966 000 0000 00",
    isOpen: false,
    address: {
      position: {
        lng: 50.8516316,
        lat: 21.3735019,
      },
    },
  },
  {
    isAr: {
      title: "عيادة الباحة",
      timing: "السبت - الخميس (7 صباحًا - 4 مساءً)",
    },
    filterId: "NEST Clinic",
    title: "NEST Clinic",
    timing: "Sat-Thu (7AM - 4PM)",
    phone: "+966 000 0000 00",
    isOpen: false,
    address: {
      position: {
        lng: 19.565407,
        lat: 15.5468422,
      },
    },
  },
];

const filters = [
  {
    filterId: "All",
    filterTitleAr: "الكل",
    filterTitle: "All",
  },
  {
    filterId: "Yalla Clinic",
    filterTitleAr: "عيادة يلا",
    filterTitle: "Yalla Clinic",
  },
  {
    filterId: "NEST Clinic",
    filterTitleAr: "عيادة نيست",
    filterTitle: "NEST Clinic",
  },
  {
    filterId: "Open Now",
    filterTitleAr: "مفتوح الان",
    filterTitle: "Open Now",
  },
];

const MapContainer = ({ arabic }) => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [bounds, setBounds] = useState([]);
  const [isNearestActive, setIsNearestActive] = useState(false);
  const [renderingAddresses, setRenderingAddresses] =
    useState(addressContainer);

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
    navigator.geolocation.getCurrentPosition((position) => {
      let userLat = parseInt(position.coords.latitude);
      let userLong = parseInt(position.coords.longitude);
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
      settingBounds(isNearestActive ? renderingAddresses : addresses);
      setIsNearestActive(!isNearestActive);
    });
  };

  const settingBounds = (addresses) => {
    let newBounds = [];
    addresses.forEach(({ address: { position } }) => {
      newBounds.push(position);
    });
    setBounds(newBounds);
  };

  useEffect(() => {
    settingBounds(renderingAddresses);
  }, []);
  console.log(bounds);
  return (
    <div className="z-[2] lg:w-full w-[88.7179487179vw] mx-[auto] lg:mx-[unset] relative lg:pt-[4.16666666667vw] gap-y-[8.33333333333vw] lg:pb-[10.4166666667vw] flex justify-center items-stretch flex-col lg:flex-row">
      <div className="flex justify-center md:h-[50.9895833333vw] items-stretch flex-col lg:flex-row lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] overflow-hidden">
        <DekstopFilter
          handleCheckChange={handleCheckChange}
          filters={filters}
          addressContainer={renderingAddresses}
          arabic={arabic}
          handleNearest={handleNearest}
          isNearestActive={isNearestActive}
        />
        <MobFilter arabic={arabic} />
        <MapComponent
          currentBounds={bounds}
          addressContainer={renderingAddresses}
          arabic={arabic}
          isNearestActive={isNearestActive}
        />
      </div>
    </div>
  );
};

export default MapContainer;
