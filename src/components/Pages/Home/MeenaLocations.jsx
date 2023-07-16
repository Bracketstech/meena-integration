import Link from "next/link";
import React from "react";

const MeenaLocations = ({ arabic }) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full leftRightFixer1 top-0">
        <span className="healthCare__Overlay absolute w-full h-full bottom-0 leftRightFixer1"></span>
        {/* <img
            data-aos="fade"
            data-aos-delay="400"
            src="/images/home/location-design1.png"
            alt="location-design1"
            className="lg:w-[3.22916666667vw] asterisk w-[7.69230769231vw] absolute top-[4.61538461538vw] lg:top-[1.25vw] location__Asterik"
          /> */}
        <svg
          className="sm:w-[5.36585365854vw] h-[8.46153846154vw] lg:h-[unset] lg:w-[3.22916666667vw] asterisk w-[7.69230769231vw] absolute top-[4.61538461538vw] sm:top-[0.73170731707vw] lg:top-[1.25vw] location__Asterik"
          id="Group_89637"
          data-name="Group 89637"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="64.896"
          height="69.743"
          viewBox="0 0 64.896 69.743"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_69409"
                data-name="Rectangle 69409"
                width="64.896"
                height="69.743"
                fill="#8450ff"
              />
            </clipPath>
          </defs>
          <g
            id="Group_89412"
            data-name="Group 89412"
            clipPath="url(#clip-path)"
          >
            <path
              id="Path_100878"
              data-name="Path 100878"
              d="M22.049,5.514,41.492,51.2,47,64.142c.558,1.311,2.491,1.6,3.609.946a2.707,2.707,0,0,0,.946-3.608L32.11,15.79,26.6,2.852c-.558-1.312-2.49-1.6-3.609-.947a2.708,2.708,0,0,0-.946,3.609"
              transform="translate(-2.627 -0.189)"
              fill="#8450ff"
            />
            <path
              id="Path_100879"
              data-name="Path 100879"
              d="M4.495,64.136q22.329-19.982,45.92-38.491,6.543-5.13,13.182-10.135a2.723,2.723,0,0,0,.946-3.609,2.656,2.656,0,0,0-3.609-.946Q36.661,29.269,13.6,49.123,7.132,54.7.764,60.405a2.666,2.666,0,0,0,0,3.73,2.687,2.687,0,0,0,3.73,0"
              transform="translate(0 -1.276)"
              fill="#8450ff"
            />
            <path
              id="Path_100880"
              data-name="Path 100880"
              d="M42.249,1.937A358.477,358.477,0,0,0,29.378,51.91q-1.314,7.228-2.331,14.509a2.726,2.726,0,0,0,1.842,3.243c1.234.339,3.046-.421,3.245-1.842a359.027,359.027,0,0,1,10.8-50.458q2.053-7.057,4.4-14.022A2.667,2.667,0,0,0,45.493.1a2.687,2.687,0,0,0-3.244,1.841"
              transform="translate(-3.263 0)"
              fill="#8450ff"
            />
            <path
              id="Path_100881"
              data-name="Path 100881"
              d="M1.928,35.025q22.1,4.546,44.262,8.772,6.317,1.2,12.639,2.381a2.709,2.709,0,0,0,3.244-1.842,2.66,2.66,0,0,0-1.842-3.244q-22.18-4.133-44.3-8.587-6.3-1.27-12.6-2.566A2.7,2.7,0,0,0,.086,31.781a2.664,2.664,0,0,0,1.842,3.244"
              transform="translate(0 -3.609)"
              fill="#8450ff"
            />
          </g>
        </svg>
        {/* <svg
            className="lg:w-[3.22916666667vw] asterisk w-[7.69230769231vw] absolute top-[4.61538461538vw] lg:top-[1.25vw] location__Asterik"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            id="Group_89424"
            data-name="Group 89424"
            viewBox="0 0 62.073 66.709"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_69424"
                  data-name="Rectangle 69424"
                  width="62.073"
                  height="66.709"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_89423"
              data-name="Group 89423"
              transform="translate(0 0)"
              clip-path="url(#clip-path)"
            >
              <path
                id="Path_100896"
                data-name="Path 100896"
                d="M22.036,5.342l18.6,43.7L45.9,61.42a2.539,2.539,0,0,0,3.452.9,2.589,2.589,0,0,0,.9-3.451l-18.6-43.7L26.393,2.8a2.538,2.538,0,0,0-3.452-.906,2.591,2.591,0,0,0-.9,3.452"
                transform="translate(-3.458 -0.249)"
                fill="#8450ff"
              />
              <path
                id="Path_100897"
                data-name="Path 100897"
                d="M4.3,61.8Q25.656,42.692,48.221,24.988q6.258-4.907,12.608-9.694a2.6,2.6,0,0,0,.9-3.452,2.54,2.54,0,0,0-3.452-.9Q35.066,28.455,13.012,47.446,6.821,52.784.731,58.237a2.55,2.55,0,0,0,0,3.568,2.57,2.57,0,0,0,3.568,0"
                transform="translate(0 -1.68)"
                fill="#8450ff"
              />
              <path
                id="Path_100898"
                data-name="Path 100898"
                d="M41.586,1.853a342.881,342.881,0,0,0-12.311,47.8q-1.256,6.914-2.229,13.878a2.608,2.608,0,0,0,1.762,3.1c1.181.325,2.913-.4,3.1-1.762A343.407,343.407,0,0,1,42.246,16.607q1.964-6.75,4.206-13.412a2.551,2.551,0,0,0-1.763-3.1,2.57,2.57,0,0,0-3.1,1.761"
                transform="translate(-4.296 0)"
                fill="#8450ff"
              />
              <path
                id="Path_100899"
                data-name="Path 100899"
                d="M1.844,34.8q21.138,4.348,42.336,8.39,6.042,1.152,12.089,2.277a2.591,2.591,0,0,0,3.1-1.762,2.544,2.544,0,0,0-1.762-3.1Q36.4,36.65,15.24,32.39,9.21,31.175,3.186,29.935A2.585,2.585,0,0,0,.083,31.7a2.548,2.548,0,0,0,1.762,3.1"
                transform="translate(0 -4.752)"
                fill="#8450ff"
              />
            </g>
          </svg> */}
        <div className="absolute w-full h-full top-0 leftRightFixer1">
          {/* <img
              src="/images/home/location-design2.png"
              alt="location-design2"
              className="hidden lg:block lg:w-[37.7604166667vw] leftRightFixer1 lg:top-[-7.08333333333vw] absolute"
            /> */}
          {/* <img
              src="/images/home/location-design2.svg"
              alt="location-design2"
              className="hidden lg:block lg:w-[37.7604166667vw] leftRightFixer1 lg:top-[-7.08333333333vw] absolute"
            /> */}
          {arabic ? (
            <svg
              className="sm:w-[40.0975609756vw] sm:top-[-11.5853658537vw]   hidden lg:h-[13.5197916667vw] sm:block lg:w-[44.0104166667vw] leftRightFixer1 lg:top-[-7.08333333333vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="850.067"
              height="259.583"
              viewBox="0 0 850.067 259.583"
            >
              <path
                id="Path_100979"
                data-name="Path 100979"
                d="M-3337.834,7177.609s-59.958,141.874-241.284,204.45-298.777,51.778-484.02,45.854c-37.049-1.185-78.113-1.9-120.123-2.275"
                transform="translate(4185.28 -7174.988)"
                fill="none"
                stroke="#8450ff"
                stroke-linecap="round"
                stroke-width="4"
              />
            </svg>
          ) : (
            <svg
              className="sm:w-[31.0975609756vw] sm:top-[-11.5853658537vw] flipped hidden lg:h-[13.5197916667vw] sm:block lg:w-[37.7604166667vw] leftRightFixer1 lg:top-[-7.08333333333vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="729.988"
              height="259.58"
              viewBox="0 0 729.988 259.58"
            >
              <path
                id="Path_100979"
                data-name="Path 100979"
                d="M-3457.958,7427.914c-185.243,5.923-302.694,16.722-484.02-45.854s-241.284-204.45-241.284-204.45"
                transform="translate(4185.882 -7174.988)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </svg>
          )}
          {/* <img
              src="/images/home/location-design2-mob.svg"
              alt="location-design2"
              className="lg:hidden block w-[17.4358974359vw] leftRightFixer1 top-[4.615384615384615vw] absolute"
            /> */}
          <svg
            className="flipped sm:hidden block w-[17.4358974359vw] leftRightFixer1 top-[4.615384615384615vw] absolute"
            xmlns="http://www.w3.org/2000/svg"
            width="70.742"
            height="49.491"
            viewBox="0 0 70.742 49.491"
          >
            <path
              id="Path_101515"
              data-name="Path 101515"
              d="M-4115.029,7224.591a194.109,194.109,0,0,1-19.47-5.664c-36.646-12.646-48.763-41.318-48.763-41.318"
              transform="translate(4184.572 -7176.299)"
              fill="none"
              stroke="#8450ff"
              strokeLinecap="round"
              strokeWidth={2}
            />
          </svg>
          {/* <img
              src="/images/home/location-design3.png"
              alt="location-design3"
              className="hidden lg:block lg:w-[37.65625vw] leftRightFixer2 lg:top-[5.78125vw] absolute"
            /> */}
          {/* <img
              src="/images/home/location-design3.svg"
              alt="location-design3"
              className="hidden lg:block lg:w-[37.65625vw] leftRightFixer2 lg:top-[5.78125vw] absolute"
            /> */}

          {arabic ? (
            <svg
              className="sm:w-[40.0975609756vw]   hidden lg:h-[12.3015625vw] sm:block lg:w-[43.8541666667vw] leftRightFixer2 lg:top-[5.78125vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="847.546"
              height="234.311"
              viewBox="0 0 847.546 234.311"
            >
              <path
                id="Path_100980"
                data-name="Path 100980"
                d="M-5491.747,7627.023s200.2-155.438,441.345-207.251a1092.509,1092.509,0,0,1,113.956-18.4c61.881-6.587,231.675-3.031,287.439-3.027"
                transform="translate(5494.553 -7395.519)"
                fill="none"
                stroke="#8450ff"
                stroke-linecap="round"
                stroke-width="4"
              />
            </svg>
          ) : (
            <svg
              className="sm:w-[31.0975609756vw] flipped hidden lg:h-[12.3015625vw] sm:block lg:w-[37.65625vw] leftRightFixer2 lg:top-[5.78125vw] absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="727.901"
              height="236.198"
              viewBox="0 0 727.901 236.198"
            >
              <path
                id="Path_100980"
                data-name="Path 100980"
                d="M-4649.006,7627.022s-200.2-155.438-441.345-207.25a1092.509,1092.509,0,0,0-113.956-18.4,1047.431,1047.431,0,0,0-167.692-4.2"
                transform="translate(5374.101 -7393.63)"
                fill="none"
                stroke="#8450ff"
                strokeLinecap="round"
                strokeWidth={4}
              />
            </svg>
          )}
          {/* <img
              src="/images/home/location-design3-mob.svg"
              alt="location-design3"
              className="lg:hidden block lg:w-[17.6923076923vw] leftRightFixer2 top-[16.92307692307692vw] absolute"
            /> */}
          <svg
            className="flipped sm:hidden w-[17.8205128205vw] block leftRightFixer2 top-[16.92307692307692vw] absolute"
            xmlns="http://www.w3.org/2000/svg"
            width="72.193"
            height="39.142"
            viewBox="0 0 72.193 39.142"
          >
            <path
              id="Path_101516"
              data-name="Path 101516"
              d="M-5225.885,7442.367s-29.924-23.233-69.525-36.474"
              transform="translate(5296.675 -7404.628)"
              fill="none"
              stroke="#8450ff"
              strokeLinecap="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className="sm:pt-[7.31707317073vw] relative z-[2] Container1440 pt-[12.3076923077vw] lg:pt-[4.6875vw] lg:pb-[5.98958333333vw]">
        <div className="lg:w-[37.5vw] mx-[auto]">
          {arabic ? (
            <h3
              data-aos="fade-up"
              className="heading54 PingAR-Regular text-center tracking-[unset] text-[#3B3659] lg:text-center"
            >
              <span className="PingAR-Bold"> مواقع </span>مينا
            </h3>
          ) : (
            <h3
              data-aos="fade-up"
              className="heading54 PingAR-Regular text-center tracking-[unset] text-[#3B3659] lg:text-center"
            >
              Meena
              <span className="PingAR-Bold"> locations </span>
            </h3>
          )}

          <p
            data-aos="fade-down"
            className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.9512195122vw] lg:text-[1.14583333333vw] lg:leading-[1.666666666666667vw] text-[3.58974358974359vw] leading-[6.153846153846154vw] PingAR-Light text-[#707070] lg:text-[#505050] text-center mt-[2.051282051282051vw] lg:mt-[0.625vw]"
          >
            {arabic
              ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود . يوت انيم أد مينيم فينايم,كيواسكسير سيتاشن يللأمكو"
              : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat,"}
          </p>
        </div>
        <div className="w-[94.1025641025641vw] lg:w-[unset] hideScroll overflow-scroll lg:overflow-auto flex items-center lg:gap-x-[2.5vw] gap-x-[4.102564102564103vw] lg:pt-[2.5vw] pt-[6.66666666667vw]">
          <div
            data-aos="fade"
            data-aos-delay="00"
            className="sm:min-w-[48.7804878049vw] min-w-[70.25641025641026vw] lg:min-w-[unset] lg:w-[23.33333333333333vw]"
          >
            <div className="lg:rounded-[1.04166666667vw] rounded-[20px] overflow-hidden relative">
              <img
                src="/images/home/locations/1.jpg"
                alt="locations"
                className="w-full"
              />
              <span className="absolute w-full h-full top-0 leftRightFixer1 bg-[#3B3659] bg-opacity-[0.2]" />
            </div>
            <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] sm:mb-[unset] lg:text-[1.354166666666667vw] lg:leading-[1.458333333333333vw] text-[4.871794871794872vw] leading-[7.692307692307692vw] PingAR-Medium text-[#3B3659] text-center block lg:mt-[1.25vw] lg:mb-[0.3125vw] mb-[5.93333333333vw] mt-[3.07692307692vw]">
              {arabic ? "اسم العيادة " : "Clinic name"} 1
            </span>
          </div>
          <div
            data-aos="fade"
            data-aos-delay={200}
            className="sm:min-w-[48.7804878049vw] min-w-[70.25641025641026vw] lg:min-w-[unset] lg:w-[23.33333333333333vw]"
          >
            <div className="lg:rounded-[1.04166666667vw] rounded-[20px] overflow-hidden relative">
              <img
                src="/images/home/locations/2.jpg"
                alt="locations"
                className="w-full"
              />
              <span className="absolute w-full h-full top-0 leftRightFixer1 bg-[#3B3659] bg-opacity-[0.2]" />
            </div>
            <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] sm:mb-[unset] lg:text-[1.354166666666667vw] lg:leading-[1.458333333333333vw] text-[4.871794871794872vw] leading-[7.692307692307692vw] PingAR-Medium text-[#3B3659] text-center block lg:mt-[1.25vw] lg:mb-[0.3125vw] mb-[5.93333333333vw] mt-[3.07692307692vw]">
              {arabic ? "اسم العيادة " : "Clinic name"} 2
            </span>
          </div>
          <div
            data-aos="fade"
            data-aos-delay={400}
            className="sm:min-w-[48.7804878049vw] min-w-[70.25641025641026vw] lg:min-w-[unset] lg:w-[23.33333333333333vw]"
          >
            <div className="lg:rounded-[1.04166666667vw] rounded-[20px] overflow-hidden relative">
              <img
                src="/images/home/locations/3.jpg"
                alt="locations"
                className="w-full"
              />
              <span className="absolute w-full h-full top-0 leftRightFixer1 bg-[#3B3659] bg-opacity-[0.6]" />
              <div className="flex flex-col items-center lg:gap-y-[0.78125vw] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[2]">
                <img
                  src="/images/icons/clock.svg"
                  alt="clock"
                  className="lg:w-[1.45833333333vw]"
                />
                <span className="text22 text-[#F5EBE8]">
                  {arabic ? "قريباً" : "Coming soon"}
                </span>
              </div>
            </div>
            <span className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] sm:mb-[unset] lg:text-[1.354166666666667vw] lg:leading-[1.458333333333333vw] text-[4.871794871794872vw] leading-[7.692307692307692vw] PingAR-Medium text-[#3B3659] text-center block lg:mt-[1.25vw] lg:mb-[0.3125vw] mb-[5.93333333333vw] mt-[3.07692307692vw]">
              {arabic ? "اسم العيادة " : "Clinic name"} 3
            </span>
          </div>
        </div>
        <Link
          data-aos="fade-up"
          href={arabic ? "/ar/locations" : "/locations"}
          className="sm:mt-[3.65853658537vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] sm:h-[6.34146341463vw] lg:mt-[3.33333333333vw] mt-[8.205128205128205vw] mx-[auto] bg-[#8450FF] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.076923076923077vw] PingAR-Light lg:rounded-[5.20833333333vw] rounded-[7.948717948717949vw] lg:w-[12.7604166667vw] w-[37.94871794871795vw] lg:h-[3.22916666667vw] h-[9.23076923077vw] flex justify-center items-center hover:bg-[#3B3659] transition-all duration-300 text-[#FFFFFF]"
        >
          <span className="lg:h-[1.19791666667vw] sm:h-[2.92682926829vw] h-[3.58974358974vw]">
            {arabic ? "عرض كل المواقع" : "View all locations"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MeenaLocations;
