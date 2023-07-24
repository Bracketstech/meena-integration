import React from "react";

const ArticleImage = ({ arabic, img }) => {
  return (
    <div id="lineanimation2" className="relative overflow-hidden">
      <img
        src={img}
        alt="banner"
        className="hidden sm:block lg:w-[75vw] w-full lg:rounded-[1.04166666667vw] mx-[auto]"
      />
      <img
        src={img}
        alt="banner"
        className="sm:hidden object-cover h-[270px] block lg:w-[75vw] w-full mx-[auto]"
      />
      <svg
        className="absolute h-[400px] lg:h-[62.65625vw] w-full lg:top-[-21.875vw] sm:top-0 top-[-100px] lg:left-[-1.82291666667vw] left-[0]"
        xmlns="http://www.w3.org/2000/svg"
        width="1382.431"
        height="1203.026"
        viewBox="0 0 1382.431 1203.026"
      >
        <path
          id="heartLine"
          style={{ animationDuration: "1s" }}
          data-name="Path 101471"
          d="M2359.754,1286.058c-8.344,367.866-12.991,881.376-134.169,913.845-74.348,19.922-116.409-10.793-115.958-33.666s70.667-13.527,70.667-13.527-38.2-58.664-6.265-70.213c12.159-4.526,36.358-2.351,66.241,46.709,57.409,90.418-33.8,370.866-393.725,481"
          transform="matrix(0.588, 0.809, -0.809, 0.588, 1031.561, -2244.979)"
          fill="none"
          stroke="#8450ff"
          strokeLinecap="round"
          strokeWidth={6}
        />
      </svg>
    </div>
  );
};

export default ArticleImage;
