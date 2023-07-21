import React from "react";

const FaqCategories = ({ arabic, categories, handleClick }) => {
  return (
    <div className="ml-[5.64102564103vw] pt-[8px] lg:pt-0 pl lg:sticky lg:top-[4.97135416667vw] w-full lg:ml-[unset] lg:w-[15.46875vw] flex flex-row lg:flex-col lg:gap-y-[1.66666666667vw] gap-x-[3.07692307692vw] sm:gap-x-[1.9512195122vw] overflow-scroll lg:overflow-hidden hideScroll">
      {categories?.data.map((category, index) => (
        <div
          key={index}
          onClick={() => handleClick(category.slug)}
          id={categories.length - 1 == index ? "lineanimation2" : ""}
          className={`question question${index} ${index == 0 && "active"}`}
        >
          <h5 className="lg:block hidden PingAR-Medium whitespace-nowrap lg:text-[1.14583333333vw] text-[#b1afbd] lg:leading-[1.5625vw] text-[4.10256410256vw]">
            {category.title}
          </h5>
          <h5 className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] block lg:hidden PingAR-Regular lg:text-[1.14583333333vw] text-[#707070] lg:leading-[1.5625vw] text-[4.10256410256vw]">
            {category.title}
          </h5>
          <svg
            className="flipped lg:block hidden w-[3.28125vw]"
            id="Group_89728"
            data-name="Group 89728"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="63.425"
            height="17.944"
            viewBox="0 0 63.425 17.944"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_69529"
                  data-name="Rectangle 69529"
                  width="63.425"
                  height="17.944"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_89727"
              data-name="Group 89727"
              clipPath="url(#clip-path)"
            >
              <path
                id="Path_101507"
                data-name="Path 101507"
                d="M61.144,34.092A156.336,156.336,0,0,0,4.1,32.445q-1.6.254-3.157.536"
                transform="translate(-0.775 -24.011)"
                fill="none"
                stroke="#8450ff"
                opacity="0.5"
                strokeWidth={3}
              />
              <path
                id="Path_101508"
                data-name="Path 101508"
                d="M287.344,0l-1.587,1.114,5.495,7.811-8.193,4.91,1,1.662,9.977-5.982Z"
                transform="translate(-231.609 1.447)"
                fill="#8450ff"
                stroke="#8450ff"
                opacity="0.5"
                strokeWidth={1}
              />
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FaqCategories;
