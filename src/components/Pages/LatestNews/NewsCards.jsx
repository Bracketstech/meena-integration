import React from 'react'
import CardData from './CardData' 
import NewsCard from './components/NewsCard'
const NewsCards = () => { 
  return (
    <div className="sm:gap-[3.65853658537vw] lg:pt-[2.5vw] sm:py-[7.31707317073vw] pt-[8.20512820513vw] flex lg:gap-[2.5vw] gap-[4.10256410256vw] flex-wrap lg:pb-[3.33333333333vw] pb-[8.20512820513vw]">
    {CardData.map((CardDat)=>(
        <NewsCard 
        image={CardDat.image}
        date={CardDat.date}
        heading={CardDat.heading}
        paragraph={CardDat.paragraph}
        anchor={CardDat.anchor}
         />
    ))}
    
     
  </div>
  )
}

export default NewsCards
