import React from "react";

const useAmPm = (timeStr) => {
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

export default useAmPm;
