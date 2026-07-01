"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  /** Trigger immediately or wait for intersection */
  triggerOnView?: boolean;
}

export default function CountUp({
  target,
  suffix = "",
  duration = 2200,
  className = "",
  triggerOnView = true,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!triggerOnView);
  const ref = useRef<HTMLSpanElement>(null);

  // IntersectionObserver to start count when visible
  useEffect(() => {
    if (!triggerOnView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggerOnView]);

  // Animation loop
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={`tabular-nums ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {count.toLocaleString("en-IN")}{suffix}
    </motion.span>
  );
}
