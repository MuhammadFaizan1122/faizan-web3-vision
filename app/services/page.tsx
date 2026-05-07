"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import LatestServices from "@/components/LatestServices";
import PricingPlan from "@/components/PricingPlan";
import GetInTouch from "@/components/GetInTouch";

const ServicesPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="My Service" subtitle="Service" />
      <LatestServices />
      <GetInTouch />
      <Footer />
    </main>
  );
};

export default ServicesPage;