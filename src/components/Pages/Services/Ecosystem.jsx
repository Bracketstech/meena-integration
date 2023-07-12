import React from 'react'
import EcoCards from './components/EcoCards'

const Ecosystem = ({arabic}) => {
  return (
    <div className="Container1440 relative z-[2] lg:py-[unset] sm:pt-[14.6341463415vw] pt-[20.5128205128vw]">
    {arabic ? <h3
      data-aos="fade-up"
      className="mx-[auto] lg:w-[49.9479166667vw] PingAR-Regular PingAR-Regular heading54 tracking-[unset] text-[#3B3659] text-center"
    >
      يوفر لك نظامنا البيئي رعاية  <br className="hidden lg:block" />
        <span className="PingAR-Bold"> سلسة ومتكاملة </span> 
       
    </h3>: <h3
      data-aos="fade-up"
      className="mx-[auto] lg:w-[49.9479166667vw] PingAR-Regular PingAR-Regular heading54 tracking-[unset] text-[#3B3659] text-center"
    >
      Our ecosystem provides you <br className="hidden lg:block" />
      with <span className="PingAR-Bold"> seamless </span>and
      <span className="PingAR-Bold"> integrated </span>
      care
    </h3>}
    <EcoCards arabic={arabic} />
  </div>
  )
}

export default Ecosystem
