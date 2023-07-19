import Link from "next/link";
import React from "react";

const SubPageHero = ({ title, text, boldtext, arabic, markupTitle }) => {
  return (
    <div className="Container1680 lg:pt-[13.9583333333vw] sm:pt-[24.3902439024vw] pt-[40.7692307692vw]">
      <div
        data-aos="fade"
        data-aos-delay={400}
        className="flex items-center lg:gap-x-[0.625vw] sm:gap-x-[1.589744vw] gap-x-[3.58974358974vw]"
      >
        <Link href={arabic ? "/ar" : "/"}>
          <img
            src="/images/icons/home.svg"
            alt="home"
            className="lg:w-[2.44791666667vw] sm:w-[5vw] w-[9.48717948718vw]"
          />
        </Link>
        <img
          src="/images/icons/next.svg"
          alt="chevron"
          className="flipped lg:w-[0.63333333333vw] sm:w-[1.6vw] sm:mt-[0.9vw] w-[3.07692307692vw] lg:mt-[0.46875vw] mt-[1.53846153846vw]"
        />
      </div>
      <div className="lg:w-[37.5vw] lg:mt-[1.14583333333vw] sm:mt-[1.70731707317vw] mt-[4.10256410256vw]">
        {markupTitle ? (
          <div
            data-aos="fade-up"
            className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
            dangerouslySetInnerHTML={{ __html: markupTitle }}
          ></div>
        ) : (
          <h1
            data-aos="fade-up"
            className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
          >
            {title} <span className="PingAR-Bold">{boldtext}</span>
          </h1>
        )}
        {text && (
          <p
            data-aos="fade-down"
            className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.74479166667vw] text-[3.58974358974vw] leading-[5.9829059829vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[1.02564102564vw]"
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubPageHero;
