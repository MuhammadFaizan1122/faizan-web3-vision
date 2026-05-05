"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const PrivacyPage = () => {
  return (
    <main>
      <Header />
      <PageBanner title="Privacy Policy" subtitle="Privacy" />
      
      <section className="terms-privacy-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap tmp-fade-in">
                <h2>Information Collection</h2>
                <p>We collect information from you when you register on our site, subscribe to our newsletter, respond to a survey or fill out a form.</p>
                
                <h2 className="mt--50">Information Protection</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
                
                <h2 className="mt--50">Cookies Usage</h2>
                <p>Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information).</p>
                
                <h2 className="mt--50">Third Party Links</h2>
                <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default PrivacyPage;
