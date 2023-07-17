import Link from "next/link";
import React from "react";

const Hero = ({ arabic }) => {
  return (
    <section className="relative">
      <div className="h-[123.333333333vw] heightkhraba lg:h-[56.25vw] flex items-end lg:pb-[18.22916666666667vw] pb-[31.28205128205128vw]">
        <div className="w-full h-[inherit] lg:h-full absolute top-0 leftRightFixer1">
          <img
            src="/images/home/hero.webp"
            alt="hero"
            className="w-full h-full flipped object-cover hidden lg:block"
          />
          <img
            src="/images/home/hero-mob.jpg"
            alt="hero"
            className="w-full h-full lg:hidden block object-cover object-[-84.6153846154vw]"
          />
          <span className="hero__Overlay1 absolute top-0 leftRightFixer1 w-full lg:h-[17.2916666667vw] h-[51.2820512821vw]" />
          <span className="hero__Overlay2 absolute bottom-0 leftRightFixer1 w-full lg:h-[24.7395833333vw] h-[64.1025641026vw]" />
          <span className="hero__Overlay3 absolute bottom-0 leftRightFixer1 w-full h-full" />
        </div>
        <div className="Container1680 relative z-[2] text-white lg:text-[#3B3659]">
          <div className="lg:w-[32.03125vw]">
            {arabic ? (
              <h1 id="anchorFOrCards" data-aos="fade-up" className="heading54">
                مستقبل الرعاية الصحية{" "}
                <span className="relative inline-block">
                  الأولية
                  <img
                    src="/images/icons/links-style3.svg"
                    alt="style"
                    className="absolute leftRightFixer1 bottom-[-5px] lg:bottom-[-0.7vw] w-full"
                  />
                </span>
              </h1>
            ) : (
              <h1 id="anchorFOrCards" data-aos="fade-up" className="heading54">
                The future of{" "}
                <span className="relative inline-block">
                  {" "}
                  <img
                    src="/images/icons/links-style3.svg"
                    alt="style"
                    className="absolute leftRightFixer1 bottom-[-5px] lg:bottom-[-0.7vw] w-full"
                  />
                </span>{" "}
                healthcare
              </h1>
            )}
            <div
              data-aos="fade-down"
              className="sm:mt-[3.65853658537vw] lg:mt-[2.291666666666667vw] mt-[4.10256410256vw]"
            >
              <p className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] text-[4.871794871794872vw] lg:leading-[2.1875vw] PingAR-Medium">
                {arabic ? "احجز موعدك" : "Book your appointment"}
              </p>
              <div className="sm:gap-x-[2.926829268292683vw] sm:mt-[1.46341463415vw] text-[#FFFFFF] flex items-center lg:gap-x-[1.25vw] gap-x-[3.07692307692vw] lg:mt-[0.8333333333333333vw] mt-[2.05128205128vw] flex-wrap gap-y-[4.44444444444vw]">
                <Link
                  data-aos="fade"
                  data-aos-delay={200}
                  href={arabic ? "/ar/about-app" : "/about-app"}
                  className="anchor1"
                >
                  <div>
                    <span>{arabic ? "احصل على التطبيق" : " Get app "}</span>
                    <img src="/images/icons/get-app.svg" alt="get-app" />
                  </div>
                </Link>
                <a
                  data-aos="fade"
                  data-aos-delay={400}
                  href="tel:920011111"
                  className="anchor2"
                >
                  <div>
                    <span style={{ direction: "ltr" }} className="">
                      {" "}
                      9200 11111{" "}
                    </span>
                    <img src="/images/icons/phone.svg" alt="phone" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            id="heroLine1"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute hidden lg:block opacity-0 flipped heroLine w-[34.84375vw] leftRightFixer1 bottom-[7.33906249999vw]"
            viewBox="0 0 675.665 74.816"
          >
            <path
              id="Path_101511"
              data-name="Path 101511"
              d="M-3806,711.985s281.7-67.628,669.043-68.194"
              transform="translate(3809.617 -640.787)"
              fill="none"
              stroke="#8450ff"
              strokeLinecap="round"
              strokeWidth={6}
            />
          </svg>
          <svg
            id="heroLine2"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute hidden lg:block opacity-0 flipped heroLine w-[10.15625vw] bottom-[9.871875vw]"
            viewBox="0 0 201.364 35.191"
          >
            <path
              id="Path_101512"
              data-name="Path 101512"
              d="M-2690.248,663.356c72.318-2.322,136.629-12.789,194.592-28.419"
              transform="translate(2693.343 -631.26)"
              fill="none"
              stroke="#8450ff"
              strokeLinecap="round"
              strokeWidth={6}
            />
          </svg>
          <svg
            id="heroLine3"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute hidden lg:block opacity-0 flipped heroLine leftRightFixer2 w-[7.55208333333vw] bottom-[23.3265625vw]"
            viewBox="0 0 152.08 30.043"
          >
            <path
              id="Path_101510"
              data-name="Path 101510"
              d="M-2039.476,405.022c47.375-19.92,94.079-29.007,144.63-19.086"
              transform="translate(2043.404 -378.907)"
              fill="none"
              stroke="#8450ff"
              strokeLinecap="round"
              strokeWidth={6}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
