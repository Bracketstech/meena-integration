import React from "react";

const Information = ({ arabic, address, email, phone, socialData, bcd }) => {
  return (
    <div className="lg:w-[21.40625vw]">
      <div className="flex flex-col sm:gap-y-[1.70731707317vw] lg:gap-y-[0.98958333333vw] gap-y-[4.10256410256vw] PingAR-Regular text-[#3B3659]">
        <a
          href=""
          className="flex items-center lg:items-start lg:gap-x-[0.625vw] gap-y-[2.05128205128vw] flex-col lg:flex-row"
        >
          <img
            src="/images/icons/location.svg"
            alt="location"
            className="lg:w-[1.04166666667vw] w-[5.12820512821vw] sm:w-[3.65853658537vw]"
          />
          <span className="sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] lg:w-[unset] w-[80vw] textAlignFixer">
            {address}
          </span>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center lg:items-start lg:gap-x-[0.625vw] gap-y-[2.05128205128vw] flex-col lg:flex-row"
        >
          <img
            src="/images/icons/mail.svg"
            alt="mail"
            className="lg:w-[1.25vw] w-[6.15384615385vw] sm:w-[3.90243902439vw]"
          />
          <span
            style={{ direction: "ltr" }}
            className="sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] lg:w-[unset] w-[80vw] textAlignFixer"
          >
            {email}
          </span>
        </a>
        <a
          href={`tel:${phone}`}
          className=" flex items-center lg:items-start lg:gap-x-[0.625vw] gap-y-[2.05128205128vw] flex-col lg:flex-row"
        >
          <img
            src="/images/icons/mobile.svg"
            alt="mobile"
            className="lg:w-[1.25vw] w-[6.15384615385vw] sm:w-[3.90243902439vw]"
          />
          <span
            style={{ direction: "ltr" }}
            className="sm:text-[1.9512195122vw] lg:text-[0.9375vw] text-[3.58974358974vw] lg:w-[unset] w-[80vw] textAlignFixer"
          >
            {phone}
          </span>
        </a>
      </div>
      <div>
        {bcd || (
          <ul className="footerLinks flex justify-center lg:justify-start items-end lg:gap-x-[1.09375vw] lg:mt-[3.22916666667vw] mt-[8.20512820513vw] gap-x-[3.84615384615vw]">
            {socialData?.map((item, index) => (
              <li key={index}>
                <a href={item?.link}>
                  <img
                    src={item?.icon_dark?.path}
                    alt="Social Link"
                    className="lg:w-[1.5625vw] w-[5.12820512821vw] sm:w-[3.65853658537vw]"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Information;
