"use client";
import SubPageHero from "@/components/SubPageHero";
import HiringPositions from "./HiringPositions";
import WorkAtMeena from "./WorkAtMeena";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic, data }) => {
  useAnimations();
  useHeader(arabic ? "وظائف" : "Careers");

  return (
    <main>
      <SubPageHero
        markupTitle={data.top_header_section[0].header_title}
        text={data.top_header_section[0].header_description}
      />
      <HiringPositions data={data.jobs_category_content[0]} arabic={arabic} />
      <WorkAtMeena
        title={data.nuttshellValuesTitle}
        des={data.nuttshellValuesDescription}
        cards={data.nuttshellValuesFeatures}
        arabic={arabic}
      />
    </main>
  );
};

export default Index;
