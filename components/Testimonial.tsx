"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  useScrollAnimation();

  return (
    <section className="testimonial tmp-section-gapTop">
      <div className="testimonial-wrapper">
        <div className="container">
          <div className="swiper testimonial-swiper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              loop={true}
              navigation={{
                nextEl: '.testimonial-btn-next-prev .swiper-button-next',
                prevEl: '.testimonial-btn-next-prev .swiper-button-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                800: {
                  slidesPerView: 2,
                },
              }}
              className="swiper-wrapper"
            >
              {/* Testimonial 1: Web3/Solana Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"Faizan’s expertise in the Solana ecosystem is top-tier. He built our NFT minting platform from scratch with flawless Metaplex integration and secure wallet auth."</h5>
                    <h3 className="card-title">Alex Rivera</h3>
                    <p className="card-para">Founder, Web3 Startup</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-1" src="/assets/images/testimonial/alex.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 2: AI Integration Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"The AI chatbot Faizan integrated into our SaaS platform significantly improved our lead conversion. His understanding of LLM APIs and prompt engineering is impressive."</h5>
                    <h3 className="card-title">Sarah Jenkins</h3>
                    <p className="card-para">Product Manager, Orion AI</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-2" src="/assets/images/testimonial/sarah.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 3: Full-Stack/Next.js Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"Working with a developer who understands both frontend performance and backend scalability is rare. Our Next.js platform is now faster and more responsive than ever."</h5>
                    <h3 className="card-title">David Chen</h3>
                    <p className="card-para">CTO, FinTech Solutions</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-3" src="/assets/images/testimonial/david.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 4: Real-Time Streaming Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"Faizan successfully tackled the complex challenge of low-latency video broadcasting for our Social-TV project. A true expert in WebRTC and real-time systems."</h5>
                    <h3 className="card-title">Michael Thorne</h3>
                    <p className="card-para">Head of Tech, Everyone World</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-4" src="/assets/images/testimonial/bg-image-2.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 5: RWA Tokenization Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"He bridged the gap between traditional real estate and blockchain perfectly. Our fractional ownership platform is secure, audited, and highly functional."</h5>
                    <h3 className="card-title">Elena Rodriguez</h3>
                    <p className="card-para">Director, SchindlersX</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-5" src="/assets/images/testimonial/Alexa-Orbin.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 6: Team Leadership Focus */}
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="card-content-wrap">
                    <h5 className="text-doc">"As a Lead Developer, Faizan didn't just write great code; he managed the team efficiently and ensured we hit our milestones ahead of schedule. Highly recommended."</h5>
                    <h3 className="card-title">Umer Fayyaz</h3>
                    <p className="card-para">Operations Lead, NextchainX</p>
                    <div className="testimonital-icon">
                      <Image src="/assets/images/testimonial/testimonial-icon.svg" alt="testimonial-icon" width={50} height={50} />
                    </div>
                  </div>
                  <div className="testimonial-card-img">
                    <Image className="tmp-scroll-trigger tmp-zoom-in animation-order-6" src="/assets/images/testimonial/umer.png" alt="Client" width={400} height={400} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
