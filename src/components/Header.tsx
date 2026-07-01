"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 24);
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
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="DIMHANS Home"
            >
              {/* Shield/Emblem */}
              <div className="relative w-9 h-9 flex-shrink-0">
                <div className="w-9 h-9 bg-[var(--color-primary)] rounded-[8px] flex items-center justify-center group-hover:bg-[var(--color-primary-dark)] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2L3 5.5V10C3 13.87 6.16 17.49 10 18.5C13.84 17.49 17 13.87 17 10V5.5L10 2Z" fill="white" fillOpacity="0.9"/>
                    <path d="M7 10L9 12L13 8" stroke="#0B5ED7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="leading-tight">
                <div className={`text-base font-bold tracking-tight font-display transition-colors ${isScrolled || isMobileOpen ? "text-[var(--color-text)]" : "text-[var(--color-text)]"}`}>
                  {SITE.name}
                </div>
                <div className="text-[10px] text-[var(--color-text-muted)] font-medium leading-none hidden sm:block">
                  Govt. Research Institute & Incubator
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary Navigation"
            >
              {NAV_LINKS.slice(0, 8).map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-2 text-[13px] font-medium rounded-[8px] transition-all duration-200 ${
                      isActive
                        ? "text-[var(--color-primary)] bg-blue-50"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[var(--color-primary)] rounded-full"
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
                className="hidden sm:flex btn-primary text-sm py-2 px-4"
                aria-label="Apply for Incubation"
              >
                Apply for Incubation
                <ChevronRight size={14} />
              </button>

              <button
                className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] rounded-[8px] transition-colors"
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
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-[var(--color-border)] shadow-lg lg:hidden"
            aria-label="Mobile Navigation"
          >
            <nav className="container-site py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-blue-50 rounded-[8px] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-[var(--color-border)]">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full justify-center"
                >
                  Apply for Incubation
                  <ChevronRight size={14} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
