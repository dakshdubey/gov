import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Right to Information (RTI) | DIMHANS",
  description:
    "RTI information for DIMHANS — Right to Information Act 2005 compliance, Public Information Officers, and how to file an RTI application.",
};

const OBLIGATIONS = [
  {
    article: "Section 4(1)(b)",
    title: "Voluntary Disclosure",
    desc: "DIMHANS proactively discloses organisational structure, functions, duties, and powers of officers.",
  },
  {
    article: "Section 5",
    title: "Public Information Officers",
    desc: "Designated CPIOs and APIOs are responsible for receiving, processing, and responding to RTI applications.",
  },
  {
    article: "Section 7",
    title: "30-Day Response",
    desc: "All RTI applications are responded to within 30 days of receipt (48 hours for life and liberty matters).",
  },
  {
    article: "Section 19",
    title: "First Appeal",
    desc: "If unsatisfied with the CPIO response, a first appeal may be filed with the First Appellate Authority.",
  },
  {
    article: "Section 19(3)",
    title: "Second Appeal",
    desc: "A second appeal may be filed with the Karnataka Information Commission within 90 days.",
  },
];

const OFFICERS = [
  {
    role: "Central Public Information Officer (CPIO)",
    name: "Dr. S. R. Kulkarni",
    designation: "Deputy Director (Administration)",
    dept: "Administration Department, DIMHANS",
    email: "cpio@dimhans.gov.in",
    phone: "+91-836-2460000 Ext. 201",
  },
  {
    role: "Assistant Public Information Officer (APIO)",
    name: "Shri. M. V. Patil",
    designation: "Section Officer",
    dept: "Administration Department, DIMHANS",
    email: "apio@dimhans.gov.in",
    phone: "+91-836-2460000 Ext. 202",
  },
  {
    role: "First Appellate Authority (FAA)",
    name: "Dr. P. K. Sharma",
    designation: "Joint Director",
    dept: "Office of the Director, DIMHANS",
    email: "faa@dimhans.gov.in",
    phone: "+91-836-2460000 Ext. 100",
  },
];

const DISCLOSURES = [
  { title: "Organisational Structure & Staff List", updated: "April 2025", href: "#" },
  { title: "Annual Report 2023–24", updated: "March 2025", href: "#" },
  { title: "Budget Allocation & Expenditure Statement", updated: "April 2025", href: "#" },
  { title: "Procurement & Tender Records", updated: "May 2025", href: "#" },
  { title: "Research Grants Received & Utilised", updated: "March 2025", href: "#" },
  { title: "TBI Incubation Agreements (Redacted)", updated: "February 2025", href: "#" },
  { title: "Clinical Services & Bed Strength Report", updated: "April 2025", href: "#" },
  { title: "RTI Applications Received & Disposed", updated: "June 2025", href: "#" },
];

export default function RTI() {
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
              <BookOpen size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                Transparency &amp; Accountability
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-2">
                Right to Information (RTI)
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                In compliance with the{" "}
                <strong>Right to Information Act, 2005 (Central Act 22 of 2005)</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-12 space-y-14">

        {/* Intro */}
        <section aria-labelledby="intro-heading">
          <div className="max-w-3xl">
            <h2 id="intro-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-4">
              Our Commitment to Transparency
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              The Dharwad Institute of Mental Health and Neurosciences (DIMHANS), as a body substantially
              funded by the Government of Karnataka, is a public authority under the{" "}
              <strong className="text-[var(--color-text)]">Right to Information Act, 2005</strong>. We are
              fully committed to proactive disclosure, accountability, and facilitating the right of every
              citizen to access information about our functioning, finances, and programmes.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Citizens may request information about DIMHANS by following the procedure outlined below.
              DIMHANS endeavours to respond to all RTI applications promptly and in the spirit of the Act.
            </p>
          </div>
        </section>

        {/* RTI Obligations Grid */}
        <section aria-labelledby="obligations-heading">
          <h2 id="obligations-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-6">
            Statutory Obligations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OBLIGATIONS.map((item) => (
              <div
                key={item.article}
                className="border border-[var(--color-border)] rounded-[12px] p-5 hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-200"
              >
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-primary)]/8 px-2 py-0.5 rounded-[4px] mb-3">
                  {item.article}
                </span>
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Public Information Officers */}
        <section aria-labelledby="officers-heading">
          <h2 id="officers-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-2">
            Public Information Officers
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            RTI applications must be addressed to the CPIO. Appeals should be addressed to the FAA.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {OFFICERS.map((officer) => (
              <div
                key={officer.role}
                className="border border-[var(--color-border)] rounded-[12px] p-5 bg-white"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] mb-3 pb-2 border-b border-[var(--color-border)]">
                  {officer.role}
                </div>
                <p className="text-sm font-bold text-[var(--color-text)] mb-0.5">{officer.name}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mb-0.5">{officer.designation}</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-4">{officer.dept}</p>
                <div className="space-y-1.5">
                  <a
                    href={`mailto:${officer.email}`}
                    className="flex items-center gap-2 text-xs text-[var(--color-primary)] hover:underline"
                  >
                    <span className="text-[var(--color-text-muted)]">✉</span> {officer.email}
                  </a>
                  <p className="text-xs text-[var(--color-text-muted)]">📞 {officer.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to File */}
        <section aria-labelledby="how-to-file-heading">
          <h2 id="how-to-file-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-6">
            How to File an RTI Application
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Online */}
            <div className="border border-[var(--color-border)] rounded-[12px] p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">1</div>
                <h3 className="text-sm font-bold text-[var(--color-text)]">File Online via RTI Portal</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                The Government of India&apos;s centralised RTI portal is the recommended channel for filing RTI
                applications. DIMHANS is registered on the portal as a public authority.
              </p>
              <a
                href="https://rtionline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
              >
                RTI Online Portal <ExternalLink size={13} />
              </a>
            </div>

            {/* Postal */}
            <div className="border border-[var(--color-border)] rounded-[12px] p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">2</div>
                <h3 className="text-sm font-bold text-[var(--color-text)]">File by Post or In-Person</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Send a written application to the CPIO along with the prescribed fee of{" "}
                <strong className="text-[var(--color-text)]">₹10 (Ten Rupees)</strong> via demand draft,
                IPO, or court fee stamp in favour of{" "}
                <strong className="text-[var(--color-text)]">"Accounts Officer, DIMHANS, Dharwad"</strong>.
                BPL applicants are exempted from the fee (provide proof).
              </p>
              <address className="text-xs text-[var(--color-text-muted)] not-italic leading-relaxed bg-[var(--color-surface)] p-3 rounded-[8px]">
                Central Public Information Officer<br />
                Dharwad Institute of Mental Health and Neurosciences<br />
                Near KSRTC Bus Stand, Dharwad<br />
                Karnataka – 580008, India
              </address>
            </div>
          </div>

          {/* Fee structure */}
          <div className="mt-6 border border-[var(--color-border)] rounded-[12px] overflow-hidden">
            <div className="bg-[var(--color-surface)] px-5 py-3 border-b border-[var(--color-border)]">
              <h3 className="text-sm font-bold text-[var(--color-text)]">Fee Schedule</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Item</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {[
                    ["Application fee", "₹10 per application"],
                    ["Information in A4 / A3 paper (per page)", "₹2 per page"],
                    ["Information in larger paper (per page)", "Actual cost"],
                    ["Samples / models", "Actual cost"],
                    ["Information in diskette or floppy", "₹50 per diskette"],
                    ["Inspection of records (first hour)", "No fee"],
                    ["Inspection of records (subsequent hours)", "₹5 per 15 minutes"],
                    ["BPL applicants", "All fees exempted (proof required)"],
                  ].map(([item, fee]) => (
                    <tr key={item} className="hover:bg-[var(--color-surface)] transition-colors">
                      <td className="px-5 py-3 text-sm text-[var(--color-text-secondary)]">{item}</td>
                      <td className="px-5 py-3 text-sm font-medium text-[var(--color-text)]">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Proactive Disclosures */}
        <section aria-labelledby="disclosures-heading">
          <h2 id="disclosures-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-2">
            Proactive Disclosures <span className="text-base font-normal text-[var(--color-text-muted)]">(Section 4)</span>
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            The following documents are proactively published as required under Section 4(1)(b) of the RTI Act.
          </p>
          <div className="border border-[var(--color-border)] rounded-[12px] overflow-hidden">
            {DISCLOSURES.map((doc, i) => (
              <div
                key={doc.title}
                className={`flex items-center justify-between gap-4 px-5 py-4 hover:bg-[var(--color-surface)] transition-colors ${
                  i < DISCLOSURES.length - 1 ? "border-b border-[var(--color-border)]" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{doc.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Updated: {doc.updated}</p>
                </div>
                <a
                  href={doc.href}
                  className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline"
                  aria-label={`Download ${doc.title}`}
                >
                  Download <ExternalLink size={11} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Appeal Process */}
        <section aria-labelledby="appeal-heading">
          <h2 id="appeal-heading" className="text-xl font-bold font-display text-[var(--color-text)] mb-6">
            Appeal Process
          </h2>
          <div className="relative">
            {/* Timeline */}
            <div className="space-y-0">
              {[
                {
                  step: "1",
                  title: "File RTI Application with CPIO",
                  desc: "Submit your application along with the prescribed fee. You will receive an acknowledgement with a reference number.",
                  time: "Day 0",
                },
                {
                  step: "2",
                  title: "CPIO Response",
                  desc: "The CPIO must respond within 30 days. For matters concerning life or liberty, the response period is 48 hours.",
                  time: "Within 30 days",
                },
                {
                  step: "3",
                  title: "First Appeal to FAA",
                  desc: "If unsatisfied or no response received, file a first appeal with the First Appellate Authority within 30 days of receiving the CPIO's response (or expiry of 30-day period).",
                  time: "Within 30 days of CPIO response",
                },
                {
                  step: "4",
                  title: "Second Appeal to Karnataka Information Commission",
                  desc: "If the first appeal is unsatisfactory, file a second appeal with the Karnataka Information Commission within 90 days of receiving the FAA's order.",
                  time: "Within 90 days of FAA order",
                },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 z-10">
                      {item.step}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--color-border)] my-1" />
                    )}
                  </div>
                  <div className={`pb-8 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h3>
                      <span className="text-[10px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/8 px-2 py-0.5 rounded-[4px]">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Dharwad Institute of Mental Health and Neurosciences. A Government of Karnataka Institution.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-xs text-[var(--color-primary)] hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-xs text-[var(--color-primary)] hover:underline">Terms of Use</Link>
            <Link href="/accessibility" className="text-xs text-[var(--color-primary)] hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
