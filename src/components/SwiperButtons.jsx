'use client'
import React, { useEffect, useRef } from 'react'
import { useSwiper } from 'swiper/react'

const SwiperButtons = () => {
    const swiper = useSwiper()
    const myButton =useRef(null)
    const handleDisable =(element)=>{
      element.querySelectorAll(['.swiper-button-prev','.swiper-button-next']).forEach(btn=>btn.classList.contains('chomu') && btn.classList.remove('swiper-button-disabled') )
      element.querySelectorAll('.swiper-button-disabled').forEach(button=>{
        
        if( !button.classList.contains('chomu')){
         if(button.classList.contains('swiper-button-next')){
           element.querySelectorAll('.swiper-button-next').forEach(btn=>{
             btn.classList.add('swiper-button-disabled')
           })
         }else if(button.classList.contains('swiper-button-prev')){
           element.querySelectorAll('.swiper-button-prev').forEach(btn=>{
             btn.classList.add('swiper-button-disabled')
           })
         }
        }
       })
    }
    useEffect(()=>{
      handleDisable(myButton.current.parentElement)
    },[])
    const handleNext =(event)=>{
      swiper.slideNext()
      handleDisable(event.target.parentElement.parentElement)
    }
    const handlePrev =(event)=>{
      swiper.slidePrev()
      handleDisable(event.target.parentElement.parentElement)
    }
  return (
    <>
       <div ref={myButton} onClick={handleNext} className="swiper-button-next chomu ">
              <img
                src="/images/icons/swiper-arrow.svg"
                alt="swiper-arrow"
              />
            </div>
            <div onClick={handlePrev} className="swiper-button-prev chomu">
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
