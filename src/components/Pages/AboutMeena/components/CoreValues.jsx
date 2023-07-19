import React from "react";

const CoreValues = ({ arabic, title, features }) => {
  return (
    <div className="relative">
      <span className="healthCare__Overlay absolute w-full h-full bottom-0 leftRightFixer1"></span>
      <div className="sm:py-[7.31707317073vw] relative z-[2] Container1440 lg:py-[7.0890625vw] py-[15.5615384615vw]">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          data-aos="fade-up"
          className={`text-center ${
            arabic ? "lg:text-right" : "lg:text-left"
          } heading54 PingAR-Regular tracking-[unset] text-[#3B3659]`}
        ></div>
        <div className="lg:pt-[2.5vw] pt-[6.15384615385vw] flex items-center lg:gap-x-[2.5vw] flex-wrap gap-y-[4.10256410256vw]">
          {features?.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade"
              data-aos-delay={index + 200}
              className="lg:w-[16.875vw]"
            >
              <img
                src={feature.icon[0].path}
                alt={feature.title}
                className="lg:w-[2.5vw] w-[8.71794871795vw] mx-[auto] lg:mx-[unset] sm:w-[5.36585365854vw]"
              />
              <div
                className={`sm:gap-y-[1.46341463415vw] sm:mt-[1.46341463415vw] lg:mt-[1.35416666667vw] mt-[4.10256410256vw] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[3.07692307692vw] lg:items-start items-center text-center ${
                  arabic ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] text-[#3B3659] lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[4.87179487179vw] leading-[7.69230769231vw] PingAR-Medium">
                  {feature.title}
                </span>
                <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] PingAR-Regular">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
