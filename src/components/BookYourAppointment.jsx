import React from 'react'

const BookYourAppointment = () => {
  return (
    <div className="sm:gap-y-[2.926829268292683vw] flex-col-reverse lg:flex-row flex-wrap gap-y-[6.153846153846154vw] relative z-[2] Container1440 flex justify-between items-center ">
    <div className="lg:w-[33.75vw]">
      <h3
        data-aos="fade-up"
        className="hidden lg:block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]"
      >
        Book your
        <span className="PingAR-Bold"> appointment </span>
        today
      </h3>
      <p
        data-aos="fade-down"
        className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Light text-[#707070] lg:text-[#505050] lg:w-[32.1875vw] lg:mt-[0.625vw] mt-[6.15384615385vw]"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <div
        data-aos="fade"
        data-aos-delay={200}
        className="sm:mt-[3.658536585365854vw] sm:gap-x-[2.926829268292683vw] text-[#FFFFFF] flex items-center lg:gap-x-[1.25vw] gap-x-[4.44444444444vw] mt-[6.153846153846154vw] lg:mt-[2.5vw] flex-wrap gap-y-[4.44444444444vw]"
      >
        <a href="./about-app.html" className="anchor1">
          <div>
            <span> Get app </span>
            <img src="/images/icons/get-app.svg" alt="get-app" />
          </div>
        </a>
        <a href="tel:920011111" className="anchor2">
          <div>
            <span className=""> 9200 11111 </span>
            <img src="/images/icons/phone.svg" alt="phone" />
          </div>
        </a>
      </div>
    </div>
    <div
      className="lg:w-[30.2083333333vw] w-full"
      data-aos="fade"
      data-aos-delay={400}
    >
      <img
        src="/images/home/appointment.jpg"
        alt="appointment"
        className="w-full lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
      />
    </div>
    <h3 className="lg:hidden block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]">
    Book your
    <span className="PingAR-Bold"> appointment </span>
    today
  </h3>
  </div>
  )
}

export default BookYourAppointment
