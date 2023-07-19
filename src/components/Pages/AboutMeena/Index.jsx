"use client";
import SubPageHero from "@/components/SubPageHero";
import OurStory from "./components/OurStory";
import CoreValues from "./components/CoreValues";
import VisionMission from "./components/VisionMission";
import LeaderSwiper from "./components/LeaderSwiper";
import Partners from "./components/Partners";
import Qualifications from "./components/Qualifications";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic, data }) => {
  useAnimations();
  useHeader(arabic ? "عن مينا" : "About Us");

  return (
    <main className="overflow-hidden">
      <section>
        <SubPageHero
          arabic={arabic}
          markupTitle={data.top_header_content[0].header_title}
          text={data.top_header_content[0].header_description}
        />
        <OurStory arabic={arabic} data={data.our_story_content[0]} />
        <CoreValues
          arabic={arabic}
          title={data.coreValuesSectionTitle}
          features={data.coreValuesFeatures}
        />
        <VisionMission data={data.two_cards_view} arabic={arabic} />
        <LeaderSwiper
          title={data.leaders_section_title}
          leaders={data.leaders}
          arabic={arabic}
        />
        <Partners
          title={data.partners_section_title}
          des={data.partners_section_description}
          partners={data.partners}
          arabic={arabic}
        />
        <Qualifications
          title={data.qualifications_section_title}
          des={data.qualifications_section_description}
          qualifications={data.qualifications}
          arabic={arabic}
        />
      </section>
    </main>
  );
};

export default Index;
