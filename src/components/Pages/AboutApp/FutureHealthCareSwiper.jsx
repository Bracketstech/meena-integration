"use client";
import SwiperButtons from "@/components/SwiperButtons";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FutureHealthCareSwiper = ({ arabic, title, content, img }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 1024
        ? (window.innerWidth / 100) * 20.8333333333
        : window.innerWidth > 640
        ? (window.innerWidth / 100) * 2.09756097561
        : (window.innerWidth / 100) * 6.66666666667
    );
    setSlidesPerView(1);
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        dangerouslySetInnerHTML={{ __html: title }}
        className="Container1440 heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
      ></div>
      {/* Swiper */}
      <div className="lg:pb-[8.4375vw] pb-[15.12820512820513vw] sm:pb-[14.6341463415vw]">
        <div className=" mx-auto ustadakalkaro  lg:w-[75vw] lg:pt-[2.5vw] pt-[6.15384615385vw] lg:pb-[2.91666666667vw] pb-[unset] ">
          <div className="flex items-stretch justify-center lg:gap-x-[4.21875vw] flex-col lg:flex-row gap-y-[4.10256410256vw]">
            <div
              data-aos="fade"
              className=" lg:w-[38.4895833333vw] mx-[auto] lg:mx-[unset] w-[90%] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] relative"
            >
              <img
                src={img}
                alt="future healthcare"
                className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
              />

              <svg
                className="sm:w-[5.48780487805vw] sm:top-[3.65853658537vw] h-[8.20512820513vw] lg:h-[unset] lg:w-[3.38541666667vw] w-[7.69230769231vw]  lg:top-[3.125vw] top-[7.17948717949vw] aboutApp__Asterisk absolute"
                id="Group_89637"
                data-name="Group 89637"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64.896"
                height="69.743"
                viewBox="0 0 64.896 69.743"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_69409"
                      data-name="Rectangle 69409"
                      width="64.896"
                      height="69.743"
                      fill="#8450ff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_89412"
                  data-name="Group 89412"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path_100878"
                    data-name="Path 100878"
                    d="M22.049,5.514,41.492,51.2,47,64.142c.558,1.311,2.491,1.6,3.609.946a2.707,2.707,0,0,0,.946-3.608L32.11,15.79,26.6,2.852c-.558-1.312-2.49-1.6-3.609-.947a2.708,2.708,0,0,0-.946,3.609"
                    transform="translate(-2.627 -0.189)"
                    fill="#8450ff"
                  />
                  <path
                    id="Path_100879"
                    data-name="Path 100879"
                    d="M4.495,64.136q22.329-19.982,45.92-38.491,6.543-5.13,13.182-10.135a2.723,2.723,0,0,0,.946-3.609,2.656,2.656,0,0,0-3.609-.946Q36.661,29.269,13.6,49.123,7.132,54.7.764,60.405a2.666,2.666,0,0,0,0,3.73,2.687,2.687,0,0,0,3.73,0"
                    transform="translate(0 -1.276)"
                    fill="#8450ff"
                  />
                  <path
                    id="Path_100880"
                    data-name="Path 100880"
                    d="M42.249,1.937A358.477,358.477,0,0,0,29.378,51.91q-1.314,7.228-2.331,14.509a2.726,2.726,0,0,0,1.842,3.243c1.234.339,3.046-.421,3.245-1.842a359.027,359.027,0,0,1,10.8-50.458q2.053-7.057,4.4-14.022A2.667,2.667,0,0,0,45.493.1a2.687,2.687,0,0,0-3.244,1.841"
                    transform="translate(-3.263 0)"
                    fill="#8450ff"
                  />
                  <path
                    id="Path_100881"
                    data-name="Path 100881"
                    d="M1.928,35.025q22.1,4.546,44.262,8.772,6.317,1.2,12.639,2.381a2.709,2.709,0,0,0,3.244-1.842,2.66,2.66,0,0,0-1.842-3.244q-22.18-4.133-44.3-8.587-6.3-1.27-12.6-2.566A2.7,2.7,0,0,0,.086,31.781a2.664,2.664,0,0,0,1.842,3.244"
                    transform="translate(0 -3.609)"
                    fill="#8450ff"
                  />
                </g>
              </svg>
            </div>
            {swiperGap == 0 || (
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={swiperGap}
                slidesPerView={slidesPerView}
                className="swiper lg:pb-[unset] sm:pt-[4.87804878049vw] pb-[8.717948717948718vw]  mySwiper sm:w-full lg:w-[32.2916666667vw] w-[88.7179487179vw] aboutAppSwiper"
              >
                {content.map((item, index) => (
                  <SwiperSlide
                    key={item?.title}
                    className="swiper-slide sm:w-full lg:w-[32.2916666667vw] w-[88.7179487179vw] flex flex-col justify-center items-center lg:items-start"
                  >
                    <img
                      data-aos="fade"
                      data-aos-delay={400}
                      src={item?.icon.path}
                      alt="check-board"
                      className="lg:w-[1.97916666667vw] w-[7.94871794872vw] sm:w-[4.26829268293vw]"
                    />
                    <h4
                      data-aos="fade-up"
                      data-aos-delay={200}
                      className="sm:text-[3.41463414634vw] sm:leading-[5.12195121951vw] sm:mt-[1.9512195122vw] lg:text-[1.875vw] lg:leading-[3.02083333333vw] lg:mt-[1.25vw] mt-[3.07692307692vw] text-[#3B3659] PingAR-Medium text-[4.87179487179vw] leading-[7.69230769231vw]"
                    >
                      {item?.title}
                    </h4>
                    <div
                      data-aos="fade-down"
                      data-aos-delay={200}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className="text-center lg:text-start sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] PingAR-Regular lg:text-[1.14583333333vw] lg:leading-[1.69270833333vw] text-[#505050] text-[3.58974358974vw] leading-[6.08058608059vw] lg:mt-[0.83333333333vw] mt-[2.05128205128vw]  w-[90%] lg:w-[unset]"
                    ></div>
                  </SwiperSlide>
                ))}
                <SwiperButtons />
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureHealthCareSwiper;
