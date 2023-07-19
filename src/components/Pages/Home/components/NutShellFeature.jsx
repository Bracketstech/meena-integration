import React from "react";

const NutShellFeature = ({ feature, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={index * 100}
      className="sm:pt-[7.92682926829vw] sm:h-[36.5853658537vw] sm:w-[48%] lg:w-[23.3333333333vw] w-full bg-[#EBF0F7] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] lg:h-[13.3854166667vw] h-[47.1794871795vw] lg:pt-[1.85416666667vw] pt-[8.20512820513vw] items-start"
    >
      <div className="sm:w-[90%] lg:w-[20.8333333333vw] w-[76.4102564103vw] mx-[auto] flex flex-col items-center lg:gap-y-[0.72916666666vw] gap-y-[3.07692307692vw]">
        <img
          src={feature.icon[0].path}
          className="lg:w-[3.59375vw] w-[12.5641025641vw] sm:w-[6.34146341463vw]"
        />
        <div className="text-center">
          <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw]  lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium text-[#3B3659]">
            {feature.title}
          </h5>
          <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[6.153846153846154vw] PingAR-Regular text-[#707070] lg:mt-[0.4166666666666667vw] mt-[2vw]">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutShellFeature;