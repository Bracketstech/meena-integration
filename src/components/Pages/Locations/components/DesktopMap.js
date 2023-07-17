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

const DesktopMap = ({ arabic, handleSearch, children }) => {
  return (
    <div className="hidden relative lg:block overflow-hidden mx-[auto] lg:mx-[unset] w-[90%] lg:w-[62.5vw] rounded-[unset]">
      {children}
      <div className="absolute lg:top-[0.83333333333vw] leftRightFixer1 w-full lg:px-[1.25vw]">
        <div className="bg-[#F0F0F0] lg:rounded-[1.35416666667vw] lg:w-[27.0833333333vw] lg:h-[2.60416666667vw] flex items-center justify-between lg:px-[1.25vw]">
          <input
            type="text"
            placeholder={arabic ? "منطقة البحث" : "Search area"}
            onChange={handleSearch}
            className="w-[90%] outline-none bg-transparent lg:text-[0.9375vw] PingAR-Regular placeholder:text-[#8F8F8F] h-full"
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

export default DesktopMap;
