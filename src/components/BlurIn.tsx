"use client";

import { motion } from "framer-motion";

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  as: Tag = "div",
}: BlurInProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
