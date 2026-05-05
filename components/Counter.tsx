"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: end,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(obj.value));
      },
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 85%",
      },
    });
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

export default Counter;
