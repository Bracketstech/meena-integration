import React from "react";
import Cards from "./Cards";
import Content from "./Content";
import PrimaryCareSvgs from "./PrimaryCareSvgs";

const PrimaryCare = ({ cards, title, des }) => {
  return (
    <div className="relative">
      <PrimaryCareSvgs />
      <div className="sm:pt-[7.31707317073vw] lg:mt-[5.10416666667vw] Container1440 relative z-[2] lg:pt-[1.14583333333vw] pt-[16.4102564103vw] lg:pb-[10.46875vw]">
        <div className="flex items-start justify-between flex-wrap sm:gap-y-[4.87804878049vw] gap-y-[6.15384615385vw] flex-col-reverse lg:flex-row">
          <Cards cards={cards} />
          <Content title={title} des={des} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryCare;
