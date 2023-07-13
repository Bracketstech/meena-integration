import React from "react";
import Cards from "./components/Cards";
import Content from "./components/Content";

const PrimaryCare = ({ arabic }) => {
  return (
    <div className="relative">
      {/* <img
      src="/images/services/primarycare-bgDesign.png"
      alt="bgDesign"
      className="hidden lg:block absolute leftRightFixer2 lg:bottom-[-1vw] w-full lg:h-[57.2520833333vw]"
    /> */}
      {/* <img
      src="/images/services/primarycare-bgDesign-mob.png"
      alt="bgDesign"
      className="lg:hidden block absolute leftRightFixer2 bottom-[-24.6153846154vw] w-full lg:h-[57.2520833333vw]"
    /> */}
      <svg
        className="h-[55.8974358974vw] flipped lg:hidden block absolute leftRightFixer2 bottom-[-70px] sm:bottom-[-15.8536585366vw] w-full lg:h-[57.2520833333vw]"
        xmlns="http://www.w3.org/2000/svg"
        width="1965.025"
        height="1104.528"
        viewBox="0 0 1965.025 1104.528"
      >
        <path
          id="Path_101509"
          data-name="Path 101509"
          d="M953.05,934.915c-30.579,89.189,9.9,703.736-91.877,731.008s-75.868-85.853-6.934-54.765S858.552,1903.49,505,1927.246s-1309.751-219.748-1511.682,106.9"
          transform="translate(1009.435 -932.375)"
          fill="none"
          stroke="#8450ff"
          strokeLinecap="round"
          strokeWidth={4}
        />
      </svg>
      <svg
        className="hidden flipped lg:block absolute leftRightFixer2 lg:bottom-[-1vw] w-full lg:h-[57.2520833333vw]"
        xmlns="http://www.w3.org/2000/svg"
        width="1965.025"
        height="1104.528"
        viewBox="0 0 1965.025 1104.528"
      >
        <path
          id="heartLine"
          data-name="Path 101509"
          d="M953.05,934.915c-30.579,89.189,9.9,703.736-91.877,731.008s-75.868-85.853-6.934-54.765S858.552,1903.49,505,1927.246s-1309.751-219.748-1511.682,106.9"
          transform="translate(1009.435 -932.375)"
          fill="none"
          stroke="#8450ff"
          strokeLinecap="round"
          strokeWidth={4}
        />
      </svg>
      <div className="sm:pt-[7.31707317073vw] lg:mt-[5.10416666667vw] Container1440 relative z-[2] lg:pt-[1.14583333333vw] pt-[16.4102564103vw] lg:pb-[10.46875vw]">
        <div className="flex items-start justify-between flex-wrap sm:gap-y-[4.87804878049vw] gap-y-[6.15384615385vw] flex-col-reverse lg:flex-row">
          <Cards arabic={arabic} />
          <Content arabic={arabic} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryCare;
