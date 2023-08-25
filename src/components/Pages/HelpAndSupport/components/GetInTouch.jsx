import React from "react";
import Information from "./Information";
import Form from "./Form";

const GetInTouch = ({ arabic, data, socialData, formContent, bcd }) => {
  return (
    <div className="relative">
      <span className="healthCare__Overlay absolute w-full lg:h-[65.0625vw] h-[306.153846154vw] lg:top-[-4.79166666667vw] top-[-14.358974359vw] leftRightFixer1"></span>
      <div className="relative z-[2] Container1440">
        <div
          data-aos="fade-up"
          className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] textAlignFixer mt-[20px] lg:mt-0"
          dangerouslySetInnerHTML={{
            __html: data.contact_us_content[0].main_title,
          }}
        ></div>
        <div className="lg:pt-[2.5vw] pt-[6.41025641026vw] flex justify-between flex-col lg:flex-row gap-y-[10.2564102564vw] lg:pb-[8.69791666667vw] pb-[20.5128205128vw] sm:pb-[7.31707317073vw] sm:pt-[4.87804878049vw]">
          <Information
            arabic={arabic}
            address={data?.contact_us_content[0].address}
            email={data?.contact_us_content[0].email}
            phone={data?.contact_us_content[0].phone_number}
            socialData={socialData}
            bcd={bcd}
          />
          <Form
            arabic={arabic}
            title={data?.contact_us_content[0].form_caption}
            formContent={formContent}
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
