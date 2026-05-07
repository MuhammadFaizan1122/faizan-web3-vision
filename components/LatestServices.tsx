"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { servicesData } from "@/data/services";

const LatestServices = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="row g-5">
          {servicesData.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <Link href={`/service-details/${service.slug}`} className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <h2 className="service-card-num"><span>{service.id}</span>{service.title}</h2>
                <p className="service-para">{service.shortDesc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServices;
