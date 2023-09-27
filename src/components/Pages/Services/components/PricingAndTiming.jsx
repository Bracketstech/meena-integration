import React from "react";

const PricingAndTiming = ({ data, arabic }) => {
  if(arabic){
    return (
      <div className="relative py-10">
      <div className="Container1440 relative z-[2] flex flex-col md:flex-row justify-between items-start gap-6 md:gap-x-[10vw] mx-auto">
          {/* Pricing Section */}
          
          <div className="w-full ">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  الأسعار
              </div>
              <div className="gap-4 md:gap-x-2 flex flex-col md:flex-row justify-between">
  
              {/* Card for General Practitioner */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col min-w-[10vw] justify-between mb-4 md:mb-0">
                  <p className="heading30 font-bold text-#845eff text-20px mb-4 ">طبيب عام</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] whitespace-nowrap"><span className="text-lg font-bold">45</span> <span className="text-sm">ريال</span></h2>
              </div>
  
              {/* Card for Specialist */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col min-w-[10vw] justify-between mb-4 md:mb-0">
                  <p className="heading30 font-bold text-#845eff text-20px mb-4 ">اخصائي</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] whitespace-nowrap"><span className="text-lg font-bold">120</span> <span className="text-sm">ريال</span></h2>
              </div>
  
              {/* Card for Consultant */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col min-w-[10vw] justify-between">
                  <p className="heading30 font-bold text-#845eff text-20px mb-4 ">استشاري</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] whitespace-nowrap"><span className="text-lg font-bold">150</span> <span className="text-sm">ريال</span></h2>
              </div>
              </div>
          </div>
  
          {/* Timing Section */}
          <div className="lg:w-[28vw] w-full mt-6 md:mt-0">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  الأوقات
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] lg:mt-[0.625vw] mt-[2.05128205128vw]">
                  وقت العمل 
                  <span className="font-bold text-[20px] p-2 ">
                   16 ساعة
                  </span>
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] mt-2">
                  من 8 صباحا - 12:00 منتصف الليل
              </div>
          </div>
      </div>
  </div>
  
  
  
    );
  }else{
    return (
      <div className="relative py-10">
      <div className="Container1440 relative z-[2] flex flex-col md:flex-row justify-between items-start gap-6 md:gap-x-[10vw] mx-auto">
          {/* Pricing Section */}
          
          <div className="w-full md:w-auto">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  Pricing
              </div>
              <div className="gap-4 md:gap-x-2 flex flex-col md:flex-row justify-between">
  
              {/* Card for General Practitioner */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col justify-between mb-4 md:mb-0">
                  <p className="heading30 font-bold text-#845eff text-20px">General Practitioner</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] mb-4 whitespace-nowrap"><span className="text-lg font-bold">45</span> <span className="text-sm">SAR</span></h2>
              </div>
  
              {/* Card for Specialist */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col justify-between mb-4 md:mb-0">
                  <p className="heading30 font-bold text-#845eff text-20px">Specialist</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] mb-4 whitespace-nowrap"><span className="text-lg font-bold">120</span> <span className="text-sm">SAR</span></h2>
              </div>
  
              {/* Card for Consultant */}
              <div className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col justify-between">
                  <p className="heading30 font-bold text-#845eff text-20px">Consultant</p>
                  <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] mb-4 whitespace-nowrap"><span className="text-lg font-bold">150</span> <span className="text-sm">SAR</span></h2>
              </div>
              </div>
          </div>
  
          {/* Timing Section */}
          <div className="lg:w-[35vw] w-full mt-6 md:mt-0">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  Timing
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] lg:mt-[0.625vw] mt-[2.05128205128vw]">
                  Time work  
                  <span className="font-bold text-[20px] pl-2 ">
                   16 hours
                  </span>
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] mt-2">
                  From 8 A.M. - 12:00 A.M.
              </div>
          </div>
      </div>
  </div>
  
  
  
    );
  }
  
};

export default PricingAndTiming;
