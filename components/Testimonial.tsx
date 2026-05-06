"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonial = () => {
  useScrollAnimation();

  return (
    <section className="testimonial tmp-section-gapTop">
      <div className="testimonial-wrapper">
        <div className="container">
          {/* Note: Swiper relies on external JS or React component wrapper. 
              Keeping original classes for the global template JS to pick up if still active. */}
          <div className="swiper testimonial-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h2 className="text-doc">Working with themespark was an absolute pleasure! They understood my vision immediately and brought it to life even better than I’d imagined.</h2>
                    <h3 className="card-title">Cameron Williamson</h3>
                    <p className="card-para">Ui/Ux Designer</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-1" src="/assets/images/testimonial/bg-image-1png.png" alt="bg-image" width={400} height={400} />
                  </div>
                </div>
              </div>
              
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h2 className="text-doc">ThemesPark is incredibly talented and detail-oriented. They took the time to understand my brand and created something truly unique</h2>
                    <h3 className="card-title">Cameron Williamson</h3>
                    <p className="card-para">Ui/Ux Designer</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-2" src="/assets/images/testimonial/bg-image-2.png" alt="bg-image" width={400} height={400} />
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h2 className="text-doc">A personal portfolio is a curated collection of an individual&apos;s professional work, showcasing their skills, experience, and achievements</h2>
                    <h3 className="card-title">Cameron Williamson</h3>
                    <p className="card-para">Ui/Ux Designer</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-3" src="/assets/images/testimonial/bg-image-1png.png" alt="bg-image" width={400} height={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-btn-next-prev">
            <div className="swiper-button-next"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
