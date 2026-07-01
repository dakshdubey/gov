"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SUCCESS_STORIES } from "@/lib/data";

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

const CATEGORY_COLORS: Record<string, string> = {
  "Startup Success": "text-[var(--color-primary)] bg-[var(--color-primary)]/8",
  "Research Impact": "text-[#00A3E0] bg-[#00A3E0]/8",
  "Govt. Collaboration": "text-[var(--color-secondary)] bg-[var(--color-secondary)]/8",
};

export default function SuccessStories() {
  const { ref, inView } = useInView(0.1);
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % SUCCESS_STORIES.length), []);

  const story = SUCCESS_STORIES[current];

  return (
    <section
      id="stories"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Success Stories"
      ref={ref}
    >
      <div className="container-site">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="section-label justify-center">
            Success Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
            Impact That Speaks<br className="hidden sm:block" />
            for Itself
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            From breakthrough research to scaled startups, the DIMHANS ecosystem
            has catalyzed transformational outcomes in mental health and deep-tech.
          </p>
        </motion.div>

        {/* Story Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[var(--color-border)] rounded-[16px] p-8 lg:p-10 shadow-[var(--shadow-lg)]"
              role="article"
              aria-label={`Success story by ${story.name}`}
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-[var(--color-primary)]/20 mb-4" aria-hidden="true" />

              {/* Category */}
              <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-[4px] mb-4 ${CATEGORY_COLORS[story.category] ?? ""}`}>
                {story.category}
              </span>

              {/* Quote Text */}
              <blockquote className="text-base lg:text-lg text-[var(--color-text)] leading-[1.75] mb-6 font-medium">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                  {story.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-text)]">{story.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{story.role}</div>
                </div>
              </div>

              {/* Outcome */}
              <div className="flex items-start gap-2 p-4 bg-[var(--color-surface)] rounded-[10px] border border-[var(--color-border)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-0.5">Outcome</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{story.outcome}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-[var(--color-text-muted)] transition-all duration-200"
              aria-label="Previous story"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {SUCCESS_STORIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-250 ${i === current ? "w-5 h-2 bg-[var(--color-primary)]" : "w-2 h-2 bg-[var(--color-border-dark)]"}`}
                  aria-label={`Story ${i + 1}`}
                  aria-current={i === current}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-[var(--color-text-muted)] transition-all duration-200"
              aria-label="Next story"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
