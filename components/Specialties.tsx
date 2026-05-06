"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const specialties = [
  { icon: "fa-light fa-pen-ruler", title: "Web Design", count: "50+ Projects" },
  { icon: "fa-light fa-bezier-curve", title: "Ui/Ux Design", count: "40+ Projects" },
  { icon: "fa-light fa-lightbulb", title: "Web Research", count: "100+ Projects" },
  { icon: "fa-light fa-envelope", title: "Marketing", count: "20+ Prodect" },
];

const Specialties = () => {
  useScrollAnimation();

  return (
    <section className="service-area tmp-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          {specialties.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}>
                <div className="service-card-icon">
                  <i className={item.icon}></i>
                </div>
                <h4 className="service-title">
                  <Link href="/service-details">{item.title}</Link>
                </h4>
                <p className="service-para">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
