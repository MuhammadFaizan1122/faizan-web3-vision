"use client";

import React, { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Resume = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="resume-section tmp-section-gapTop" id="resume-section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-fade-in">
              <h2 className="section-title"><i className="fa-regular fa-award"></i> My Experience</h2>
            </div>
            <div className="resume-widget">
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 - Present</div>
                <h3 className="resume-title">Senior Developer</h3>
                <div className="institute">CodeGenius (USA)</div>
              </div>
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 - 2022</div>
                <h3 className="resume-title">Web Developer</h3>
                <div className="institute">Modarni Tomoli</div>
              </div>
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 - 2022</div>
                <h3 className="resume-title">UI Designer</h3>
                <div className="institute">Tech Design Company</div>
              </div>
              <div className="resume-single mb--0 tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 - 2019</div>
                <h3 className="resume-title">Intern UI/UX Designer</h3>
                <div className="institute">USA Web Company</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-fade-in">
              <h2 className="section-title"> <i className="fa-regular fa-graduation-cap"></i> My Education</h2>
            </div>
            <div className="resume-widget">
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 - 2023</div>
                <h3 className="resume-title">Programming course</h3>
                <div className="institute">Harvard University</div>
              </div>
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 - 2020</div>
                <h3 className="resume-title">Graphic design course</h3>
                <div className="institute">University of Denmark</div>
              </div>
              <div className="resume-single tmp-fade-in">
                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2012 - 2015</div>
                <h3 className="resume-title">Web design course</h3>
                <div className="institute">University of California</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
