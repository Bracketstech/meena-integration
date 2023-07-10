import React from 'react'

const OurStory = () => {
  return (
    <div className="sm:gap-y-[3.65853658537vw] sm:py-[7.31707317073vw] Container1440 lg:pt-[6.25vw] pt-[16.4102564103vw] flex items-center justify-between flex-col-reverse lg:flex-row lg:pb-[3.85416666667vw] pb-[6.15384615385vw] gap-y-[6.15384615385vw]">
  <div className="lg:w-[37.5vw]">
    <span
      data-aos="fade-up"
      data-aos-anchor="#story"
      data-aos-delay={400}
      className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[#3B3659] lg:text-[0.9375vw] lg:leading-[1.51041666667vw] text-[3.07692307692vw] leading-[4.87179487179vw] PingAR-Regular"
    >
      Our story
    </span>
    <div data-aos="fade-down" data-aos-anchor="#story" data-aos-delay={400}>
      <h3 className="lg:mt-[0.625vw] mt-[1.02564102564vw] text-[#3B3659] lg:text-[2.29166666667vw] lg:leading-[3.64583333333vw] text-[5.64102564103vw] leading-[8.97435897436vw] PingAR-Regular">
        It’s time to <span className="PingAR-Bold"> break </span> the mold
      </h3>
      <div className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] sm:gap-y-[1.46341463415vw] lg:mt-[0.625vw] mt-[3.07692307692vw] text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[3.07692307692vw]">
        <p className="PingAR-Light">
          That’s why we’re defining a new paradigm for human well-being, laying
          the tracks that lead to your best days in line with Vision 2030. Our
          ecosystem is smart, integrated, and made around your needs – as it
          should be since we know each person is unique.
        </p>
        <p className="PingAR-Light">
          We’re where you are, in any familiar place in your neighborhood or in
          the palm of your hand. Together, embrace your potential.
        </p>
      </div>
      <h5 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] sm:mt-[1.46341463415vw] text-[#8450FF] lg:text-[1.35416666667vw] lg:leading-[2.1875vw] text-[4.87179487179vw] leading-[7.69230769231vw] PingAR-Regular lg:mt-[1.25vw] mt-[4.10256410256vw]">
        Meet meena
      </h5>
      <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:mt-[0.625vw] mt-[3.07692307692vw] PingAR-Regular text-[#505050] lg:text-[1.14583333333vw] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.06837606838vw]">
        We chart the clear path to unlock your full potential
      </p>
    </div>
  </div>
  <div
    className="lg:w-[30.2083333333vw] relative overflow-hidden"
    data-aos="fade"
    data-aos-anchor="#story"
    data-aos-delay={600}
  >
    <img
      src="/images/about-meena/card-img.jpg"
      alt="card-img"
      className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
    />
    <svg
      className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] lg:w-[39.0854166667vw] w-[112.307692308vw]"
      xmlns="http://www.w3.org/2000/svg"
      width="737.621"
      height="476.737"
      viewBox="0 0 737.621 476.737"
    >
      <path
        id="heartLine"
        style={{ animationDuration: "1s" }}
        data-name="Path 101503"
        d="M0,187.307c29.529,6.736,63.87,11.369,100.178,10.184C212.237,193.832,301.7,179,343.018,134.737c17.064-18.282,33.4-35.534,33.795-48.78.546-18.293-16.084-24.7-26.4-23.885s-14.863,27.134-14.863,27.134S314.56,60.073,303.625,59.463s-13.93,17.453-11.82,27.3c4.874,22.754,46.875,64.97,109.532,66.252s76.705-6.392,163.166-51.045S712.044,0,712.044,0"
        transform="matrix(0.914, -0.407, 0.407, 0.914, 3.338, 293.347)"
        fill="none"
        stroke="#8450ff"
        strokeLinecap="round"
        strokeWidth={4}
      />
    </svg>
  </div>
</div>
  )
}

export default OurStory
