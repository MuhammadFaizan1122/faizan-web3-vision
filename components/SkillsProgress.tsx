"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsProgress = () => {
  useScrollAnimation();

  return (
    <div className="tmp-skill-area tmp-section-gapTop">
      <div className="container">
        <div className="row g-5">
          {/* Column 1: Core Development (Frontend & Backend) */}
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Core Development <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={20} /></span>
                </h2>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">FRONTEND (REACT, NEXT.JS, TS, VUE.JS, ANGULAR.JS, REACT NATIVE)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "95%" }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">95%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">BACKEND (NODE.JS, EXPRESS, NEST.JS)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "90%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">90%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">DATABASES (MONGODB, POSTGRES, FIREBASE, MYSQL, SQLITE)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: "85%" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">85%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">UI FRAMEWORKS (TAILWIND, CSS3, CHAKRA UI, MATERIAL UI, BOOTSTRAP)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: "98%" }} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Modern Stack (Web3, Cloud & Design) */}
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Modern Stack <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={20} /></span>
                </h2>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">BLOCKCHAIN & SMART CONTRACTS</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">80%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">CLOUD SERVICES (AWS, FIREBASE, CLOUDFLARE)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">75%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">DESIGN (FIGMA, PHOTOSHOP, CANVA, ADOBE XD, ADOBE ILLUSTRATOR)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: "90%" }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">90%</span>
                    </div>
                  </div>
                </div>

                <div className="progress-charts">
                  <h6 className="heading heading-h6">VERSION CONTROL (GITHUB, GITLAB, BITBUCKET, GITHUB Copilot)</h6>
                  <div className="progress">
                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: "95%" }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                      <span className="percent-label">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;