import type { Metadata } from "next";
import About from "@/components/About";
import Link from "next/link";
import { ChevronRight, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | DIMHANS Deemed University",
  description: "Learn about the history, vision, and mission of the Dharwad Institute of Mental Health and Neurosciences (DIMHANS), a premier government institution.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">About Us</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Landmark size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">About Our Institution</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Established 1956 · Deemed University status · Govt. of Karnataka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <About />
    </div>
  );
}
