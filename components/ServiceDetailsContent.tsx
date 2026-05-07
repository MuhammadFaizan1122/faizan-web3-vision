"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { ServiceContent, servicesData } from "@/data/services";

interface ServiceDetailsContentProps {
  service: ServiceContent;
}

const ServiceDetailsContent = ({ service }: ServiceDetailsContentProps) => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <div className="service-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="service-thumnail-wrap tmp-scroll-trigger tmp-fade-in animation-order-1">
              <Image
                src={service.thumbnailUrl}
                alt={service.title}
                width={800}
                height={500}
                className="w-100"
              />
            </div>
            
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              {service.title}
            </h2>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-3">
              {service.overview}
            </p>

            <h2 className="title-mini split-collab tmp-scroll-trigger tmp-fade-in animation-order-4 mt--40">
              Key Benefits
            </h2>
            <ul className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-5" style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "30px" }}>
              {service.benefits.map((benefit, index) => (
                <li key={index} className="mb--10">{benefit}</li>
              ))}
            </ul>

            <h2 className="title-mini split-collab tmp-scroll-trigger tmp-fade-in animation-order-6">
              Core Features & Technologies
            </h2>
            <ul className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-7" style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "30px" }}>
              {service.features.map((feature, index) => (
                <li key={index} className="mb--10">{feature}</li>
              ))}
            </ul>

            <h2 className="title-mini split-collab tmp-scroll-trigger tmp-fade-in animation-order-8">
              My Implementation Process
            </h2>
            <div className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-9">
              {service.process.map((step, index) => (
                <div key={index} className="mb--20">
                  <strong>Step {index + 1}: {step.step}</strong>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="signle-side-bar service-list-area tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="header">
                <h3 className="title">Service Category</h3>
              </div>
              <div className="body">
                {servicesData.map((category, index) => {
                  const isActive = category.slug === service.slug;
                  return (
                    <Link key={index} href={`/service-details/${category.slug}`} className={`single-service ${isActive ? "active" : ""}`}>
                      <p className="service-title" style={isActive ? { color: "var(--color-primary)" } : {}}>{category.title}</p>
                      <span className="service-icon" style={isActive ? { color: "var(--color-primary)" } : {}}>
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
