import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | DIMHANS",
  description:
    "DIMHANS is committed to making its website accessible to all users including persons with disabilities. Read our accessibility statement and WCAG 2.1 compliance status.",
};

const FEATURES = [
  {
    icon: "⌨️",
    title: "Keyboard Navigation",
    desc: "All interactive elements — buttons, links, forms, modals — are fully operable via keyboard alone. Tab order follows logical reading sequence.",
  },
  {
    icon: "🔊",
    title: "Screen Reader Support",
    desc: "ARIA landmarks, roles, labels, and live regions are implemented throughout. Tested with NVDA (Windows), VoiceOver (macOS/iOS), and TalkBack (Android).",
  },
  {
    icon: "🎨",
    title: "Colour Contrast",
    desc: "Text and interactive elements meet WCAG 2.1 Level AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text and UI components).",
  },
  {
    icon: "📐",
    title: "Scalable Text",
    desc: "The website is fully functional at up to 200% zoom without horizontal scrolling or loss of content. Text can be resized via browser settings.",
  },
  {
    icon: "🖼️",
    title: "Alternative Text",
    desc: "All meaningful images carry descriptive alt text. Decorative images use empty alt attributes to avoid screen reader clutter.",
  },
  {
    icon: "🎬",
    title: "Media Captions",
    desc: "All video content published on our website includes closed captions. Audio content includes transcripts.",
  },
  {
    icon: "🔍",
    title: "Focus Indicators",
    desc: "Visible focus indicators are present on all interactive elements, styled with a high-contrast 2.5px primary-colour outline.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "The website is fully responsive and accessible across desktop, tablet, and mobile devices in portrait and landscape orientations.",
  },
];

const CONFORMANCE = [
  { criterion: "1.1.1 Non-text Content", level: "A", status: "Pass" },
  { criterion: "1.2.1 Audio-only and Video-only", level: "A", status: "Pass" },
  { criterion: "1.2.2 Captions (Pre-recorded)", level: "A", status: "Pass" },
  { criterion: "1.3.1 Info and Relationships", level: "A", status: "Pass" },
  { criterion: "1.3.2 Meaningful Sequence", level: "A", status: "Pass" },
  { criterion: "1.3.3 Sensory Characteristics", level: "A", status: "Pass" },
  { criterion: "1.4.1 Use of Colour", level: "A", status: "Pass" },
  { criterion: "1.4.3 Contrast (Minimum)", level: "AA", status: "Pass" },
  { criterion: "1.4.4 Resize Text", level: "AA", status: "Pass" },
  { criterion: "1.4.10 Reflow", level: "AA", status: "Pass" },
  { criterion: "2.1.1 Keyboard", level: "A", status: "Pass" },
  { criterion: "2.1.2 No Keyboard Trap", level: "A", status: "Pass" },
  { criterion: "2.4.1 Bypass Blocks", level: "A", status: "Pass" },
  { criterion: "2.4.2 Page Titled", level: "A", status: "Pass" },
  { criterion: "2.4.3 Focus Order", level: "A", status: "Pass" },
  { criterion: "2.4.4 Link Purpose", level: "A", status: "Pass" },
  { criterion: "2.4.7 Focus Visible", level: "AA", status: "Pass" },
  { criterion: "3.1.1 Language of Page", level: "A", status: "Pass" },
  { criterion: "3.2.1 On Focus", level: "A", status: "Pass" },
  { criterion: "3.3.1 Error Identification", level: "A", status: "Pass" },
  { criterion: "3.3.2 Labels or Instructions", level: "A", status: "Pass" },
  { criterion: "4.1.1 Parsing", level: "A", status: "Pass" },
  { criterion: "4.1.2 Name, Role, Value", level: "A", status: "Pass" },
  { criterion: "4.1.3 Status Messages", level: "AA", status: "Partial" },
];

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container-site py-10 pt-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[12px] bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Eye size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                Inclusion &amp; Access
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-2">
                Accessibility Statement
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                WCAG 2.1 Level AA · Last assessed: <strong>June 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-12 space-y-14">

        {/* Commitment */}
        <section aria-labelledby="commitment-heading">
          <div className="max-w-3xl">
            <h2 id="commitment-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-4">
              Our Commitment
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              The Dharwad Institute of Mental Health and Neurosciences (DIMHANS) is committed to ensuring
              that its digital presence is accessible to all people, regardless of disability, age, or
              technical ability. We believe in equal access to information as a fundamental right, consistent
              with the principles of the{" "}
              <strong className="text-[var(--color-text)]">
                Rights of Persons with Disabilities Act, 2016
              </strong>{" "}
              and the Government of India&apos;s{" "}
              <strong className="text-[var(--color-text)]">
                Guidelines for Indian Government Websites (GIGW 3.0)
              </strong>.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Our website aims to conform to{" "}
              <strong className="text-[var(--color-text)]">
                Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
              </strong>
              , published by the World Wide Web Consortium (W3C). These guidelines explain how to make web
              content more accessible to people with disabilities, including visual, auditory, cognitive,
              and motor impairments.
            </p>

            {/* Conformance badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-[10px]">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8L6.5 11.5L13 5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-green-800">Partially Conformant — WCAG 2.1 Level AA</p>
                <p className="text-xs text-green-600">Some content may not fully conform. See known issues below.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-6">
            Accessibility Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="border border-[var(--color-border)] rounded-[12px] p-5 hover:border-[var(--color-primary)]/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-2xl mb-3" role="img" aria-label={f.title}>{f.icon}</div>
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-2">{f.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assistive Technology */}
        <section aria-labelledby="assistive-heading">
          <h2 id="assistive-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-4">
            Tested With Assistive Technologies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tool: "NVDA 2024.1", env: "Windows 11 · Chrome 124", type: "Screen Reader" },
              { tool: "VoiceOver", env: "macOS Sonoma · Safari 17", type: "Screen Reader" },
              { tool: "VoiceOver (iOS)", env: "iOS 17 · Safari", type: "Mobile Screen Reader" },
              { tool: "TalkBack", env: "Android 14 · Chrome", type: "Mobile Screen Reader" },
              { tool: "JAWS 2024", env: "Windows 11 · Edge 124", type: "Screen Reader" },
              { tool: "axe DevTools", env: "Browser Extension", type: "Automated Testing" },
            ].map((t) => (
              <div
                key={t.tool}
                className="flex items-start gap-3 border border-[var(--color-border)] rounded-[10px] p-4"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">{t.tool}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.type}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{t.env}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WCAG Conformance Table */}
        <section aria-labelledby="conformance-heading">
          <h2 id="conformance-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-2">
            WCAG 2.1 Conformance Summary
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            The table below summarises conformance status for key WCAG 2.1 success criteria.
          </p>
          <div className="border border-[var(--color-border)] rounded-[12px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" aria-label="WCAG 2.1 conformance table">
                <thead>
                  <tr className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
                      Success Criterion
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
                      Level
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {CONFORMANCE.map((row) => (
                    <tr key={row.criterion} className="hover:bg-[var(--color-surface)] transition-colors">
                      <td className="px-5 py-3 text-sm text-[var(--color-text-secondary)]">{row.criterion}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] ${
                          row.level === "AA"
                            ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                            : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
                        }`}>
                          {row.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          row.status === "Pass"
                            ? "bg-green-50 text-green-700"
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Known Issues */}
        <section aria-labelledby="issues-heading">
          <h2 id="issues-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-4">
            Known Limitations
          </h2>
          <div className="space-y-3">
            {[
              {
                criterion: "4.1.3 Status Messages",
                desc: "Some dynamically injected form validation messages may not be announced by all screen readers in all contexts. We are actively working to resolve this with enhanced ARIA live region configuration.",
                eta: "Q3 2025",
              },
              {
                criterion: "PDF Documents",
                desc: "Some older research publications and annual reports are available only as scanned PDFs and may not be fully accessible. We are progressively converting these to tagged, accessible PDF formats.",
                eta: "Ongoing",
              },
              {
                criterion: "Third-Party Embeds",
                desc: "Embedded content from third-party platforms (e.g., Google Maps, YouTube) is subject to those platforms' own accessibility. We provide text alternatives where possible.",
                eta: "N/A",
              },
            ].map((issue) => (
              <div
                key={issue.criterion}
                className="border border-amber-200 bg-amber-50 rounded-[10px] p-4 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)] mb-1">{issue.criterion}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{issue.desc}</p>
                  <p className="text-xs text-amber-700 font-medium mt-1.5">Estimated fix: {issue.eta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Report an Issue */}
        <section aria-labelledby="report-heading">
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 rounded-[12px] p-6 max-w-2xl">
            <h2 id="report-heading" className="text-lg font-bold font-display text-[var(--color-text)] mb-2">
              Encountered an Accessibility Barrier?
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              If you experience any accessibility issue or cannot access any content, please contact our
              Web Accessibility Coordinator. We take all reports seriously and will endeavour to resolve
              issues within <strong className="text-[var(--color-text)]">15 working days</strong>.
            </p>
            <div className="space-y-2 mb-5">
              <p className="text-sm font-semibold text-[var(--color-text)]">Web Accessibility Coordinator</p>
              <p className="text-xs text-[var(--color-text-muted)]">IT &amp; Digital Services Division, DIMHANS</p>
              <a href="mailto:accessibility@dimhans.gov.in" className="flex items-center gap-2 text-sm text-[var(--color-primary)] hover:underline font-medium">
                ✉ accessibility@dimhans.gov.in
              </a>
              <p className="text-xs text-[var(--color-text-muted)]">📞 +91-836-2460000 Ext. 220</p>
              <p className="text-xs text-[var(--color-text-muted)]">⏰ Monday – Friday, 9:00 AM – 5:00 PM IST</p>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              If you are not satisfied with our response, you may contact the{" "}
              <a
                href="https://disabilityaffairs.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                Department of Empowerment of Persons with Disabilities
              </a>
              .
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Dharwad Institute of Mental Health and Neurosciences. A Government of Karnataka Institution.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-[var(--color-primary)] hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-xs text-[var(--color-primary)] hover:underline">Terms of Use</Link>
            <Link href="/rti" className="text-xs text-[var(--color-primary)] hover:underline">RTI</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
