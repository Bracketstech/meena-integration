"use client";
import SwiperButtons from "@/components/SwiperButtons";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DoctorsSwiper = ({ arabic, title, doctors }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 1024
        ? (window.innerWidth / 100) * 2.5
        : window.innerWidth > 640
        ? (window.innerWidth / 100) * 2.09756097561
        : (window.innerWidth / 100) * 4.10256410256
    );
    setSlidesPerView(
      window.innerWidth > 1024 ? 4 : window.innerWidth > 640 ? 3 : 1.31
    );
  }, []);
  return (
    <div className="relative">
      <span className="healthCare__Overlay absolute w-full h-[149.743589744vw] lg:h-[41.3541666667vw] bottom-0 leftRightFixer1"></span>
      <div className="relative z-[2]">
        <div
          data-aos="fade-up"
          className="Container1440 PingAR-Regular lg:pt-[0.98958333333vw] heading54 tracking-[unset] text-[#3B3659]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div className="flex justify-end lg:justify-[normal]">
          <div className="lg:w-[75vw] w-[93%] lg:mx-[auto]">
            {swiperGap == 0 || (
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={swiperGap}
                slidesPerView={slidesPerView}
                className="sm:pb-[14.6341463415vw] sm:pt-[4.87804878049vw] swiper doctorsSwiper w-full lg:pt-[2.5vw] pt-[6.15384615385vw] pb-[17.358974359vw] lg:pb-[5.885416666666667vw]"
              >
                {doctors.map((doctor, index) => (
                  <SwiperSlide
                    key={doctor.title + index}
                    className="swiper-slide"
                  >
                    <img
                      src={doctor.picture.path}
                      alt={doctor.title}
                      className="w-full lg:h-[19.3229166667vw] object-cover sm:h-[45.703125vw] h-[300px]"
                    />
                    <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                      <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                        {doctor.title}
                      </h5>
                      <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                        {doctor.speci}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperButtons />
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsSwiper;
