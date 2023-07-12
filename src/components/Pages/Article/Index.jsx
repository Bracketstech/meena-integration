'use client'
import SubPageHero from '@/components/SubPageHero'
import React from 'react'
import ArticleImage from './ArticleImage'
import Articles from './Articles'
import useAnimations from '@/hooks/useAnimations'

const Index = ({arabic}) => {
  useAnimations()
  return (
   <main>
     <div className="Container1680 lg:pt-[13.9583333333vw] sm:pt-[24.3902439024vw] pt-[40.7692307692vw]">
  <div className="flex items-center lg:gap-x-[0.625vw] sm:gap-x-[2.92682926829vw] gap-x-[4.10256410256vw]">
    <div className="flex items-center lg:gap-x-[0.625vw] sm:gap-x-[1.589744vw] gap-x-[3.58974358974vw]">
      <a href="./index.html">
        <img
          src="/images/icons/home.svg"
          alt="home"
          className="lg:w-[2.44791666667vw] sm:w-[5vw] w-[9.48717948718vw]"
        />
      </a>
      <img
        src="/images/icons/next.svg"
        alt="chevron"
        className="flipped lg:w-[0.63333333333vw] sm:w-[1.6vw] sm:mt-[0.9vw] w-[3.07692307692vw] lg:mt-[0.46875vw] mt-[1.53846153846vw]"
      />
    </div>
    <span className="sm:text-[2.19512195122vw] lg:leading-[unset] sm:leading-[3.65853658537vw] sm:h-[1.9512195122vw] PingAR-Light lg:text-[1.14583333333vw] text-[#3B3659] text-[4.10256410256vw] lg:h-[1.04166666667vw] h-[2.5641025641vw]">
     {arabic?"اخر الاخبار":" Latest news"}
    </span>
  </div>
</div>
<div className="lg:pt-[6.25vw] sm:pt-[7.31707317073vw] pt-[16.4102564103vw]">
  <ArticleImage arabic={arabic}/>
  <Articles arabic={arabic}/>
</div>

   </main>
  )
}

export default Index
