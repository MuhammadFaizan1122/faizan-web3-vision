"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlogPost, blogsData } from "@/data/blogs";

interface Props {
  blog: BlogPost;
}

const BlogDetailsContent = ({ blog }: Props) => {
  useScrollAnimation();

  // Get 3 recent posts excluding the current one
  const recentPosts = blogsData.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="blog-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="blog-details-content-wrap">
              <div className="thumbnail-wrapper tmp-scroll-trigger tmp-fade-in animation-order-1">
                <Image
                  src={blog.heroImage}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className="w-100 mb--30"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </div>

              <div className="blog-classic-tag tmp-scroll-trigger tmp-fade-in animation-order-2 mb--20">
                <ul className="d-flex flex-wrap gap-4 align-items-center" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li className="d-flex align-items-center gap-2 text-primary">
                    <i className="fa-solid fa-tag"></i>
                    <span className="tag-title fw-bold">{blog.category}</span>
                  </li>
                  <li className="d-flex align-items-center gap-2 text-muted">
                    <i className="fa-solid fa-calendar-day"></i>
                    <span className="tag-title">{blog.date}</span>
                  </li>
                  <li className="d-flex align-items-center gap-2 text-muted">
                    <i className="fa-regular fa-clock"></i>
                    <span className="tag-title">{blog.readTime}</span>
                  </li>
                </ul>
              </div>

              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-3 mb--30">
                {blog.title}
              </h2>

              <div className="doc-para tmp-scroll-trigger tmp-fade-in animation-order-4">
                {blog.content.map((paragraph, idx) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h4 key={idx} className="mt--30 mb--15">
                        {paragraph.replace(/\*\*/g, "")}
                      </h4>
                    );
                  }
                  return <p key={idx} className="mb--20">{paragraph}</p>;
                })}
              </div>

              {/* Author Section */}
              <div className="about-author tmp-scroll-trigger tmp-fade-in animation-order-5 mt--60" style={{ padding: "30px", backgroundColor: "var(--color-bg-2)", borderRadius: "10px" }}>
                <div className="d-flex gap-4 align-items-center">
                  <Image
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                  />
                  <div>
                    <h4 className="mb-1">{blog.author.name}</h4>
                    <p className="text-muted mb-2">{blog.author.role}</p>
                    <div className="social-link d-flex gap-3">
                      {blog.author.social.linkedin && <Link href={blog.author.social.linkedin}><i className="fa-brands fa-linkedin-in text-primary"></i></Link>}
                      {blog.author.social.twitter && <Link href={blog.author.social.twitter}><i className="fa-brands fa-twitter text-primary"></i></Link>}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-4">
            <div className="tmp-sidebar">
              {/* Search Area */}
              <div className="signle-side-bar search-area tmponhover">
                <div className="body">
                  <div className="search-area">
                    <input type="text" placeholder="Search blogs..." required />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Post Cards */}
              <div className="signle-side-bar recent-post-area tmponhover mt--40">
                <div className="header">
                  <h3 className="title">Recent Posts</h3>
                </div>
                <div className="body">
                  {recentPosts.map((recent) => (
                    <div key={recent.slug} className="single-post-card tmp-hover-link mb--20 d-flex gap-3">
                      <div className="single-post-card-img" style={{ minWidth: "80px" }}>
                        <Image
                          src={recent.thumbnail}
                          alt={recent.title}
                          width={80}
                          height={80}
                          style={{ borderRadius: "5px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="single-post-right">
                        <div className="single-post-top d-flex gap-2 text-muted" style={{ fontSize: "12px", marginBottom: "5px" }}>
                          <i className="fa-regular fa-folder-open"></i>
                          <p className="post-title m-0">{recent.category}</p>
                        </div>
                        <h6 className="post-title" style={{ fontSize: "14px", lineHeight: "1.4" }}>
                          <Link className="link text-decoration-none" href={`/blog/${recent.slug}`}>
                            {recent.title}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="signle-side-bar tmponhover mt--40">
                <div className="header">
                  <h3 className="title">Tags</h3>
                </div>
                <div className="body">
                  <div className="tags-wrapper d-flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <Link key={idx} href="#" className="tag-link px-3 py-1 bg-light rounded text-decoration-none" style={{ fontSize: "14px" }}>
                        {tag}
                      </Link>
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

export default BlogDetailsContent;
