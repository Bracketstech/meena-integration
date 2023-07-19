import Link from "next/link";
import React from "react";
import ClinicsSvgs from "./ClinicsSvgs";

const MeenaLocations = ({ arabic, title, des, clinics }) => {
  return (
    <div className="relative">
      <ClinicsSvgs arabic={arabic} />
      <div className="sm:pt-[7.31707317073vw] relative z-[2] Container1440 pt-[12.3076923077vw] lg:pt-[4.6875vw] lg:pb-[5.98958333333vw]">
        <div className="lg:w-[37.5vw] mx-[auto]">
          <div
            data-aos="fade-up"
            className="heading54 PingAR-Regular text-center tracking-[unset] text-[#3B3659] lg:text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>

          <p
            data-aos="fade-down"
            className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.9512195122vw] lg:text-[1.14583333333vw] lg:leading-[1.666666666666667vw] text-[3.58974358974359vw] leading-[6.153846153846154vw] PingAR-Regular text-[#707070] lg:text-[#505050] text-center mt-[2.051282051282051vw] lg:mt-[0.625vw]"
          >
            {des}
          </p>
        </div>
        <div className="w-[94.1025641025641vw] lg:w-[unset] hideScroll overflow-scroll lg:overflow-auto flex items-center lg:gap-x-[2.5vw] gap-x-[4.102564102564103vw] lg:pt-[2.5vw] pt-[6.66666666667vw]">
          {clinics.map((clinic, index) => (
            <div
              key={clinic.title + index}
              data-aos="fade"
              data-aos-delay={index * 200}
              className="sm:min-w-[48.7804878049vw] min-w-[70.25641025641026vw] lg:min-w-[unset] lg:w-[23.33333333333333vw]"
            >
              <div className="lg:rounded-[1.04166666667vw] rounded-[20px] overflow-hidden relative">
                <img
                  src={clinic.images.path}
                  alt="locations"
                  className="w-full"
                />
                <span className="absolute w-full h-full top-0 leftRightFixer1 bg-[#3B3659] bg-opacity-[0.6]" />
                {clinic.coming_soon && (
                  <div className="flex flex-col items-center lg:gap-y-[0.78125vw] absolute bottom-[29.2857142857%] left-[50%] transform translate-x-[-50%]   z-[2]">
                    <img
                      src="/images/icons/clock.svg"
                      alt="clock"
                      className="lg:w-[1.45833333333vw]"
                    />
                    <span className="text22 text-[#F5EBE8]">
                      {arabic ? "قريباً" : "Coming soon"}
                    </span>
                  </div>
                )}
              </div>
              <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] sm:mb-[unset] lg:text-[1.354166666666667vw] lg:leading-[1.458333333333333vw] text-[4.871794871794872vw] leading-[7.692307692307692vw] PingAR-Medium text-[#3B3659] text-center block lg:mt-[1.25vw] lg:mb-[0.3125vw] mb-[5.93333333333vw] mt-[3.07692307692vw]">
                {clinic.title}
              </span>
            </div>
          ))}
        </div>
        <Link
          data-aos="fade-up"
          href={arabic ? "/ar/locations" : "/locations"}
          className="sm:mt-[3.65853658537vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:h-[6.34146341463vw] lg:mt-[3.33333333333vw] mt-[8.205128205128205vw] mx-[auto] bg-[#8450FF] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.076923076923077vw] PingAR-Regular lg:rounded-[5.20833333333vw] rounded-[7.948717948717949vw] lg:w-[12.7604166667vw] w-[37.94871794871795vw] lg:h-[3.22916666667vw] h-[9.23076923077vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300 text-[#FFFFFF]"
        >
          <span className="lg:h-[1.19791666667vw] sm:h-[2.92682926829vw] h-[3.58974358974vw]">
            {arabic ? "عرض كل المواقع" : "View all locations"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MeenaLocations;
