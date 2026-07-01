"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Ruler, CalendarCheck, ArrowRight } from "lucide-react";
import { INFRASTRUCTURE_ITEMS } from "@/lib/data";

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

// Pattern backgrounds for cards (abstract geometric patterns as data URIs)
const CARD_PATTERNS = [
  "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B5ED7' fill-opacity='0.06'%3E%3Ccircle cx='20' cy='20' r='12'/%3E%3Ccircle cx='0' cy='0' r='12'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M16 0v32M0 16h32' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230B5ED7' stroke-opacity='0.06' stroke-width='1'%3E%3Cpolygon points='30,5 55,20 55,40 30,55 5,40 5,20'/%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='30' height='30' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Crect x='12' y='12' width='16' height='16' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Ccircle cx='25' cy='25' r='10' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 22h44M22 0v44' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Ccircle cx='22' cy='22' r='8' fill='%230B5ED7' fill-opacity='0.05'/%3E%3C/svg%3E",
];

export default function Infrastructure() {
  const { ref, inView } = useInView(0.06);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="infrastructure"
      className="section-padding bg-white"
      aria-label="Infrastructure and Facilities"
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
            <span className="section-label">Infrastructure</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              World-Class Facilities<br className="hidden sm:block" />
              for Research & Innovation
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              Spanning 45,000+ sq ft of purpose-built research and innovation space, our campus provides
              everything a researcher, clinician, or startup needs to move from idea to impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary text-sm"
            >
              Book a Facility <CalendarCheck size={14} />
            </button>
          </motion.div>
        </div>

        {/* Infrastructure Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INFRASTRUCTURE_ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className={`relative overflow-hidden rounded-[14px] border transition-all duration-250 cursor-default ${
                hovered === item.id
                  ? "border-[var(--color-primary)]/30 shadow-[var(--shadow-hover)]"
                  : "border-[var(--color-border)] shadow-[var(--shadow-card)]"
              } bg-white`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.title}
            >
              {/* Pattern Header */}
              <div
                className="h-24 relative"
                style={{
                  backgroundImage: `url("${CARD_PATTERNS[i % CARD_PATTERNS.length]}")`,
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
                {/* Capacity badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[var(--color-border)] rounded-[6px] text-[10px] font-semibold text-[var(--color-text-muted)]">
                  {item.capacity}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`text-sm font-bold mb-2 transition-colors duration-200 ${
                  hovered === item.id ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                }`}>
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 pt-3 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                    <Users size={11} />
                    <span>{item.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                    <Ruler size={11} />
                    <span>{item.area}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Campus Overview Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Campus Area", value: "45,000+ sq ft" },
            { label: "Specialized Labs", value: "8 Labs" },
            { label: "24/7 Access", value: "For Incubatees" },
            { label: "Booking Portal", value: "Online System" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-[var(--color-surface)] rounded-[12px] border border-[var(--color-border)] text-center"
            >
              <div className="text-sm font-bold text-[var(--color-primary)] mb-0.5">{item.value}</div>
              <div className="text-[11px] text-[var(--color-text-muted)]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
