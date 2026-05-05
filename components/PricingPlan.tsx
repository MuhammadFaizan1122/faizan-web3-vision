"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricing = [
  { 
    plan: "Starter", 
    price: "$ 5.00", 
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"] 
  },
  { 
    plan: "Basic", 
    price: "$ 230.00", 
    active: true,
    features: ["5 Social Media Account", "Free Platform Access", "Marketing Platform", "24/7 Customer Support", "Life time support"] 
  },
  { 
    plan: "Premium", 
    price: "$ 45.00", 
    features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"] 
  },
];

const PricingPlan = () => {
  useScrollAnimation();

  return (
    <section className="our-price-plan-area tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">My Price plan</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Enhancing Collaboration <br /> between Remote
          </h2>
        </div>
        <div className="row align-items-center">
          {pricing.map((item, index) => (
            <div key={index} className={`col-lg-4 col-md-6 ${item.active ? 'tmp-scroll-trigger tmp-fade-in animation-order-2' : ''}`}>
              <div className={`price-plan-card tmponhover blur-style-two ${item.active ? 'active' : `tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}`}>
                <span className="price-sub-title">{item.plan}</span>
                <h3 className="main-price">{item.price}</h3>
                <p className="per-month">Per Month</p>
                <div className="check-box">
                  <ul>
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <div className="check-box-item">
                          <div className="box-icon">
                            <i className="fa-solid fa-circle-check"></i>
                          </div>
                          <p className="box-para">{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tmp-button-here">
                  <Link href="/contact" className={`tmp-btn hover-icon-reverse ${item.active ? '' : 'btn-border'} btn-md radius-round`}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
