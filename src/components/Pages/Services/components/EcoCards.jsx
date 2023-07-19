import React from "react";

const EcoCards = ({ arabic, cards }) => {
  return (
    <div
      className={`flex items-stretch  ${
        arabic ? "flex-row-reverse" : "flex-row"
      } justify-center sm:justify-between lg:justify-center lg:gap-x-[2.5vw] lg:pt-[2.5vw] flex-wrap sm:gap-y-[3.658536585365854vw] gap-y-[4.10256410256vw] lg:gap-y-[2.60416666667vw] pt-[6.15384615385vw] pb-[6.15384615385vw] sm:pt-[4.878048780487805vw] sm:pb-[7.317073170731707vw] lg:pb-[unset]`}
    >
      {cards.map((card, index) => (
        <div
          data-aos="fade"
          key={card.title}
          data-aos-delay={index * 100}
          className="sm:w-[48%] sm:h-[44.5609756098vw] w-full lg:w-[23.3333333333vw] bg-[#F5EBE8] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] lg:h-[15.9895833333vw] h-[61.5384615385vw] lg:pt-[1.97916666667vw] flex pt-[8.20512820513vw] items-start"
        >
          <div className="sm:w-[90%] sm:gap-y-[1.9512195122vw] lg:w-[19.1666666667vw] w-[76.4102564103vw] mx-[auto] flex flex-col items-center lg:gap-y-[0.83333333333vw] gap-y-[4.5vw]">
            <img
              src={card.icon[0].path}
              alt={card.title}
              className="lg:w-[2.91666666667vw] w-[10.2564102564vw] sm:w-[6.097560975609756vw]"
            />
            <div className="text-center">
              <h5
                id={cards.length - 2 == index ? "lineanimation3" : ""}
                className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] lg:leading-[2.1875vw] PingAR-Bold text-[4.87179487179vw] leading-[7.69230769231vw] text-[#845FFF]"
              >
                {card.title}
              </h5>
              <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] leading-[6.15384615385vw] text-[#505050] PingAR-Regular lg:mt-[0.41666666666vw] mt-[2.05128205128vw]">
                {card.description}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcoCards;
