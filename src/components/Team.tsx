"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/data";

type Category = "all" | "leadership" | "advisor" | "researcher" | "mentor";

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Leadership", value: "leadership" },
  { label: "Advisors", value: "advisor" },
  { label: "Researchers", value: "researcher" },
  { label: "Mentors", value: "mentor" },
];

const INITIALS_COLORS = [
  ["#0B5ED7", "#EBF2FF"],
  ["#114B8B", "#E8F0F9"],
  ["#00A3E0", "#E0F7FF"],
  ["#1a5fa8", "#EBF2FF"],
  ["#05639b", "#E0F7FF"],
];

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

export default function Team() {
  const { ref, inView } = useInView(0.06);
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = TEAM_MEMBERS.filter(
    (m) => activeFilter === "all" || m.category === activeFilter
  );

  return (
    <section
      id="team"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Team"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-8"
        >
          <span className="section-label">Our Team</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
            Minds Behind<br className="hidden sm:block" /> the Mission
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
            Our multidisciplinary team of clinicians, scientists, engineers, and entrepreneurs
            collaborate to advance mental health and neuroscience globally.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Filter team members"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              role="tab"
              aria-selected={activeFilter === f.value}
              className={`px-3.5 py-2 rounded-[8px] text-xs font-semibold transition-all duration-200 ${
                activeFilter === f.value
                  ? "bg-[var(--color-primary)] text-white shadow-sm"
                  : "bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 text-[10px] ${activeFilter === f.value ? "opacity-70" : "opacity-50"}`}>
                ({f.value === "all" ? TEAM_MEMBERS.length : TEAM_MEMBERS.filter(m => m.category === f.value).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((member, i) => {
            const [fg, bg] = INITIALS_COLORS[i % INITIALS_COLORS.length];
            const initials = member.name
              .split(" ")
              .filter((_, i, a) => i === 0 || i === a.length - 1)
              .map((n) => n[0])
              .join("");

            return (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.03 * i }}
                className="card p-5 flex gap-4 items-start group"
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-[10px] flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: bg, color: fg }}
                  aria-hidden="true"
                >
                  {initials}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[var(--color-text)] truncate group-hover:text-[var(--color-primary)] transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mb-0.5">{member.role}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mb-2">{member.department}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.split(", ").map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)] bg-[var(--color-surface)] rounded-[3px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white border border-[var(--color-border)] rounded-[12px]"
        >
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Join our growing team</p>
            <p className="text-xs text-[var(--color-text-muted)]">Research positions, clinical roles, and mentorship opportunities available.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary text-sm py-2 px-4 flex-shrink-0"
          >
            View Openings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
