"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const ContactInfo = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <div className="contact-area-wrapper tmp-section-gapTop">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className="title">Address</h3>
                <p className="para">3891 Ranchview Dr. Richardson</p>
                <p className="para">California, USA</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="title">E-mail</h3>
                <a href="mailto:example@gmail.com">
                  <p className="para">example@gmail.com</p>
                </a>
                <a href="mailto:info@example.com">
                  <p className="para">info@example.com</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="title">Call Me</h3>
                <a href="tel:01245789321">
                    <p className="para">01245789321</p>
                </a>
                <a href="tel:9876543210">
                    <p className="para">+9876543210</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
