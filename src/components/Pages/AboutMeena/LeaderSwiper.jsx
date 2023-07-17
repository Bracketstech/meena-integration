"use client";
import SwiperButtons from "@/components/SwiperButtons";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LeaderSwiper = ({ arabic }) => {
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
      window.innerWidth > 1024 ? 4 : window.innerWidth > 640 ? 2.5 : 1.31
    );
  }, []);
  return (
    <div className="relative z-[2]">
      <h3
        data-aos="fade-up"
        className="Container1440 PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
      >
        {arabic ? (
          <>
            تعرف على
            <span className="PingAR-Bold"> قادتنا </span>
          </>
        ) : (
          <>
            Meet our
            <span className="PingAR-Bold"> leaders </span>
          </>
        )}
      </h3>
      <div className="flex justify-end lg:justify-[norma]">
        <div className="lg:w-[75vw] w-[93%] lg:mx-[auto]">
          {/* Swiper */}
          {swiperGap == 0 || (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={swiperGap}
              slidesPerView={slidesPerView}
              className="mp50 sm:pb-[14.6341463415vw] sm:pt-[4.87804878049vw] swiper doctorsSwiper w-full lg:pt-[2.5vw] pt-[6.15384615385vw] pb-[14.358974359vw] lg:pb-[5.885416666666667vw]"
            >
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/1.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/2.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/3.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/4.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/1.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/2.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/3.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    {arabic ? "التخصص" : "Speciality name"}
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="/images/about-meena/leaders/4.jpg"
                  alt="leaders"
                  className="w-full"
                />
                <div className="sm:my-[1.46341463415vw] sm:mx-[2.92682926829vw] text-[#3B3659] lg:mx-[1.25vw] lg:mt-[0.625vw] lg:mb-[1.25vw] my-[2.820512820512821vw] mx-[6.153846153846154vw]">
                  <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium">
                    {arabic ? "اسم الطبيب" : "Name Of Doctor"}
                  </h5>
                  <span className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.458333333333333vw] text-[3.58974358974359vw] leading-[7.179487179487179vw] PingAR-Regular lg:mt-[0.3645833333333333vw] block">
                    Speciality name
                  </span>
                </div>
              </SwiperSlide>
              <SwiperButtons />
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderSwiper;
