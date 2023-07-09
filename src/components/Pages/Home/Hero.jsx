import React from 'react'

const Hero = () => {
  return (
    <section>
    <div
      className="h-screen bg-[#ccc] flex items-end
        md:pb-[18.22916666666667vw] pb-[45%]"
    >
      <div className="Container1680 relative z-[2] text-[#3B3659]">
        <div className=" md:w-[32.03125vw]">
          <h1 className="heading54">
            The future of
            <span className="relative inline-block">
              primary
              <img
                src="./assets/images/icons/links-style3.svg"
                alt="style"
                className="absolute left-0 bottom-[-5px] md:bottom-[-0.7vw] w-full"
              />
            </span>
            healthcare
          </h1>
          <div className="md:mt-[2.291666666666667vw] mt-[14.5vw]">
            <p className="text26">Book your appointment</p>
            <div className="text-[#FFFFFF] flex items-center md:gap-x-[1.25vw] gap-x-[4.44444444444vw] md:mt-[0.8333333333333333vw] mt-[2.5vw] flex-wrap gap-y-[4.44444444444vw]">
              <a href="" className="anchor1">
                <div>
                  <span>Get app</span>
                  <img src="./assets/images/icons/get-app.svg" alt="get-app" />
                </div>
              </a>
              <a href="" className="anchor2">
                <div>
                  <span className="font-[400]">9200 11111</span>
                  <img src="./assets/images/icons/phone.svg" alt="phone" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero
