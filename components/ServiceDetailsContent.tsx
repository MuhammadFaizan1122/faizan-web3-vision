"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const ServiceDetailsContent = () => {
  useScrollAnimation();
  useHoverAnimation();

  const serviceCategories = [
    "TechPros",
    "NetWorks",
    "DataMasters",
    "Dibetics section",
    "DigitalSolutions",
    "CodeGenius"
  ];

  return (
    <div className="service-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="service-thumnail-wrap tmp-scroll-trigger tmp-fade-in animation-order-1">
              <Image
                src="/assets/images/services/service-detials-thumnail-wrap.png"
                alt="thumnail-img"
                width={800}
                height={500}
                className="w-100"
              />
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Elevated Designs Personalized the best Experiences
            </h2>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-3">
              Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of
              just not an only profession Web designing in a powerful way of just not an only
            </p>
            <h2 className="title-mini split-collab tmp-scroll-trigger tmp-fade-in animation-order-4">
              My Experts Areas where i gained skill
            </h2>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-5">
              Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of
              just not an only profession Web designing in a powerful way of just not an only
            </p>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-6">
              Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
            </p>

            <h2 className="title-mini split-collab tmp-scroll-trigger tmp-fade-in animation-order-7">
              My Experts Areas where i gained skill
            </h2>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-8">
              Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful way of
              just not an only profession Web designing in a powerful way of just not an only
            </p>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-9">
              Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
            </p>
            <p className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-10">
              viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
            </p>
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar service-list-area tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="header">
                <h3 className="title">Service Category</h3>
              </div>
              <div className="body">
                {serviceCategories.map((category, index) => (
                  <a key={index} href="#" className="single-service tmponhover">
                    <p className="service-title">{category}</p>
                    <span className="service-icon">
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
