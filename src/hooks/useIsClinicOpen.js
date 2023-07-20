import React from "react";
import useUserTime from "./useUserTime";

const useIsClinicOpen = (openingTime, closingTime) => {
  const userTime = useUserTime();
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

export default useIsClinicOpen;
