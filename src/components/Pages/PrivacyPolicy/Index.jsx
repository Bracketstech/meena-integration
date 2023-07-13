"use client";
import SubPageHero from "@/components/SubPageHero";
import React from "react";
import PrivacyPolicies from "./PrivacyPolicies";
import useAnimations from "@/hooks/useAnimations";
import useHeader from "@/hooks/useHeader";
import PrimaryCare from "../AboutApp/PrimaryCare";

const Index = () => {
  useAnimations();
  useHeader("Privacy Policy");
  return (
    <main>
      <SubPageHero boldtext="Privacy policy" />
      <PrivacyPolicies />
    </main>
  );
};

export default Index;
