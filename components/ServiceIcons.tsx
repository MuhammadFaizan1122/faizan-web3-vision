"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { servicesData } from "@/data/services";

const ServiceIcons = () => {
  useScrollAnimation();

  // Pick first 4 services to match the layout
  const topServices = servicesData.slice(0, 4);

  return (
    <section className="service-area tmp-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          {topServices.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}>
                <div className="service-card-icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="service-title">
                  <Link href={`/service-details/${service.slug}`}>{service.title}</Link>
                </h4>
                <p className="service-para">{service.shortDesc.substring(0, 40)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIcons;
