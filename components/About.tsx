"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import Counter from "./Counter";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useRef(null);

  useScrollAnimation(sectionRef);

  return (
    <section className="about-us-area" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-fade-in">
                <h2 className="counter card-title">
                  <Counter end={10} />+
                </h2>
                <p className="card-para">years of experience</p>
              </div>
              <div className="design-card tmp-fade-in">
                <div className="design-card-img">
                  <div className="icon"><i className="fa-sharp fa-thin fa-lock"></i></div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">Ui/Ux Design</h3>
                  <p className="card-para">40+ Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-fade-in">
                  <span className="subtitle">About Me</span>
                </div>
                <h2 className="title tmp-fade-in">Boost Business Strategic <br /> Solutions with Us</h2>
                <p className="description tmp-fade-in">
                  Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance, efficiency, and organizational.
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-fade-in">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image src="/assets/images/about/logo-1.svg" alt="logo" width={50} height={50} />
                      </div>
                      <h3 className="card-title">Business Solutions</h3>
                    </div>
                    <p className="card-para">Each one showcases my approach and dedication to detail, creativity</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-fade-in">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image src="/assets/images/about/logo-2.svg" alt="logo" width={50} height={50} />
                      </div>
                      <h3 className="card-title">Profit Partners</h3>
                    </div>
                    <p className="card-para">Business consulting consul us to a provide expert advice businesses</p>
                  </div>
                </div>
              </div>
              <div className="about-btn mt--40 tmp-fade-in">
                <Link className="tmp-btn hover-icon-reverse radius-round" href="/about">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Me</span>
                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
