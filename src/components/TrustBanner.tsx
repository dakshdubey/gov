"use client";

import { useRef, useEffect } from "react";

const PARTNERS = [
  { label: "BIRAC Supported", sub: "Dept. of Biotechnology" },
  { label: "DST Recognized", sub: "Govt. of India" },
  { label: "ICMR Affiliated", sub: "Indian Council of Medical Research" },
  { label: "MCI Accredited", sub: "Medical Council of India" },
  { label: "UGC Deemed University", sub: "University Grants Commission" },
  { label: "MEITY Partner", sub: "Min. of Electronics & IT" },
  { label: "WHO Collaborating", sub: "World Health Organization" },
  { label: "NASSCOM Member", sub: "Technology Business Network" },
];

function PartnerBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-6 border-r border-[var(--color-border)] last:border-r-0">
      {/* Shield icon */}
      <div className="w-7 h-7 rounded-[6px] bg-[var(--color-primary)]/8 flex items-center justify-center flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1L2 3.25V7C2 9.9 4.3 12.6 7 13.25C9.7 12.6 12 9.9 12 7V3.25L7 1Z"
            fill="var(--color-primary)"
            opacity="0.7"
          />
        </svg>
      </div>
      <div>
        <div className="text-[12px] font-bold text-[var(--color-text)] leading-tight whitespace-nowrap">
          {label}
        </div>
        <div className="text-[10px] text-[var(--color-text-muted)] whitespace-nowrap">{sub}</div>
      </div>
    </div>
  );
}

export default function TrustBanner() {
  const trackRef = useRef<HTMLDivElement>(null);

  // CSS-driven infinite marquee: duplicate items so it loops
  return (
    <div
      className="relative overflow-hidden bg-white border-y border-[var(--color-border)] py-4"
      aria-label="Accreditations and partner organisations"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, white, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, white, transparent)",
        }}
      />

      {/* Marquee track */}
      <div
        className="flex"
        style={{
          animation: "marquee-scroll 30s linear infinite",
          width: "max-content",
        }}
        ref={trackRef}
      >
        {/* Duplicate to create seamless loop */}
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <PartnerBadge key={i} label={p.label} sub={p.sub} />
        ))}
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
