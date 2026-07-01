"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { TIMELINE, SITE } from "@/lib/data";

function useInView(threshold = 0.2) {
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

const CORE_VALUES = [
  "Scientific Integrity",
  "Clinical Excellence",
  "Inclusive Innovation",
  "Ethical Practice",
  "Community Impact",
  "Collaborative Research",
];

export default function About() {
  const { ref: sectionRef, inView } = useInView(0.15);
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-label="About DIMHANS"
      ref={sectionRef}
    >
      <div className="container-site">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="section-label">About DIMHANS</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-4">
            India&apos;s Foremost Institute for<br className="hidden sm:block" />
            Mental Health & Neurosciences
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            For over six decades, DIMHANS has been at the vanguard of mental health care, research, and
            policy in India, now expanding its mandate to encompass deep-tech innovation and startup incubation.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">

          {/* Left — Overview + Values */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="prose prose-sm max-w-none mb-8">
              <p className="text-[var(--color-text-secondary)] leading-[1.8] mb-4">
                The {SITE.fullName} (DIMHANS) was established in {SITE.established} by the Government of
                Karnataka as a dedicated centre for the treatment, education, and research of mental and
                neurological disorders. Recognized as a Deemed University since 2005, DIMHANS delivers
                postgraduate medical education alongside pioneering clinical care and research.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-[1.8]">
                In 2018, DIMHANS launched its Technology Business Incubator (TBI) — one of the few
                government-backed incubators in India specifically focused on deep-tech solutions for
                mental health and neurosciences — transforming the institute into a full-stack innovation
                ecosystem trusted by BIRAC, DST, and MEITY.
              </p>
            </div>

            {/* Vision / Mission cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: Eye,
                  title: "Our Vision",
                  text: "A world where mental health is understood, accessible, and destigmatized through science and technology.",
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To deliver world-class clinical care, translational research, and technology incubation advancing the neurosciences.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[var(--color-primary)]/10 mb-3">
                    <Icon size={16} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-1.5">{title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Heart size={14} className="text-[var(--color-primary)]" />
                <span className="text-sm font-semibold text-[var(--color-text)]">Core Values</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CORE_VALUES.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--color-border)] rounded-[6px] text-xs font-medium text-[var(--color-text-secondary)]"
                  >
                    <CheckCircle2 size={11} className="text-[var(--color-primary)]" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-bold text-[var(--color-text)]">Institutional History</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--color-border)]" />

              <div className="space-y-1">
                {TIMELINE.map((item, i) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveTimeline(i)}
                    className={`relative w-full text-left flex gap-5 p-4 rounded-[12px] transition-all duration-200 group ${
                      activeTimeline === i
                        ? "bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20"
                        : "hover:bg-[var(--color-surface)]"
                    }`}
                    aria-pressed={activeTimeline === i}
                    aria-label={`${item.year}: ${item.title}`}
                  >
                    {/* Year dot */}
                    <div className={`relative z-10 w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200 ${
                      activeTimeline === i
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "bg-white border-2 border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-primary)]/40"
                    }`}>
                      {item.year.slice(-2)}
                    </div>

                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                          {item.year}
                        </span>
                      </div>
                      <h3 className={`text-sm font-semibold mb-0.5 transition-colors ${
                        activeTimeline === i ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                      }`}>
                        {item.title}
                      </h3>
                      <motion.p
                        initial={false}
                        animate={{ height: activeTimeline === i ? "auto" : 0, opacity: activeTimeline === i ? 1 : 0 }}
                        className="text-xs text-[var(--color-text-secondary)] leading-relaxed overflow-hidden"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] rounded-[14px] overflow-hidden border border-[var(--color-border)]"
        >
          {[
            { label: "Beds", value: "400+", desc: "Inpatient capacity" },
            { label: "Departments", value: "18", desc: "Clinical & research" },
            { label: "Countries", value: "12+", desc: "Research collaborations" },
            { label: "Govt. Grants", value: "₹48 Cr+", desc: "Active funding" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-6 py-5">
              <div className="text-2xl font-bold font-display text-[var(--color-primary)] mb-0.5">{item.value}</div>
              <div className="text-xs font-semibold text-[var(--color-text)] mb-0.5">{item.label}</div>
              <div className="text-[11px] text-[var(--color-text-muted)]">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
