import Link from "next/link";
import React from "react";

const NewsCard = ({ image, date, heading, paragraph, anchor, classes }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay="00"
      className={`lg:w-[23.3333333333vw] sm:w-full w-[42.3076923077vw] ${classes}`}
    >
      <div className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] overflow-hidden">
        <Link href="/article">
          <img
            src={image}
            alt="card-img"
            className="w-full lg:h-[unset] h-[280px]  object-cover lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
          />
        </Link>
      </div>
      <div className="sm:mt-[2.19512195122vw] text-[#3B3659] lg:w-[22.3958333333vw] lg:mt-[1.25104166667vw] mt-[3.07692307692vw]">
        <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] lg:text-[0.72916666666vw] lg:leading-[1.14583333333vw] text-[3.07692307692vw] leading-[4.87179487179vw] PingAR-Light">
          {date}
        </span>
        <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] line_clamp1g lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[3.58974358974vw] leading-[5.89743589744vw] PingAR-Medium">
          {heading}
        </h4>
        <p className="sm:text-[1.82926829268vw] sm:leading-[2.68292682927vw] sm:mt-[1.46341463415vw] line_clamp3g text-[#505050] lg:mt-[0.625vw] line_clamp3 mt-[2.05128205128vw] lg:text-[0.83333333333vw] lg:leading-[1.21527777778vw] text-[3.07692307692vw] leading-[5.38461538462vw] PingAR-Light">
          {paragraph}
        </p>
        <a
          href="./article.html"
          className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:mt-[3.65853658537vw] lg:mt-[1.25vw] mt-[4.10256410256vw] block lg:text-[0.9375vw] lg:leading-[1.51041666667vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light"
        >
          {anchor}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
