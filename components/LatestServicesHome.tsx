"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const LatestServicesHome = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <section className="latest-service-area tmp-section-gapTop">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">SOLUTIONS & SERVICES</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Transforming Complex Ideas Into  <br /> Scalable Digital Realities
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            I bridge the gap between high level business goals and robust technical execution, delivering production ready applications built with the latest industry standards.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h2 className="service-card-num"><span>01.</span>Full Stack Development & Architecture</h2>
              <p className="service-para">Building high-performance, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js. I focus on clean architecture, optimized performance, and seamless user experiences.</p>
            </div>
            <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
              <h2 className="service-card-num"><span>02.</span>Web3 & Blockchain Integration</h2>
              <p className="service-para">Pioneering the future of the web with Solana-based gaming hubs, NFT-gated access, and tokenization platforms. I develop secure smart contracts and integrate decentralized protocols into modern web environments.</p>
            </div>
            <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
              <h2 className="service-card-num"><span>03.</span>AI-Driven Product Engineering</h2>
              <p className="service-para">Implementing intelligent solutions like voice-enabled chatbots and automated SaaS platforms. I leverage AI to enhance user engagement and streamline complex business workflows.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-card-user-image">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                src="/assets/images/services/latest-services-user-image.png"
                alt="latest-user-image"
                width={600}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestServicesHome;
