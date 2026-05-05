"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".progress-bar", {
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="tmp-skill-area tmp-section-gapBottom" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="inner">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="progress-wrapper">
                  <div className="content">
                    <h2 className="custom-title mb--30 tmp-fade-in">
                      Design Skill <span><img src="/assets/images/custom-line/custom-line.png" alt="line" /></span>
                    </h2>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">PHOTOSHOP</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "100%" }}>
                          <span className="percent-label">100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">FIGMA</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "95%" }}>
                          <span className="percent-label">95%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">ADOBE XD</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "60%" }}>
                          <span className="percent-label">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "70%" }}>
                          <span className="percent-label">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="progress-wrapper">
                  <div className="content">
                    <h2 className="custom-title mb--30 tmp-fade-in">
                      Development Skill <span><img src="/assets/images/custom-line/custom-line.png" alt="line" /></span>
                    </h2>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">PHOTOSHOP</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "100%" }}>
                          <span className="percent-label">100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">FIGMA</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "95%" }}>
                          <span className="percent-label">95%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">ADOBE XD</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "60%" }}>
                          <span className="percent-label">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="progress-charts">
                      <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "70%" }}>
                          <span className="percent-label">70%</span>
                        </div>
                      </div>
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

export default Skills;
