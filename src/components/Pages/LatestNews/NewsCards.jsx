import React from "react";
import { cardData, cardDataAr } from "./CardData";
import NewsCard from "./components/NewsCard";
const NewsCards = ({ arabic, data, isHome }) => {
  return (
    <div
      id="newsCards"
      className="sm:gap-[3.65853658537vw] lg:pt-[2.5vw] sm:py-[7.31707317073vw] pt-[8.20512820513vw] flex lg:gap-[2.5vw] gap-[4.10256410256vw] flex-wrap lg:pb-[3.33333333333vw] pb-[8.20512820513vw]"
    >
      {/* {arabic
        ? cardDataAr.map((CardDat, index) => (
            <NewsCard
              arabic={arabic}
              key={index}
              image={CardDat.image}
              date={CardDat.date}
              heading={CardDat.heading}
              paragraph={CardDat.paragraph}
              anchor={CardDat.anchor}
            />
          ))
        : cardData.map((CardDat, index) => (
            <NewsCard
              key={index}
              image={CardDat.image}
              date={CardDat.date}
              heading={CardDat.heading}
              paragraph={CardDat.paragraph}
              anchor={CardDat.anchor}
            />
          ))} */}
      {data.data.map((card, index) => {
        if (isHome || index !== 0) {
          return (
            <NewsCard
              key={index}
              image={card.thumbnail.path}
              date={card.date}
              heading={card.title}
              paragraph={card.description}
              slug={card.slug}
              arabic={arabic}
            />
          );
        }
      })}
    </div>
  );
};

export default NewsCards;
