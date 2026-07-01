"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, FlaskConical, Brain, Microscope, Activity } from "lucide-react";
import { STATS } from "@/lib/data";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof STATS[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.value, 1800 + index * 200, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      className="text-center lg:text-left"
    >
      <div className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-primary)] tracking-tight leading-none">
        {count}{stat.suffix}
      </div>
      <div className="text-[13px] font-semibold text-[var(--color-text)] mt-1 mb-0.5">{stat.label}</div>
      <div className="text-xs text-[var(--color-text-muted)]">{stat.description}</div>
    </motion.div>
  );
}

// Floating element
function FloatingNode({ x, y, delay, icon: Icon, label }: {
  x: string; y: string; delay: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <motion.div
      className="absolute hidden xl:flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border border-[var(--color-border)] rounded-[10px] shadow-lg text-xs font-medium text-[var(--color-text-secondary)]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={14} className="text-[var(--color-primary)]" />
      </motion.div>
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIncubator = () => {
    document.getElementById("incubator")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResearch = () => {
    document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64 0H0V64' stroke='%230B5ED7' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Soft accent gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgb(11 94 215 / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top-right subtle accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgb(0 163 224 / 0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Floating Research Nodes */}
      <FloatingNode x="8%" y="28%" delay={0.8} icon={Brain} label="Neuroscience Lab" />
      <FloatingNode x="80%" y="22%" delay={1.2} icon={FlaskConical} label="Research Projects" />
      <FloatingNode x="82%" y="62%" delay={1.6} icon={Activity} label="Digital Diagnostics" />
      <FloatingNode x="6%" y="68%" delay={1.0} icon={Microscope} label="Pharmacogenomics" />

      {/* Abstract neural network SVG — decorative */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] opacity-[0.03] pointer-events-none hidden xl:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        {[
          [80, 80], [200, 60], [320, 100], [140, 180], [260, 200],
          [80, 280], [200, 320], [340, 280], [160, 340],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#0B5ED7" />
        ))}
        {[
          [80, 80, 200, 60], [200, 60, 320, 100], [80, 80, 140, 180],
          [200, 60, 260, 200], [320, 100, 260, 200], [140, 180, 260, 200],
          [140, 180, 80, 280], [260, 200, 340, 280], [80, 280, 200, 320],
          [200, 320, 340, 280], [200, 320, 160, 340],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0B5ED7" strokeWidth="1" />
        ))}
      </svg>

      {/* Hero Content */}
      <div className="container-site relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Government Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[6px] mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold text-[var(--color-text-secondary)] tracking-wide uppercase">
              Government of Karnataka · Est. 1956
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-[var(--color-text)] leading-[1.05] tracking-tight mb-6"
          >
            Advancing{" "}
            <span className="text-[var(--color-primary)]">Mental Health,</span>
            <br />
            Neuroscience &<br />
            Deep-Tech{" "}
            <span className="text-[var(--color-primary)]">Innovation</span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-8"
          >
            DIMHANS is India&apos;s premier government-funded institute for mental health research,
            neurosciences, and technology incubation — bridging clinical excellence with deep-tech
            innovation to transform healthcare outcomes at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-16 h-px bg-[var(--color-border-dark)] mb-10"
          />

          {/* Stats Row */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} inView={statsInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-[var(--color-text-subtle)]"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
