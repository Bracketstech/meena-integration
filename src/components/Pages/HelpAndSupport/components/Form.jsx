import React from "react";

const Form = ({ arabic }) => {
  return (
    <div className="lg:w-[39.2708333333vw]">
      <h4
        className={`PingAR-Medium lg:text-[1.14583333333vw] text-[4.87179487179vw] text-[#3B3659] text-center ${
          arabic ? "lg:text-right" : "lg:text-left"
        }`}
      >
        {arabic ? "اترك لنا رسالة" : " Leave us a message"}
      </h4>
      <form action="">
        <div className="lg:pt-[0.78125vw] pt-[4.10256410256vw] flex flex-col lg:gap-y-[0.83333333333vw] gap-y-[3.07692307692vw]">
          <div className="flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw]">
            <div className="sm:h-[7.31707317073vw] lg:h-[3.22916666667vw] h-[13.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw]">
              <input
                type="text"
                placeholder={arabic ? "الاسم" : "Name"}
                className="w-full outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
              />
            </div>
            <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
              *Fill Name*
            </span>
          </div>
          <div className="flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw]">
            <div className="sm:h-[7.31707317073vw] lg:h-[3.22916666667vw] h-[13.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw]">
              <input
                type="email"
                placeholder={arabic ? "البريد الالكتروني" : "Email"}
                className="w-full outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
              />
            </div>
            <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
              *Fill Name*
            </span>
          </div>
          <div className="flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw]">
            <div className="sm:h-[7.31707317073vw] lg:h-[3.22916666667vw] h-[13.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw]">
              <input
                type="number"
                placeholder={arabic ? "الهاتف المحمول" : "Phone number"}
                className="w-full outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
              />
            </div>
            <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
              *Fill Name*
            </span>
          </div>
          <div className="flex flex-col lg:gap-y-[0.625vw] gap-y-[1.53846153846vw]">
            <div className="sm:h-[23.1707317073vw] lg:h-[11.9791666667vw] h-[43.3333333333vw] bg-[#F0F0F0] lg:rounded-[0.52083333333vw] rounded-[1.53846153846vw] lg:px-[1.25vw] px-[4.10256410256vw] lg:pt-[0.98958333333vw] pt-[3.84615384615vw]">
              <textarea
                placeholder={arabic ? "كيف يمكن أن نساعد" : "How can we help"}
                name=""
                className="resize-none PingAR-Light w-full outline-none bg-transparent h-full sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] text-[#3B3659]"
                defaultValue={""}
              />
            </div>
            <span className="sm:text-[1.70731707317vw] sm:leading-[2.68292682927vw] hidden lg:text-[0.83333333333vw] text-[3.07692307692vw] text-[red]">
              *Fill Name*
            </span>
          </div>
        </div>
        <button className="sm:mt-[3.65853658537vw] sm:h-[7.31707317073vw] lg:w-[8.22916666667vw] lg:h-[3.22916666667vw] bg-[#8450FF] lg:-[5.20833333333vw] rounded-[7.94871794872vw] h-[9.23076923077vw] w-full lg:mt-[1.66666666667vw] mt-[6.15384615385vw]">
          <span className="sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.07692307692vw] text-[#FFFFFF] PingAR-Light">
            {arabic ? "ارسل" : "Submit"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
