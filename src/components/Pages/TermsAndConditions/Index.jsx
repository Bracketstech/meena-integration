"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import TermsConditions from "./TermsConditions";
import useHeader from "@/hooks/useHeader";
import useAnimations from "@/hooks/useAnimations";

const Index = () => {
  useAnimations();
  useHeader("Terms & Conditions");

  return (
    <main>
      <SubPageHero boldtext="Terms & conditions" />
      <TermsConditions />
    </main>
  );
};

export default Index;
