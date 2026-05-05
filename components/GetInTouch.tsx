"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const GetInTouch = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <section className="get-in-touch-area tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">GET IN TOUCH</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Elevate your brand with Me 
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Have a project in mind or just want to say hi? Feel free to reach out. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <form className="tmp-contact-form">
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="name" placeholder="Your Name" type="text" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="phone" placeholder="Phone Number" type="tel" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="email" placeholder="Your Email" type="email" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="subject" placeholder="Subject" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="input-field" name="message" placeholder="Your Message" required></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="tmp-btn hover-icon-reverse radius-round w-100" type="submit">
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Appointment Now</span>
                              <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
