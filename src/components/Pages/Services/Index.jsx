import SubPageHero from '@/components/SubPageHero'
import React from 'react'
import PrimaryCare from './PrimaryCare'
import Ecosystem from './Ecosystem'
import WellBeingPrograms from './WellBeingPrograms'
import BookYourAppointment from '@/components/BookYourAppointment'

const Index = () => {
    return (
        <main>
            <SubPageHero
                boldtext="Services"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna"
            />
            <PrimaryCare />
            <Ecosystem />
            <WellBeingPrograms />
            <div className='py-[20.5128205128vw] Container1440 flex justify-between items-center lg:pt-[5.78125vw] lg:pb-[10.4166666667vw] sm:pt-[7.317073170731707vw] sm:pb-[14.63414634146341vw]'>
<BookYourAppointment />
            </div>


        </main>
    )
}

export default Index
