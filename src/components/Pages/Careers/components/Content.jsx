import React from "react";

const Content = ({ arabic, title, des, cta }) => {
  return (
    <div className="lg:w-[28.3854166667vw]">
      <div
        data-aos="fade-up"
        data-aos-anchor="#hiring"
        data-aos-delay={400}
        className={`heading54 PingAR-Regular tracking-[unset] text-[#3B3659] ${
          arabic && "pl-[11vw]"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
      <div
        dangerouslySetInnerHTML={{ __html: des }}
        data-aos="fade-down"
        data-aos-anchor="#hiring"
        data-aos-delay={400}
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] PingAR-Regular lg:text-[1.14583333333vw] text-[#505050] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.02564102564vw] lg:mt-[1.14583333333vw] mt-[5.12820512821vw]"
      ></div>
      <a
        data-aos="fade"
        data-aos-anchor="#hiring"
        data-aos-delay={400}
        href=""
        className="sm:w-[30.487804878vw] sm:h-[6.34146341463vw] sm:mt-[2.92682926829vw] lg:w-[15.3125vw] lg:h-[3.22916666667vw] bg-[#8450FF] w-[46.1538461538vw] h-[9.23076923077vw] lg:rounded-[5.20833333333vw] rounded-[7.94871794872vw] flex justify-center items-center lg:mt-[2.5vw] mt-[6.15384615385vw]"
      >
        <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] PingAR-Regular lg:text-[0.9375vw] text-[3.07692307692vw] text-[#FFFFFF]">
          {cta}{" "}
        </span>
      </a>
    </div>
  );
};

export default Content;
