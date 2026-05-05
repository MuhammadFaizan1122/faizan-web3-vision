"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

const blogPosts = [
  {
    id: 1,
    image: "/assets/images/blog/blog-classic-card-img-1.jpg",
    tag: "Web design",
    comments: 5,
    date: "Comments (05)", // Note: The HTML had "Comments (05)" here too, probably a placeholder
    title: "Stand out from the crowd with a professional portfolio",
    desc: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
  },
  {
    id: 2,
    image: "/assets/images/blog/blog-classic-card-img-2.jpg",
    tag: "Web design",
    comments: 5,
    date: "Comments (05)",
    title: "Elevate your brand with a the stunning portfolio",
    desc: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
  },
  {
    id: 3,
    image: "/assets/images/blog/blog-classic-card-img-3.jpg",
    tag: "Web design",
    comments: 5,
    date: "Comments (05)",
    title: "Elevate your brand with a the stunning portfolio",
    desc: "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper"
  }
];

const BlogContent = () => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${index + 1}`}
              >
                <div className="img-box">
                  <Link href="/blog-details">
                    <Image
                      src={post.image}
                      alt="Blog Thumbnail"
                      width={800}
                      height={450}
                      className="img-primary w-100 h-auto"
                    />
                  </Link>
                </div>
                <div className="blog-classic-content">
                  <div className="blog-classic-tag">
                    <ul>
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-solid fa-tag"></i>
                          <h4 className="tag-title">{post.tag}</h4>
                        </div>
                      </li>
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-regular fa-comment"></i>
                          <h4 className="tag-title">Comments ({post.comments})</h4>
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
                    <Link href="/blog-details">{post.title}</Link>
                  </h2>
                  <p className="para">{post.desc}</p>
                  <div className="tmp-button-here">
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                      href="/blog-details"
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
              <a href="#" className="pagination-btn">2</a>
              <a href="#" className="pagination-btn">3</a>
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

              {/* Recent Post List */}
              <div className="signle-side-bar recent-post-area tmponhover">
                <div className="header">
                  <h3 className="title">Recent Post</h3>
                </div>
                <div className="body">
                  {[
                    { title: "Business Solution", num: "01" },
                    { title: "Web Development Wizardry", num: "08" },
                    { title: "Content Creation and Strategy", num: "05" },
                    { title: "UI/UX Design Innovation", num: "05" }
                  ].map((post, idx) => (
                    <a key={idx} href="#" className="single-post">
                      <span className="single-post-left">
                        <i className="fa-solid fa-arrow-right"></i>
                        <span className="post-title">{post.title}</span>
                      </span>
                      <span className="post-num">({post.num})</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Post Cards */}
              <div className="signle-side-bar recent-post-area tmponhover">
                <div className="header">
                  <h3 className="title">Recent Post</h3>
                </div>
                <div className="body">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="single-post-card tmp-hover-link">
                      <div className="single-post-card-img">
                        <Image
                          src={`/assets/images/blog/single-post-card-img-${num}.png`}
                          alt=""
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="single-post-right">
                        <div className="single-post-top">
                          <i className="fa-regular fa-folder-open"></i>
                          <p className="post-title">Category</p>
                        </div>
                        <h3 className="post-title">
                          <Link className="link" href="/blog-details">
                            {num === 1 ? "Sustainable Solutions: Designing for Tomorrow" :
                             num === 2 ? "Technological Innovations: Shaping the Future" :
                             "Adventure Awaits Exploring the Great Outdoors"}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Me Sidebar */}
              <div className="signle-side-bar tmponhover">
                <div className="header">
                  <h3 className="title">About Me</h3>
                </div>
                <div className="body">
                  <div className="about-me-details">
                    <div className="about-me-details-head">
                      <div className="about-me-img">
                        <Image
                          src="/assets/images/blog/about-me-user-img.png"
                          alt="about-me-user-img"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="about-me-right-content">
                        <h3 className="title">Fatima Afrafy</h3>
                        <p className="para">UI/UX Designer </p>
                        <div className="social-link">
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                      </div>
                    </div>
                    <p className="about-me-para">
                      Aliquam eros justo, posuere loborti viverra ullamcorper posuere
                      viverra .Aliquam eros justo, posuere justo, posuere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="signle-side-bar tmponhover">
                <div className="header">
                  <h3 className="title">Tags</h3>
                </div>
                <div className="body">
                  <div className="tags-wrapper">
                    {[
                      "All Project", "Resume", "Graphics", "Web Design",
                      "CV", "Starts", "Creative Portfolio", "Portfolio",
                      "CV Card", "Start shape"
                    ].map((tag, idx) => (
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
