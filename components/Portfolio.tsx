"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section className="latest-portfolio-area custom-column-grid tmp-section-gap" ref={sectionRef}>
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-fade-in">
            <span className="subtitle">Latest Portfolio</span>
          </div>
          <h2 className="title tmp-fade-in"> Transforming Ideas into Exceptional </h2>
        </div>
        <div className="latest-portfolio-tabs-area">
          <nav>
            <ul className="nav nav-tabs">
              <li>
                <button className={`nav-link ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>All</button>
              </li>
              <li>
                <button className={`nav-link ${activeTab === "branding" ? "active" : ""}`} onClick={() => setActiveTab("branding")}>Branding</button>
              </li>
              {/* Add more tabs */}
            </ul>
          </nav>
          <div className="tab-content bg-blur-style-one">
            <div className="tab-pane fade show active">
              <div className="row">
                <div className="col-lg-6">
                  <div className="latest-portfolio-card-style-two image-box-hover tmp-fade-in">
                    <div className="portfoli-card-img">
                      <div className="img-box v2">
                        <a href="#">
                          <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" width={600} height={400} />
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-card-content-wrap">
                      <div className="content-left">
                        <h3 className="portfolio-card-title"><a href="#">SAAS website design</a></h3>
                        <div className="tag-items">
                          <ul>
                            <li><a href="#" className="tag-item">Figma</a></li>
                          </ul>
                        </div>
                      </div>
                      <a className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View design</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="latest-portfolio-card-style-two image-box-hover tmp-fade-in">
                    <div className="portfoli-card-img">
                      <div className="img-box v2">
                        <a href="#">
                          <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" width={600} height={400} />
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-card-content-wrap">
                      <div className="content-left">
                        <h3 className="portfolio-card-title"><a href="#">Workout App design</a></h3>
                        <div className="tag-items">
                          <ul>
                            <li><a href="#" className="tag-item">Adobe</a></li>
                            <li><a href="#" className="tag-item">Webflow</a></li>
                          </ul>
                        </div>
                      </div>
                      <a className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View design</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="latest-portfolio-card-style-two image-box-hover tmp-fade-in">
                    <div className="portfoli-card-img">
                      <div className="img-box v2">
                        <a href="#">
                          <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" width={600} height={400} />
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-card-content-wrap">
                      <div className="content-left">
                        <h3 className="portfolio-card-title"><a href="#">E-commerce Platform</a></h3>
                        <div className="tag-items">
                          <ul>
                            <li><a href="#" className="tag-item">Figma</a></li>
                            <li><a href="#" className="tag-item">React</a></li>
                          </ul>
                        </div>
                      </div>
                      <a className="tmp-btn hover-icon-reverse radius-round btn-border btn-md" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">View project</span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
