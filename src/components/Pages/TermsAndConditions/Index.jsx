"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import TermsConditions from "./TermsConditions";
import useHeader from "@/hooks/useHeader";
import useAnimations from "@/hooks/useAnimations";

const Index = ({ arabic, data }) => {
  useAnimations();
  useHeader("Terms & Conditions");

  return (
    <main>
      <SubPageHero arabic={arabic} markupTitle={data.title} />
      <TermsConditions arabic={arabic} content={data.content} />
    </main>
  );
};

export default Index;
