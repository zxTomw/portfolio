"use client";

import { useState, useEffect, type ReactNode } from "react";

interface BlurInSpanProps {
  children: ReactNode;
  delay?: number;
}

export default function BlurInSpan({ children, delay = 0 }: BlurInSpanProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`
        inline-block
        transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 blur-none" : "opacity-0 blur-lg"}
      `}
    >
      {children}
    </span>
  );
}
