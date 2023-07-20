import React from "react";

const useUserTime = () => {
  const currentDate = new Date();

  // Get the time components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the time components to two digits if needed
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Return the formatted time as a string
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export default useUserTime;
