import React from "react";

const TermsConditions = ({ arabic, content }) => {
  return (
    <div className="lg:pt-[6.25vw] sm:pt-[7.31707317073vw] pt-[16.4102564103vw]">
      <div className="bg-[#FFFFFF] lg:w-[62.5vw] w-[88.7179487179vw] mx-[auto] relative z-[1] lg:pb-[10.4166666667vw] sm:pb-[14.6341463415vw] pb-[20.5128205128vw] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]">
        <div className="bg-[#FFFFFF]">
          <div className="lg:w-[55.8333333333vw] mx-[auto] w-[80.5128205128vw]">
            <div
              className="termsContent lg:w-[62.5vw]"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
