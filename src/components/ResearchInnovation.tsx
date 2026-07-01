"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Cpu, Network, Activity, Dna, Scale, Waves, Smile, ArrowRight, X, FileText
} from "lucide-react";
import { RESEARCH_AREAS } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  Brain, Cpu, Network, Activity, Dna, Scale, Waves, Smile,
};

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

export default function ResearchInnovation() {
  const { ref, inView } = useInView(0.08);
  const [selected, setSelected] = useState<string | null>(null);
  const selectedArea = RESEARCH_AREAS.find((r) => r.id === selected);

  return (
    <section
      id="research"
      className="section-padding bg-white"
      aria-label="Research and Innovation"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="section-label">Research & Innovation</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              Frontier Research Across<br className="hidden sm:block" />
              8 Core Disciplines
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              Our multidisciplinary research programmes span fundamental neuroscience to translational
              AI applications, generating high-impact publications and patents that shape global practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="text-right">
              <div className="text-2xl font-bold font-display text-[var(--color-primary)]">320+</div>
              <div className="text-xs text-[var(--color-text-muted)]">Peer-reviewed papers</div>
            </div>
            <div className="w-px h-10 bg-[var(--color-border)]" />
            <div className="text-right">
              <div className="text-2xl font-bold font-display text-[var(--color-primary)]">28</div>
              <div className="text-xs text-[var(--color-text-muted)]">Patents filed</div>
            </div>
          </motion.div>
        </div>

        {/* Research Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {RESEARCH_AREAS.map((area, i) => {
            const Icon = ICON_MAP[area.icon] ?? Brain;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.04 * i }}
                className="group relative cursor-pointer"
                onClick={() => setSelected(area.id)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${area.title}`}
                onKeyDown={(e) => e.key === "Enter" && setSelected(area.id)}
              >
                <div className="h-full p-5 bg-white border border-[var(--color-border)] rounded-[14px] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-hover)] transition-all duration-250">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-[10px] mb-4"
                    style={{ backgroundColor: `${area.color}12` }}
                  >
                    <Icon size={18} color={area.color} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                    {area.title}
                  </h3>

                  {/* Description (truncated) */}
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">
                    {area.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
                      {area.papers} papers
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Read More <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Research Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3 items-center justify-between p-5 bg-[var(--color-surface)] rounded-[14px] border border-[var(--color-border)]"
        >
          <p className="text-sm text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text)]">Funding Sources:</span>{" "}
            ICMR · DST · BIRAC · MEITY · WHO · NIH Fogarty · Wellcome Trust
          </p>
          <button
            onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost text-sm"
          >
            View Publications <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && selectedArea && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto bg-white rounded-[16px] shadow-xl p-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              role="dialog"
              aria-modal="true"
              aria-label={selectedArea.title}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-[10px]"
                    style={{ backgroundColor: `${selectedArea.color}12` }}
                  >
                    {(() => {
                      const Icon = ICON_MAP[selectedArea.icon] ?? Brain;
                      return <Icon size={20} color={selectedArea.color} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--color-text)]">{selectedArea.title}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{selectedArea.papers} publications</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] rounded-[6px] transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                {selectedArea.description}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary text-sm py-2 flex-1 justify-center"
                >
                  <FileText size={14} />
                  View Publications
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
