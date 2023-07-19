import React from "react";

const VisionMission = ({ arabic, data }) => {
  return (
    <div className="sm:pt-[7.31707317073vw] sm:pb-[14.6341463415vw] Container1440 lg:pt-[3.85416666667vw] pt-[6.15384615385vw] lg:pb-[10.4166666667vw] pb-[20.5128205128vw]">
      <div className="sm:gap-y-[3.65853658537vw] flex items-center justify-between flex-wrap gap-y-[6.15384615385vw]">
        {data.map((item, index) => (
          <div
            key={item.image.path}
            data-aos="fade"
            data-aos-delay={index * 200}
            className="sm:h-[42.6829268293vw] sm:items-center sm:pb-[unset] lg:items-end w-full lg:w-[36.25vw] lg:h-[27.8125vw] overflow-hidden lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] h-[78.4615384615vw] relative flex items-end lg:pb-[3.75vw] pb-[8.20512820513vw]"
          >
            <div className="w-full h-full absolute leftRightFixer1 top-0">
              <img
                src={item.image.path}
                alt="Mission & Vision"
                className="w-full h-full object-cover absolute leftRightFixer1 top-0"
              />
              <span className="vision__Overlay1 w-full absolute leftRightFixer1 top-0 lg:h-[17.1875vw] opacity-[0.5] h-[41.7948717949vw]" />
              <span className="vision__Overlay2 w-full absolute leftRightFixer1 bottom-0 lg:h-[20.46875vw] opacity-[0.5] h-[60.7692307692vw]" />
              <span className="vision__Overlay3 w-full absolute leftRightFixer1 bottom-0 opacity-[0.7] h-full" />
            </div>
            <div className="relative z-[2] mx-[auto] w-[76.4102564103vw] lg:w-[29.4791666667vw]">
              <div
                dangerouslySetInnerHTML={{ __html: item.title }}
                className="heading54 PingAR-Regular tracking-[unset] text-[#FFFFFF]"
              ></div>
              <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:mt-[0.67708333333vw] mt-[1.02564102564vw] text-[#FFFFFF] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] PingAR-Regular">
                {item.description}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMission;
