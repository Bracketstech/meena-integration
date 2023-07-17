import Link from "next/link";
import React from "react";

const BookYourAppointment = ({ arabic }) => {
  return (
    <div className="lg:w-[75vw] mx-[auto] w-[88.7179487179vw] sm:w-[71%] sm:gap-y-[2.926829268292683vw] flex-col-reverse lg:flex-row flex-wrap gap-y-[6.153846153846154vw] relative z-[2]   flex justify-between items-center lg:items-center sm:items-start">
      <div className="lg:w-[33.75vw]">
        <h3
          data-aos="fade-up"
          className="hidden lg:block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]"
        >
          {arabic ? "احجز " : "Book your"}
          <span className="PingAR-Bold">
            {" "}
            {arabic ? "موعدك " : "appointment"}{" "}
          </span>
          {arabic ? "اليوم" : "today"}
        </h3>
        <p
          data-aos="fade-down"
          className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#707070] lg:text-[#505050] lg:w-[32.1875vw] text-start sm:text-center lg:text-start lg:mt-[0.625vw] mt-[6.15384615385vw]"
        >
          {arabic
            ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود . يوت انيم أد مينيم فينايم,كيواس نوستريد كسير سيتاشن يللأمكو سيتاشن يللأمكو"
            : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua."}
        </p>
        <div
          data-aos="fade"
          data-aos-delay={200}
          className="sm:mt-[3.658536585365854vw] sm:gap-x-[2.926829268292683vw] text-[#FFFFFF] flex items-center justify-start sm:justify-center lg:justify-start lg:gap-x-[1.25vw] gap-x-[4.44444444444vw] mt-[6.153846153846154vw] lg:mt-[2.5vw] flex-wrap gap-y-[4.44444444444vw]"
        >
          <Link href="/about-app" className="anchor1">
            <div>
              <span> {arabic ? "احصل على التطبيق" : "Get app"} </span>
              <img src="/images/icons/get-app.svg" alt="get-app" />
            </div>
          </Link>
          <a href="tel:920011111" className="anchor2">
            <div>
              <span style={{ direction: "ltr" }} className="">
                {" "}
                9200 11111{" "}
              </span>
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
          className="  lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
        />
      </div>
      <h3 className="sm:w-full lg:w-[unset] text-start sm:text-center lg:text-start lg:hidden block heading54 tracking-[unset] PingAR-Regular text-[#3B3659]">
        {arabic ? "احجز " : "Book your"}
        <span className="PingAR-Bold">
          {" "}
          {arabic ? "موعدك " : "appointment"}{" "}
        </span>
        {arabic ? "اليوم" : "today"}
      </h3>
    </div>
  );
};

export default BookYourAppointment;
