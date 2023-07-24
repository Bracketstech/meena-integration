import React from "react";
import EcoCards from "./EcoCards";

const Ecosystem = ({ arabic, title, cards }) => {
  return (
    <div className="Container1440 relative z-[2] lg:py-[unset] sm:pt-[14.6341463415vw] pt-[20.5128205128vw]">
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        data-aos="fade-up"
        className="mx-[auto] hidebr lg:w-[49.9479166667vw] PingAR-Regular PingAR-Regular heading54 tracking-[unset] text-[#3B3659] text-center"
      ></div>

      <EcoCards cards={cards} arabic={arabic} />
    </div>
  );
};

export default Ecosystem;
