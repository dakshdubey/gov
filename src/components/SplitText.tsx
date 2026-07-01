"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 120,
      },
    },
  };


  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={childVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
