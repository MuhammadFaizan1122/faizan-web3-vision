"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Specialties from "@/components/Specialties";
import Skills from "@/components/Skills";
import AboutCounterSection from "@/components/AboutCounterSection";
import EducationExperience from "@/components/EducationExperience";
import PricingPlan from "@/components/PricingPlan";
import GetInTouch from "@/components/GetInTouch";

const AboutPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="About Me" subtitle="About Me" />
      <Specialties />
      <Skills />
      <AboutCounterSection />
      <EducationExperience />
      {/* <PricingPlan /> */}
      <GetInTouch />

      <Footer />
    </main>
  );
};

export default AboutPage;
