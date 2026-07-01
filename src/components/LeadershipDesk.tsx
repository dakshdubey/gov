"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const LEADERS = [
  {
    role: "Presidential Vision",
    name: "Shri Dinesh Gundu Rao",
    title: "Hon'ble Minister for Health & Family Welfare",
    affiliation: "Government of Karnataka",
    quote:
      "DIMHANS represents the state's vision of equitable, state-of-the-art mental healthcare. By integrating clinical services with a dedicated Technology Business Incubator, we are not only providing treatment but actively building India's future healthcare capacity. We welcome global researchers and deep-tech founders to collaborate with this premier government institution.",
    avatarText: "DGR",
    sign: "Dinesh Gundu Rao",
  },
  {
    role: "Director's Desk",
    name: "Prof. Dr. Ajay Kumar",
    title: "Director & CEO",
    affiliation: "DIMHANS, Deemed University",
    quote:
      "Our mission is to bridge scientific rigor, advanced neurosciences, and digital health innovations to deliver scalable impact. DIMHANS TBI offers founders a clinical ecosystem that is unmatched in its access, ethical guidance, and regulatory support. We are proud to drive Karnataka's leadership in the national deep-tech health sector.",
    avatarText: "AK",
    sign: "Dr. Ajay Kumar",
  },
];

export default function LeadershipDesk() {
  return (
    <section
      id="leadership-desk"
      className="section-padding bg-white border-b border-[var(--color-border)]"
      aria-label="Leadership Desk"
    >
      <div className="container-site max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center lg:text-left">
          <span className="section-label">Institutional Leadership</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-4">
            Messages from the Desk
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            DIMHANS is guided by the governance of the Ministry of Health, Government of Karnataka, alongside a board of internationally recognized scientists, clinicians, and technology experts.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8 flex flex-col justify-between hover:shadow-lg border border-[var(--color-border)] rounded-[14px]"
            >
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-primary)]/8 rounded-[5px] text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wider mb-6">
                  <div className="w-1 h-1 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  {leader.role}
                </div>

                {/* Quote Icon */}
                <Quote className="text-[var(--color-primary)]/10 w-12 h-12 mb-4" />

                {/* Message */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic mb-8 relative z-10">
                  &ldquo;{leader.quote}&rdquo;
                </p>
              </div>

              {/* Signature / Details */}
              <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-4">
                {/* Placeholder Avatar */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 flex items-center justify-center font-bold text-sm text-[var(--color-primary)] tracking-wide">
                  {leader.avatarText}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text)] leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-[var(--color-primary)] leading-normal">
                    {leader.title}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wide leading-none mt-0.5">
                    {leader.affiliation}
                  </p>
                </div>

                {/* Hand-drawn look signature indicator */}
                <div className="ml-auto hidden sm:block">
                  <span className="font-display font-bold italic text-sm text-slate-400 select-none opacity-50 block text-right">
                    /{leader.sign}/
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] text-right block mt-0.5">
                    Signed &amp; Approved
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
