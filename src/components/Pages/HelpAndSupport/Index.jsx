import SubPageHero from '@/components/SubPageHero'
import FaqMain from './FaqMain'
import React from 'react'
import GetInTouch from './GetInTouch'

const Index = () => {
  return (
   <main>
    <SubPageHero
    boldtext="Help & support"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna" />
              <div
  className="lg:pt-[6.25vw] pt-[16.4102564103vw] sm:pb-[7.31707317073vw]
  lg:pb-[unset]"
>
  <h2
    data-aos="fade-up"
    className="Container1440 heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
  >
    Frequently Asked <br />
    <span className="PingAR-Bold"> Questionss </span>
  </h2>
  <FaqMain /> 
  <GetInTouch /> 
</div>

   </main>
  )
}

export default Index
