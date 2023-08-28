import React from "react";

const PrimaryCare = ({ arabic, content }) => {
  return (
    <div className="Container1440 flex justify-between items-center lg:flex-row flex-col-reverse sm:gap-y-[3.65853658537vw] gap-y-[6.15384615385vw] lg:pt-[6.25vw] sm:py-[7.31707317073vw] pt-[16.4102564103vw] lg:pb-[5.67708333333vw] pb-[6.15384615385vw]">
      <div className="lg:w-[32.2916666667vw] appContent">
        <div
          className="appContent"
          dangerouslySetInnerHTML={{ __html: content.text_content }}
        ></div>
        <div className="lg:h-[2.86458333333vw] sm:h-[unset] h-[10.7692307692vw] flex sm:gap-x-[1.9512195122vw] lg:gap-x-[1.25vw] gap-x-[4.61538461538vw] lg:mt-[2.5vw] mt-[6.15384615385vw] sm:mt-[2.92682926829vw]">
          {content?.android_download_link &&
            content?.android_download_icon?.path && (
              <a
                data-aos="fade"
                data-aos-anchor="#finger"
                data-aos-delay={500}
                href={content.android_download_link}
              >
                <img
                  src={content.android_download_icon.path}
                  alt="google-play"
                  className="lg:w-[9.375vw] w-[35.3846153846vw] h-full sm:w-[18.2926829268vw]"
                />
              </a>
            )}
          {content?.ios_download_link && content?.ios_download_icon?.path && (
            <a
              data-aos="fade-up"
              data-aos-anchor="#finger"
              data-aos-delay={600}
              href={content.ios_download_link}
            >
              <img
                src={content.ios_download_icon.path}
                alt="app-store"
                className="lg:w-[9.375vw] 4.61538461538w-[35.3846153846vw] h-full sm:w-[18.2926829268vw]"
              />
            </a>
          )}
        </div>
      </div>
      <div
        data-aos="fade"
        data-aos-anchor="#finger"
        data-aos-delay={800}
        className="relative lg:h-[32.7083333333vw] h-[69.0256410256vw] w-full sm:w-[75%] lg:w-[33.4895833333vw] flex justify-end items-center"
      >
        <img
          src={content.main_phone_image.path}
          alt="mobile"
          className="absolute lg:w-[16.875vw] w-[35.6102564103vw] top-0 leftRightFixer1"
        />
        <div className="relative z-[2] flex-col lg:gap-y-[0.83333333333vw] flex gap-y-[4.10256410256vw]">
        {content.feature_on_phone_screen[0].display_text ? (
          <div
            className="sm:w-[38.0487804878vw] sm:h-[11.5853658537vw] Booking bg-[#EBF0F7] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:w-[19.7916666667vw] lg:h-[6.25vw] w-[61.5384615385vw] h-[18.4615384615vw] flex items-center sm:gap-x-[1.9512195122vw] lg:gap-x-[0.72916666666vw] gap-x-[3.07692307692vw] justify-start
          lg:px-[1.66666666667vw] px-[4.10256410256vw]"
          >
            <img
              src={content.feature_on_phone_screen[0].icon.path}
              alt={content.feature_on_phone_screen[0].display_text}
              className="lg:w-[1.82291666667vw] w-[6.66666666667vw] sm:w-[3.90243902439vw]"
            />
            <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] text-[4.10256410256vw] PingAR-Regular text-[#3B3659]">
              {content.feature_on_phone_screen[0].display_text}
            </span>
          </div>
        
        ) : null}
        {content.feature_on_phone_screen[1].display_text ? (
          
          <div
            className="sm:w-[38.0487804878vw] sm:h-[11.5853658537vw] Booking bg-[#D6D1ED] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:w-[19.7916666667vw] lg:h-[6.25vw] w-[61.5384615385vw] h-[18.4615384615vw] flex items-center sm:gap-x-[1.9512195122vw] lg:gap-x-[0.72916666666vw] gap-x-[3.07692307692vw] justify-start
          lg:px-[1.66666666667vw] px-[4.10256410256vw]"
          >
            <img
              src={content.feature_on_phone_screen[1].icon.path}
              alt={content.feature_on_phone_screen[1].display_text}
              className="lg:w-[1.5625vw] w-[5.89743589744vw] sm:w-[3.90243902439vw]"
            />
            <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] text-[4.10256410256vw] PingAR-Regular text-[#3B3659]">
              {content.feature_on_phone_screen[1].display_text}
            </span>
          </div>
        
        ) : null}
        </div>
      </div>
    </div>
  );
};

export default PrimaryCare;
