import Link from "next/link";
import React from "react";

const BookYourAppointment = async ({ arabic, data, fabData }) => {
  return (
    <div className="lg:w-[75vw] mx-[auto] w-[88.7179487179vw] sm:w-[71%] sm:gap-y-[2.926829268292683vw] flex-col-reverse lg:flex-row flex-wrap gap-y-[6.153846153846154vw] relative z-[2]   flex justify-between items-center lg:items-center sm:items-start">
      <div className="lg:w-[33.75vw]">
        <div
          data-aos="fade-up"
          className="hidden lg:block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]"
          dangerouslySetInnerHTML={{ __html: data[0].booking_section_title }}
        ></div>
        <p
          data-aos="fade-down"
          className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:w-[32.1875vw] text-start sm:text-center lg:text-start lg:mt-[0.625vw] mt-[6.15384615385vw]"
        >
          {data[0].description}{" "}
        </p>
        <div
          data-aos="fade"
          data-aos-delay={200}
          className="sm:mt-[3.658536585365854vw] sm:gap-x-[2.926829268292683vw] text-[#FFFFFF] flex items-center justify-start sm:justify-center lg:justify-start lg:gap-x-[1.25vw] gap-x-[4.44444444444vw] mt-[6.153846153846154vw] lg:mt-[2.5vw] flex-wrap gap-y-[4.44444444444vw]"
        >
          <Link href={fabData?.fab?.app_download} className="anchor1">
            <div>
              <span> {fabData?.fab?.app_download_btn_text} </span>
              <img src="/images/icons/get-app.svg" alt="get-app" />
            </div>
          </Link>
          <a href={`tel:${fabData?.fab?.phone}`} className="anchor2 hidden">
            <div>
              <span style={{ direction: "ltr" }} className="">
                {fabData?.fab?.phone}
              </span>
              <img src="/images/icons/phone.svg" alt="phone" />
            </div>
          </a>
        </div>
      </div>
      <div
        className="lg:w-[30.2083333333vw] w-full"
        data-aos="fade"
        data-aos-delay={400}
      >
        <img
          src={data[0].image.path}
          alt="appointment"
          className="  lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data[0].booking_section_title }}
        className="sm:w-full lg:w-[unset] text-start sm:text-center lg:text-start lg:hidden block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]"
      ></div>
    </div>
  );
};

export default BookYourAppointment;
