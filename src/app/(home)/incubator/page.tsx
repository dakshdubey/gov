import type { Metadata } from "next";
import Incubator from "@/components/Incubator";
import Link from "next/link";
import { ChevronRight, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Business Incubator (TBI) | DIMHANS",
  description: "Join the DIMHANS Technology Business Incubator (TBI) for healthcare and deep-tech startups. Access clinical validation, mentors, and seed funds.",
};

export default function IncubatorPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Incubator</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Rocket size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Technology Business Incubator</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">BIRAC supported · HealthTech &amp; DeepTech focus · Startup incubation program</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <Incubator />
    </div>
  );
}
