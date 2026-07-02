"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Offset for the sticky floating header
      const yOffset = -76;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-2"
            : "py-4"
        }`}
        role="banner"
      >
        <div className="container-site max-w-7xl mx-auto px-4">
          <div
            className={`flex items-center justify-between px-6 h-14 md:h-16 rounded-[14px] transition-all duration-500 ${
              isScrolled
                ? "bg-white/85 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                : "bg-white/40 backdrop-blur-sm border border-white/20"
            }`}
          >
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 flex-shrink-0 group select-none"
              aria-label="DIMHANS Home"
            >
              {/* Shield/Emblem */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="w-8 h-8 bg-[#114B8B] border border-amber-400 rounded-[8px] flex items-center justify-center group-hover:bg-[var(--color-primary-dark)] transition-all duration-300 shadow-[0_2px_8px_rgba(17,75,139,0.2)]">
                  {/* National Emblem stylized Ashoka Chakra */}
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="8" stroke="#FFE082" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="3" stroke="#FFE082" strokeWidth="1.2" />
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1="10"
                        y1="10"
                        x2={10 + 8 * Math.cos((i * Math.PI) / 4)}
                        y2={10 + 8 * Math.sin((i * Math.PI) / 4)}
                        stroke="#FFE082"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-tight font-display text-[var(--color-text)] flex items-center gap-1.5">
                  {SITE.name}
                  {/* National Flag Accent bar inside header */}
                  <span className="flex h-1.5 w-6 rounded-full overflow-hidden border border-slate-200">
                    <span className="w-1/3 bg-[#FF9933]"></span>
                    <span className="w-1/3 bg-white"></span>
                    <span className="w-1/3 bg-[#128807]"></span>
                  </span>
                </div>
                <div className="text-[9px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider leading-none hidden sm:block">
                  Govt. Deemed University &amp; TBI
                </div>
              </div>
            </Link>

            {/* Desktop Navigation with Magnetic Sliding Box */}
            <nav
              className="hidden lg:flex items-center gap-1 relative"
              aria-label="Primary Navigation"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {NAV_LINKS.slice(0, 8).map((link, idx) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`relative px-3.5 py-1.5 text-[13px] font-semibold rounded-[8px] transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Hover Sliding Background */}
                    {hoveredIdx === idx && (
                      <motion.div
                        layoutId="navHoverBg"
                        className="absolute inset-0 bg-[var(--color-primary)]/5 rounded-[8px] -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}

                    {/* Content */}
                    <span className="relative z-10">{link.label}</span>

                    {/* Active Bottom Dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="hidden md:flex btn-primary text-[13px] font-semibold py-1.5 px-4 h-9 rounded-[8px] shadow-sm hover:shadow-md transition-all duration-300"
                aria-label="Apply for Incubation"
              >
                Apply for Incubation
                <ChevronRight size={13} />
              </button>

              <button
                className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-primary)]/5 rounded-[8px] transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 px-4 lg:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="bg-white/95 backdrop-blur-md border border-[var(--color-border)] rounded-[14px] shadow-xl p-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-2.5 text-sm font-semibold rounded-[8px] transition-colors ${
                      isActive
                        ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[var(--color-border)]">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full justify-center text-sm py-2 px-4 rounded-[8px]"
                >
                  Apply for Incubation
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
