"use client";
import SubPageHero from "@/components/SubPageHero";
import PrimaryCare from "./PrimaryCare";
import FutureHealthCareSwiper from "./FutureHealthCareSwiper";
import OurFeatures from "./OurFeatures";
import useHeader from "@/hooks/useHeader";
import useAnimations from "@/hooks/useAnimations";

const Index = ({ arabic, data }) => {
  useAnimations();
  useHeader(arabic ? "حول التطبيق" : "About App");
  return (
    <main>
      <section>
        <SubPageHero
          arabic={arabic}
          markupTitle={data.top_header_content[0].header_title}
          text={data.top_header_content[0].header_description}
        />
        <PrimaryCare
          arabic={arabic}
          content={data.mobile_download_content[0]}
        />
        <div className="relative lg:pt-[4.73958333333vw] pt-[14.358974359vw] sm:pt-[7.31707317073vw]">
          <span className="healthCare__Overlay absolute w-full lg:h-[57.34375vw] h-[202.307692308vw] top-0 leftRightFixer1"></span>
          <div className="relative z-[2]">
            <FutureHealthCareSwiper
              title={data.experience_section_title}
              content={data.experience_slider_content}
              arabic={arabic}
              img={data.experience_slider_main_image.path}
            />
            <OurFeatures
              content={data.other_features_content[0]}
              arabic={arabic}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
