import getFABData from "@/lib/data-hooks/getFABData";
import Link from "next/link";
import React from "react";

const Cta = async ({ arabic }) => {
  const data = await getFABData(arabic);
  return (
    <div className="cta">
      <img
        src="/images/icons/Icon feather-calendar.svg"
        alt="calendar"
        className="lg:w-[1.25vw] sm:w-[2.68292682927vw] w-[5.12820512821vw]"
      />
      <div className="cta__Menu">
        <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] PingAR-Regular text-[#FFFFFF] leading-[5.64102564103vw] text-[3.58974358974vw]">
          {data?.fab.title_a}
        </span>
        <div className="sm:mt-[1.9512195122vw] sm:gap-y-[1.46341463415vw] text-[#FFFFFF] flex items-center mt-[4.10256410256vw] lg:mt-[0.83333333333vw] flex-col lg:gap-y-[0.625vw] gap-y-[3.07692307692vw]">
          <Link
            href={data?.fab.app_download}
            className="sm:w-[18.2926829268vw] sm:h-[4.63414634146vw] lg:w-[9.375vw] w-[31.2820512821vw] lg:rounded-[31.2820512821vw] rounded-[7.94871794872vw] bg-[#845FFF] lg:h-[2.39583333333vw] h-[8.20512820513vw] flex items-center justify-center"
          >
            <div className="sm:h-[2.19512195122vw] flex lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw] lg:h-[1.04166666667vw]">
              <span className="sm:text-[1.82926829268vw] PingAR-Regular lg:text-[0.9375vw] text-[3.07692307692vw]">
                {data?.fab.app_download_btn_text}
              </span>
              <img
                src="/images/icons/get-app.svg"
                alt="get-app"
                className="w-[2.82051282051vw] lg:w-[0.625vw]"
              />
            </div>
          </Link>
          <a
            href={`tel:${data?.fab?.phone}`}
            className="mobhidden hidden sm:w-[18.2926829268vw] sm:h-[4.63414634146vw] lg:w-[9.375vw] w-[31.2820512821vw] lg:rounded-[31.2820512821vw] rounded-[7.94871794872vw] bg-[#845FFF] lg:h-[2.39583333333vw] h-[8.20512820513vw] flex items-center justify-center"
          >
            <div className="sm:h-[2.19512195122vw] flex lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw] lg:h-[1.04166666667vw]">
              <span
                style={{ direction: "ltr" }}
                className="sm:text-[1.82926829268vw] PingAR-Regular lg:text-[0.9375vw] text-[3.07692307692vw]"
              >
                {data?.fab?.phone}
              </span>
              <img
                src="/images/icons/phone.svg"
                alt="phone"
                className="w-[3.07692307692vw] lg:w-[0.625vw]"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
