import Link from "next/link";

const ErrorComponent = ({ arabic }) => {
  return (
    <>
      <div className="Container1680 lg:pt-[13.9583333333vw] sm:pt-[24.3902439024vw] pt-[40.7692307692vw] pb-[11vw]">
        <div className="flex items-center lg:gap-x-[1vw] gap-x-[10px] ">
          <div className="flex items-center lg:gap-x-[0.625vw] sm:gap-x-[1.589744vw] gap-x-[3.58974358974vw]">
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
          <h1 className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659]">
            <span className="PingAR-Bold block lg:h-[2vw] h-[25px]"> 404</span>
          </h1>
        </div>

        <div className="lg:w-[37.5vw] lg:mt-[1.74583333333vw]  sm:mt-[2.50731707317vw] mt-[7.10256410256vw]">
          <p className="sm:text-[2.89512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.54583333333vw] lg:leading-[1.74479166667vw] text-[5.58974358974vw] leading-[5.9829059829vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[1.02564102564vw]">
            <strong> Something&apos;s Missing</strong>
          </p>
          <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[0.96341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.74479166667vw] text-[3.58974358974vw] leading-[5.9829059829vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[6.02564102564vw]">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <Link
            href={arabic ? "/ar" : "/"}
            style={{ display: "inline-block" }}
            className="download__App bg-[#845FFF] px-[24px] sm:px-[30px] lg:px-[1.8vw] mt-[7vw] py-[8px]  sm:mt-[1.5vw] text-[#FFFFFF] PingAR-Regular text18 lg:rounded-[1.35416666667vw]  lg:py-[0.625vw]  justify-center items-center hover:bg-[#3B3659] transition-all duration-300"
          >
            <span className="relative top-[0.15vw]">Go Back to Homepage</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;
