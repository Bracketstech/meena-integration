"use client";
import SubPageHero from "@/components/SubPageHero";
import FaqMain from "./components/FaqMain";
import GetInTouch from "./components/GetInTouch";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic, data, bcd }) => {
  useAnimations();
  useHeader(arabic ? "مساعدة الدعم" : "Help & Support");

  return (
    <main>
      <SubPageHero
        markupTitle={data?.entry?.top_header_content[0].header_title}
        arabic={arabic}
        text={data?.entry?.top_header_content[0].header_description}
      />
      <div
        className="lg:pt-[6.25vw] pt-[16.4102564103vw] sm:pb-[7.31707317073vw]
  lg:pb-[unset] overflow-hidden"
      >
        <div
          data-aos="fade-up"
          id="faqStart"
          className="Container1440 heading54 PingAR-Regular tracking-[unset] text-[#3B3659]"
          dangerouslySetInnerHTML={{ __html: data?.entry?.questions_title }}
        ></div>
        <FaqMain
          arabic={arabic}
          questionsCategories={data?.questionsCategories}
          questionsData={data?.questions}
        />
        <GetInTouch
          arabic={arabic}
          data={data?.entry}
          socialData={data?.socialMediaData?.social_media_links}
          formContent={data?.contactUsForm}
          bcd={bcd}
        />
      </div>
    </main>
  );
};

export default Index;
