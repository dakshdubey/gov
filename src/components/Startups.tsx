"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from "lucide-react";
import { STARTUPS } from "@/lib/data";

function useInView(threshold = 0.1) {
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

const STATUS_COLORS: Record<string, string> = {
  Active: "text-green-700 bg-green-50 border-green-200",
  Graduated: "text-blue-700 bg-blue-50 border-blue-200",
  "Pre-Seed": "text-orange-700 bg-orange-50 border-orange-200",
};

const INDUSTRY_ICONS: Record<string, string> = {
  "AI Diagnostics": "🧠",
  "Digital Therapeutics": "💊",
  Pharmacogenomics: "🧬",
  "Medical Imaging": "🔬",
  "Assistive Technology": "🤝",
  "Forensic Psychiatry": "⚖️",
};

export default function Startups() {
  const { ref, inView } = useInView(0.08);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const MAX = STARTUPS.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + MAX) % MAX), [MAX]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % MAX), [MAX]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Get visible startups (circular)
  const visible = Array.from({ length: visibleCount }, (_, i) => STARTUPS[(current + i) % MAX]);

  return (
    <section
      id="startups"
      className="section-padding bg-white"
      aria-label="Incubated Startups"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Startup Portfolio</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              Ventures We&apos;ve<br className="hidden sm:block" />
              Built & Backed
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg leading-relaxed">
              From seed validation to Series A, our portfolio companies are redefining mental health
              technology across India and globally.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50 transition-all duration-200"
              aria-label="Previous startup"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-[var(--color-text-muted)] font-medium">
              {current + 1} / {MAX}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50 transition-all duration-200"
              aria-label="Next startup"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <AnimatePresence mode="popLayout">
            {visible.map((startup, i) => (
              <motion.article
                key={`${startup.id}-${current}-${i}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="card p-6 flex flex-col"
                aria-label={startup.name}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-lg">
                      {INDUSTRY_ICONS[startup.industry] ?? "🚀"}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--color-text)]">{startup.name}</h3>
                      <p className="text-[11px] text-[var(--color-text-muted)]">{startup.industry}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-[4px] border ${STATUS_COLORS[startup.status] ?? "text-gray-600 bg-gray-50 border-gray-200"}`}>
                    {startup.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-4">
                  {startup.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text)]">
                      <TrendingUp size={11} className="text-[var(--color-primary)]" />
                      {startup.raised} raised
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] mt-0.5">
                      {startup.stage} · Founded {startup.founded}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[var(--color-text-muted)]">Founder</div>
                    <div className="text-xs font-medium text-[var(--color-text-secondary)]">{startup.founder}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mb-8">
          {STARTUPS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-250 ${
                i === current ? "w-6 h-2 bg-[var(--color-primary)]" : "w-2 h-2 bg-[var(--color-border-dark)] hover:bg-[var(--color-primary)]/40"
              }`}
              aria-label={`Go to startup ${i + 1}`}
              aria-current={i === current}
            />
          ))}
        </div>

        {/* Total Funding Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Portfolio Startups", value: "48+" },
            { label: "Total Funds Raised", value: "₹38+ Cr" },
            { label: "Jobs Created", value: "340+" },
            { label: "Graduation Rate", value: "78%" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4 bg-[var(--color-surface)] rounded-[12px] border border-[var(--color-border)]">
              <div className="text-xl font-bold font-display text-[var(--color-primary)] mb-0.5">{item.value}</div>
              <div className="text-[11px] text-[var(--color-text-muted)]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
