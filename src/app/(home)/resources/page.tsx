import type { Metadata } from "next";
import Resources from "@/components/Resources";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications, Guidelines & FAQ | DIMHANS",
  description: "Access research papers, download clinical guidelines, review government notification circulars, and read frequently asked questions about DIMHANS.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Resources</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <FileText size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Publications &amp; Resources</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Academic journal papers · Administrative forms · Frequently Asked Questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <Resources />
    </div>
  );
}
