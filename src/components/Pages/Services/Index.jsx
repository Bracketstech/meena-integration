"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import PrimaryCare from "./PrimaryCare";
import Ecosystem from "./Ecosystem";
import WellBeingPrograms from "./WellBeingPrograms";
import BookYourAppointment from "@/components/BookYourAppointment";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader(arabic ? "الخدمات" : "Services");

  return (
    <main>
      <SubPageHero
        boldtext={arabic ? "الخدمات" : "Services"}
        text={
          arabic
            ? "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور نكايديديونتيوت لابوري ات"
            : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna"
        }
      />
      <PrimaryCare arabic={arabic} />
      <Ecosystem arabic={arabic} />
      <WellBeingPrograms arabic={arabic} />
      <div className="py-[20.5128205128vw] Container1440 flex justify-between items-center lg:pt-[5.78125vw] lg:pb-[10.4166666667vw] sm:pt-[7.317073170731707vw] sm:pb-[14.63414634146341vw]">
        <BookYourAppointment arabic={arabic} />
      </div>
    </main>
  );
};

export default Index;
