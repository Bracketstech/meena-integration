"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import MainNews from "./MainNews";
import NewsCards from "./NewsCards";
import Pagination from "./Pagination";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader("News");

  return (
    <main>
      <SubPageHero
        arabic={arabic}
        title={arabic ? "اخر" : "Latest"}
        boldtext={arabic ? " الاخبار" : "news"}
      />
      <div className="Container1440 lg:pt-[6.25vw] sm:pt-[7.31707317073vw] pt-[16.4102564103vw] lg:pb-[10.4166666667vw] sm:pb-[14.6341463415vw] pb-[20.5128205128vw]">
        <MainNews arabic={arabic} />
        <NewsCards arabic={arabic} />
        <Pagination />
      </div>
    </main>
  );
};

export default Index;
