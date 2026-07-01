import Link from "next/link";

/**
 * Minimal site header for legal/static sub-pages.
 * Uses absolute page links instead of hash anchors.
 */
export default function LegalHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
      role="banner"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="DIMHANS — Home">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-[7px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 2L3 5.5V10C3 13.87 6.16 17.49 10 18.5C13.84 17.49 17 13.87 17 10V5.5L10 2Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M7 10L9 12L13 8"
                  stroke="#0B5ED7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-[var(--color-text)] font-display tracking-tight leading-none">
                DIMHANS
              </div>
              <div className="text-[9px] text-[var(--color-text-muted)] font-medium leading-none mt-0.5">
                Govt. Research Institute
              </div>
            </div>
          </Link>

          {/* Right side nav */}
          <nav aria-label="Legal pages navigation" className="flex items-center gap-1">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use",   href: "/terms-of-use" },
              { label: "RTI",            href: "/rti" },
              { label: "Accessibility", href: "/accessibility" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden sm:block text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] px-3 py-1.5 rounded-[6px] hover:bg-[var(--color-primary)]/6 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="ml-2 btn-primary text-sm py-2 px-4"
            >
              ← Back to Site
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
