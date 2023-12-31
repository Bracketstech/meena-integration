import Link from "next/link";
import React from "react";

const MainNews = ({ arabic, data }) => {
  return (
    <>
      {data.data.map((card, index) => {
        if (index == 0) {
          const newDate = new Date(card.date);
          const newD = newDate.getDate();
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          const monthNamesArabic = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
          const newMonth = arabic
            ? monthNamesArabic[newDate.getMonth() + 1]
            : monthNames[newDate.getMonth() + 1];
          const newYear = newDate.getFullYear();
          const finalDate = newD + " " + newMonth + " " + newYear;
          return (
            <div
              key={index}
              className="flex justify-between items-center flex-col lg:flex-row sm:gap-y-[3.65853658537vw] gap-y-[6.15384615385vw]"
            >
              <Link
                href={arabic ? "/ar/news/" + card.slug : "/news/" + card.slug}
                data-aos="fade"
                data-aos-anchor="#feb"
                data-aos-delay={400}
                className="lg:w-[38.4895833333vw] relative"
              >
                <img
                  id="lineanimation2"
                  src={card.thumbnail.path}
                  alt="card-img"
                  className="w-full"
                />
                <svg
                  className="absolute lg:h-[21.1458333333vw] w-full top-[-25.5929487179vw] lg:top-[1.40625vw] sm:top-[5%] leftRightFixer1 lg:w-[37.6041666667vw]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="730.144"
                  height="406.249"
                  viewBox="0 0 730.144 406.249"
                >
                  <path
                    id="heartLine"
                    style={{ animationDuration: "1s" }}
                    data-name="Path 101499"
                    d="M1490,770.4s243.215-35.281,312.753-83.747-3.6-123.01-15.108-102.868-8.632,33.569-8.632,33.569-35.488-20.142-38.365,0,69.057,98.79,142.91,64.261,178.4-120.85,214.844-164.969,114.136-144.888,114.136-144.888"
                    transform="translate(-1486.6 -367.551)"
                    fill="none"
                    stroke="#8450ff"
                    strokeLinecap="round"
                    strokeWidth={6}
                  />
                </svg>
              </Link>
              <div className="text-[#3B3659] lg:w-[32.2916666667vw]">
                <span
                  data-aos="fade"
                  data-aos-anchor="#feb"
                  data-aos-delay={800}
                  className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] lg:text-[0.72916666666vw] lg:leading-[1.14583333333vw] text-[3.07692307692vw] leading-[4.87179487179vw] PingAR-Regular"
                >
                  {finalDate}
                </span>
                <h2
                  data-aos="fade-up"
                  data-aos-anchor="#feb"
                  data-aos-delay={600}
                  className="sm:text-[3.41463414634vw] sm:leading-[5.12195121951vw] lg:text-[1.875vw] lg:leading-[2.39583333333vw] text-[4.87179487179vw] leading-[7.4358974359vw] PingAR-Medium"
                >
                  {card.title}
                </h2>
                <p
                  data-aos="fade-down"
                  data-aos-anchor="#feb"
                  data-aos-delay={600}
                  className=" sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#505050] lg:mt-[0.625vw] mt-[3.07692307692vw] sm:mt-[1.46341463415vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] leading-[6.15384615385vw] PingAR-Regular"
                >
                  {card.description}{" "}
                </p>
                <Link
                  data-aos="fade"
                  data-aos-anchor="#feb"
                  data-aos-delay={800}
                  href={`${arabic ? "/ar" : ""}/news/${card.slug}`}
                  className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[3.65853658537vw] lg:mt-[2.5vw] mt-[4.10256410256vw] block lg:text-[1.14583333333vw] lg:leading-[1.82291666667vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Regular"
                >
                  {arabic ? "اقرا المزيد" : " Read more"}
                </Link>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default MainNews;
