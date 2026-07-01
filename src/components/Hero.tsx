"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, FlaskConical, Brain, Microscope, Activity } from "lucide-react";
import { STATS } from "@/lib/data";
import AnimatedGridPattern from "@/components/AnimatedGridPattern";
import BlurIn from "@/components/BlurIn";
import CountUp from "@/components/CountUp";
import RotatingText from "@/components/RotatingText";

// Floating badge node
function FloatingNode({
  x, y, delay, icon: Icon, label,
}: {
  x: string; y: string; delay: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <motion.div
      className="absolute hidden xl:flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm border border-[var(--color-border)] rounded-[10px] shadow-md text-xs font-medium text-[var(--color-text-secondary)]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.85, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={13} className="text-[var(--color-primary)]" />
      </motion.span>
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToIncubator = () =>
    document.getElementById("incubator")?.scrollIntoView({ behavior: "smooth" });
  const scrollToResearch = () =>
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
      aria-label="Hero — DIMHANS Research Institute"
    >
      {/* === ANIMATED DOT GRID BACKGROUND === */}
      <AnimatedGridPattern
        dotColor="rgba(11,94,215,0.14)"
        spotlightColor="rgba(11,94,215,0.045)"
        gap={30}
        dotSize={1.3}
      />

      {/* Soft top radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(11,94,215,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Top-right accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(0,163,224,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* === FLOATING LAB NODES === */}
      <FloatingNode x="7%"  y="26%" delay={0.9}  icon={Brain}       label="Neuroscience Lab" />
      <FloatingNode x="79%" y="21%" delay={1.3}  icon={FlaskConical} label="Research Projects" />
      <FloatingNode x="81%" y="63%" delay={1.7}  icon={Activity}    label="Digital Diagnostics" />
      <FloatingNode x="5%"  y="69%" delay={1.1}  icon={Microscope}  label="Pharmacogenomics" />

      {/* === NEURAL SVG DECORATION === */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[42%] opacity-[0.028] pointer-events-none hidden xl:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        {[
          [80,80],[200,60],[320,100],[140,180],[260,200],
          [80,280],[200,320],[340,280],[160,340],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#0B5ED7" />
        ))}
        {[
          [80,80,200,60],[200,60,320,100],[80,80,140,180],
          [200,60,260,200],[320,100,260,200],[140,180,260,200],
          [140,180,80,280],[260,200,340,280],[80,280,200,320],
          [200,320,340,280],[200,320,160,340],
        ].map(([x1,y1,x2,y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0B5ED7" strokeWidth="1" />
        ))}
      </svg>

      {/* === HERO CONTENT === */}
      <div className="container-site relative z-10 pt-32 pb-16">
        <div className="max-w-3xl mx-auto lg:mx-0">

          {/* Government badge */}
          <BlurIn
            as="div"
            delay={0}
            duration={0.5}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-[var(--color-border)] rounded-[6px] mb-7 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] inline-block" />
            <span className="text-xs font-semibold text-[var(--color-text-secondary)] tracking-wide uppercase">
              Government of Karnataka · Est. 1956
            </span>
          </BlurIn>

          {/* === MAIN HEADING with RotatingText === */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold font-display text-[var(--color-text)] leading-[1.08] tracking-tight mb-6">
            {/* Line 1: BlurIn */}
            <BlurIn as="span" delay={0.08} duration={0.65} className="block">
              Advancing Mental Health,
            </BlurIn>

            {/* Line 2: BlurIn */}
            <BlurIn as="span" delay={0.18} duration={0.65} className="block">
              Neuroscience &amp;
            </BlurIn>

            {/* Line 3: static "Deep-Tech" + RotatingText word */}
            <BlurIn as="span" delay={0.28} duration={0.65} className="block">
              Deep-Tech{" "}
              <RotatingText className="font-bold" />
            </BlurIn>
          </h1>

          {/* Sub-heading */}
          <BlurIn
            as="p"
            delay={0.42}
            duration={0.65}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-9"
          >
            DIMHANS is India&apos;s premier government-funded institute for mental health research,
            neurosciences, and technology incubation — bridging clinical excellence with deep-tech
            innovation to transform healthcare outcomes at scale.
          </BlurIn>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={scrollToIncubator}
              className="btn-primary gap-2"
              aria-label="Apply for Incubation"
            >
              Apply for Incubation
              <ArrowRight size={16} />
            </button>
            <button
              onClick={scrollToResearch}
              className="btn-secondary gap-2"
              aria-label="Explore Research"
            >
              Explore Research
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="w-16 h-px bg-[var(--color-border-dark)] mb-10"
          />

          {/* === STATS ROW using CountUp === */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-center lg:text-left"
              >
                <div className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-primary)] tracking-tight leading-none">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-[13px] font-semibold text-[var(--color-text)] mt-1 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">{stat.description}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
        onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-[var(--color-text-subtle)]"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
          <ChevronDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
