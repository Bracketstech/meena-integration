"use client";
import SwiperButtons from "@/components/SwiperButtons";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = ({ arabic, title, des, partners }) => {
  const [swiperGap, setSwiperGap] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 768
        ? (window.innerWidth / 100) * 2.91666666667
        : (window.innerWidth / 100) * 6.66666666667
    );
    setSlidesPerView(window.innerWidth > 768 ? 4 : 1.31);
  }, []);
  return (
    <div className="sm:pt-[7.31707317073vw] sm:gap-y-[4.87804878049vw] w-full flex lg:gap-x-[7.29166666667vw] lg:justify-end lg:items-end items-end lg:flex-row flex-col gap-y-[6.41025641026vw] lg:pt-[4.53125vw] pt-[12.3076923077vw]">
      <div className="lg:w-[27.0833333333vw] w-[88.7179487179vw] mx-[auto] lg:mx-[unset]">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          data-aos="fade-up"
          className="PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
        ></div>
        <p
          data-aos="fade-down"
          className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:mt-[0.67708333333vw] mt-[2.05128205128vw] text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] PingAR-Regular"
        >
          {des}{" "}
        </p>
      </div>
      <div className="lg:w-[53.125vw] w-[94.358974359vw] aboutMeenaSwiper__Main">
        {swiperGap == 0 || (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={swiperGap}
            slidesPerView={slidesPerView}
            className="sm:pb-[6.82926829268vw] mp50 swiper mySwiper aboutMeenaSwiper lg:pb-[3.38541666667vw] pb-[9.74358974359vw]"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={partner.icon.path} className="swiper-slide">
                <img src={partner.icon.path} alt="partner" className="w-full" />
              </SwiperSlide>
            ))}

            <SwiperButtons />
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Partners;
