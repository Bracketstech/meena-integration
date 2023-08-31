import React from "react";

const HeroImgsAndOverlays = ({ img, mobImg }) => {
  return (
    <div className="w-full h-[inherit] lg:h-full absolute top-0 leftRightFixer1">
      <img
        priority
        src={img}
        alt="hero"
        className="w-[102%] absolute hero__Img  h-full flipped object-cover hidden lg:block"
      />
      <img
        src={mobImg}
        alt="hero"
        className="w-full h-full lg:hidden block object-cover "
      />
      {/* <span className="hero__Overlay1 absolute top-0 leftRightFixer1 w-full lg:h-[17.2916666667vw] h-[51.2820512821vw]" />
      <span className="hero__Overlay2 absolute bottom-0 leftRightFixer1 w-full lg:h-[24.7395833333vw] h-[64.1025641026vw]" />
      <span className="hero__Overlay3 absolute bottom-0 leftRightFixer1 w-full h-full" /> */}
    </div>
  );
};

export default HeroImgsAndOverlays;
