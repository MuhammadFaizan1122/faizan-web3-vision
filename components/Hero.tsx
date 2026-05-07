"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Typewriter from "./Typewriter";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef(null);
  const words = ["Full Stack Developer", "MERN Specialist", "Frontend Architect", "UI/UX Enthusiast"];

  useScrollAnimation(heroRef);

  return (
    <div className="rpp-banner-two-area" ref={heroRef}>
      <div className="container">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <div className="main-img">
                  <Image
                    className="tmp-zoom-in"
                    src="/assets/images/banner/prof.png"
                    alt="banner-img"
                    width={0}
                    height={0}
                    style={{ width: '80%', height: 'auto' }}
                    priority
                  />
                  <h2 className="banner-big-text-1 up-down-2">Full Stack Developer</h2>
                  <h2 className="banner-big-text-2 up-down">Full Stack Developer</h2>
                  <div className="benner-two-bg-red-img">
                    <Image
                      src="/assets/images/banner/banner-user-image-two-red-bg.png"
                      alt="red-img"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="logo-under-img-wrap">
                    <div className="logo-under-img">
                      <Image src="/assets/images/banner/logo-under-image.png" alt="logo-under-image" width={200} height={200} />
                    </div>
                    <div className="logo-under-img-2">
                      <Image src="/assets/images/banner/logo-under-image-2.png" alt="logo-under-image" width={50} height={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt--100">
              <div className="inner">
                <span className="sub-title tmp-fade-in">I M </span>
                <h1 className="title tmp-fade-in">
                  Muhammad Faizan, a <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <Typewriter words={words} />
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-fade-in">
                  I help <span>visionaries</span> and startups build robust digital products. From initial architecture to final deployment, I craft scalable <span>web solutions</span> that bridge the gap between complex functionality and seamless user experience.
                </p>
                <div className="button-area-banner-two tmp-fade-in">
                  <Link className="tmp-btn hover-icon-reverse radius-round" href="/projects">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Explore My Work</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
                <div className="find-me-on tmp-fade-in">
                  <h2 className="find-me-on-title">Find me on</h2>
                  <div className="social-link banner">
                    <Link href="https://www.linkedin.com/in/muhammad-faizan-3a120b230/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                    <Link href="https://github.com/MuhammadFaizan1122" target="_blank"><i className="fa-brands fa-github"></i></Link>
                    <Link href="mailto:muh.faizaan@gmail.com" target="_blank"><i className="fa-sharp fa-solid fa-envelope"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-two">
        <img src="/assets/images/banner/banner-shape-two.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
