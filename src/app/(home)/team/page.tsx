import type { Metadata } from "next";
import Team from "@/components/Team";
import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Faculty, Researchers & Mentors | DIMHANS",
  description: "Meet the executive leadership, scientific advisory board, resident researchers, and industry mentors driving DIMHANS neurosciences.",
};

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Team</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Users size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Our Faculty &amp; Mentors</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Clinical governance · Scientific advisors · Startup incubation mentors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <Team />
    </div>
  );
}
