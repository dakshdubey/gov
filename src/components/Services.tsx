"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope, HeartHandshake, ScanLine, FlaskConical, Lightbulb, MonitorSmartphone,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Stethoscope, HeartHandshake, ScanLine, FlaskConical, Lightbulb, MonitorSmartphone,
};

function useInView(threshold = 0.15) {
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

export default function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="services"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Clinical and Research Services"
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
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              Comprehensive Care &<br className="hidden sm:block" /> Innovation Programs
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              From frontline clinical care to cutting-edge research support and digital health innovation,
              DIMHANS delivers an integrated spectrum of services across the mental health ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-secondary text-sm"
            >
              Get in Touch
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? FlaskConical;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="card card-lift group p-6 cursor-default"
                tabIndex={0}
                role="article"
                aria-label={service.title}
              >
                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center rounded-[10px] bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-primary)] mb-4 transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-primary)] bg-[var(--color-primary)]/8 rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white border border-[var(--color-border)] rounded-[12px]"
        >
          <p className="text-sm text-[var(--color-text-secondary)] text-center sm:text-left">
            <strong className="text-[var(--color-text)]">OPD Hours:</strong> Monday – Saturday, 9:00 AM – 4:00 PM IST.
            Emergency services available 24/7.
          </p>
          <a
            href="tel:+918362460000"
            className="btn-primary text-sm py-2 px-4 flex-shrink-0"
          >
            Call OPD: +91-836-2460000
          </a>
        </motion.div>
      </div>
    </section>
  );
}
