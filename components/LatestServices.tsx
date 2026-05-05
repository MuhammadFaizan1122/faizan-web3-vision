"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const services = [
  { id: "01.", title: "Success Architects", desc: "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency" },
  { id: "02.", title: "Success Architects", desc: "App consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency" },
  { id: "03.", title: "Success Architects", desc: "I specialize in creating solutions that are not only visually engaging but also align with business goals. From [list services, e.g., branding," },
  { id: "04.", title: "Ui/visual Design", desc: "I’m proud of what I’ve accomplished and excited to share my journey with you. I’m proud of what I’ve accomplished and excited to." },
  { id: "05.", title: "Branding Design", desc: "Interested in working together? Let’s bring your ideas to life! Contact me, and let’s start building something amazing." },
  { id: "06.", title: "Motion Design", desc: "Feel free to browse through my recent projects. Each one showcases my approach and dedication to detail, creativity, and." },
];

const LatestServices = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="row g-5">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12">
              <Link href="/service-details" className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <h2 className="service-card-num"><span>{service.id}</span>{service.title}</h2>
                <p className="service-para">{service.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServices;
