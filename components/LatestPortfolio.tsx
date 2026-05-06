"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LatestPortfolio = () => {
  useScrollAnimation();

  return (
    <div className="latest-portfolio-area custom-column-grid tmp-section-gapTop">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Latest Portfolio</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Transforming Ideas into <br /> Exceptional
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="portfoli-card-img">
                <div className="img-box v2">
                  <Link className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="/project-details">
                    <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" width={800} height={600} />
                  </Link>
                </div>
              </div>
              <div className="portfolio-card-content-wrap">
                <div className="content-left">
                  <h3 className="portfolio-card-title"><Link className="link" href="/project-details">Digital Transformation Advisors</Link></h3>
                  <p className="portfoli-card-para">Development Coaches</p>
                </div>
                <Link href="/project-details" className="tmp-arrow-icon-btn">
                  <div className="btn-inner">
                    <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                    <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="portfoli-card-img">
                <div className="img-box v2">
                  <Link className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="/project-details">
                    <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" width={800} height={600} />
                  </Link>
                </div>
              </div>
              <div className="portfolio-card-content-wrap">
                <div className="content-left">
                  <h3 className="portfolio-card-title"><Link className="link" href="/project-details">My work is driven by the belief that thoughtful.</Link></h3>
                  <p className="portfoli-card-para">Development App</p>
                </div>
                <Link href="/project-details" className="tmp-arrow-icon-btn">
                  <div className="btn-inner">
                    <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                    <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-3">
              <div className="portfoli-card-img">
                <div className="img-box v2">
                  <Link className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="/project-details">
                    <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" width={800} height={600} />
                  </Link>
                </div>
              </div>
              <div className="portfolio-card-content-wrap">
                <div className="content-left">
                  <h3 className="portfolio-card-title"><Link className="link" href="/project-details">In this portfolio, you’ll find a curated selection</Link></h3>
                  <p className="portfoli-card-para">Web Design</p>
                </div>
                <Link href="/project-details" className="tmp-arrow-icon-btn">
                  <div className="btn-inner">
                    <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                    <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-4">
              <div className="portfoli-card-img">
                <div className="img-box v2">
                  <Link className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="/project-details">
                    <Image className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" width={800} height={600} />
                  </Link>
                </div>
              </div>
              <div className="portfolio-card-content-wrap">
                <div className="content-left">
                  <h3 className="portfolio-card-title"><Link className="link" href="/project-details">I’ve had the privilege of working with various</Link></h3>
                  <p className="portfoli-card-para">App Development</p>
                </div>
                <Link href="/project-details" className="tmp-arrow-icon-btn">
                  <div className="btn-inner">
                    <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                    <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPortfolio;
