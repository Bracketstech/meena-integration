'use client'
import SubPageHero from '@/components/SubPageHero'
import OurStory from './OurStory'
import CoreValues from './CoreValues'
import VisionMission from './VisionMission'
import LeaderSwiper from './LeaderSwiper'
import Partners from './Partners'
import Qualifications from './Qualifications'
import useAnimations from '@/hooks/useAnimations'

const Index = ({arabic}) => {
  useAnimations()
  
  return (
    <main>
      <section>
      <SubPageHero
        title="About"
        boldtext="meena"
        text="
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
         /> 
         <OurStory />
         <CoreValues />
         <VisionMission />
         <LeaderSwiper />
         <Partners />
         <Qualifications />

      </section>
    </main>
  )
}

export default Index
