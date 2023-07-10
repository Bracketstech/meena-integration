import React from 'react'
import SubPageHero from '@/components/SubPageHero'
import Map from './Map'

const Index = () => {
  return (
   <main>
  <section className='relative overflow-hidden'>
  <SubPageHero title="Meena" boldtext="locations"
    text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            " />
            <Map />

  </section>
   </main>
  )
}

export default Index
