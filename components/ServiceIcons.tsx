"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServiceIcons = () => {
  useScrollAnimation();

  return (
    <section className="service-area tmp-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
              <div className="service-card-icon">
                <i className="fa-light fa-pen-ruler"></i>
              </div>
              <h4 className="service-title"><Link href="/service-details">Web Design</Link></h4>
              <p className="service-para">50+ Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-2 tmp-link-animation">
              <div className="service-card-icon">
                <i className="fa-light fa-bezier-curve"></i>
              </div>
              <h4 className="service-title"><Link href="/service-details">Ui/Ux Design</Link></h4>
              <p className="service-para">40+ Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
              <div className="service-card-icon">
                <i className="fa-light fa-lightbulb"></i>
              </div>
              <h4 className="service-title"><Link href="/service-details">Web Research</Link></h4>
              <p className="service-para">100+ Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-4 tmp-link-animation">
              <div className="service-card-icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <h4 className="service-title"><Link href="/service-details">Marketing</Link></h4>
              <p className="service-para">20+ Prodect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIcons;
