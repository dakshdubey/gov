import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DIMHANS",
  description:
    "Privacy Policy of the Dharwad Institute of Mental Health and Neurosciences (DIMHANS). Learn how we collect, use, and protect your personal information.",
};

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: `The Dharwad Institute of Mental Health and Neurosciences (DIMHANS), a Government of Karnataka institution, is committed to protecting the privacy and confidentiality of all individuals who interact with our website, services, and technology platforms. This Privacy Policy describes how we collect, use, store, disclose, and safeguard your personal information in compliance with applicable Indian laws including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDPA).

By accessing or using the DIMHANS website and associated services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We may collect the following categories of personal and non-personal information:

**2.1 Information You Provide Directly**
• Contact and identification details (name, email address, phone number, designation) when submitting enquiry forms, incubation applications, or event registrations.
• Academic and professional credentials submitted in connection with research collaborations, faculty appointments, or grant applications.
• Health-related information (only where explicitly consented to) for clinical research participation, patient portal access, or diagnostic service requests.
• Startup and business information submitted through the Technology Business Incubator (TBI) application portal.

**2.2 Information Collected Automatically**
• Device identifiers, IP addresses, browser type and version, operating system, and referral URLs collected via server logs and cookies.
• Pages visited, time spent on pages, and navigation patterns via analytics tools (e.g., Google Analytics with IP anonymisation enabled).
• Session tokens and authentication data when accessing password-protected portals.

**2.3 Information from Third Parties**
• Publicly available professional profiles (e.g., LinkedIn, ORCID, ResearchGate) when assessing research collaboration requests.
• Government-issued identity verification data from authorised government databases, where applicable.`,
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content: `DIMHANS uses collected information for the following lawful purposes:

• **Service Delivery:** Processing applications, scheduling appointments, managing incubation programme activities, and delivering clinical and research services.
• **Communication:** Responding to enquiries, sending notifications about events, research opportunities, and incubation programme updates.
• **Research and Analytics:** Conducting academic research, generating anonymised statistical reports, and improving our programmes and digital platforms.
• **Compliance and Governance:** Meeting statutory obligations under Indian law, maintaining audit trails, and fulfilling RTI (Right to Information) requirements.
• **Security:** Detecting, preventing, and responding to fraud, unauthorised access, and other security incidents.
• **Clinical Care:** Where applicable, managing patient records and coordinating care within the bounds of medical confidentiality.

We do not use personal data for automated decision-making or profiling that produces legal or similarly significant effects without explicit human oversight.`,
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Disclosure",
    content: `We do not sell, rent, or trade your personal information to any third party for commercial purposes. We may share information in the following limited circumstances:

• **Government Authorities:** As required by Indian law, court order, or lawful request from competent authorities (e.g., Ministry of Health, DST, BIRAC, UGC, CBI).
• **Service Providers:** Authorised vendors and contractors who process data on our behalf under strict data processing agreements (e.g., cloud hosting, payment processing, email delivery). They are contractually prohibited from using your data for any other purpose.
• **Research Partners:** Anonymised or pseudonymised data shared with academic collaborators and international research institutions under duly executed data sharing agreements conforming to ethical standards.
• **Emergency Situations:** When disclosure is necessary to protect the life, safety, or health of any individual.
• **Consent:** In all other cases, only with your prior, informed, and specific written consent.`,
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law:

• **General Enquiry Records:** 3 years from date of last interaction.
• **Incubation Application Records:** 7 years from the close of the incubation cycle.
• **Clinical Patient Records:** As mandated by the Medical Council of India — minimum 7 years from the last date of treatment; indefinitely for minors until age of majority plus 3 years.
• **Financial and Contractual Records:** 8 years as per Income Tax Act requirements.
• **Research Data:** As specified in the ethics committee-approved research protocol, typically 10–25 years.
• **Website Analytics:** 26 months (Google Analytics default retention).

Upon expiry of the retention period, data is securely deleted or anonymised in accordance with DPDPA guidelines.`,
  },
  {
    id: "security",
    title: "6. Security Measures",
    content: `DIMHANS employs industry-standard technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction:

• TLS/SSL encryption for all data in transit.
• AES-256 encryption for sensitive data at rest on government-approved cloud infrastructure.
• Role-based access controls (RBAC) limiting data access to authorised personnel on a need-to-know basis.
• Regular security audits, penetration testing, and vulnerability assessments.
• ISO 27001-aligned information security management practices.
• Mandatory data privacy training for all staff handling personal data.

Despite these measures, no method of transmission or storage is 100% secure. We encourage you to use strong, unique passwords and to report any suspected security vulnerabilities to our Data Protection Officer.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights Under DPDPA 2023",
    content: `As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:

• **Right of Access (Section 11):** Request information about what personal data we hold about you, the purposes for processing, and with whom it has been shared.
• **Right to Correction and Erasure (Section 12):** Request correction of inaccurate or incomplete data, and erasure of data that is no longer necessary or where consent has been withdrawn.
• **Right to Grievance Redressal (Section 13):** Lodge a complaint with our designated Data Protection Officer. If unsatisfied, escalate to the Data Protection Board of India.
• **Right to Nominate (Section 14):** Nominate another individual to exercise your rights in the event of your death or incapacity.
• **Right to Withdraw Consent:** Where processing is based on consent, you may withdraw consent at any time. Withdrawal does not affect the lawfulness of prior processing.

To exercise any of these rights, write to our Data Protection Officer (contact details in Section 9). We will respond within 30 days.`,
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking Technologies",
    content: `Our website uses cookies to enhance user experience and gather analytics. Categories of cookies used:

• **Strictly Necessary Cookies:** Essential for core website functionality (e.g., session management, security tokens). These cannot be disabled.
• **Analytics Cookies:** Help us understand how visitors interact with the site (e.g., Google Analytics). You may opt out via your browser settings or the Google Analytics Opt-out Browser Add-on.
• **Preference Cookies:** Remember your settings (e.g., language preference, accessibility options).
• **Third-Party Embeds:** Content embedded from third-party platforms (e.g., YouTube, Google Maps) may set their own cookies governed by those platforms' privacy policies.

You may control cookie preferences through your browser settings. Disabling certain cookies may affect site functionality.`,
  },
  {
    id: "contact",
    title: "9. Contact — Data Protection Officer",
    content: `For privacy-related queries, to exercise your rights, or to report a data breach, contact our designated Data Protection Officer:

**Data Protection Officer**
Dharwad Institute of Mental Health and Neurosciences
Near KSRTC Bus Stand, Dharwad, Karnataka – 580008

📧 dpo@dimhans.gov.in
📞 +91-836-2460000 (Ext. 210)
⏰ Monday – Friday, 9:00 AM – 5:00 PM IST

We endeavour to acknowledge all privacy requests within 72 hours and resolve them within 30 days. If your concern relates to a clinical data matter, please contact the Medical Records Department directly.`,
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: `DIMHANS reserves the right to update this Privacy Policy to reflect changes in law, technology, or our operational practices. Material changes will be notified via:
• A prominent notice on our website homepage.
• Email notification to registered users.
• An updated "Last Revised" date at the top of this document.

Continued use of our services after the effective date of any revision constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicy() {
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
              <Shield size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                Legal &amp; Compliance
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                Last revised: <strong>1 January 2025</strong> &nbsp;|&nbsp; Effective date:{" "}
                <strong>1 February 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-site py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
                On This Page
              </p>
              <nav aria-label="Privacy policy sections">
                <ul className="space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] py-1 border-l-2 border-transparent hover:border-[var(--color-primary)] pl-3 transition-all duration-150"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Intro callout */}
            <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/15 rounded-[12px] p-5 mb-10">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                This policy applies to the Dharwad Institute of Mental Health and Neurosciences (DIMHANS), a
                statutory body of the Government of Karnataka, and covers all digital platforms, services, and
                data processing activities operated by or on behalf of DIMHANS. This policy is published in
                compliance with the{" "}
                <strong className="text-[var(--color-text)]">
                  Digital Personal Data Protection Act, 2023
                </strong>{" "}
                and the{" "}
                <strong className="text-[var(--color-text)]">Information Technology Act, 2000</strong>.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold font-display text-[var(--color-text)] mb-4 pb-3 border-b border-[var(--color-border)]">
                    {section.title}
                  </h2>
                  <div className="prose-content">
                    {section.content.split("\n\n").map((para, i) => {
                      if (para.startsWith("**") && para.includes("**\n")) {
                        // Subheading paragraph
                        const lines = para.split("\n");
                        const heading = lines[0].replace(/\*\*/g, "");
                        const rest = lines.slice(1).join("\n");
                        return (
                          <div key={i} className="mb-4">
                            <p className="font-semibold text-[var(--color-text)] text-sm mb-2">{heading}</p>
                            <div className="text-sm text-[var(--color-text-secondary)] leading-[1.85] whitespace-pre-line">
                              {rest}
                            </div>
                          </div>
                        );
                      }
                      // Bold inline replacements
                      const parts = para.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p
                          key={i}
                          className="text-sm text-[var(--color-text-secondary)] leading-[1.85] mb-4 whitespace-pre-line"
                        >
                          {parts.map((part, j) =>
                            part.startsWith("**") ? (
                              <strong key={j} className="text-[var(--color-text)] font-semibold">
                                {part.replace(/\*\*/g, "")}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-[var(--color-text-muted)]">
                © {new Date().getFullYear()} Dharwad Institute of Mental Health and Neurosciences. All rights
                reserved. A Government of Karnataka Institution.
              </p>
              <div className="flex gap-4">
                <Link href="/terms-of-use" className="text-xs text-[var(--color-primary)] hover:underline">
                  Terms of Use
                </Link>
                <Link href="/rti" className="text-xs text-[var(--color-primary)] hover:underline">
                  RTI
                </Link>
                <Link href="/accessibility" className="text-xs text-[var(--color-primary)] hover:underline">
                  Accessibility
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
