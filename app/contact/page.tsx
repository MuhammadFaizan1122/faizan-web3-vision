"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactInfo from "@/components/ContactInfo";
import GetInTouch from "@/components/GetInTouch";

const ContactPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="Contact" subtitle="Contact" />
      
      <ContactInfo />
      <GetInTouch />
      
      <Footer />
    </main>
  );
};

export default ContactPage;
