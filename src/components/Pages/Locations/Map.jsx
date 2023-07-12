import React from 'react'
import DekstopFilter from './components/DekstopFilter'
import MobFilter from './components/MobFilter'

const Map = ({arabic}) => {
  return (
    <div className="z-[2] lg:w-full w-[88.7179487179vw] mx-[auto] lg:mx-[unset] relative lg:pt-[4.16666666667vw] gap-y-[8.33333333333vw] lg:pb-[10.4166666667vw] flex justify-center items-stretch flex-col lg:flex-row">
  <div className="flex justify-center items-stretch flex-col lg:flex-row lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] overflow-hidden">
    <DekstopFilter arabic={arabic}  />
    <MobFilter  arabic={arabic}/>
    <div className="hidden relative lg:block overflow-hidden mx-[auto] lg:mx-[unset] w-[90%] lg:w-[62.5vw] rounded-[unset]">
      <img
        src="/images/locations/map.jpg"
        alt="map"
        className="w-full h-[100vw] lg:h-full object-cover"
      />
      <div className="absolute lg:top-[0.83333333333vw] leftRightFixer1 w-full lg:px-[1.25vw]">
        <div className="bg-[#F0F0F0] lg:rounded-[1.35416666667vw] lg:w-[27.0833333333vw] lg:h-[2.60416666667vw] flex items-center justify-between lg:px-[1.25vw]">
          <input
            type="text"
            placeholder={arabic?"منطقة البحث":"Search area"}
            className="w-[90%] outline-none bg-transparent lg:text-[0.9375vw] PingAR-Light placeholder:text-[#8F8F8F] h-full"
          />
          <img
            src="/images/icons/search.svg"
            alt="search"
            className="lg:w-[0.83333333333vw]"
          />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Map
