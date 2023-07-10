import React from 'react'

const MobFilter = () => {
  return (
    <div className="sm:mb-[14.6341463415vw] lg:hidden block rounded-[3.84615384615vw] overflow-hidden border-[#CECFD0] border-[1px] mt-[16.4102564103vw] sm:mt-[7.31707317073vw] mb-[20.5128205128vw]">
    <div>
      <div className="px-[6.15384615385vw] bg-[#F0F0F0] pt-[4.10256410256vw] sm:px-[3.65853658537vw]">
        <div className="flex items-center justify-between">
          <h5 className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] lg:text-[1.14583333333vw] lg:leading-[1.82291666667vw] text-[4.10256410256vw] leading-[6.66666666667vw] PingAR-Bold text-[#3B3659]">
            Filter by
          </h5>
          <a
            href=""
            className="sm:w-[24.3902439024vw] sm:h-[6.70731707317vw] sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] bg-[#3B3659] text-[#FFFFFF] lg:text-[0.9375vw] text-[3.07692307692vw] PingAR-Light lg:rounded-[1.35416666667vw] rounded-[6.66666666667vw] w-[27.4358974359vw] lg:w-[7.91666666667vw] lg:h-[2.70833333333vw] h-[10.2564102564vw] flex justify-center items-center"
          >
            <span className="lg:h-[1.19791666667vw] h-[3.58974358974vw] sm:h-[2.92682926829vw]">
              Nearby
            </span>
          </a>
        </div>
        <div className="sm:gap-y-[1.9512195122vw] sm:w-[60%] pt-[6.15384615385vw] pb-[5.38461538462vw] sm:py-[2.92682926829vw] flex flex-col gap-y-[3.58974358974vw] w-[62.0512820513vw]">
          <div className="flex items-center justify-between">
            <label
              htmlFor="All-mob"
              className="sm:gap-x-[0.97560975609vw] sm:items-center category flex lg:items-start lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw]"
            >
              <div className="sm:w-[3.41463414634vw] sm:h-[3.41463414634vw] relative lg:w-[1.25vw] lg:h-[1.25vw] w-[5.12820512821vw] h-[5.12820512821vw] border-[#B2ADAD] border-[1px] lg:rounded-[0.20833333333vw] rounded-[1.02564102564vw] overflow-hidden">
                <input
                  type="checkbox"
                  id="All-mob"
                  className="appearance-none w-full h-full"
                />
                <img
                  src="/images/icons/checked.svg"
                  alt="checked"
                  className="checkedIcon"
                />
              </div>
              <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] PingAR-Light text-[#3B3659]">
                All
              </span>
            </label>
            <label
              htmlFor="Yalla Clinic-mob"
              className="sm:gap-x-[0.97560975609vw] sm:items-center category flex lg:items-start lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw]"
            >
              <div className="sm:w-[3.41463414634vw] sm:h-[3.41463414634vw] relative lg:w-[1.25vw] lg:h-[1.25vw] w-[5.12820512821vw] h-[5.12820512821vw] border-[#B2ADAD] border-[1px] lg:rounded-[0.20833333333vw] rounded-[1.02564102564vw] overflow-hidden">
                <input
                  type="checkbox"
                  id="Yalla Clinic-mob"
                  className="appearance-none w-full h-full"
                />
                <img
                  src="/images/icons/checked.svg"
                  alt="checked"
                  className="checkedIcon"
                />
              </div>
              <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] PingAR-Light text-[#3B3659]">
                Yalla Clinic
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="NEST Clinic-mob"
              className="sm:gap-x-[0.97560975609vw] sm:items-center category flex lg:items-start lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw]"
            >
              <div className="sm:w-[3.41463414634vw] sm:h-[3.41463414634vw] relative lg:w-[1.25vw] lg:h-[1.25vw] w-[5.12820512821vw] h-[5.12820512821vw] border-[#B2ADAD] border-[1px] lg:rounded-[0.20833333333vw] rounded-[1.02564102564vw] overflow-hidden">
                <input
                  type="checkbox"
                  id="NEST Clinic-mob"
                  className="appearance-none w-full h-full"
                />
                <img
                  src="/images/icons/checked.svg"
                  alt="checked"
                  className="checkedIcon"
                />
              </div>
              <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] PingAR-Light text-[#3B3659]">
                NEST Clinic
              </span>
            </label>
            <label
              htmlFor="Open Now-mob"
              className="sm:gap-x-[0.97560975609vw] sm:items-center category flex lg:items-start lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw]"
            >
              <div className="sm:w-[3.41463414634vw] sm:h-[3.41463414634vw] relative lg:w-[1.25vw] lg:h-[1.25vw] w-[5.12820512821vw] h-[5.12820512821vw] border-[#B2ADAD] border-[1px] lg:rounded-[0.20833333333vw] rounded-[1.02564102564vw] overflow-hidden">
                <input
                  type="checkbox"
                  id="Open Now-mob"
                  className="appearance-none w-full h-full"
                />
                <img
                  src="/images/icons/checked.svg"
                  alt="checked"
                  className="checkedIcon"
                />
              </div>
              <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] PingAR-Light text-[#3B3659]">
                Open Now
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="w-[80.5128205128vw] mx-[auto] pt-[4.10256410256vw]">
        <div className="sm:h-[8.53658536585vw] bg-[#F0F0F0] rounded-[6.66666666667vw] h-[11.7948717949vw] flex items-center justify-between px-[5.64102564103vw]">
          <input
            type="text"
            placeholder="Search area"
            className="sm:text-[1.9512195122vw] w-[90%] outline-none bg-transparent text-[3.58974358974vw] PingAR-Light placeholder:text-[#8F8F8F] h-full"
          />
          <img
            src="/images/icons/search.svg"
            alt="search"
            className="w-[4.10256410256vw] sm:w-[3.0487804878vw]"
          />
        </div>
        <div className="sm:pt-[4.87804878049vw] sm:gap-y-[2.92682926829vw] pt-[6.15384615385vw] flex flex-col gap-y-[3.20512820513vw]">
          <div className="sm:pb-[2.92682926829vw] pb-[3.20512820513vw] border-[#CECFD0] border-b-[1px]">
            <h5 className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] text-[4.10256410256vw] leading-[6.66666666667vw] text-[#3B3659]">
              Albaha clinic
            </h5>
            <div className="sm:mt-[1.9512195122vw] mt-[3.58974358974vw] flex flex-col gap-y-[2.30769230769vw]">
              <div className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  Sat-Thu (7AM - 4PM)
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="w-[6.15384615385vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Medium text-[#3B3659]">
                  Open In Google Map
                </span>
              </a>
            </div>
          </div>
          <div className="sm:pb-[2.92682926829vw] pb-[3.20512820513vw] border-[#CECFD0] border-b-[1px]">
            <h5 className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] text-[4.10256410256vw] leading-[6.66666666667vw] text-[#3B3659]">
              Albaha clinic
            </h5>
            <div className="sm:mt-[1.9512195122vw] mt-[3.58974358974vw] flex flex-col gap-y-[2.30769230769vw]">
              <div className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  Sat-Thu (7AM - 4PM)
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="w-[6.15384615385vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Medium text-[#3B3659]">
                  Open In Google Map
                </span>
              </a>
            </div>
          </div>
          <div className="sm:pb-[2.92682926829vw] pb-[3.20512820513vw] border-[#CECFD0] border-b-[1px]">
            <h5 className="sm:text-[2.68292682927vw] sm:leading-[4.87804878049vw] text-[4.10256410256vw] leading-[6.66666666667vw] text-[#3B3659]">
              Albaha clinic
            </h5>
            <div className="sm:mt-[1.9512195122vw] mt-[3.58974358974vw] flex flex-col gap-y-[2.30769230769vw]">
              <div className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  Sat-Thu (7AM - 4PM)
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="w-[6.15384615385vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Light text-[#505050]">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="sm:gap-x-[0.97560975609vw] flex items-start gap-x-[2.05128205128vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="w-[5.12820512821vw] sm:w-[3.41463414634vw]"
                />
                <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] text-[3.58974358974vw] leading-[5.64102564103vw] PingAR-Medium text-[#3B3659]">
                  Open In Google Map
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:hidden block mt-[6.15384615385vw]">
      <img
        src="/images/locations/map.jpg"
        alt="map"
        className="w-full h-[101.794871795vw] sm:h-[60.9756097561vw]"
      />
    </div>
  </div>
  )
}

export default MobFilter
