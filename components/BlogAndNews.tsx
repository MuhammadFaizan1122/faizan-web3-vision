"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { blogsData } from "@/data/blogs";

const BlogAndNews = () => {
  useScrollAnimation();

  // Get the latest 3 blogs for the homepage
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <section className="blog-and-news-are tmp-section-gap">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Blog and news</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevating Tech Knowledge <br /> through Deep Research
          </h2>
        </div>
        <div className="row">
          {recentBlogs.map((blog, index) => (
            <div key={blog.slug} className="col-lg-4 col-md-6 col-sm-6">
              <div className={`blog-card tmp-hover-link image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <div className="img-box">
                  <Link href={`/blog/${blog.slug}`}>
                    <Image 
                      className="w-100" 
                      src={blog.thumbnail} 
                      alt={blog.title} 
                      width={600} 
                      height={400} 
                      style={{ objectFit: "cover", height: "250px" }}
                    />
                  </Link>
                  <ul className="blog-tags">
                    <li><span className="tag-icon"><i className="fa-regular fa-user"></i></span>{blog.author.name.split(' ')[0]}</li>
                    <li><span className="tag-icon"><i className="fa-solid fa-calendar-days"></i></span>{blog.date.split(',')[0]}</li>
                  </ul>
                </div>
                <div className="blog-content-wrap">
                  <h3 className="blog-title">
                    <Link className="link" href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <div className="more-btn tmp-link-animation">
                    <Link href={`/blog/${blog.slug}`} className="read-more-btn">
                      Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAndNews;
