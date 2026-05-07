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
                <p className="para">Sector: 11-F, New Karachi</p>
                <p className="para">Karachi, Pakistan</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h3 className="title">E-mail</h3>
                <a href="mailto:muh.faizaan@gmail.com">
                  <p className="para">muh.faizaan@gmail.com</p>
                </a>
                <a href="mailto:alexxxjohn885@gmail.com">
                  <p className="para">alexxxjohn885@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="title">Call Me</h3>
                <a href="tel:+923002493788">
                  <p className="para">+92 300 2493 788</p>
                </a>
                <a href="tel:19296218820">
                  <p className="para">+19296218820</p>
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
