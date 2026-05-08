"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MySkillCards = () => {
  useScrollAnimation();
  const widgetRef = useRef<HTMLDivElement>(null);
  const activeBgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const updateActiveBg = (element: HTMLElement | null) => {
    if (!element || !widgetRef.current || !activeBgRef.current) return;

    const widgetRect = widgetRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const topOff = elementRect.top - widgetRect.top;
    const height = elementRect.height;

    activeBgRef.current.style.top = `${topOff}px`;
    activeBgRef.current.style.height = `${height}px`;
  };

  useEffect(() => {
    const activeElement = widgetRef.current?.querySelectorAll('.service-item')[hoverIndex !== null ? hoverIndex : activeIndex] as HTMLElement;
    updateActiveBg(activeElement);

    const handleResize = () => {
      const activeElement = widgetRef.current?.querySelectorAll('.service-item')[hoverIndex !== null ? hoverIndex : activeIndex] as HTMLElement;
      updateActiveBg(activeElement);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, hoverIndex]);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const getClassNames = (index: number) => {
    const activeTarget = hoverIndex !== null ? hoverIndex : activeIndex;
    let classes = "service-item tmp-scroll-trigger tmp-fade-in";
    if (index === activeIndex) classes += " current";
    if (index !== activeTarget) classes += " mleave";
    return classes;
  };

  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Core Expertise</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Engineering High-Performance <br /> Digital Ecosystems
          </h2>
        </div>
        <div className="services-widget v1" ref={widgetRef} onMouseLeave={handleMouseLeave}>

          {/* Skill 1: Full Stack */}
          <div
            className={getClassNames(0)}
            onMouseEnter={() => handleMouseEnter(0)}
            onClick={() => handleClick(0)}
            style={{ "--animation-order": 1 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-layer-group"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">Full Stack Engineering</h3>
                <p className="sub-title">25+ Projects</p>
              </div>
              <p className="card-para">Expertise in the MERN stack and Next.js. I architect scalable backends with Node.js/Express and build high-performance, type-safe frontends using TypeScript and Tailwind CSS.</p>
              <Link href="/services/full-stack" className="read-more-btn">
                View Tech Stack <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
            <button className="service-link modal-popup"></button>
          </div>

          {/* Skill 2: Web3 */}
          <div
            className={getClassNames(1)}
            onMouseEnter={() => handleMouseEnter(1)}
            onClick={() => handleClick(1)}
            style={{ "--animation-order": 2 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-circle-nodes"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">Blockchain & Web3</h3>
                <p className="sub-title">10+ Live dApps</p>
              </div>
              <p className="card-para" style={{ textAlign: "left" }}>Specialized in the Solana ecosystem. I build secure smart contracts, NFT launchpads (Metaplex), staking protocols, and RWA tokenization platforms with seamless wallet integrations.</p>
              <Link href="/services/web3" className="read-more-btn">
                View Web3 Projects <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
            <button className="service-link modal-popup"></button>
          </div>

          {/* Skill 3: AI & Real-Time */}
          <div
            className={getClassNames(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onClick={() => handleClick(2)}
            style={{ "--animation-order": 3 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-microchip-ai"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">AI & Real-Time Systems</h3>
                <p className="sub-title">Production Ready</p>
              </div>
              <p className="card-para" style={{ textAlign: "left" }}>Integrating LLMs (GPT-4) for intelligent agents and building low-latency real-time systems using WebRTC and HLS for global video and audio broadcasting platforms.</p>
              <Link href="/services/ai" className="read-more-btn">
                Discover Solutions <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
            <button className="service-link modal-popup"></button>
          </div>

          <div className="active-bg wow fadeInUp" ref={activeBgRef}></div>
        </div>
      </div>
    </section>
  );
};

export default MySkillCards;