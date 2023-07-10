import SubPageHero from '@/components/SubPageHero'
import React from 'react'
import HiringPositions from './HiringPositions'
import WorkAtMeena from './WorkAtMeena'

const Index = () => {
  return (
    <main>
        <SubPageHero 
        boldtext="Careers"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" />
       <HiringPositions />
       <WorkAtMeena />
      
    </main>
  )
}

export default Index
