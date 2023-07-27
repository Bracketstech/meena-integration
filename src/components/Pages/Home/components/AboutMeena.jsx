import React from "react";
import CompanyValues from "./CompanyValues";
import HealthCareJourney from "./HealthCareJourney";

const AboutMeena = ({ arabic, companyValues, title, img, data }) => {
  return (
    <div className="relative">
      <span className="healthCare__Overlay absolute w-full h-full top-0 leftRightFixer1 hidden lg:block"></span>
      <div className="Container1680 relative z-[2]">
        <div className="sm:gap-y-[7.31707317073vw] flex justify-center items-center flex-col lg:gap-y-[6.25vw] gap-y-[20.5128205128vw]">
          <CompanyValues arabic={arabic} companyValues={companyValues} />

          <div
            data-aos="fade-up"
            className="lg:w-[38.5416666667vw] heading54 tracking-[unset] text-[#3B3659] text-center PingAR-Regular"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </div>
        <div className="sm:pt-[4.87804878049vw] sm:pb-[7.31707317073vw] flex items-center lg:gap-x-[8.33333333333vw] justify-center flex-wrap lg:pt-[2.60416666667vw] lg:pb-[10.78125vw] gap-y-[12vw] pt-[6.15384615385vw] pb-[10.2564102564vw]">
          <div className="hidden lg:block" data-aos="fade">
            <img
              src={img}
              alt="healthcare journey"
              className="lg:w-[27.03125vw]"
            />
          </div>
          <div className="sm:gap-y-[3.65853658537vw] flex flex-col lg:gap-y-[1.66666666667vw] gap-y-[6.15384615385vw] lg:items-end">
            {data.map((item) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay="200"
                className="sm:gap-y-[2.92682926829vw] flex justify-center lg:justify-start items-start lg:gap-x-[1.04166666667vw] flex-wrap gap-y-[4.10256410256vw]"
              >
                <img
                  src={item.icon?.path}
                  alt={item.title}
                  className="lg:w-[2vw] w-[6vw] sm:w-[4vw]"
                />
                <div className="lg:w-[32.2916666667vw] text-center lg:text-start">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium text-[#3B3659]">
                    {item.title}
                  </h5>
                  <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.9512195122vw] lg:text-[1.04583333333vw] lg:leading-[1.666666666666667vw] text-[3.58974358974359vw] leading-[6.153846153846154vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[0.625vw] mt-[2vw]">
                    {item.description}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeena;
