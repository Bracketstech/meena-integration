import React from 'react'
import { useSwiper } from 'swiper/react'

const SwiperButtons = () => {
    const swiper = useSwiper()
  return (
    <>
       <div onClick={()=> swiper.slideNext()} className="swiper-button-next">
              <img
                src="/images/icons/swiper-arrow.svg"
                alt="swiper-arrow"
              />
            </div>
            <div onClick={()=> swiper.slidePrev()} className="swiper-button-prev">
              <img
                src="/images/icons/swiper-arrow-left.svg"
                alt="swiper-arrow"
                className=""
              />
            </div> 
    </>
  )
}

export default SwiperButtons
