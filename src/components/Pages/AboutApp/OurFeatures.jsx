import { data } from "autoprefixer";
import React from "react";

const OurFeatures = ({ arabic, content }) => {
  return (
    <div className="Container1440">
      <div
        data-aos="fade-up"
        className="mx-[auto] lg:w-[28.8020833333vw] text-center relative heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
      >
        <div dangerouslySetInnerHTML={{ __html: content.title }}></div>
        <svg
          className="h-[8.46153846154vw] lg:h-[unset] lg:w-[3.02083333333vw] asterisk w-[7.69230769231vw]  lg:top-[-2.08333333333vw] aboutAppFeature__Asterisk top-[-8.20512820513vw] absolute sm:top-[-6.09756097561vw] sm:w-[6.09756097561vw]"
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
      </div>
      <div className="lg:pt-[2.5vw] pt-[6.15384615385vw] sm:pt-[4.87804878049vw] flex items-center justify-between lg:justify-center flex-wrap lg:gap-x-[12vw] lg:gap-y-[2.8125vw] lg:pb-[10.4166666667vw] pb-[20.5128205128vw] sm:pb-[14.6341463415vw] sm:gap-y-[2.92682926829vw] gap-y-[6.15384615385vw]">
        {content.items.map((item, index) => (
          <div
            data-aos="fade"
            key={index}
            className="w-[37.4358974359vw] min-w-[37.4358974359vw] lg:min-w-[9.6875vw] lg:w-[9.6875vw] flex flex-col items-center lg:gap-y-[0.98958333333vw] gap-y-[2.05128205128vw]"
          >
            <img
              src={item.icon.path}
              alt={item.caption}
              className="lg:w-[2.5vw] w-[8.20512820513vw] sm:w-[4.87804878049vw]"
            />
            <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] lg:text-[0.9375vw] lg:leading-[1.51041666667vw] PingAR-Regular text-[#3B3659] text-[3.58974358974vw] leading-[5.64102564103vw] text-center">
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
