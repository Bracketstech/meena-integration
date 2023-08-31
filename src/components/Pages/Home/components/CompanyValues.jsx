import React from "react";
import CompanyValue from "./CompanyValue";

const CompanyValues = ({ arabic, companyValues }) => {
  return (
    <div className="sm:gap-y-[16px] w-full flex justify-center sm:justify-between lg:justify-center items-stretch lg:gap-x-[2.5vw] lg:mt-[-5.41666666667vw] flex-wrap gap-y-[4.10256410256vw] sm:mt-[5vw] mt-[8.20512820513vw]">
      {companyValues.map((companyValue, index) => (
        <CompanyValue companyValue={companyValue} index={index} key={index} />
      ))}
    </div>
  );
};

export default CompanyValues;
