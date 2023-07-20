import { useEffect, useState } from "react";
import useAmPm from "@/hooks/useAmPm";
import useIsClinicOpen from "@/hooks/useIsClinicOpen";

const useAddresses = (data) => {
  const [addressContainer, setAddressContainer] = useState([]);
  useEffect(() => {
    let newAddresses = [];
    data.forEach((item) => {
      const isClinicOpen = useIsClinicOpen(
        item.working_time[0].from_time,
        item.working_time[0].to_time
      );

      const startingTime = useAmPm(item.working_time[0].from_time);
      const endingTime = useAmPm(item.working_time[0].to_time);
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

  return addressContainer;
};

export default useAddresses;
