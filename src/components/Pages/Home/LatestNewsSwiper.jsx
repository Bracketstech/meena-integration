'use client'
import { Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';
import NewsCard from '../LatestNews/components/NewsCard'
import CardData from '../LatestNews/CardData' 
import { useEffect, useState } from 'react';


const LatestNewsSwiper = () => {
  const [swiperGap,setSwiperGap] = useState(0)
  const [slidesPerView,setSlidesPerView] = useState(0)
  useEffect(()=>{
    setSwiperGap(window.innerWidth>768? window.innerWidth /100 * 2.5 :window.innerWidth /100 * 4.10256410256)
    setSlidesPerView(window.innerWidth>768? 3 : 1.30)
  },[])
  return (
    <div className="sm:pt-[14.6341463415vw] pt-[14.35897435897436vw] lg:pt-[5.72916666667vw] lg:pb-[5.72916666667vw]">
  <h3
    data-aos="fade-up"
    className="Container1440 heading54 tracking-[unset] PingAR-Regular text-[#3B3659]"
  >
    Latest
    <span className="PingAR-Bold"> news </span>
  </h3>
  <div className="flex justify-end lg:justify-[normal]">
    <div className="lg:w-[75vw] w-[93%] lg:mx-[auto]">
      {/* Swiper */}
      <Swiper modules={[Navigation]} spaceBetween={swiperGap} slidesPerView={setSlidesPerView} className="sm:pb-[14.6341463415vw] sm:pt-[4.87804878049vw] swiper homeSwipers w-full lg:pt-[2.5vw] pt-[6.153846153846154vw] lg:pb-[unset] pb-[16.30769230769231vw]">
        
      {CardData.map((CardDat,index)=>(
      <SwiperSlide key={index} className="swiper-slide" data-aos="fade" data-aos-delay="00">
        <NewsCard  
        image={CardDat.image}
        date={CardDat.date}
        heading={CardDat.heading}
        paragraph={CardDat.paragraph}
        anchor={CardDat.anchor}
         />
            </SwiperSlide>
    ))}
        <div className="swiper-button-next">
          <img
            src="/images/icons/swiper-arrow.svg"
            alt="swiper-arrow"
          />
        </div>
        <div className="swiper-button-prev">
          <img
            src="/images/icons/swiper-arrow-left.svg"
            alt="swiper-arrow"
            className=""
          />
        </div>
      </Swiper>
    </div>
  </div>
  <div className="Container1440">
    <a
      data-aos="fade-up"
      href="./latest-news.html"
      className="sm:mt-[3.65853658537vw] sm:h-[6.34146341463vw] sm:text-[1.9512195122vw] relative z-[2] PingAR-Light lg:mt-[3.33333333333vw] mt-[2.307692307692308vw] mx-[auto] bg-[#8450FF] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.07692307692vw] lg:rounded-[5.20833333333vw] rounded-[7.948717948717949vw] lg:w-[10.9895833333vw] w-[31.7948717949vw] lg:h-[3.22916666667vw] h-[9.23076923077vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300 text-[#FFFFFF]"
    >
      <span className="lg:h-[1.19791666667vw] sm:h-[2.19512195122vw] h-[3.58974358974vw]">
        View all news
      </span>
    </a>
  </div>
</div>

  )
}

export default LatestNewsSwiper
