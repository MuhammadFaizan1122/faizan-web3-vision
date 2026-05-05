"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  { subtitle: "Trainer Marketing", date: "2005-2009", desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio." },
  { subtitle: "Assistant Director", date: "2010-2014", desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs." },
  { subtitle: "Design Assistant", date: "2008-2012", desc: "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life." },
  { subtitle: "Design Assistant", date: "2008-2012", desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal." },
];

const EducationExperience = () => {
  useScrollAnimation();

  return (
    <section className="education-experience tmp-section-gapBottom">
      <div className="container">
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={10} /></span>
        </h2>
        <div className="row g-5">
          {education.map((item, index) => (
            <div key={index} className="col-lg-6 col-sm-6">
              <div className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <h4 className="edu-sub-title">{item.subtitle}</h4>
                <h2 className="edu-title">{item.date}</h2>
                <p className="edu-para">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experiences-wrapper v2 mt--100">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image 
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1" 
                  src="/assets/images/experiences/expert-img-two.jpg" 
                  alt="expert-img" 
                  width={600} 
                  height={400} 
                  style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Experiences <span><Image src="/assets/images/custom-line/custom-line.png" alt="custom-line" width={100} height={10} /></span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Muhammad Faizan</h2>
                  <h3 className="ex-title">UI/UX Designer</h3>
                  <p className="ex-para">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">experience</p>
                  <h2 className="ex-name">Muhammad Faizan</h2>
                  <h3 className="ex-title">Lead Developer</h3>
                  <p className="ex-para">Interested in working together? Let’s bring your ideas to life! Contact me, and let’s start building something.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
