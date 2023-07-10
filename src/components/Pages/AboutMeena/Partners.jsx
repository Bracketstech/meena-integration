'use client'
import { Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';


const Partners = () => {
  return (
    <div className="sm:pt-[7.31707317073vw] sm:gap-y-[4.87804878049vw] w-full flex lg:gap-x-[7.29166666667vw] lg:justify-end lg:items-end items-end lg:flex-row flex-col gap-y-[6.41025641026vw] lg:pt-[4.53125vw] pt-[12.3076923077vw]">
    <div className="lg:w-[27.0833333333vw] w-[88.7179487179vw] mx-[auto] lg:mx-[unset]">
      <h3
        data-aos="fade-up"
        className="PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
      >
        Our
        <span className="PingAR-Bold"> partners </span>
      </h3>
      <p
        data-aos="fade-down"
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:mt-[0.67708333333vw] mt-[2.05128205128vw] text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] PingAR-Regular"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore
      </p>
    </div>
    <div className="lg:w-[53.125vw] w-[94.358974359vw] aboutMeenaSwiper__Main">
      <Swiper modules={[Navigation]} spaceBetween={window.innerWidth>768? window.innerWidth /100 * 2.91666666667 : window.innerWidth /100 * 6.66666666667} slidesPerView={window.innerWidth>768? 4.7: 3.6} className="sm:pb-[6.82926829268vw] swiper mySwiper aboutMeenaSwiper lg:pb-[3.38541666667vw] pb-[9.74358974359vw]">
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/1.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/2.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/3.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/4.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/5.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/1.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/2.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/3.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/4.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
      <SwiperSlide data-aos="fade" data-aos-delay="00" className="swiper-slide">
            <img
              src="/images/about-meena/partners/5.svg"
              alt="partners"
              className="w-full"
            />
          </SwiperSlide>
        <div className="swiper-button-next">
          <img src="/images/icons/swiper-arrow.svg" alt="swiper-arrow" />
        </div>
        <div className="swiper-button-prev">
          <img
            src="/images/icons/swiper-arrow-left.svg"
            alt="swiper-arrow"
          />
        </div>
      </Swiper>
    </div>
  </div>
  )
}

export default Partners
