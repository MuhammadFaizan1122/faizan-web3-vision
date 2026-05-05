import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";

const ServiceDetails = () => {
  return (
    <main className="tmp-main-content">
      <Header />
      <PageBanner title="Service Details" subtitle="Service Details" />
      <ServiceDetailsContent />
      <Footer />
    </main>
  );
};

export default ServiceDetails;
