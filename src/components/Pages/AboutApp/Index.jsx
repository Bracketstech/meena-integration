'use client'
import SubPageHero from '@/components/SubPageHero'
import PrimaryCare from './PrimaryCare'
import FutureHealthCareSwiper from './FutureHealthCareSwiper'
import OurFeatures from './OurFeatures'

const Index = () => {
  return (
 <main>
    <section>
    <SubPageHero
    title="About"
    boldtext="APP"
    text="
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" 

    />
    <PrimaryCare />
    <div className="relative lg:pt-[4.73958333333vw] pt-[14.358974359vw] sm:pt-[7.31707317073vw]">
  <span className="healthCare__Overlay absolute w-full lg:h-[57.34375vw] h-[202.307692308vw] top-0 leftRightFixer1"></span>
  <div className="relative z-[2]">
    <FutureHealthCareSwiper />
    <OurFeatures />
  </div>
</div>


    </section>
 </main>
  )
}

export default Index
