"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket, Banknote, ScrollText, Users, TrendingUp, Shield, FileText, BarChart3,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { INCUBATION_BENEFITS, INCUBATION_STAGES } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Banknote, ScrollText, Users, TrendingUp, Shield, FileText, BarChart3,
};

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Incubator() {
  const { ref, inView } = useInView(0.06);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="incubator"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Technology Business Incubator"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="section-label">Technology Business Incubator</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-4">
            Where Deep-Tech Ventures<br className="hidden sm:block" />
            Meet Clinical Credibility
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            The DIMHANS Technology Business Incubator (TBI) is India&apos;s only government-backed incubator
            specifically focused on mental health and neuroscience deep-tech. With access to real patient
            cohorts, clinical validation infrastructure, government funding, and top domain mentors, our
            startups launch with an unfair advantage.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {INCUBATION_BENEFITS.map((benefit, i) => {
            const Icon = ICON_MAP[benefit.icon] ?? Rocket;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.04 * i }}
                className="card p-5 group cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-primary)] mb-3 transition-colors duration-300">
                  <Icon size={16} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-[var(--color-border)] rounded-[16px] p-6 lg:p-8 mb-8"
        >
          <h3 className="text-base font-bold text-[var(--color-text)] mb-6">
            Incubation Journey
          </h3>

          {/* Stage Selector — Desktop horizontal */}
          <div className="hidden lg:flex items-center mb-8 relative">
            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--color-border)]" />
            <motion.div
              className="absolute top-5 left-0 h-0.5 bg-[var(--color-primary)] origin-left"
              style={{ width: `${(activeStage / (INCUBATION_STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
            {INCUBATION_STAGES.map((stage, i) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(i)}
                className="relative z-10 flex flex-col items-center gap-2 flex-1"
                aria-pressed={activeStage === i}
                aria-label={`Stage ${stage.step}: ${stage.title}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-250 ${
                  i <= activeStage
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-sm"
                    : "bg-white border-[var(--color-border)] text-[var(--color-text-muted)]"
                }`}>
                  {i < activeStage ? <CheckCircle2 size={16} /> : stage.step}
                </div>
                <span className={`text-[11px] font-semibold transition-colors duration-200 ${
                  i <= activeStage ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                }`}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Stage Detail */}
          <div className="lg:min-h-[80px]">
            {INCUBATION_STAGES.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={false}
                animate={{
                  opacity: activeStage === i ? 1 : 0,
                  display: activeStage === i ? "flex" : "none",
                }}
                className="flex gap-4 items-start"
              >
                <div className="hidden lg:flex w-12 h-12 rounded-[10px] bg-[var(--color-primary)]/8 items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[var(--color-primary)]">{stage.step}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text)] mb-1.5">
                    Stage {stage.step}: {stage.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile stage selector */}
          <div className="flex lg:hidden gap-2 flex-wrap mt-4">
            {INCUBATION_STAGES.map((stage, i) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(i)}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold transition-colors ${
                  activeStage === i
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                }`}
              >
                {stage.step}. {stage.title}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
            <button
              onClick={() => setActiveStage((s) => Math.max(0, s - 1))}
              disabled={activeStage === 0}
              className="btn-ghost text-sm disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous
            </button>
            {activeStage === INCUBATION_STAGES.length - 1 ? (
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-sm py-2 px-4"
              >
                Apply Now <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setActiveStage((s) => Math.min(INCUBATION_STAGES.length - 1, s + 1))}
                className="btn-ghost text-sm"
              >
                Next →
              </button>
            )}
          </div>
        </motion.div>

        {/* Application Portal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative overflow-hidden bg-[var(--color-secondary)] text-white rounded-[16px] p-8 lg:p-10"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-64 h-64 opacity-10" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="160" cy="40" r="120" stroke="white" strokeWidth="40" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Cohort 8 Applications Open · Closes Sep 30, 2026
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold font-display mb-2">
                Ready to build the future of healthcare?
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Join 48+ startups that have validated, funded, and scaled their deep-tech ventures
                through DIMHANS TBI. Apply now for our 8th cohort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-[var(--color-primary)] font-semibold text-sm px-5 py-2.5 rounded-[8px] flex items-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Apply for Incubation <ArrowRight size={14} />
              </button>
              <button
                onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-white/30 text-white font-semibold text-sm px-5 py-2.5 rounded-[8px] hover:bg-white/10 transition-colors"
              >
                Download Guidelines
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
