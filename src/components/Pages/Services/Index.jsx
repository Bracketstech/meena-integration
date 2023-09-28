"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import PrimaryCare from "./components/PrimaryCare";
import Ecosystem from "./components/Ecosystem";
import WellBeingPrograms from "./components/WellBeingPrograms";
import PricingAndTiming from "./components/PricingAndTiming";
import BookYourAppointment from "@/components/BookYourAppointment";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic, data, fabData }) => {
  useAnimations();
  useHeader(arabic ? "الخدمات" : "Services");

  return (
    <main>
      <SubPageHero
        markupTitle={data.top_header[0].header_title}
        arabic={arabic}
        text={data.top_header[0].header_description}
      />
      <PrimaryCare
        title={data.vertical_carousel_title}
        des={data.vertical_carousel_description}
        cards={data.vertical_carousel_content}
      />
      { data.nutshell_section_hide || (<Ecosystem
        title={data.nuttshelValuesTitle}
        cards={data.nuttshelValuesFeatures}
        arabic={arabic}
      />)}
      <PricingAndTiming
        data={data.service_fees_and_timing_section[0]}
        arabic={arabic}
      />
      <WellBeingPrograms
        data={data.infograph_section_content[0]}
        arabic={arabic}
      />
      <div className="py-[20.5128205128vw] Container1440 flex justify-between items-center lg:pt-[5.78125vw] lg:pb-[10.4166666667vw] sm:pt-[7.317073170731707vw] sm:pb-[14.63414634146341vw]">
        <BookYourAppointment
          data={data.booking_reminder_content}
          arabic={arabic}
          fabData={fabData}
        />
      </div>
    </main>
  );
};

export default Index;
