"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import PrivacyPolicies from "./PrivacyPolicies";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";
import PrimaryCare from "../AboutApp/PrimaryCare";

const Index = ({ arabic }) => {
  useAnimations();
  useHeader("Privacy Policy");
  return (
    <main>
      <SubPageHero arabic={arabic} boldtext="Privacy policy" />
      <PrivacyPolicies arabic={arabic} />
    </main>
  );
};

export default Index;
