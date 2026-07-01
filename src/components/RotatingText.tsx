"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Innovation", "Discovery", "Excellence", "Impact"];

export default function RotatingText({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={`relative inline-flex overflow-hidden h-[1.1em] align-bottom ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
        exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block text-[var(--color-primary)]"
      >
        {WORDS[index]}
      </motion.span>
    </span>
  );
}
