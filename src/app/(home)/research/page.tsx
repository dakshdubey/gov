import type { Metadata } from "next";
import ResearchInnovation from "@/components/ResearchInnovation";
import Link from "next/link";
import { ChevronRight, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Innovation | DIMHANS Deemed University",
  description: "Browse academic research fields, scientific breakthroughs, national grants, and publication records at the DIMHANS neuroscience divisions.",
};

export default function ResearchPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Research</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Microscope size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Neuroscience Research &amp; Innovation</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Computational Neuroscience · Molecular Biology · AI Diagnostics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <ResearchInnovation />
    </div>
  );
}
