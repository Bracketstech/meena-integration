'use client'
import SwiperButtons from '@/components/SwiperButtons';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';

const Qualifications = ({arabic}) => {
  const [swiperGap,setSwiperGap] = useState(0)
  const [slidesPerView,setSlidesPerView] = useState(0)
  useEffect(()=>{
    setSwiperGap(window.innerWidth>768? window.innerWidth /100 * 2.91666666667 : window.innerWidth /100 * 6.66666666667)
    setSlidesPerView(window.innerWidth>768? 4 : 1.31)
  },[])
  return (
    <div className="relative lg:pt-[6.875vw] pt-[6.15384615385vw]">
  <span className="healthCare__Overlay absolute w-full lg:h-[49.4270833333vw] h-[258.717948718vw] top-0 leftRightFixer1"></span>
  <div className="sm:pt-[7.31707317073vw] sm:pb-[14.6341463415vw] relative z-[2] w-full flex lg:gap-x-[7.29166666667vw] lg:justify-start lg:items-stjustify-start items-end lg:flex-row flex-col-reverse gap-y-[6.41025641026vw] lg:pt-[6.96666666667vw] pt-[12.8205128205vw] lg:pb-[10.4166666667vw] pb-[20.5128205128vw]">
    <div className="lg:w-[53.125vw] w-[94.358974359vw] aboutMeenaSwiper__Main">
    {swiperGap == 0 ||   <Swiper modules={[Navigation]} spaceBetween={swiperGap} slidesPerView={slidesPerView} className="sm:pb-[6.82926829268vw] swiper mySwiper aboutMeenaSwiper lg:pb-[3.38541666667vw] pb-[9.74358974359vw]">
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
        <div className="absolute w-full bottom-0 lg:h-[2.29166666667vw] aboutLast_Swiper">
          <SwiperButtons/>
        </div>
      </Swiper>}
    </div>
    <div className="lg:w-[27.0833333333vw] w-[88.7179487179vw] mx-[auto] lg:mx-[unset] lg:gap-y-[0.67708333333vw] gap-y-[2.05128205128vw] flex flex-col items-center lg:items-start">
      <h3
        data-aos="fade-up"
        className="relative PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
      >
        {arabic?
        <> 
        <span className="PingAR-Bold"> المؤهلات  </span> <br />
        العملية
        </>:
        <>
        Practicing <br />
        <span className="PingAR-Bold"> qualifications </span>
        </>
        }
        {/* <img
            src="/images/about-app/design.png"
            alt="design"
            className="lg:w-[3.02083333333vw] w-[7.69230769231vw] lg:top-[-3.22916666667vw] lg:left-[-3.02083333333vw] left-[-7.69230769231vw] top-[-8.20512820513vw] absolute"
          /> */}
        <svg
          className="sm:w-[5.36585365854vw] sm:top-[-6.09756097561vw] h-[8.46153846154vw] lg:h-[unset] lg:w-[3.02083333333vw] asterisk about__Asterisk w-[7.69230769231vw] lg:top-[-3.22916666667vw] top-[-8.20512820513vw] absolute"
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
      </h3>
      <p
        data-aos="fade-down"
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] text-center lg:text-start text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] PingAR-Regular"
      >
        {arabic? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود ت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"}
      </p>
    </div>
  </div>
</div>
  )
}

export default Qualifications
