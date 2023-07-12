import React from 'react'
import Infos from '../Home/components/infos'
import HealthCareJourney from '../Home/components/HealthCareJourney'
import BringingLoving from './components/BringingLoving'

const Info = ({arabic}) => {
  return (
    <section>
  <div>
    <div className="relative">
      <span className="healthCare__Overlay absolute w-full h-full top-0 leftRightFixer1 hidden lg:block"></span>
      <div className="Container1680 relative z-[2]">
        <div className="sm:gap-y-[7.31707317073vw] flex justify-center items-center flex-col lg:gap-y-[6.25vw] gap-y-[20.5128205128vw]">
          <Infos arabic={arabic}/>
          {arabic ? <h2
            data-aos="fade-up"
            className="lg:w-[38.5416666667vw] heading54 tracking-[unset] text-[#3B3659] text-center PingAR-Regular"
          >
            
            <span className="PingAR-Bold"> نضعك </span>
            في قلب رحلة الرعاية الصحية الخاصة 
            <span className="PingAR-Bold"> بك </span>
            
          </h2>: <h2
            data-aos="fade-up"
            className="lg:w-[38.5416666667vw] heading54 tracking-[unset] text-[#3B3659] text-center PingAR-Regular"
          >
            Putting
            <span className="PingAR-Bold"> you </span>
            at the center of
            <span className="PingAR-Bold"> your </span>
            healthcare journey
          </h2>}  
        </div>
        <HealthCareJourney arabic={arabic}/>
        
      </div>
    </div>
    <BringingLoving arabic={arabic}/>
  </div>
</section>

  )
}

export default Info
