"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, ExternalLink } from "lucide-react";
import { EVENTS } from "@/lib/data";

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

const EVENT_COLORS: Record<string, string> = {
  Conference: "text-[var(--color-primary)] bg-[var(--color-primary)]/8 border-[var(--color-primary)]/20",
  Workshop: "text-[#00A3E0] bg-[#00A3E0]/8 border-[#00A3E0]/20",
  Hackathon: "text-orange-600 bg-orange-50 border-orange-200",
  Seminar: "text-green-700 bg-green-50 border-green-200",
  "Demo Day": "text-purple-700 bg-purple-50 border-purple-200",
};

const REG_COLORS: Record<string, string> = {
  Open: "text-green-700 bg-green-50",
  "Closing Soon": "text-orange-700 bg-orange-50",
  "Invite Only": "text-purple-700 bg-purple-50",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-IN", { day: "2-digit" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    year: d.getFullYear(),
  };
}

export default function Events() {
  const { ref, inView } = useInView(0.06);

  return (
    <section
      id="events"
      className="section-padding bg-white"
      aria-label="Events"
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
            <span className="section-label">Events & Programs</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              Upcoming Events,<br className="hidden sm:block" />
              Workshops & Conferences
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Join world-class scientific conferences, immersive workshops, and high-impact
              hackathons organized by DIMHANS throughout the year.
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
              Subscribe to Updates
            </button>
          </motion.div>
        </div>

        {/* Events Timeline */}
        <div className="space-y-4">
          {EVENTS.map((event, i) => {
            const { day, month, year } = formatDate(event.date);
            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="flex gap-5 p-5 bg-white border border-[var(--color-border)] rounded-[14px] hover:border-[var(--color-primary)]/20 hover:shadow-[var(--shadow-hover)] transition-all duration-250 group"
                aria-label={event.title}
              >
                {/* Date Block */}
                <div className="flex-shrink-0 w-14 flex flex-col items-center justify-center text-center py-1">
                  <div className="text-xl font-bold font-display text-[var(--color-primary)] leading-none">{day}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mt-0.5">{month}</div>
                  <div className="text-[10px] text-[var(--color-text-subtle)]">{year}</div>
                </div>

                {/* Divider */}
                <div className="w-px bg-[var(--color-border)] flex-shrink-0" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-[4px] border ${EVENT_COLORS[event.type] ?? ""}`}>
                      {event.type}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-[4px] ${REG_COLORS[event.registration] ?? ""}`}>
                      {event.registration}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                    <MapPin size={11} />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Register CTA */}
                {event.registration !== "Invite Only" && (
                  <div className="flex-shrink-0 flex items-center">
                    <button
                      className="btn-ghost text-xs"
                      aria-label={`Register for ${event.title}`}
                    >
                      Register <ExternalLink size={11} />
                    </button>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
