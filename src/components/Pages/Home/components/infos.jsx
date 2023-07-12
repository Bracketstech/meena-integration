import React from 'react'

const infos = ({arabic}) => {
  return (
    <div className="sm:gap-y-[3.65853658537vw] w-full flex justify-center sm:justify-between lg:justify-center items-stretch lg:gap-x-[2.5vw] lg:mt-[-5.41666666667vw] flex-wrap gap-y-[4.10256410256vw] mt-[-22vw]">
            <div
              data-aos-anchor="anchorFOrCards"
              data-aos="fade"
              data-aos-delay="400"
              className="sm:h-[26.7073170732vw] sm:pt-[6.09756097561vw] sm:w-[100%] sm:pb-[5.36585365854vw] lg:pb-[2.34375vw] items-start w-full lg:pt-[1.74479166667vw] pb-[16px] pt-[8.20512820513vw] lg:h-[11.1979166667vw] lg:w-[23.3333333333vw] bg-[#F5EBE8] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw] flex lg:items-stretch"
            >
              <div className="sm:h-full sm:w-[90%] sm:gap-y-[1.46341463415vw] w-[76.6666666667vw] gap-y-[2vw] lg:w-[19.1666666667vw] mx-[auto] flex flex-col lg:gap-y-[0.41666666666vw]">
                <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] text-[4.871794871794872vw] lg:text-[1.354166666666667vw] lg:leading-[1.875vw] PingAR-Medium text-[#845FFF] flex-grow-[1]">
                 {arabic ? "مفتوح 24/7": " Open 24/7"}
                </h4>
                <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[0.9375vw] line_clamp3g lg:leading-[1.45833333333vw] PingAR-Light text-[#505050]">
                {arabic ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"}  
                </p>
              </div>
            </div>
            <div
              data-aos-anchor="anchorFOrCards"
              data-aos="fade"
              data-aos-delay="500"
              className="sm:h-[26.7073170732vw] sm:pt-[6.09756097561vw] sm:w-[100%] flex items-start w-full lg:pt-[1.74479166667vw] pb-[16px] lg:pb-0 pt-[8.20512820513vw] lg:h-[11.1979166667vw] lg:w-[23.3333333333vw] bg-[#F5EBE8] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
            >
              <div className="sm:w-[90%] sm:gap-y-[1.46341463415vw] w-[76.6666666667vw] gap-y-[2vw] lg:w-[19.1666666667vw] mx-[auto] flex flex-col lg:gap-y-[0.41666666666vw]">
                <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] text-[4.871794871794872vw] lg:text-[1.354166666666667vw] lg:leading-[1.875vw] PingAR-Medium text-[#845FFF]">
                {arabic ? "خبراء طبيون مشهورون عالميًا": "World-Renowned medical experts"} 
                </h4>
                <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[0.9375vw] line_clamp3g lg:leading-[1.45833333333vw] PingAR-Light text-[#505050]">
                {arabic ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu"} 
                </p>
              </div>
            </div>
            <div
              data-aos-anchor="anchorFOrCards"
              data-aos="fade"
              data-aos-delay="600"
              className="sm:w-full sm:h-[31.7073170732vw] sm:pt-[6.09756097561vw]   flex items-start w-full lg:pt-[1.74479166667vw] pb-[16px] lg:pb-0 pt-[8.20512820513vw] lg:h-[11.1979166667vw] lg:w-[23.3333333333vw] bg-[#F5EBE8] lg:rounded-[1.04166666667vw] rounded-[3.84615384615vw]"
            >
              <div className="sm:w-[90%] sm:gap-y-[1.46341463415vw] w-[76.6666666667vw] gap-y-[2vw] lg:w-[19.1666666667vw] mx-[auto] flex flex-col lg:gap-y-[0.41666666666vw]">
                <h4 className="sm:text-[2.68292682927vw] sm:leading-[3.90243902439vw] text-[4.871794871794872vw] lg:text-[1.354166666666667vw] lg:leading-[1.875vw] PingAR-Medium text-[#845FFF]">
                {arabic ? "نصيحة موثوقة أينما كنت": "Trusted advice wherever you are"} 
                </h4>
                <p className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[0.9375vw] line_clamp3g lg:leading-[1.45833333333vw] PingAR-Light text-[#505050]">
                {arabic ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات": "LoLorem ipsum dolor sit amet, consetetur sadipscing elitr."}  
                </p>
              </div>
            </div>
          </div>
  )
}

export default infos
