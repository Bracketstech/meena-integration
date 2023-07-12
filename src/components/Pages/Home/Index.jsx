'use client'
import Hero from './Hero'
import Info from './Info'
import MeenaLocations from './MeenaLocations'
import BookYourAppointment from '@/components/BookYourAppointment'
import DoctorsSwiper from './DoctorsSwiper'
import PatientsSwiper from './PatientsSwiper'
import LatestNewsSwiper from './LatestNewsSwiper'
import useAnimations from '@/hooks/useAnimations'

const HomePage = ({arabic}) => {
  useAnimations()
 
  return (
    <main>
      <Hero arabic={arabic}/>
      <Info arabic={arabic}/>
      <section>
  <div>
    
  <DoctorsSwiper arabic={arabic}/>
      <PatientsSwiper arabic={arabic}/>
      <MeenaLocations  arabic={arabic}/>
  </div>  
</section>
      <section>
        <div>
        <LatestNewsSwiper arabic={arabic}/>

<div className="relative">
  <span className="healthCare__Overlay absolute w-full h-full lg:h-[62.8125vw] bottom-0 leftRightFixer1"></span>
  <div className="sm:py-[14.6341463415vw] py-[20.51282051282051vw] lg:pt-[4.6875vw] lg:pb-[10.4166666667vw]">
    <BookYourAppointment  arabic={arabic}/>


  </div>
</div>
        </div>
      </section>

    </main>
  )
}

export default HomePage
