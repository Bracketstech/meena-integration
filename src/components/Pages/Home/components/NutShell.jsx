import Link from "next/link";
import React from "react";
import NutShellFeature from "./NutShellFeature";
import NutShellSvgs from "./NutShellSvgs";

const NutShell = ({ arabic, title, features, cta }) => {
  return (
    <div className="relative">
      <NutShellSvgs />
      <div className="sm:pb-[14.6341463415vw] sm:pt-[7.31707317073vw] Container1440 relative z-[2] lg:pt-[1.45833333333vw] lg:pb-[10.8854166667vw] pt-[10.2564102564vw] pb-[20.5128205128vw]">
        <div
          data-aos="fade-up"
          className="lg:w-[34.2708333333vw] PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div
          id="lineanimation2"
          className="sm:pt-[4.87804878049vw] flex items-stretch justify-between lg:pt-[2.5vw] flex-wrap gap-y-[4.10256410256vw] sm:gap-y-[3.65853658537vw] lg:gap-y-[2.60416666667vw] pt-[6.15384615385vw]"
        >
          {features.map((feature, index) => (
            <NutShellFeature
              index={index}
              feature={feature}
              key={feature.title + index}
            />
          ))}
        </div>
        <Link
          href={arabic ? "/ar/services" : "/services"}
          className="sm:mt-[3.65853658537vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:h-[6.34146341463vw] lg:mt-[3.33333333333vw] mt-[6.15384615385vw] mx-[auto] bg-[#8450FF] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] PingAR-Regular text-[3.07692307692vw] lg:rounded-[5.20833333333vw] rounded-[7.948717948717949vw] lg:w-[12.1875vw] w-[31.7948717949vw] lg:h-[3.22916666667vw] h-[9.23076923077vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300 text-[#FFFFFF]"
          data-aos="fade-up"
        >
          <span className="lg:h-[1.19791666667vw] sm:h-[2.92682926829vw] h-[3.58974358974vw]">
            {cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NutShell;
