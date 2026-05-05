"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimationInitializer = () => {
  useEffect(() => {
    // This component can be used for any global animations 
    // that are NOT handled at the component level.
    // For now, most animations are handled within components using useScrollAnimation hook.
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
};

export default AnimationInitializer;
