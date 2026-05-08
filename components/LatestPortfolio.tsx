"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url?: string;
  techStack: string[];
}

const featuredProjects: Project[] = [
  {
    slug: "orion-ai-agent",
    title: "Orion AI Agent",
    subtitle: "AI Operating System",
    description:
      "AI operating system for service businesses. Handles 24/7 customer conversations, lead capture, appointment booking, and automated reminders across WhatsApp, Telegram, Instagram, and web chat.",
    image: "/assets/images/latest-portfolio/orion-ai.png",
    url: "https://theorionai.app",
    techStack: ["Next.js", "Node.js", "TypeScript", "WhatsApp API"],
  },
  {
    slug: "jito-cabal",
    title: "Jito Cabal",
    subtitle: "NFT Minting Platform",
    description:
      "Built from scratch — full-stack NFT minting platform on Solana. Next.js frontend, MongoDB backend, Metaplex collection integration, and secure wallet authentication.",
    image: "/assets/images/latest-portfolio/Jito-Cabal.png",
    url: "https://jitocabal.com",
    techStack: ["Next.js", "Solana", "MongoDB", "Metaplex"],
  },
  {
    slug: "everyone-world",
    title: "Everyone.world",
    subtitle: "Social-TV Platform",
    description:
      "Built from scratch — world's first Social-TV global live stream platform. Full-stack: Next.js, Node.js, MongoDB, Ethereum smart contracts, and AWS infrastructure.",
    image: "/assets/images/latest-portfolio/everyone.png",
    url: "https://everyone.world",
    techStack: ["Next.js", "Node.js", "MongoDB", "Ethereum", "AWS"],
  },
  {
    slug: "schindlersx",
    title: "SchindlersX",
    subtitle: "RWA Investment Platform",
    description:
      "Fractional ownership platform for tokenized real-world asset investment. Built with Next.js and Solana smart contract integration.",
    image: "/assets/images/latest-portfolio/scx.png",
    url: "https://schindlersx.io",
    techStack: ["Next.js", "Solana", "TypeScript"],
  },
];

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
            From AI-powered business tools to blockchain platforms and real-time streaming apps — here's a selection of my most impactful work.
          </p>
        </div>
        <div className="row">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className="col-lg-6 col-sm-6">
              <div
                className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
              >
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link
                      className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                      href={`/project-details/${project.slug}`}
                    >
                      <Image
                        className="w-100"
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                      />
                    </Link>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <Link className="link" href={`/project-details/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="portfoli-card-para">{project.subtitle}</p>
                  </div>
                  <Link href={`/project-details/${project.slug}`} className="tmp-arrow-icon-btn">
                    <div className="btn-inner">
                      <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                      <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPortfolio;