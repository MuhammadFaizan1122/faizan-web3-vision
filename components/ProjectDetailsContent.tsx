"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const ProjectDetailsContent = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap tmp-scroll-trigger tmp-fade-in animation-order-1">
              <Image
                src="/assets/images/projects-details/thumnail-img.png"
                alt="thumbnail"
                width={1200}
                height={600}
                className="w-100"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                Supporting Health Initiatives
              </h2>
              <p className="docs tmp-scroll-trigger tmp-fade-in animation-order-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen
                book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged
              </p>
              <p className="docs tmp-scroll-trigger tmp-fade-in animation-order-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown print
              </p>

              <div className="check-box-wrap tmp-scroll-trigger tmp-fade-in animation-order-5">
                <ul>
                  <li>
                    <h4 className="check-box-item">
                      <span><i className="fa-solid fa-circle-check"></i></span>Ui/visual Design
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item">
                      <span><i className="fa-solid fa-circle-check"></i></span>App Development
                    </h4>
                  </li>
                  <li>
                    <h4 className="check-box-item">
                      <span><i className="fa-solid fa-circle-check"></i></span>Software Developer
                    </h4>
                  </li>
                </ul>
              </div>
              <h2 className="mini-title tmp-scroll-trigger tmp-fade-in animation-order-6">
                Elevate Your Business with IT Solutions
              </h2>
              <p className="docs tmp-scroll-trigger tmp-fade-in animation-order-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen
                book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged
              </p>
              
              <div className="project-details-swiper-wrapper tmp-scroll-trigger tmp-fade-in animation-order-8">
                {/* Note: In a real Next.js app, this should be replaced with a React Swiper component. 
                    Leaving the static HTML structure here so existing CSS/JS can pick it up if global. */}
                <div className="swiper project-details-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image src="/assets/images/projects-details/project-detials-swiper-img-1.jpg" alt="swiper-img" width={800} height={400} className="w-100" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image src="/assets/images/projects-details/project-detials-swiper-img-2.png" alt="swiper-img" width={800} height={400} className="w-100" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image src="/assets/images/projects-details/project-detials-swiper-img-1.jpg" alt="swiper-img" width={800} height={400} className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-details-swiper-btn">
                  <div className="project-swiper-button-prev">
                    <span><i className="fa-solid fa-arrow-left"></i></span>Previous
                  </div>
                  <div className="project-swiper-button-next">
                    Next <span><i className="fa-solid fa-arrow-right"></i></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tpm Get In touch start */}
            <section className="get-in-touch-area pt--80 tmp-scroll-trigger tmp-fade-in animation-order-9">
              <div className="container p-0">
                <div className="contact-get-in-touch-wrap">
                  <div className="get-in-touch-wrapper tmponhover">
                    <div className="row g-5 align-items-center">
                      <div className="col-lg-12">
                        <div className="contact-inner">
                          <div className="contact-form">
                            <form className="tmp-dynamic-form" id="contact-form">
                              <div className="contact-form-wrapper row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input className="input-field" name="contact-name" id="contact-name" placeholder="Your Name" type="text" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input className="input-field" name="contact-phone" id="contact-phone" placeholder="Phone Number" type="tel" required />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input className="input-field" id="contact-email" name="contact-email" placeholder="Your Email" type="email" />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input className="input-field" type="text" id="subject" name="subject" placeholder="Subject" />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <textarea className="input-field" placeholder="Your Message" name="contact-message" id="contact-message"></textarea>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="tmp-button-here">
                                    <button className="tmp-btn hover-icon-reverse radius-round w-100" name="submit" type="submit" id="submit">
                                      <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Appointment Now</span>
                                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                      </span>
                                    </button>
                                  </div>
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
            {/* Tpm Get In touch End */}
          </div>

          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">Name: <span>Hosting vps</span></div>
                <div className="project-details-info">Author: <span>Nadimul Islam</span></div>
                <div className="project-details-info">Date: <span>23 January,2024</span></div>
                <div className="project-details-info">Tags: <span>Host Web Design</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
