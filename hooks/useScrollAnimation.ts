"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollAnimation = (ref?: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade In
      gsap.utils.toArray<HTMLElement>(".tmp-fade-in").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true, // Only run once
            onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1 }), // Ensure it ends visible
          },
        });
      });

      // Zoom In
      gsap.utils.toArray<HTMLElement>(".tmp-zoom-in").forEach((el) => {
        gsap.from(el, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => gsap.to(el, { scale: 1, opacity: 1, duration: 1 }),
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
