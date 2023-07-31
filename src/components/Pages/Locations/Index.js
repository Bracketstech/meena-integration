"use client";
import SubPageHero from "@/components/SubPageHero";
import MapContainer from "./MapContainer";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";
import useUserTime from "@/hooks/useUserTime";
import { useEffect, useState } from "react";

const Index = ({ arabic, data, aboveMapData }) => {
  useAnimations();
  useHeader(arabic ? "الاماكن" : "Locations");
  const [addressContainer, setAddressContainer] = useState([]);
  const [filters, setFilters] = useState([]);
  const userTime = useUserTime();

  const checkingIsClinicOpen = (openingTime, closingTime) => {
    const [openHours, openMinutes] = openingTime.split(":");
    const [closeHours, closeMinutes] = closingTime.split(":");
    const [userHours, userMinutes, userSeconds] = userTime.split(":");

    const clinicOpen = new Date();
    clinicOpen.setHours(openHours, openMinutes, 0);

    const clinicClose = new Date();
    clinicClose.setHours(closeHours, closeMinutes, 0);

    const userCurrentTime = new Date();
    userCurrentTime.setHours(userHours, userMinutes, userSeconds);

    return userCurrentTime >= clinicOpen && userCurrentTime <= clinicClose;
  };

  const ampmConvertor = (timeStr) => {
    const timeParts = timeStr.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    let period = "AM";
    let convertedHours = hours;

    if (hours >= 12) {
      period = "PM";
      convertedHours = hours === 12 ? 12 : hours - 12;
    }
    return `${convertedHours.toString().padStart(2, "0")}:${
      timeParts[1]
    } ${period}`;
  };
  useEffect(() => {
    let newAddresses = [];
    data?.forEach((item) => {
      const isClinicOpen = checkingIsClinicOpen(
        item.working_time[0].from_time,
        item.working_time[0].to_time
      );

      const startingTime = ampmConvertor(item.working_time[0].from_time);
      const endingTime = ampmConvertor(item.working_time[0].to_time);
      const timing =
        item.working_days_span + ` (${startingTime} - ${endingTime})`;
      const newAddress = {
        isAr: {
          title: item.title,
          timing: timing,
        },
        title: item.title,
        timing: timing,
        phone: item.clinic_phone,
        isOpen: isClinicOpen,
        filterId: item.clinic_type[0].title,
        isActive: false,
        address: {
          position: {
            lat: +item.coordinates[0].lat,
            lng: +item.coordinates[0].lng,
          },
        },
      };
      newAddresses.push(newAddress);
    });
    setAddressContainer(newAddresses);
  }, [data]);

  useEffect(() => {
    let newFilters = [
      {
        filterId: "All",
        filterTitleAr: "الكل",
        filterTitle: "All",
      },
    ];
    data?.forEach((item) => {
      let newFilter = item.clinic_type[0].title;

      let isFilterInList = false;
      newFilters.forEach((filter) => {
        if (filter.filterId == newFilter) {
          isFilterInList = true;
        }
      });
      if (!isFilterInList) {
        newFilters.push({
          filterId: newFilter,
          filterTitleAr: newFilter,
          filterTitle: newFilter,
        });
      }
    });

    newFilters.push({
      filterId: "Open Now",
      filterTitleAr: "مفتوح الان",
      filterTitle: "Open Now",
    });
    setFilters(newFilters);
  }, [data]);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="flipped hidden lg:block absolute top-[15.3125vw] leftRightFixer2 w-[31.4583333333vw]">
          <svg
            id="arrowAnimation"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[12.05vw] w-[31.82vw]"
            viewBox="0 0 611.04 231.577"
          >
            <g
              id="Group_89960"
              data-name="Group 89960"
              transform="translate(-1313.203 -290.408)"
            >
              <path
                id="Path_101703"
                data-name="Path 101703"
                d="M-5038.082,422.788S-5209.445,251.069-5359.918,214.5s-280.054,62.019-280.054,62.019"
                transform="translate(6958.082 94.955)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={6}
                style={{
                  strokeDasharray: "682.589px",
                  strokeDashoffset: "682.589px",
                  animation: "1s ease 0s 1 normal forwards running line-anime",
                }}
              />
              <path
                id="Path_101704"
                data-name="Path 101704"
                d="M-5608.006,199.983s-27.579,75.273-33.419,78.193,94.415,0,94.415,0"
                transform="translate(6957.901 94.275)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={6}
                style={{
                  strokeDasharray: "180.451px",
                  strokeDashoffset: "180.451px",
                  animation:
                    "0.5s ease-in 0.7s 1 normal forwards running line-anime",
                }}
              />
            </g>
          </svg>
        </div>

        <SubPageHero
          arabic={arabic}
          // title={arabic ? "مواقع " : "Meena"}
          // boldtext={arabic ? "مينا" : "locations"}
          markupTitle={aboveMapData?.top_header_content[0].header_title}
          text={aboveMapData?.top_header_content[0].header_description}
        />
        {addressContainer.length != 0 && (
          <MapContainer
            addressContainer={addressContainer}
            filters={filters}
            arabic={arabic}
          />
        )}
      </section>
    </main>
  );
};

export default Index;
