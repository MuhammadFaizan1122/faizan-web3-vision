"use client";

import React from "react";
import Counter from "./Counter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutCounterSection = () => {
  useScrollAnimation();

  return (
    <section className="counter-area tmp-section-gapBottom">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="year-expariance-wrap">
                <h2 className="year-number">
                  <Counter end={25} />
                </h2>
                <h3 className="year-title">Years Of <br /> experience</h3>
              </div>
              <p className="year-para">
                Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="counter-area-right-content">
              <div className="row g-5">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <h3 className="counter-title">
                      <Counter end={20} />k+
                    </h3>
                    <p className="counter-para">Our Project Complete</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <h3 className="counter-title">
                      <Counter end={10} />k+
                    </h3>
                    <p className="counter-para">Our Natural Products</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <h3 className="counter-title">
                      <Counter end={200} />+
                    </h3>
                    <p className="counter-para">Clients Reviews</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <h3 className="counter-title">
                      <Counter end={1000} />+
                    </h3>
                    <p className="counter-para">our Satisfied Clientd</p>
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

export default AboutCounterSection;
