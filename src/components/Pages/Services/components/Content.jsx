import React from "react";

const Content = ({ title, des }) => {
  return (
    <div className="lg:w-[28.6458333333vw] lg:mt-[10vw] lg:sticky top-[6vw] sm:py-[unset] py-[10vw]">
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        data-aos="fade-up"
        data-aos-anchor="#one"
        data-aos-delay={600}
        className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
      ></div>
      <p
        data-aos="fade-down"
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.02564102564vw] text-[#707070] PingAR-Regular lg:text-[#505050] lg:mt-[0.625vw] mt-[2.05128205128vw]"
      >
        {des}
      </p>
    </div>
  );
};

export default Content;
