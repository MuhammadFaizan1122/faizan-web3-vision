"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const EducationExperience = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <section className="education-experience tmp-section-gapTop">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Education & Experience</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Empowering Creativity <br /> through
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
          </p>
        </div>

        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={20} /></span>
        </h2>

        <div className="row g-5">
          {/* Card 1: Diploma */}
          <div className="col-lg-6 col-sm-6">
            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h4 className="edu-sub-title">Software Engineering Diploma</h4>
              <h4 className="edu-sub-title">Aligarh Institute of Technology</h4>
              <h2 className="edu-title">2019 - 2022</h2>
              <p className="edu-para">
                Completed a rigorous three-year program focusing on full-stack architecture,
                database optimization, and software engineering lifecycle management.
              </p>
            </div>
          </div>

          {/* Card 2: Intermediate */}
          <div className="col-lg-6 col-sm-6">
            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
              <h4 className="edu-sub-title">Intermediate (Pre-Engineering)</h4>
              <h4 className="edu-sub-title">Board of Intermediate Education</h4>
              <h2 className="edu-title">2017 - 2019</h2>
              <p className="edu-para">
                Established a strong analytical foundation in mathematics and physics,
                paving the way for advanced studies in computational logic and engineering.
              </p>
            </div>
          </div>

          {/* Card 3: Meta Certification */}
          <div className="col-lg-6 col-sm-6">
            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
              <h4 className="edu-sub-title">Meta Front-End Developer</h4>
              <h4 className="edu-sub-title">Professional Certification</h4>
              <h2 className="edu-title">Issued: 2023</h2>
              <p className="edu-para">
                Advanced specialization in modern frontend ecosystems including React,
                Next.js, UI/UX accessibility standards, and professional version control.
              </p>
            </div>
          </div>

          {/* Card 4: Cisco CCIE */}
          <div className="col-lg-6 col-sm-6">
            <div className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
              <h4 className="edu-sub-title">Cisco Certified Expert (CCIE)</h4>
              <h4 className="edu-sub-title">Data Center Infrastructure</h4>
              <h2 className="edu-title">Issued: 2022</h2>
              <p className="edu-para">
                Expert-level validation in designing and managing complex IT infrastructure,
                bridging the gap between software development and hardware performance.
              </p>
            </div>
          </div>
        </div>

        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Professional Experience <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={20} /></span>
                </h2>

                {/* Current Role */}
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">Mar 2024 - April 2026</p>
                  <h2 className="ex-name">NextchainX</h2>
                  <h3 className="ex-title">Team Lead | Full Stack Developer</h3>
                  <p className="ex-para">
                    Leading engineering efforts for 35+ Web3 and AI projects.
                    Specializing in Next.js architecture and secure wallet integrations.
                  </p>
                </div>

                {/* Previous Major Role */}
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">Dec 2021 - Feb 2024</p>
                  <h2 className="ex-name">Mobitising</h2>
                  <h3 className="ex-title">Senior JavaScript Developer</h3>
                  <p className="ex-para">
                    Architected high-performance MERN applications and integrated AI chatbots to enhance user engagement.
                    Developed NFT staking platforms with automated reward systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  src="/assets/images/experiences/expert-img.jpg" // Note: Ensure this image matches your new professional brand
                  alt="Muhammad Faizan - Senior Developer"
                  width={600}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
