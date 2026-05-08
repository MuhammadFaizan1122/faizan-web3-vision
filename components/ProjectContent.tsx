"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/app/data/projects";

// Map projects to the shape this component expects
const projectsData = projects.map((p) => ({
  id: p.slug,
  slug: p.slug,
  title: p.title,
  category: p.techStack ?? [],
  image: p.image,
  tags: p.techStack ?? [],
  url: p.url,
}));

const tabs = ["All", "Next.js", "Solana", "Node.js", "MongoDB"];

const ProjectContent = () => {
  const [activeTab, setActiveTab] = useState("All");
  useScrollAnimation();

  const filteredProjects =
    activeTab === "All"
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
                    <div
                      className={`latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${
                        (index % 4) + 1
                      }`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link
                            className="tmp-scroll-trigger tmp-zoom-in"
                            href={`/projects/${project.slug}`}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
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
                            <Link href={`/projects/${project.slug}`}>
                              {project.title}
                            </Link>
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
                          href={`/projects/${project.slug}`}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">View Project</span>
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
