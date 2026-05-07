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
                    <span className="subtitle">CONTACT ME</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Let’s Build the Future of Web3 & AI Together
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Whether you're looking to launch a secure DeFi platform on Solana, integrate advanced AI agents into your workflow, or build a scalable Next.js application, I’m here to lead the technical execution. Let’s discuss how my 10+ years of experience and 35+ delivered projects can bring your vision to life.
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
                            <input className="input-field" name="name" placeholder="Name (e.g., Satoshi Nakamoto)" type="text" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="phone" placeholder="Phone (e.g., +92 300 0000000)" type="tel" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="email" placeholder="Email (e.g., partner@company.com)" type="email" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="subject" placeholder="Subject (e.g., Web3 Inquiry)" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="input-field" name="message" placeholder="Tell me about your project goals, tech stack, or timeline..." required></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="tmp-btn hover-icon-reverse radius-round w-100" type="submit">
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Start Collaboration</span>
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