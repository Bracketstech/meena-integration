import React from 'react'
import Benefits from './components/Benefits'

const WorkAtMeena = () => {
  return (
    <div className="relative lg:pt-[4.6875vw] pt-[14.358974359vw] sm:pt-[7.31707317073vw]">
    <span className="healthCare__Overlay absolute w-full lg:h-[72.7604166667vw] sm:h-[182.926829268vw] h-[526.923076923vw] top-0 leftRightFixer1"></span>
    <div className="relative z-[2] Container1440">
      <div className="lg:w-[37.5vw]">
        <h2
          data-aos="fade-up"
          className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
        >
          Why <span className="PingAR-Bold">work </span>
          
          at meena
        </h2>
        <p
          data-aos="fade-down"
          className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] PingAR-Light lg:text-[1.14583333333vw] text-[#505050] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.02564102564vw] lg:mt-[0.625vw] mt-[3.07692307692vw]"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </div>
      <Benefits />
    </div>
  </div>
  )
}

export default WorkAtMeena
