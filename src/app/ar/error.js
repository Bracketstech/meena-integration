"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="rtl">
      <header
        className={` sub__Page  absolute leftRightFixer1 w-full lg:pt-[1.66666666667vw] pt-[8.33333333333vw] z-[10]`}
      >
        <div className="relative z-[10] Container1680 flex items-center lg:items-start justify-between">
          <div>
            <Link href={"/ar/"}>
              <img
                src={`/images/icons/Ar-header-whiteLogo.svg`}
                alt="logo"
                className={`whiteLogo   "lg:w-[8.95833333333vw]" : "lg:w-[12.7083333333vw]"
                w-[31.7948717949vw]`}
              />
            </Link>
            <Link href={"/ar/"}>
              <img
                src={`/images/icons/Ar-header-blueLogo.svg`}
                alt="logo"
                className="blueLogo lg:w-[12.7083333333vw] w-[31.7948717949vw]"
              />
            </Link>
          </div>
          <div className="flex flex-col lg:gap-y-[1.14583333333vw]">
            <div className="flex navTopList items-center justify-end lg:gap-x-[2.91666666667vw]">
              <ul className="hidden links PingAR-Medium lg:text-[0.9375vw] lg:leading-[1.45833333333vw] lg:flex items-center lg:gap-x-[2.08333333333vw]"></ul>
            </div>
            <div className="hidden lg:flex items-center lg:gap-x-[2.08333333333vw]">
              <ul className="links navList PingAR-Medium lg:text-[1.04166666667vw] lg:leading-[1.45833333333vw] flex items-center lg:gap-x-[2.08333333333vw]"></ul>
            </div>
          </div>
        </div>
      </header>
      <div className="Container1680 lg:pt-[13.9583333333vw] sm:pt-[24.3902439024vw] pt-[40.7692307692vw] pb-[11vw]">
        <div className="flex items-center lg:gap-x-[1vw] gap-x-[10px] ">
          <div className="flex items-center lg:gap-x-[0.625vw] sm:gap-x-[1.589744vw] gap-x-[3.58974358974vw]">
            <Link href={"/ar/"}>
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
          <h1 className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]">
            <span className="PingAR-Bold block lg:h-[2vw] h-[25px]">400</span>
          </h1>
        </div>

        <div className="lg:w-[37.5vw] lg:mt-[1.74583333333vw]  sm:mt-[2.50731707317vw] mt-[7.10256410256vw]">
          <p className="sm:text-[2.89512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.54583333333vw] lg:leading-[1.74479166667vw] text-[5.58974358974vw] leading-[5.9829059829vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[1.02564102564vw]">
            <strong> هناك خطأ ما</strong>
          </p>
          <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[0.96341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.74479166667vw] text-[3.58974358974vw] leading-[5.9829059829vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[6.02564102564vw]">
            ربما تمت إزالة اسم الصفحة التي تبحث عنها أو أنها غير متاحة مؤقتًا.
          </p>

          <Link
            href={"/ar/"}
            style={{ display: "inline-block" }}
            className="download__App bg-[#845FFF] px-[24px] sm:px-[30px] lg:px-[1.8vw] mt-[7vw] py-[8px]  sm:mt-[1.5vw] text-[#FFFFFF] PingAR-Regular text18 lg:rounded-[1.35416666667vw]  lg:py-[0.625vw]  justify-center items-center hover:bg-[#3B3659] transition-all duration-300"
          >
            <span className="relative top-[0.15vw]">
              العودة الى الصفحة الرئيسية
            </span>
          </Link>
        </div>
      </div>

      <footer>
        <div className="bg-[#3B3659] relative min-h-[18vw]">
          <img
            src={"/images/icons/footerbg-design.svg"}
            alt="footerbg-design"
            className="hidden lg:block flipped lg:w-[18.1458333333vw] absolute leftRightFixer2 bottom-0"
          />
          <img
            src="/images/icons/footerbg-design-mob.svg"
            alt="footerbg-design"
            className="sm:w-[30.487804878vw] flipped lg:hidden block w-[35.64102564102564vw] absolute leftRightFixer2 bottom-0"
          />
          <div className="sm:py-[7.31707317073vw] relative z-[2] Container1680 lg:pt-[4.16666666667vw] lg:pb-[4.47916666667vw] py-[12.30769230769231vw]">
            <div className="sm:gap-y-[7.31707317073vw] flex lg:gap-x-[9.375vw] flex-wrap gap-y-[12.30769230769231vw] gap-x-[12.30769230769231vw] justify-center lg:justify-normal">
              <div className="lg:w-[22.9166666667vw] text-center lg:text-start">
                <Link href={"/ar/"}>
                  <img
                    src="/images/icons/footer-ar-logo.svg"
                    alt="logo"
                    className="lg:w-[15.1041666667vw] sm:w-[26.8292682927vw] w-[48.46153846153846vw] mx-[auto] lg:mx-[unset]"
                  />
                </Link>
                <p className="sm:mt-[1.9512195122vw] sm:text-[1.82926829268vw] sm:leading-[2.68292682927vw] lg:text-[0.8333333333333333vw] lg:leading-[1.42361111111vw] text-[3.076923076923077vw] leading-[5.38461538462vw] PingAR-Light text-[#FFFFFF] lg:mt-[1.66666666667vw] mt-[4.102564102564103vw]"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#474166] lg:py-[0.390625vw] py-[3.205128205128205vw]">
          <div className="sm:text-[1.82926829268vw] flex justify-center sm:leading-[2.68292682927vw] PingAR-Regular Container1680 flex items-center justify-center   text-[#E6E7E7] lg:text-[0.8333333333333333vw] lg:leading-[1.45833333333vw] text-[2.564102564102564vw]">
            <span>جميع الحقوق محفوظة. مينا الصحة @ 2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
