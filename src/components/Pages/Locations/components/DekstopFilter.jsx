import React from "react";

const DekstopFilter = ({
  arabic,
  addressContainer,
  filters,
  handleCheckChange,
  handleNearest,
  isNearestActive,
  handleMarkerClick,
  appliedFilters,
  isLoadingCurrentLocation,
}) => {
  return (
    <div className="hidden lg:block lg:w-[25vw] bg-[#F0F0F0] lg:overflow-hidden">
      <div className="lg:pt-[1.66666666667vw] lg:pb-[0.98958333333vw] lg:w-[100%] py-[10%] mx-[auto]">
        <div className="flex items-center px-[1.625vw] justify-between">
          <h5 className="lg:text-[1.14583333333vw] lg:leading-[1.82291666667vw] text-[4.10256410256vw] leading-[6.66666666667vw] PingAR-Bold text-[#3B3659]">
            {arabic ? "مصنف بواسطة" : "Filter by"}
          </h5>
          <div
            onClick={handleNearest}
            className={`${
              isNearestActive ? "bg-[#845FFF]" : "bg-[#3B3659]"
            } text-[#FFFFFF] lg:text-[0.9375vw] cursor-pointer hover:opacity-[0.9] text-[3.07692307692vw] PingAR-Regular lg:rounded-[1.35416666667vw] rounded-[6.66666666667vw] w-[27.4358974359vw] lg:w-[7.91666666667vw] lg:h-[2.70833333333vw] h-[10.2564102564vw] flex justify-center items-center`}
          >
            <span className="lg:h-[1.19791666667vw] h-[3.58974358974vw]">
              {isLoadingCurrentLocation
                ? arabic
                  ? "جاري التحميل"
                  : "Loading"
                : arabic
                ? "مجاور"
                : "  Nearby"}
            </span>
          </div>
        </div>
        <div className="lg:pt-[2.08333333333vw] px-[1.625vw]  lg:pb-[1.77083333333vw] pt-[6%] pb-[5%] border-[#CECFD0] border-b-[1px] flex items-center flex-wrap lg:gap-x-[2.91666666667vw] lg:gap-y-[1.25vw] gap-x-[10.5555555556vw] gap-y-[3.33333333333vw]">
          {filters.map((filter, index) => (
            <label
              key={filter.filterId}
              htmlFor={filter.filterId}
              className="category flex lg:items-start lg:gap-x-[0.41666666666vw] gap-x-[2.05128205128vw]"
            >
              <div className="relative lg:w-[1.25vw] lg:h-[1.25vw] w-[5.12820512821vw] h-[5.12820512821vw] border-[#B2ADAD] border-[1px] lg:rounded-[0.20833333333vw] rounded-[1.02564102564vw] overflow-hidden">
                <input
                  onChange={handleCheckChange}
                  type="checkbox"
                  id={filter.filterId}
                  className="appearance-none w-full h-full"
                  checked={appliedFilters.includes(filter.filterId)}
                />
                <img
                  src="/images/icons/checked.svg"
                  alt="checked"
                  className="checkedIcon"
                />
              </div>
              <span className="lg:text-[0.9375vw] lg:leading-[1.45833333333vw] text-[3.58974358974vw] PingAR-Regular text-[#3B3659]">
                {arabic ? filter.filterTitleAr : filter.filterTitle}
              </span>
            </label>
          ))}
        </div>
        <div className="lg:pt-[0] max-h-[40vw] overflow-auto flex flex-col lg:gap-y-[0] pt-[6%] gap-y-[5.55555555556vw]">
          {addressContainer.length == 0 ? (
            <div
              className={
                "lg:py-[1.30208333333vw] px-[1.625vw]  border-[#CECFD0] border-b-[1px] pb-[5%]"
              }
            >
              <h5 className="text22 text-[#3B3659]">
                {arabic ? "لايوجد عيادات" : "No Clinic found"}
              </h5>
            </div>
          ) : (
            addressContainer.map((address, index) => (
              <div
                key={index}
                className={`${
                  addressContainer.length == index + 1
                    ? ""
                    : "   border-[#CECFD0] border-b-[1px]  "
                }   lg:py-[1.30208333333vw] px-[1.625vw]  relative ${
                  address.isActive ? "bg-white" : ""
                } `}
              >
                <div
                  className="absolute left-0 top-0 w-full h-full cursor-pointer"
                  onClick={() => handleMarkerClick(address.address.position)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` w-[1.5vw] h-[1.5vw] absolute ${
                      arabic ? "left-[1vw]" : "right-[1vw]"
                    } top-[50%] transform translate-y-[-50%] nayaFliped`}
                  >
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                </div>

                <h5
                  className={`text22   text-[#3B3659]   
                  `}
                >
                  {arabic ? address.isAr.title : address.title}
                </h5>
                <div className="lg:pt-[0.41666666666vw] items-start pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
                  <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                    <img
                      src="/images/icons/clock1.svg"
                      alt="clock"
                      className="lg:w-[1.04166666667vw]"
                    />
                    <span className="text18 text-[#505050] PingAR-Light">
                      {arabic ? address.isAr.timing : address.timing}
                    </span>
                  </div>
                  <a
                    href={`tel:${address.phone}`}
                    className="flex items-start relative lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
                  >
                    <img
                      src="/images/icons/phone1.svg"
                      alt="phone"
                      className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                    />
                    <span
                      style={{ direction: "ltr" }}
                      className="text18 text-[#505050] PingAR-Light"
                    >
                      {address.phone}
                    </span>
                  </a>
                  <a
                    href=""
                    className="flex relative items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
                  >
                    <img
                      src="/images/icons/open.svg"
                      alt="open"
                      className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                    />
                    <span className="text18 text-[#3B3659] PingAR-Medium">
                      {arabic ? "افتح في خريطة جوجل" : "Open In Google Map"}
                    </span>
                  </a>
                </div>
              </div>
            ))
          )}
          {/* <div className="lg:pb-[1.30208333333vw] border-[#CECFD0] border-b-[1px] pb-[5%]">
            <h5 className="text22 text-[#3B3659]">{arabic? "عيادة الباحة": "Albaha clinic"}</h5>
            <div className="lg:pt-[0.41666666666vw] pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
              <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="lg:w-[1.04166666667vw]"
                />
                <span className="text18 text-[#505050] PingAR-Regular">
                 {arabic?"السبت - الخميس (7 صباحًا - 4 مساءً)": " Sat-Thu (7AM - 4PM)"}
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span style={{direction:"ltr"}} className="text18 text-[#505050] PingAR-Regular">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span className="text18 text-[#3B3659] PingAR-Medium">
                  {arabic?"افتح في خريطة جوجل": "Open In Google Map"}
                </span>
              </a>
            </div>
          </div> */}
          {/* <div className="lg:pb-[1.30208333333vw] border-[#CECFD0] border-b-[1px] pb-[5%]">
            <h5 className="text22 text-[#3B3659]">{arabic? "عيادة الباحة": "Albaha clinic"}</h5>
            <div className="lg:pt-[0.41666666666vw] pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
              <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="lg:w-[1.04166666667vw]"
                />
                <span className="text18 text-[#505050] PingAR-Regular">
                 {arabic?"السبت - الخميس (7 صباحًا - 4 مساءً)": " Sat-Thu (7AM - 4PM)"}
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span style={{direction:"ltr"}} className="text18 text-[#505050] PingAR-Regular">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span className="text18 text-[#3B3659] PingAR-Medium">
                  {arabic?"افتح في خريطة جوجل": "Open In Google Map"}
                </span>
              </a>
            </div>
          </div>
          <div className="lg:pb-[1.30208333333vw] border-[#CECFD0] border-b-[1px] pb-[5%]">
            <h5 className="text22 text-[#3B3659]">{arabic? "عيادة الباحة": "Albaha clinic"}</h5>
            <div className="lg:pt-[0.41666666666vw] pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
              <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="lg:w-[1.04166666667vw]"
                />
                <span className="text18 text-[#505050] PingAR-Regular">
                 {arabic?"السبت - الخميس (7 صباحًا - 4 مساءً)": " Sat-Thu (7AM - 4PM)"}
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span style={{direction:"ltr"}} className="text18 text-[#505050] PingAR-Regular">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span className="text18 text-[#3B3659] PingAR-Medium">
                  {arabic?"افتح في خريطة جوجل": "Open In Google Map"}
                </span>
              </a>
            </div>
          </div> */}
          {/* <div>
            <h5 className="text22 text-[#3B3659]">{arabic? "عيادة الباحة": "Albaha clinic"}</h5>
            <div className="lg:pt-[0.41666666666vw] pt-[3%] flex flex-col lg:gap-y-[0.3125vw] gap-y-[2.77777777778vw]">
              <div className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]">
                <img
                  src="/images/icons/clock1.svg"
                  alt="clock"
                  className="lg:w-[1.04166666667vw]"
                />
                <span className="text18 text-[#505050] PingAR-Regular">
                 {arabic?"السبت - الخميس (7 صباحًا - 4 مساءً)": " Sat-Thu (7AM - 4PM)"}
                </span>
              </div>
              <a
                href="tel:+966 000 0000 00"
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/phone1.svg"
                  alt="phone"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span style={{direction:"ltr"}} className="text18 text-[#505050] PingAR-Regular">
                  +966 000 0000 00
                </span>
              </a>
              <a
                href=""
                className="flex items-start lg:gap-x-[0.625vw] gap-x-[2.22222222222vw]"
              >
                <img
                  src="/images/icons/open.svg"
                  alt="open"
                  className="lg:w-[1.04166666667vw] w-[5.55555555556vw]"
                />
                <span className="text18 text-[#3B3659] PingAR-Medium">
                  {arabic?"افتح في خريطة جوجل": "Open In Google Map"}
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DekstopFilter;
