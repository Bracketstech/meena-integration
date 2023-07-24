"use client";
import SubPageHero from "@/components/SubPageHero";
import React, { useEffect } from "react";
import MainNews from "./MainNews";
import NewsCards from "./NewsCards";
import Pagination from "./Pagination";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic, data, numberOfPages, currentPage }) => {
  useAnimations();
  useHeader("News");
  // useEffect(() => {
  //   console.log(currentPage);
  //   if (currentPage) {
  //     let vw = window.innerWidth;
  //     const headerHeight =
  //       vw > 1024 ? (vw / 100) * 4.3 : vw > 640 ? (vw / 100) * 8.0125 : 55;
  //     let offsetTop =
  //       document.getElementById("newsCards").offsetTop - headerHeight;

  //     console.log(offsetTop);
  //     window.scrollTo(0, offsetTop);
  //   }
  // }, [currentPage]);
  return (
    <main>
      <SubPageHero
        arabic={arabic}
        markupTitle={data?.entry?.header_title}
        text={data?.entry?.header_description}
      />
      <div className="Container1440 lg:pt-[6.25vw] sm:pt-[7.31707317073vw] pt-[16.4102564103vw] lg:pb-[10.4166666667vw] sm:pb-[14.6341463415vw] pb-[20.5128205128vw]">
        <MainNews arabic={arabic} data={arabic ? data?.NewsAr : data?.NewsEn} />
        <NewsCards
          arabic={arabic}
          data={arabic ? data?.NewsAr : data?.NewsEn}
        />
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          data={arabic ? data?.NewsAr : data?.NewsEn}
        />
      </div>
    </main>
  );
};

export default Index;
