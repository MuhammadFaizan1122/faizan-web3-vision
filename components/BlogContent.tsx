"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { blogsData } from "@/data/blogs";

const BlogContent = () => {
  useScrollAnimation();
  useHoverAnimation();

  // Get recent posts
  const recentPosts = [...blogsData].slice(0, 3);

  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogsData.map((post, index) => (
              <div
                key={post.slug}
                className={`blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${index + 1}`}
              >
                <div className="img-box">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-100 h-auto"
                      style={{ objectFit: "cover", display: "block" }}
                    />
                  </Link>
                </div>
                <div className="blog-classic-content">
                  <div className="blog-classic-tag">
                    <ul>
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-solid fa-tag"></i>
                          <h4 className="tag-title">{post.category}</h4>
                        </div>
                      </li>
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-regular fa-comment"></i>
                          <h4 className="tag-title">Comments ({post.commentsCount})</h4>
                        </div>
                      </li>
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-solid fa-calendar-day"></i>
                          <h4 className="tag-title">{post.date}</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h2 className="title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="para">{post.excerpt}</p>
                  <div className="tmp-button-here">
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                      href={`/blog/${post.slug}`}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Read More</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="tmp-pagination-button">
              <a href="#" className="pagination-btn">
                <i className="fa-sharp fa-regular fa-arrow-left"></i>
              </a>
              <a href="#" className="pagination-btn active">1</a>
              <a href="#" className="pagination-btn">
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tmp-sidebar">
              {/* Search Area */}
              <div className="signle-side-bar search-area tmponhover">
                <div className="body">
                  <div className="search-area">
                    <input type="text" placeholder="Type here" required />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Post Cards */}
              <div className="signle-side-bar recent-post-area tmponhover">
                <div className="header">
                  <h3 className="title">Recent Post</h3>
                </div>
                <div className="body">
                  {recentPosts.map((recent) => (
                    <div key={recent.slug} className="single-post-card tmp-hover-link">
                      <div className="single-post-card-img">
                        <Image
                          src={recent.thumbnail}
                          alt={recent.title}
                          width={80}
                          height={80}
                          style={{ borderRadius: "5px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="single-post-right">
                        <div className="single-post-top">
                          <i className="fa-regular fa-folder-open"></i>
                          <p className="post-title">{recent.category}</p>
                        </div>
                        <h3 className="post-title">
                          <Link className="link" href={`/blog/${recent.slug}`}>
                            {recent.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="signle-side-bar tmponhover">
                <div className="header">
                  <h3 className="title">Tags</h3>
                </div>
                <div className="body">
                  <div className="tags-wrapper">
                    {Array.from(new Set(blogsData.flatMap(b => b.tags))).slice(0, 10).map((tag, idx) => (
                      <a key={idx} href="#" className="tag-link">{tag}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
