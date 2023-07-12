import React from 'react'

const Content = ({arabic}) => {
  return (
    <div className="lg:w-[28.3854166667vw]">
    <h2
      data-aos="fade-up"
      data-aos-anchor="#hiring"
      data-aos-delay={400}
      className={`heading54 PingAR-Regular tracking-[unset] text-[#3B3659] ${arabic && "pl-[11vw]"}`}
    >{arabic?
      <>
      نقوم <span className="PingAR-Bold">بالتوظيف</span> لـ # وظائف
      </>
      :
      <>
      We&apos;re hiring <br />
      for #<span className="PingAR-Bold"> positions </span>
      </>}
    </h2>
    <p
      data-aos="fade-down"
      data-aos-anchor="#hiring"
      data-aos-delay={400}
      className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] PingAR-Light lg:text-[1.14583333333vw] text-[#505050] lg:leading-[1.70572916667vw] text-[3.58974358974vw] leading-[6.02564102564vw] lg:mt-[1.14583333333vw] mt-[5.12820512821vw]"
    >
   {arabic?"من خلال توظيف أولئك الذين لديهم شغف حقيقي بالرعاية الصحية ، أنشأنا مجموعة متنوعة ومتحركة من الخبراء يركزون على الارتقاء برحلة الرعاية الصحية داخل المملكة ، انضم إلينا لإحداث تأثير": "   By hiring those with a real passion for healthcare, we`&apos;ve created a varied  and driven group of experts focused on elevating the healthcare journey within the Kingdom, join us to make an impact"}
    </p>
    <a
      data-aos="fade"
      data-aos-anchor="#hiring"
      data-aos-delay={400}
      href=""
      className="sm:w-[30.487804878vw] sm:h-[6.34146341463vw] sm:mt-[2.92682926829vw] lg:w-[15.3125vw] lg:h-[3.22916666667vw] bg-[#8450FF] w-[46.1538461538vw] h-[9.23076923077vw] lg:rounded-[5.20833333333vw] rounded-[7.94871794872vw] flex justify-center items-center lg:mt-[2.5vw] mt-[6.15384615385vw]"
    >
      <span className="sm:text-[1.9512195122vw] sm:leading-[3.41463414634vw] PingAR-Light lg:text-[0.9375vw] text-[3.07692307692vw] text-[#FFFFFF]">
       { arabic?"عرض جميع الوظائف الشاغرة":" View all open positions"}
      </span>
    </a>
  </div>
  )
}

export default Content
