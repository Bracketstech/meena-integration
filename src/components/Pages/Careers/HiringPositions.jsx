import React from "react";
import Content from "./components/Content";
import HiringCards from "./components/HiringCards";

const HiringPositions = ({ arabic, data }) => {
  return (
    <div className="sm:py-[7.31707317073vw] Container1440 flex items-center justify-between lg:pt-[6.25vw] pt-[16.4102564103vw] lg:pb-[5.72916666667vw] pb-[6.15384615385vw] flex-wrap sm:gap-y-[3.65853658537vw] gap-y-[6.15384615385vw]">
      <Content
        title={data.title}
        des={data.description}
        cta={data.cat_button_text}
        arabic={arabic}
      />
      <HiringCards cards={data.jobs_categories} arabic={arabic} />
    </div>
  );
};

export default HiringPositions;
