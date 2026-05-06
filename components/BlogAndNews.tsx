"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogAndNews = () => {
  useScrollAnimation();

  return (
    <section className="blog-and-news-are tmp-section-gap">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Blog and news</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevating Personal Branding the <br /> through Powerful Portfolios
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="blog-card tmp-hover-link image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="img-box">
                <Link href="/blog-details">
                  <Image className="w-100" src="/assets/images/blog/blog-img-1.jpg" alt="Blog Thumbnail" width={600} height={400} />
                </Link>
                <ul className="blog-tags">
                  <li><span className="tag-icon"><i className="fa-regular fa-user"></i></span>Mesbah</li>
                  <li><span className="tag-icon"><i className="fa-solid fa-calendar-days"></i></span>April 10</li>
                </ul>
              </div>
              <div className="blog-content-wrap">
                <h3 className="blog-title">
                  <Link className="link" href="/blog-details">
                    Inspiring the World, One Project at a Time for the man
                  </Link>
                </h3>
                <div className="more-btn tmp-link-animation">
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="blog-card tmp-hover-link image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="img-box">
                <Link href="/blog-details">
                  <Image className="w-100" src="/assets/images/blog/blog-img-2.jpg" alt="Blog Thumbnail" width={600} height={400} />
                </Link>
                <ul className="blog-tags">
                  <li><span className="tag-icon"><i className="fa-regular fa-user"></i></span>Mesbah</li>
                  <li><span className="tag-icon"><i className="fa-solid fa-calendar-days"></i></span>April 10</li>
                </ul>
              </div>
              <div className="blog-content-wrap">
                <h3 className="blog-title">
                  <Link className="link" href="/blog-details">
                    Let’s bring your ideas to life! Contact me, and let’s
                  </Link>
                </h3>
                <div className="more-btn tmp-link-animation">
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="blog-card tmp-hover-link image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-3">
              <div className="img-box">
                <Link href="/blog-details">
                  <Image className="w-100" src="/assets/images/blog/blog-img-3.jpg" alt="Blog Thumbnail" width={600} height={400} />
                </Link>
                <ul className="blog-tags">
                  <li><span className="tag-icon"><i className="fa-regular fa-user"></i></span>Mesbah</li>
                  <li><span className="tag-icon"><i className="fa-solid fa-calendar-days"></i></span>April 10</li>
                </ul>
              </div>
              <div className="blog-content-wrap">
                <h3 className="blog-title">
                  <Link className="link" href="/blog-details">
                    Each one showcases my approach and dedication man
                  </Link>
                </h3>
                <div className="more-btn tmp-link-animation">
                  <Link href="/blog-details" className="read-more-btn">
                    Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndNews;
