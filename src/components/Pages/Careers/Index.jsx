"use client";
import SubPageHero from "@/components/SubPageHero";
import HiringPositions from "./HiringPositions";
import WorkAtMeena from "./WorkAtMeena";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader(arabic ? "وظائف" : "Careers");

  return (
    <main>
      <SubPageHero
        arabic={arabic}
        boldtext={arabic ? "وظائف" : "Careers"}
        text={
          arabic
            ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات"
            : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
        }
      />
      <HiringPositions arabic={arabic} />
      <WorkAtMeena arabic={arabic} />
    </main>
  );
};

export default Index;
