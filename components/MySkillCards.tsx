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
    const isCurrent = index === activeIndex;
    const isHovered = index === hoverIndex;
    const activeTarget = hoverIndex !== null ? hoverIndex : activeIndex;
    
    let classes = "service-item tmp-scroll-trigger tmp-fade-in";
    if (isCurrent) classes += " current";
    if (index !== activeTarget) classes += " mleave";
    
    return classes;
  };

  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">My Skill</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevated Designs Personalized <br /> the best Experiences
          </h2>
        </div>
        <div className="services-widget v1" ref={widgetRef} onMouseLeave={handleMouseLeave}>
          
          <div 
            className={getClassNames(0)} 
            onMouseEnter={() => handleMouseEnter(0)}
            onClick={() => handleClick(0)}
            style={{ animationOrder: 1 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-building-columns"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">Ui/visual Design</h3>
                <p className="sub-title">21 Done</p>
              </div>
              <p className="card-para">My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands</p>
              <Link href="#" className="read-more-btn">
                Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
            <button className="service-link modal-popup"></button>
          </div>
          
          <div 
            className={getClassNames(1)} 
            onMouseEnter={() => handleMouseEnter(1)}
            onClick={() => handleClick(1)}
            style={{ animationOrder: 2 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-calendar"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">Ui/visual Design</h3>
                <p className="sub-title">21 Done</p>
              </div>
              <p className="card-para">In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design</p>
              <Link href="#" className="read-more-btn">
                Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
              </Link>
            </div>
            <button className="service-link modal-popup"></button>
          </div>
          
          <div 
            className={getClassNames(2)} 
            onMouseEnter={() => handleMouseEnter(2)}
            onClick={() => handleClick(2)}
            style={{ animationOrder: 3 } as React.CSSProperties}
          >
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-pen-nib"></i>
              </div>
              <div className="card-title">
                <h3 className="main-title">Motion Design</h3>
                <p className="sub-title">20 Done</p>
              </div>
              <p className="card-para">Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs</p>
              <Link href="#" className="read-more-btn">
                Read More <span className="read-more-icon"><i className="fa-solid fa-angle-right"></i></span>
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
