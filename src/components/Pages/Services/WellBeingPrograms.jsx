import React from 'react'

const WellBeingPrograms = ({arabic}) => {
  return (
    <div className="relative">
    <span className="healthCare__Overlay absolute w-full h-full bottom-0 leftRightFixer1"></span>
    {/* <img
        src="/images/services/wellbeingprogram-BgDesign.png"
        alt="BgDesign"
        className="hidden lg:block w-full absolute leftRightFixer1 bottom-0 lg:bottom-[-9.27083333333vw] lg:h-[57.2520833333vw]"
      /> */}
    <svg
      className="hidden lg:block w-full absolute leftRightFixer1 bottom-0 lg:bottom-[-9.27083333333vw] lg:h-[57.2520833333vw]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1965.025 1104.529"
    >
      <path
        id="heartLine3"
        data-name="Path 101471"
        d="M-1006.682,934.916c30.579,89.189-9.9,703.736,91.877,731.009s75.868-85.853,6.934-54.765-4.314,292.331,349.239,316.087S751.119,1707.5,953.05,2034.151"
        transform="translate(1009.222 -932.375)"
        fill="none"
        stroke="#8450ff"
        strokeLinecap="round"
        strokeWidth={4}
      />
    </svg>
    {/* <img
        src="/images/services/wellbeingprogram-BgDesign.png"
        alt="BgDesign"
        className="lg:hidden block w-full absolute leftRightFixer1 bottom-[-3.84615384615vw]"
      /> */}
    <svg
      className="sm:hidden block w-full absolute leftRightFixer1 bottom-[-3.84615384615vw]"
      xmlns="http://www.w3.org/2000/svg"
      width="392.647"
      height="221.402"
      viewBox="0 0 392.647 221.402"
    >
      <path
        id="Path_101610"
        data-name="Path 101610"
        d="M-1006.682,934.916c6.086,17.749-1.971,140.048,18.284,145.476s15.1-17.085,1.38-10.9-.858,58.176,69.5,62.9,260.65-43.732,300.835,21.274"
        transform="translate(1007.952 -933.645)"
        fill="none"
        stroke="#8450ff"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </svg>
    <div className="lg:mt-[5.72916666667vw] Container1440 relative z-[2] flex justify-between items-center flex-wrap gap-y-[6.15384615385vw] lg:py-[4.6875vw] pt-[14.358974359vw] pb-[16.6666666667vw] sm:py-[7.317073170731707vw]">
      <div className="lg:w-[32.7604166667vw]">
      {arabic ? <h3
          data-aos="fade-up"
          className="PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
        > 
          <span className="PingAR-Bold"> نضعك  </span> في قلب رحلة الرعاية الصحية الخاصة
          <span className="PingAR-Bold">  بك  </span>
          من خلال برامج الرفاهية لدينا
        </h3>: <h3
          data-aos="fade-up"
          className="PingAR-Regular heading54 tracking-[unset] text-[#3B3659]"
        >
          We put
          <span className="PingAR-Bold"> you </span>at the center of
          <span className="PingAR-Bold"> your </span>
          healthcare journey with our wellbeing programs
        </h3>}
        <p
          data-aos="fade-down"
          className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Light text-[#505050] lg:w-[32.1875vw] lg:mt-[0.625vw] mt-[2.05128205128vw]"
        >
          {arabic ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات": "Lorem ipsum dolor sit amet, pscing consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
         
         
        </p>
      </div>
      <div
        data-aos="fade"
        data-aos-delay={400}
        className="lg:w-[36.4583333333vw]"
      >
        <img
          src={arabic?"/images/services/wellbeing-program-ar.png":"/images/services/wellbeing-program.png"}
          alt="wellbeing-program"
          className="w-full"
        />
      </div>
    </div>
  </div>
  
  )
}

export default WellBeingPrograms
