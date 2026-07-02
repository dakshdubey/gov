import type { Metadata } from "next";
import Startups from "@/components/Startups";
import SuccessStories from "@/components/SuccessStories";
import Link from "next/link";
import { ChevronRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Portfolio & Success Stories | DIMHANS TBI",
  description: "Browse the cohort list of incubated healthcare, digital therapeutics, and medical device ventures supported by DIMHANS Technology Business Incubator.",
};

export default function StartupsPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Startups</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Briefcase size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Incubated Startup Portfolio</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Seed funded · Cohort ventures · Success stories &amp; case studies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <Startups />

      {/* Renders success stories alongside startups for full coverage */}
      <SuccessStories />
    </div>
  );
}
