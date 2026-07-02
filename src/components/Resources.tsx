"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Download, ChevronDown, ChevronUp, FileText, Shield, ScrollText } from "lucide-react";
import { PUBLICATIONS, RESOURCES, FAQS } from "@/lib/data";

function useInView(threshold = 0.06) {
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

const PUB_TYPE_COLORS: Record<string, string> = {
  "Original Research": "text-[var(--color-primary)] bg-[var(--color-primary)]/8",
  "Review": "text-[#00A3E0] bg-[#00A3E0]/8",
  "Meta-Analysis": "text-purple-700 bg-purple-50",
  "RCT": "text-green-700 bg-green-50",
  "Perspective": "text-orange-600 bg-orange-50",
};

const RESOURCE_ICONS: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  Guidelines: ScrollText,
  Policy: Shield,
  Forms: FileText,
};

export default function Resources() {
  const { ref, inView } = useInView(0.05);
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = PUBLICATIONS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.journal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="resources"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Publications and Resources"
      ref={ref}
    >
      <div className="container-site">

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <span className="section-label">Publications</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-2">
                Research Publications
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Browse our indexed peer-reviewed publications across leading international journals.
              </p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <input
                type="search"
                placeholder="Search by title, author, journal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-72 pl-8 pr-4 py-2.5 text-sm border border-[var(--color-border)] rounded-[10px] bg-white focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
                aria-label="Search publications"
              />
            </div>
          </div>

          {/* Publications Table */}
          <div className="bg-white border border-[var(--color-border)] rounded-[14px] overflow-hidden">
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-[3fr,1.5fr,1fr,0.6fr,auto] gap-4 px-5 py-3 bg-[var(--color-surface)] border-b border-[var(--color-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
              <span>Title & Authors</span>
              <span>Journal</span>
              <span>Type</span>
              <span>Year</span>
              <span>Access</span>
            </div>

            <div className="divide-y divide-[var(--color-border)]">
              {filtered.map((pub, i) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.03 * i }}
                  className="flex flex-col lg:grid lg:grid-cols-[3fr,1.5fr,1fr,0.6fr,auto] gap-3 lg:gap-4 px-5 py-4 hover:bg-blue-50/40 transition-colors group"
                  role="row"
                >
                  {/* Title & Authors */}
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)] mb-0.5 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                      {pub.title}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">{pub.authors}</p>
                  </div>

                  {/* Meta items: Stacks as inline tags on mobile, grid columns on desktop */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--color-text-muted)] lg:contents">
                    <div className="flex items-center">
                      <span className="text-xs text-[var(--color-text-secondary)] italic">{pub.journal}</span>
                    </div>
                    <span className="text-[var(--color-border-dark)] lg:hidden">•</span>
                    <div className="flex items-center">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-[4px] ${PUB_TYPE_COLORS[pub.type] ?? ""}`}>
                        {pub.type}
                      </span>
                    </div>
                    <span className="text-[var(--color-border-dark)] lg:hidden">•</span>
                    <div className="flex items-center">
                      <span className="text-xs font-medium">{pub.year}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 lg:mt-0">
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs py-1 px-2 border border-transparent hover:border-[var(--color-primary)]/10"
                        aria-label={`Open DOI for ${pub.title}`}
                      >
                        DOI <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <div className="py-12 text-center text-sm text-[var(--color-text-muted)]">
                  No publications match your search.
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14"
        >
          <span className="section-label">Downloads</span>
          <h2 className="text-2xl font-bold font-display text-[var(--color-text)] mb-6">
            Guidelines, Policies & Forms
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((resource, i) => {
              const Icon = RESOURCE_ICONS[resource.category] ?? FileText;
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.05 * i }}
                  className="card p-5 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-[var(--color-primary)]/8 flex-shrink-0">
                      <Icon size={16} className="text-[var(--color-primary)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{resource.category}</span>
                        <span className="text-[10px] text-[var(--color-text-subtle)]">· {resource.fileType} · {resource.size}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[var(--color-text-muted)]">Updated {resource.updated}</span>
                    <button className="btn-ghost text-xs py-1.5">
                      <Download size={11} /> Download
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <span className="section-label">FAQs</span>
          <h2 className="text-2xl font-bold font-display text-[var(--color-text)] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2 max-w-3xl">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="border border-[var(--color-border)] rounded-[12px] bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[var(--color-surface)] transition-colors"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`faq-${faq.id}`}
                >
                  <span className="text-sm font-semibold text-[var(--color-text)]">{faq.q}</span>
                  {openFaq === faq.id
                    ? <ChevronUp size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                    : <ChevronDown size={16} className="text-[var(--color-text-muted)] flex-shrink-0" />
                  }
                </button>
                <motion.div
                  id={`faq-${faq.id}`}
                  initial={false}
                  animate={{ height: openFaq === faq.id ? "auto" : 0, opacity: openFaq === faq.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border)] pt-3">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
