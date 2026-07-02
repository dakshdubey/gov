import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Support | DIMHANS Deemed University",
  description: "Get in touch with clinical staff, research coordinators, or the Technology Business Incubator team at DIMHANS Dharwad.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-36">
      {/* Section Breadcrumbs header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-8 mb-4">
        <div className="container-site max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-3">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="font-medium text-[var(--color-text-secondary)]">Contact</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--color-primary)]/8 flex items-center justify-center text-[var(--color-primary)]">
              <Phone size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-[var(--color-text)]">Contact &amp; Location Details</h1>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Dharwad campus map · Official emails · Inquiry submission form</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Component */}
      <Contact />
    </div>
  );
}
