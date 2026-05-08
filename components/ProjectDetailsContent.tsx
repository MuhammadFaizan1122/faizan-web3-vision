"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";
import { Project } from "@/app/data/projects";

interface Props {
  project: Project;
}

const ProjectDetailsContent = ({ project }: Props) => {
  useScrollAnimation();
  useHoverAnimation();

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap tmp-scroll-trigger tmp-fade-in animation-order-1 !max-h-[600px]">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-100  object-cover"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                {project.title}
              </h2>
              <p className="docs tmp-scroll-trigger tmp-fade-in animation-order-3">
                {project.description}
              </p>

              {project.techStack && project.techStack.length > 0 && (
                <div className="check-box-wrap tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <ul>
                    {project.techStack.map((tech) => (
                      <li key={tech}>
                        <h4 className="check-box-item">
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                          {tech}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h2 className="mini-title tmp-scroll-trigger tmp-fade-in animation-order-6">
                About This Project
              </h2>
              <p className="docs tmp-scroll-trigger tmp-fade-in animation-order-7">
                {project.description}
              </p>

              <div className="project-details-swiper-wrapper tmp-scroll-trigger tmp-fade-in animation-order-8">
                <div className="swiper project-details-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="project-details-img">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={400}
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-details-swiper-btn">
                  <div className="project-swiper-button-prev">
                    <span>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    Previous
                  </div>
                  <div className="project-swiper-button-next">
                    Next{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <section className="get-in-touch-area pt--80 tmp-scroll-trigger tmp-fade-in animation-order-9">
              <div className="container p-0">
                <div className="contact-get-in-touch-wrap">
                  <div className="get-in-touch-wrapper tmponhover">
                    <div className="row g-5 align-items-center">
                      <div className="col-lg-12">
                        <div className="contact-inner">
                          <div className="contact-form">
                            <form className="tmp-dynamic-form" id="contact-form">
                              <div className="contact-form-wrapper row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      className="input-field"
                                      name="contact-name"
                                      id="contact-name"
                                      placeholder="Your Name"
                                      type="text"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      className="input-field"
                                      name="contact-phone"
                                      id="contact-phone"
                                      placeholder="Phone Number"
                                      type="tel"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      className="input-field"
                                      id="contact-email"
                                      name="contact-email"
                                      placeholder="Your Email"
                                      type="email"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      className="input-field"
                                      type="text"
                                      id="subject"
                                      name="subject"
                                      placeholder="Subject"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <textarea
                                      className="input-field"
                                      placeholder="Your Message"
                                      name="contact-message"
                                      id="contact-message"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="tmp-button-here">
                                    <button
                                      className="tmp-btn hover-icon-reverse radius-round w-100"
                                      name="submit"
                                      type="submit"
                                      id="submit"
                                    >
                                      <span className="icon-reverse-wrapper">
                                        <span className="btn-text">
                                          Appointment Now
                                        </span>
                                        <span className="btn-icon">
                                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </span>
                                        <span className="btn-icon">
                                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
              <div className="header">
                <h3 className="title">Project Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">
                  Project: <span>{project.title}</span>
                </div>
                <div className="project-details-info">
                  Website:{" "}
                  <span>
                    {project.url ? (
                      <Link href={project.url} target="_blank">
                        {project.subtitle}
                      </Link>
                    ) : (
                      project.subtitle
                    )}
                  </span>
                </div>
                <div className="project-details-info">
                  Tech:{" "}
                  <span>{project.techStack?.join(", ")}</span>
                </div>
                {project.url && (
                  <div className="button-area-banner-two tmp-fade-in">
                    <Link className="tmp-btn hover-icon-reverse radius-round btn-md "
                      href={project.url}
                      target="_blank"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Visit Live Site</span>
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      </span>
                    </Link>
                  </div>
                )}
                {/* {project.url && (
                  <div className="project-details-info">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md mt--20"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Visit Live Site</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
