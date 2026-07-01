import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data";

const QUICK_LINKS = [
  { label: "About DIMHANS", href: "#about" },
  { label: "Research & Innovation", href: "#research" },
  { label: "Technology Incubator", href: "#incubator" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Team", href: "#team" },
  { label: "Startups Portfolio", href: "#startups" },
];

const RESEARCH_LINKS = [
  { label: "Neuroscience", href: "#research" },
  { label: "AI & Machine Learning", href: "#research" },
  { label: "Digital Diagnostics", href: "#research" },
  { label: "Pharmacogenomics", href: "#research" },
  { label: "Forensic Sciences", href: "#research" },
  { label: "Publications", href: "#resources" },
];

const INCUBATION_LINKS = [
  { label: "Apply for Incubation", href: "#incubator" },
  { label: "Current Portfolio", href: "#startups" },
  { label: "Success Stories", href: "#startups" },
  { label: "Funding Programs", href: "#incubator" },
  { label: "Events & Demos", href: "#resources" },
  { label: "Resources & Forms", href: "#resources" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0a0f1a] text-white"
      aria-label="Site Footer"
      role="contentinfo"
    >
      {/* Top CTA Strip */}
      <div className="border-b border-white/10">
        <div className="container-site py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold !text-white mb-1">
              Ready to build the future of healthcare?
            </h2>
            <p className="text-sm text-white/60">
              Apply to DIMHANS TBI — India&apos;s leading deep-tech healthcare incubator.
            </p>
          </div>
          <a
            href="#incubator"
            className="flex-shrink-0 btn-primary bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]"
          >
            Apply for Incubation
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[var(--color-primary)] rounded-[8px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L3 5.5V10C3 13.87 6.16 17.49 10 18.5C13.84 17.49 17 13.87 17 10V5.5L10 2Z" fill="white" fillOpacity="0.9"/>
                  <path d="M7 10L9 12L13 8" stroke="#0B5ED7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-base font-bold tracking-tight font-display text-white">{SITE.name}</div>
                <div className="text-[10px] text-white/50 font-medium">Govt. Research Institute & Incubator</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
              {SITE.fullName} — a premier government-funded institution advancing mental health, neuroscience, and deep-tech innovation since {SITE.established}.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail size={13} className="text-white/30 group-hover:text-[var(--color-accent)]" />
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Phone size={13} className="text-white/30 group-hover:text-[var(--color-accent)]" />
                {SITE.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={13} className="text-white/30 mt-0.5 flex-shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {Object.entries(SITE.socials).map(([platform, url]) => {
                const getSvgIcon = () => {
                  switch (platform) {
                    case "twitter":
                      return (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      );
                    case "linkedin":
                      return (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      );
                    case "youtube":
                      return (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.02 0 12 0 12s0 3.98.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.98 24 12 24 12s0-3.98-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      );
                    case "facebook":
                      return (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      );
                    default:
                      return null;
                  }
                };
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow DIMHANS on ${platform}`}
                    className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-white/8 border border-white/10 text-white/50 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all duration-200"
                  >
                    {getSvgIcon()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-white/90 mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-white/90 mb-4 pb-2 border-b border-white/10">
              Research
            </h3>
            <ul className="space-y-2.5">
              {RESEARCH_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Incubation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-white/90 mb-4 pb-2 border-b border-white/10">
              Incubation
            </h3>
            <ul className="space-y-2.5">
              {INCUBATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Govt Accreditation Badges */}
            <div className="mt-6 space-y-2">
              {["BIRAC Supported", "DST Recognized", "MCI Accredited"].map((badge) => (
                <div key={badge} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border border-white/10 bg-white/5 text-[10px] text-white/50 font-medium mr-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Official Gov Directory Links */}
      <div className="border-t border-white/5 bg-black/20 py-4">
        <div className="container-site text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-white/40">
            <span className="font-semibold text-white/50 uppercase tracking-wider">Official Portals:</span>
            <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Portal of India</a>
            <span>•</span>
            <a href="https://karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Karnataka State Portal</a>
            <span>•</span>
            <a href="https://www.startupindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Startup India</a>
            <span>•</span>
            <a href="https://birac.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BIRAC</a>
            <span>•</span>
            <a href="https://dst.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DST India</a>
            <span>•</span>
            <a href="https://www.niti.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NITI Aayog</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            {/* Satyamev Jayate Text Emblem */}
            <div className="border border-white/20 px-2 py-0.5 rounded-[4px] text-[9px] font-bold tracking-widest text-white/70 uppercase">
              सತ್ಯಮೇವ ಜಯತೇ | SATYAMEVA JAYATE
            </div>
            <p className="text-xs text-white/60">
              © {currentYear} {SITE.fullName}. All rights reserved. A Government of Karnataka Deemed University.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use",   href: "/terms-of-use" },
              { label: "RTI Compliance", href: "/rti" },
              { label: "Accessibility",  href: "/accessibility" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
