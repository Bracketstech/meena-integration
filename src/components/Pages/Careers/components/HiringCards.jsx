import React from "react";

const HiringCards = ({ arabic, cards }) => {
  return (
    <div className="w-full lg:w-[40.625vw] flex justify-between">
      {cards.map((card, index) => (
        <div
          data-aos="fade"
          data-aos-anchor="#hiring"
          data-aos-delay={(index + 1) * 200}
          className="lg:w-[19.0625vw] w-[42.3076923077vw]"
          key={card.title}
        >
          <img
            src={card.image.path}
            alt={card.title}
            className="w-full lg:rounded-[1.04166666667vw] rounded-[5.12820512821vw]"
          />
          <div className="lg:mt-[0.625vw] mt-[3.07692307692vw] sm:mt-[1.46341463415vw]">
            <h5 className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] lg:text-[1.14583333333vw] lg:leading-[1.82291666667vw] text-[4.10256410256vw] leading-[6.66666666667vw] text-[#3B3659] PingAR-Medium">
              {card.title}
            </h5>
            <p className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:mt-[unset] lg:mt-[0.41666666666vw] mt-[2.05128205128vw] PingAR-Regular lg:text-[0.9375vw] text-[3.58974358974vw] text-[#505050] lg:leading-[1.47569444444vw] leading-[6.05128205128vw]">
              {card.description}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HiringCards;
