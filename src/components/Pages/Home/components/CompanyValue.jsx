import React from "react";

const CompanyValue = ({ index, companyValue }) => {
  return (
    <div
      data-aos-anchor="anchorFOrCards"
      data-aos="fade"
      data-aos-delay={(index + 1) * 200}
      className="h-[190px] sm:h-[160px] sm:pt-[6.09756097561vw] sm:w-[100%]  lg:pb-[2.34375vw] companyValues-start w-full lg:pt-[1.74479166667vw] pb-[24px] pt-[8.20512820513vw] lg:h-[11.1979166667vw] lg:w-[23.3333333333vw] bg-[#F5EBE8] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] flex lg:items-stretch"
    >
      <div className=" sm:h-full sm:w-[90%] sm:gap-y-[1.46341463415vw] w-[76.6666666667vw] gap-y-[2vw] lg:w-[19.1666666667vw] h-full justify-between mx-[auto] flex flex-col lg:gap-y-[0.41666666666vw]">
        <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] text-[4.871794871794872vw] lg:text-[1.354166666666667vw] lg:leading-[1.875vw] PingAR-Bold text-[#845FFF] flex-grow-[1]">
          {companyValue.value_title}
        </h4>
        <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[0.9375vw] line_clamp3g lg:leading-[1.45833333333vw] PingAR-Regular text-[#505050] ">
          {companyValue.value_description}
        </p>
      </div>
    </div>
  );
};

export default CompanyValue;
