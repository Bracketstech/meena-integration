import React from "react";

const Cards = ({ cards }) => {
  const isOdd = (number) => number % 2 == 1;
  return (
    <div className="flex lg:gap-x-[2.5vw] lg:w-[40.625vw] flex-wrap justify-between lg:justify-normal">
      {cards.map((card, index) => (
      !card.hide_this_service &&(
        <div
          key={card.title}
          data-aos-anchor="#one"
          data-aos="fade"
          data-aos-delay={200}
          className={`w-[42.3076923077vw] lg:w-[19.0625vw] ${
            isOdd(index + 1)
              ? "lg:mt-[4.16666666667vw] mt-[8.20512820513vw]"
              : ""
          }`}
        >
          <img
            src={card.image.path}
            alt={card.title}
            className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
          />
          <div className="lg:mt-[0.625vw] mt-[4%]">
            <span
              id={cards.length - 4 == index ? "lineanimation2" : ""}
              className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] lg:text-[1.14583333333vw] lg:leading-[1.82291666667vw] PingAR-Medium text-[4.10256410256vw] leading-[6.66666666667vw] text-[#3B3659]"
            >
              {card.title}
            </span>
            <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.47569444444vw] text-[3.58974358974vw] leading-[6.05128205128vw] text-[#505050] PingAR-Regular lg:mt-[0.41666666666vw] mt-[2.05128205128vw]">
              {card.description}
            </p>
          </div>
        </div>
  )
     
      ))}
    </div>
  );
};

export default Cards;
