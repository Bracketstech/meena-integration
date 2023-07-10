import React from 'react'
import Hero from './Hero'
import Info from './Info'
import MeenaLocations from './MeenaLocations'
import BookYourAppointment from '@/components/BookYourAppointment'
import DoctorsSwiper from './DoctorsSwiper'
import PatientsSwiper from './PatientsSwiper'
import LatestNewsSwiper from './LatestNewsSwiper'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Info />
      <section>
  <div>
    
  <DoctorsSwiper/>
      <PatientsSwiper/>
      <MeenaLocations />
  </div>  
</section>
      <section>
        <div>
        <LatestNewsSwiper/>

<div className="relative">
  <span className="healthCare__Overlay absolute w-full h-full lg:h-[62.8125vw] bottom-0 leftRightFixer1"></span>
  <div className="sm:py-[14.6341463415vw] py-[20.51282051282051vw] lg:pt-[4.6875vw] lg:pb-[10.4166666667vw]">
    <BookYourAppointment />


  </div>
</div>
        </div>
      </section>

    </main>
  )
}

export default HomePage
