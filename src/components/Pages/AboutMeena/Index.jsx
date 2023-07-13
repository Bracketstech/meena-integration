"use client";
import SubPageHero from "@/components/SubPageHero";
import OurStory from "./OurStory";
import CoreValues from "./CoreValues";
import VisionMission from "./VisionMission";
import LeaderSwiper from "./LeaderSwiper";
import Partners from "./Partners";
import Qualifications from "./Qualifications";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader("About Us");

  return (
    <main>
      <section>
        <SubPageHero
          title={arabic ? "عن " : "About"}
          boldtext={arabic ? "مينا" : "meena"}
          text={
            arabic
              ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات"
              : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
          }
        />
        <OurStory arabic={arabic} />
        <CoreValues arabic={arabic} />
        <VisionMission arabic={arabic} />
        <LeaderSwiper arabic={arabic} />
        <Partners arabic={arabic} />
        <Qualifications arabic={arabic} />
      </section>
    </main>
  );
};

export default Index;
