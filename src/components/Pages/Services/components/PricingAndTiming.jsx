import React from "react";

const PricingAndTiming = ({ data, arabic }) => {
  
  return (
    <div className="relative py-10">
      <div className="Container1440 relative z-[2] flex flex-col md:flex-row justify-between items-start gap-6 md:gap-x-[10vw] mx-auto">
        <div className="w-full">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  {data.fees_title}
              </div>
              {data.services.map((item, index) => (
                <div key={index}>
                  {/* Render the service name */}
                  <p data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] sm:mt-[1.46341463415vw] lg:text-[1.14583333333vw] lg:leading-[1.74479166667vw] text-[3.58974358974vw] leading-[5.9829059829vw] PingAR-Regular mb-6 text-[#707070] lg:text-[#505050] lg:mt-[1vw] mt-[1.02564102564vw]">{item.service_name}</p>

                  {/* Render each subitem */}
                  <div className="gap-4 md:gap-x-2 flex flex-col md:flex-row justify-between">
                    {item.single_service.map((subitem, subindex) => (
                      
                      <div   key={subindex} className="card bg-white p-6 rounded-lg shadow-md border-2 border-#845eff w-full md:w-1/2.5 flex flex-col min-w-[10vw] justify-between mb-4 md:mb-0">
                      <p className="heading30  font-bold text-#845eff text-[1.2rem] mb-4 ">{subitem.type}</p>
                      <h2 className="heading54 heading-10 PingAR-Regular tracking-[unset] text-[#3B3659] whitespace-nowrap"><span className="text-lg font-bold">{subitem.fee}</span> <span className="text-sm">{ arabic ?  'ريال' : 'SAR'}</span></h2>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
        </div>

        <div className="lg:w-[28vw] w-full mt-6 md:mt-0">
              <div data-aos="fade-up" className="heading54 PingAR-Regular tracking-[unset] text-[#3B3659] mb-6">
                  {data.timing_titles}
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] lg:mt-[0.625vw] mt-[2.05128205128vw]">
                  { arabic? "وقت العمل" : 'Time work'  }
                  <span className="font-bold text-[20px] p-2 ">
                   {data.due_time} 
                  </span>
              </div>
              <div data-aos="fade-down" className="sm:text-[2.19512195122vw] sm:leading-[3.65853658537vw] lg:text-[1.14583333333vw] lg:leading-[1.71875vw] text-[3.58974358974vw] leading-[6.02564102564vw] PingAR-Regular text-[#505050] lg:w-[32.1875vw] mt-2">
              { arabic? "من" : 'From'  } {(data.from_and_to[0]).from}  - {(data.from_and_to[0]).to} 
              </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndTiming;
