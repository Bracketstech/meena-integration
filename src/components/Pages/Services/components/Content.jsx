import React from "react";

const Content = ({ arabic }) => {
  return (
    <div className="lg:w-[28.6458333333vw] lg:mt-[10vw] lg:sticky top-[6vw] sm:py-[unset] py-[10vw]">
      <h2
        data-aos="fade-up"
        data-aos-anchor="#one"
        data-aos-delay={600}
        className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
      >
        {arabic ? "نحن نقدم " : "We Offer Comprehensive"}
        <span className="PingAR-Bold">
          {" "}
          {arabic ? "رعاية أولية " : "Primary Care"}{" "}
        </span>
        {arabic ? "شاملة لجميع احتياجاتك" : "For All Your Needs"}
      </h2>
      <p
        data-aos="fade-down"
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.02564102564vw] text-[#707070] PingAR-Light lg:text-[#505050] lg:mt-[0.625vw] mt-[2.05128205128vw]"
      >
        {arabic
          ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات"
          : "Lorem ipsum dolor sit amet, pscing consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
      </p>
    </div>
  );
};

export default Content;
