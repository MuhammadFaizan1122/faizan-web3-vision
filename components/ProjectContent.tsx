"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projectsData = [
  {
    id: 1,
    title: "SAAS website design",
    category: ["Branding", "Design"],
    image: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    tags: ["Figma", "Figma"],
  },
  {
    id: 2,
    title: "Workout App design",
    category: ["Design", "Content writing"],
    image: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    tags: ["Adobe", "Webflow", "Ai"],
  },
  {
    id: 3,
    title: "Workout App design",
    category: ["Design", "Marketing"],
    image: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    tags: ["Figma", "Framer", "Wordpress"],
  },
  {
    id: 4,
    title: "Dashboard design",
    category: ["Design", "Branding"],
    image: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    tags: ["Adobe", "Webflow"],
  },
];

const tabs = ["All", "Branding", "Design", "Content writing", "Marketing"];

const ProjectContent = () => {
  const [activeTab, setActiveTab] = useState("All");
  useScrollAnimation();

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((project) => project.category.includes(activeTab));

  return (
    <section className="latest-portfolio-area custom-column-grid tmp-section-gap">
      <div className="container">
        <div className="latest-portfolio-tabs-area">
          <nav>
            <ul className="nav nav-tabs" role="tablist">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    className={`nav-link ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    type="button"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="tab-content bg-blur-style-one">
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="row">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="col-lg-6">
                    <div className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${(index % 4) + 1}`}>
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link className="tmp-scroll-trigger tmp-zoom-in" href="/project-details">
                            <Image
                              src={project.image}
                              alt="Thumbnail"
                              width={800}
                              height={500}
                              className="w-100"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <Link href="/project-details">{project.title}</Link>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {project.tags.map((tag, tagIndex) => (
                                <li key={tagIndex}>
                                  <a href="#" className="tag-item">
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Link
                          className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                          href="/project-details"
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">View design</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
