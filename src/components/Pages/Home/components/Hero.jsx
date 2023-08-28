import Link from "next/link";
import HeroLines from "./HeroLines";
import HeroImgsAndOverlays from "./HeroImgsAndOverlays";

const Hero = ({ arabic, title, des, img, mobImg, fabData }) => {
  let imgClasses = arabic
    ? "absolute right-[0vw] top-[19.9vw] w-[21vw]  sm:right-0 sm:w-[12vw] sm:top-[11.2vw]   lg:top-[6.5vw] lg:w-[8vw] object-contain"
    : "absolute right-[6vw] top-[8.9vw] w-[33vw]  sm:right-0 sm:w-[17vw] sm:top-[5vw]   lg:top-[2.9vw] lg:w-[12vw] object-contain";

    let headingTitle = arabic
    ? "heading54 leading-normal"
    : "heading54";
  return (
    <section className="relative">
      <div className="h-[123.333333333vw] heightkhraba lg:h-[56.25vw] flex items-end lg:pb-[18.22916666666667vw] pb-[31.28205128205128vw]">
        <HeroImgsAndOverlays img={img} mobImg={mobImg} />
        <div className="Container1680 relative z-[2] text-white lg:text-[#3B3659]">
          <div className="lg:w-[32.03125vw] sm:w-[46vw]">
            <h1 id="anchorFOrCards" data-aos="fade-up" className={headingTitle}>
              {title}
              <img
                src="/images/icons/links-style3.svg"
                alt="style"
                className={imgClasses}
              />
            </h1>

            <div
              data-aos="fade-down"
              className="sm:mt-[3.65853658537vw] lg:mt-[2.291666666666667vw] mt-[4.10256410256vw]"
            >
              <p className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] lg:text-[1.354166666666667vw] text-[4.871794871794872vw] lg:leading-[2.1875vw] PingAR-Medium">
                {des}
              </p>
              <div className="sm:gap-x-[2.926829268292683vw] sm:mt-[1.46341463415vw] text-[#FFFFFF] flex items-center lg:gap-x-[1.25vw] gap-x-[3.07692307692vw] lg:mt-[0.8333333333333333vw] mt-[2.05128205128vw] flex-wrap sm:flex-nowrap gap-y-[4.44444444444vw]">
                <Link
                  data-aos="fade"
                  data-aos-delay={200}
                  href={fabData?.fab?.app_download}
                  className="anchor1"
                >
                  <div>
                    <span>{fabData?.fab?.app_download_btn_text}</span>
                    <img src="/images/icons/get-app.svg" alt="get-app" />
                  </div>
                </Link>
                <a
                  data-aos="fade"
                  data-aos-delay={400}
                  href={`tel:${fabData?.fab?.phone}`}
                  className="anchor2"
                >
                  <div>
                    <span style={{ direction: "ltr" }} className="">
                      {fabData?.fab?.phone}
                    </span>
                    <img src="/images/icons/phone.svg" alt="phone" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <HeroLines />
      </div>
    </section>
  );
};

export default Hero;
