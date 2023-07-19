"use client";
import SwiperButtons from "@/components/SwiperButtons";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PatientsSwiper = ({ arabic, title, testimonials }) => {
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
      window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2.5 : 1.3
    );
  }, []);
  return (
    <div>
      <div>
        <div
          data-aos="fade-up"
          className="sm:pt-[7.31707317073vw] Container1440 pt-[12.3076923077vw] lg:pt-[4.53125vw] heading54 tracking-[unset] PingAR-Regular text-[#3B3659] lg:text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>

        <div className="flex justify-end lg:justify-[normal]">
          <div className="lg:w-[75vw] w-[93%] lg:mx-[auto]">
            {/* Swiper */}
            {swiperGap == 0 || (
              <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={swiperGap}
                slidesPerView={slidesPerView}
                className="sm:pb-[14.6341463415vw] sm:pt-[4.87804878049vw] swiper homeSwipers w-full lg:pt-[2.5vw] pt-[6.15384615385vw] pb-[17.358974359vw] lg:pb-[5.72916666667vw]"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={testimonial.title + index}
                    className="swiper-slide lg:rounded-[1.04166666667vw] rounded-[20px] bg-[#F5EBE8]"
                  >
                    <div
                      className={`sm:w-[78%] sm:py-[3.65853658537vw] text-center ${
                        arabic
                          ? "lg:w-[19.2708333333vw]"
                          : "lg:w-[20.52083333333333vw]"
                      } w-[57.9487179487vw] mx-[auto] lg:pt-[3.489583333333333vw] lg:pb-[1.5625vw] py-[7.82051282051vw]`}
                    >
                      <div className="relative">
                        <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.666666666666667vw] text-[3.58974358974359vw] leading-[6.153846153846154vw] PingAR-Regular text-[#505050]">
                          {testimonial.content}{" "}
                        </p>
                        <img
                          src={`/images/icons/${
                            arabic ? "quote-down" : "quote-up"
                          }.svg`}
                          alt="quote"
                          className="sm:w-[2.43902439024vw] w-[3.58974358974vw] absolute lg:top-[-0.78125vw] top-[-12%] patient__Quoteup lg:w-[0.9895833333333333vw]"
                        />
                        <img
                          src={`/images/icons/${
                            arabic ? "quote-up" : "quote-down"
                          }.svg`}
                          alt="quote"
                          className="sm:w-[2.43902439024vw] sm:bottom-[1.21951219512vw] w-[3.58974358974vw] absolute lg:bottom-[0.15625vw] bottom-[3%] patient__Quotedown lg:w-[0.9895833333333333vw]"
                        />
                      </div>
                      <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] lg:text-[1.354166666666667vw] lg:leading-[1.979166666666667vw] text-[4.871794871794872vw] leading-[9.743589743589744vw] PingAR-Medium text-[#3B3659] lg:mt-[0.7291666666666667vw] block mt-[2.222222222222222vw]">
                        {testimonial.title}
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

export default PatientsSwiper;
