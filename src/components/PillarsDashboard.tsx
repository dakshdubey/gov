"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, Stethoscope, Microscope, Rocket, Building, Users, Briefcase, FileText, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Landmark,
    title: "About Us",
    description: "Learn about the history, vision, and governance of the Dharwad Institute of Mental Health and Neurosciences since 1956.",
    href: "/about",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    hoverColor: "group-hover:border-blue-500 group-hover:bg-blue-50",
    stats: "Established 1956 · Govt. of Karnataka",
  },
  {
    icon: Stethoscope,
    title: "Clinical Services",
    description: "Explore clinical facilities, outpatient psychiatry care, specialized counseling, de-addiction programs, and rehabilitation.",
    href: "/services",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    hoverColor: "group-hover:border-emerald-500 group-hover:bg-emerald-50",
    stats: "400+ Beds · 18 Clinical Wings",
  },
  {
    icon: Microscope,
    title: "Research & Innovation",
    description: "Discover molecular biology labs, computational neuroscience, pharmacogenomics research, and state/national grants.",
    href: "/research",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    hoverColor: "group-hover:border-purple-500 group-hover:bg-purple-50",
    stats: "140+ Projects · ₹48 Cr+ Funding",
  },
  {
    icon: Rocket,
    title: "Technology Incubator",
    description: "Join India's leading deep-tech healthcare and mental health business incubator. Access funding, labs, and clinical validation.",
    href: "/incubator",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    hoverColor: "group-hover:border-amber-500 group-hover:bg-amber-50",
    stats: "BIRAC-Supported · Cohort 8 Open",
  },
  {
    icon: Building,
    title: "Campus Infrastructure",
    description: "Explore 45,000+ sq ft of co-working spaces, wet laboratories, seminar halls, and high-performance computing centers.",
    href: "/infrastructure",
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    hoverColor: "group-hover:border-rose-500 group-hover:bg-rose-50",
    stats: "8 Labs · Online Booking Simulator",
  },
  {
    icon: Users,
    title: "Faculty & Team",
    description: "Meet the scientists, clinical professors, advisors, and mentors driving our clinical and entrepreneurial ecosystems.",
    href: "/team",
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    hoverColor: "group-hover:border-cyan-500 group-hover:bg-cyan-50",
    stats: "75+ Scientists & Industry Mentors",
  },
  {
    icon: Briefcase,
    title: "Startup Portfolio",
    description: "Meet the cohort of incubated healthcare startups, digital therapeutics platforms, and assistive hardware ventures.",
    href: "/startups",
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    hoverColor: "group-hover:border-indigo-500 group-hover:bg-indigo-50",
    stats: "48 Startups · ₹15 Cr+ Capital Raised",
  },
  {
    icon: FileText,
    title: "Resources & Library",
    description: "Browse peer-reviewed journal papers, download administrative forms, and read guidelines for clinical internships.",
    href: "/resources",
    color: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    hoverColor: "group-hover:border-slate-500 group-hover:bg-slate-50",
    stats: "320+ Publications · Downloadable Forms",
  },
];

export default function PillarsDashboard() {
  return (
    <section className="section-padding bg-[var(--color-surface)] border-b border-[var(--color-border)]" aria-label="Institute Directory Dashboard">
      <div className="container-site max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-center lg:text-left">
          <span className="section-label">Institutional Directory</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
            Core Pillars of Excellence
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Select a division below to explore clinical facilities, active neuroscience research projects, seed funding opportunities for deep-tech healthcare startups, and library resources.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={pillar.href}
                  className="group flex flex-col justify-between h-64 p-6 bg-white border border-[var(--color-border)] rounded-[14px] hover:shadow-md hover:border-[var(--color-primary)]/20 transition-all duration-300"
                >
                  <div>
                    {/* Icon */}
                    <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center border transition-colors duration-300 ${pillar.color} ${pillar.hoverColor}`}>
                      <Icon size={16} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-[var(--color-text)] mt-4 group-hover:text-[var(--color-primary)] transition-colors leading-snug flex items-center gap-1">
                      {pillar.title}
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mt-2 line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Foot stats label */}
                  <div className="text-[10px] font-semibold text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-3 mt-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {pillar.stats}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
