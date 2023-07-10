import SubPageHero from '@/components/SubPageHero'
import React from 'react'
import MainNews from './MainNews'
import NewsCards from './NewsCards'
import Pagination from './Pagination'

const Index = () => {
  return (
    <main>
        <SubPageHero
        title="Latest"
        boldtext="news" /> 
        <div className="Container1440 lg:pt-[6.25vw] sm:pt-[7.31707317073vw] pt-[16.4102564103vw] lg:pb-[10.4166666667vw] sm:pb-[14.6341463415vw] pb-[20.5128205128vw]">
  <MainNews />
  <NewsCards />
  <Pagination />
</div>

    </main>
  )
}

export default Index
