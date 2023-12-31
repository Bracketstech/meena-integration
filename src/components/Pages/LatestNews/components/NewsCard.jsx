import Link from "next/link";
import React from "react";

const NewsCard = ({
  image,
  date,
  heading,
  paragraph,
  arabic,
  classes,
  slug,
}) => {
  const newDate = new Date(date);
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
      data-aos="fade"
      data-aos-delay="00"
      className={`lg:w-[23.3333333333vw] sm:w-full w-[42.3076923077vw] ${classes}`}
    >
      <div className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] overflow-hidden">
        <Link href={`${arabic ? "/ar" : ""}/news/${slug}`}>
          <img
            src={image}
            alt="card-img"
            className="w-full baapkisun lg:h-[20.8333333333vw] h-[280px]  object-cover lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
          />
        </Link>
      </div>
      <div className="sm:mt-[2.19512195122vw] text-[#3B3659] lg:w-[22.3958333333vw] lg:mt-[1.25104166667vw] mt-[3.07692307692vw]">
        <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] lg:text-[0.72916666666vw] lg:leading-[1.14583333333vw] text-[3.07692307692vw] leading-[4.87179487179vw] PingAR-Regular">
          {finalDate}
        </span>
        <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] line_clamp1g lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[3.58974358974vw] leading-[5.89743589744vw] PingAR-Medium">
          {heading}
        </h4>
        <p className="sm:text-[1.82926829268vw]  lg:min-h-[3.64583333333vw] sm:min-h-[8.04427083333vw] min-h-[60.56px] sm:leading-[2.68292682927vw] sm:mt-[1.46341463415vw] line_clamp3g text-[#505050] lg:mt-[0.625vw] line_clamp3 mt-[2.05128205128vw] lg:text-[0.83333333333vw] lg:leading-[1.21527777778vw] text-[3.07692307692vw] leading-[5.38461538462vw] PingAR-Regular">
          {paragraph}
        </p>
        <Link
          href={`${arabic ? "/ar" : ""}/news/${slug}`}
          className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:mt-[3.65853658537vw] lg:mt-[1.25vw] mt-[4.10256410256vw] block lg:text-[0.9375vw] lg:leading-[1.51041666667vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Regular"
        >
          {arabic ? "اقرا المزيد" : "Read more"}
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
