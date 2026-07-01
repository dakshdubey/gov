import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | DIMHANS",
  description:
    "Terms and conditions governing your use of the DIMHANS website, portals, and digital services.",
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing, browsing, or using the official website of the Dharwad Institute of Mental Health and Neurosciences (https://dimhans.gov.in) and its associated portals, platforms, and digital services (collectively, the "Services"), you agree to be legally bound by these Terms of Use. If you do not agree with any part of these terms, you must immediately cease use of the Services.

These Terms of Use constitute a legally binding agreement between you ("User") and DIMHANS, a statutory body of the Government of Karnataka, India. These terms are governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000, and applicable regulations thereunder.`,
  },
  {
    id: "permitted-use",
    title: "2. Permitted Use",
    content: `You are authorised to access and use the DIMHANS website and Services for lawful, non-commercial purposes, including:

• Obtaining information about clinical services, research programmes, and incubation opportunities.
• Submitting enquiries, applications, or registrations through official forms.
• Downloading publicly available research publications, reports, and policy documents for personal or academic reference.
• Accessing publicly available datasets for non-commercial research purposes, subject to applicable data use agreements.
• Exploring incubation and funding programme details.

You agree to access the Services only through authorised means and to provide accurate, current, and complete information when submitting any form or application.`,
  },
  {
    id: "prohibited-use",
    title: "3. Prohibited Activities",
    content: `You are strictly prohibited from:

• **Unauthorised Access:** Attempting to gain unauthorised access to any restricted portion of the website, server infrastructure, databases, or administrative panels.
• **Data Scraping:** Using automated bots, scrapers, crawlers, or similar tools to systematically extract content or data without prior written permission from DIMHANS.
• **Misrepresentation:** Impersonating DIMHANS, its officials, staff, researchers, or any government authority. Submitting false, misleading, or fraudulent information in any application or form.
• **Malicious Activity:** Uploading, transmitting, or distributing malware, viruses, ransomware, spyware, or any other harmful code. Engaging in denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks.
• **Copyright Infringement:** Reproducing, republishing, distributing, or commercially exploiting any content from this website without prior written authorisation.
• **Unlawful Use:** Using the Services for any purpose that violates applicable Indian or international law, including but not limited to the IPC, IT Act, DPDPA, and POCSO Act.

Violations may result in immediate account suspension, legal action, and reporting to law enforcement authorities.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property Rights",
    content: `All content published on the DIMHANS website — including but not limited to text, graphics, photographs, research publications, datasets, logos, icons, software code, and the DIMHANS name and emblem — is the exclusive intellectual property of DIMHANS or its content licensors, and is protected under:

• The Copyright Act, 1957 (as amended)
• The Trade Marks Act, 1999
• The Information Technology Act, 2000
• Applicable international intellectual property conventions

**Permitted Use of Content:** Academic and non-commercial use of research publications, reports, and infographics is permitted provided proper attribution is given: *"Source: Dharwad Institute of Mental Health and Neurosciences (DIMHANS), Government of Karnataka."*

**Restricted Use:** Commercial reproduction, modification, or redistribution of any DIMHANS content requires explicit prior written consent. The DIMHANS emblem, logo, and name may not be used without written authorisation from the Director, DIMHANS.`,
  },
  {
    id: "disclaimer",
    title: "5. Disclaimer of Warranties",
    content: `The information on this website is provided in good faith for general informational purposes. DIMHANS makes no representations or warranties, express or implied, regarding:

• The completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics on the website.
• The uninterrupted, error-free, or secure operation of the website.
• The fitness of any information for a particular medical, legal, or commercial purpose.

**Medical Disclaimer:** Information published on this website does not constitute medical advice. Individuals seeking treatment or clinical guidance must consult a qualified healthcare professional. Clinical decisions must not be made solely on the basis of information available on this website.

**Research Disclaimer:** Research publications and preprints available on this platform represent the views of the respective authors and may not reflect the official position of DIMHANS or the Government of Karnataka.`,
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, DIMHANS, its directors, officers, staff, and agents shall not be liable for:

• Any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Services.
• Any loss or damage resulting from reliance on information published on this website.
• Any disruption, suspension, or termination of the Services for any reason including force majeure events, technical maintenance, or government directives.
• Unauthorised access to or alteration of your data or transmissions.

DIMHANS is a government institution. Any liability claims against DIMHANS must be pursued in accordance with applicable statutory provisions governing suits against the Government of Karnataka, including the Government of Karnataka (Requisitioning and Acquisition of Immoveable Property) Act and relevant sections of the CPC.`,
  },
  {
    id: "third-party",
    title: "7. Third-Party Links and Services",
    content: `The DIMHANS website may contain hyperlinks to external websites operated by third parties (e.g., Ministry of Health, DST, BIRAC, UGC, ICMR, academic publishers). These links are provided for convenience and informational purposes only.

DIMHANS does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party website. Your interactions with such websites are governed by those websites' own terms and policies.

Conversely, links to the DIMHANS website from external sources do not constitute an endorsement by DIMHANS of those sources.`,
  },
  {
    id: "accounts",
    title: "8. User Accounts and Portal Access",
    content: `Certain services (e.g., the Incubation Application Portal, Research Collaboration Portal, Patient Portal) require account registration. By registering, you agree to:

• Provide accurate, complete, and current registration information.
• Maintain the confidentiality of your login credentials and be solely responsible for all activity under your account.
• Notify DIMHANS immediately at portal-support@dimhans.gov.in if you suspect unauthorised access.
• Not share, transfer, or sell account access to any third party.

DIMHANS reserves the right to suspend or terminate accounts at its discretion, particularly where there is evidence of misuse, fraud, or breach of these Terms.`,
  },
  {
    id: "governing-law",
    title: "9. Governing Law and Jurisdiction",
    content: `These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Dharwad, Karnataka, India.

If any provision of these Terms is found to be invalid, illegal, or unenforceable under applicable law, the remaining provisions shall continue in full force and effect.`,
  },
  {
    id: "amendments",
    title: "10. Amendments",
    content: `DIMHANS reserves the right to revise these Terms of Use at any time without prior notice. Changes take effect immediately upon posting. Your continued use of the Services after any modification constitutes your acceptance of the revised Terms.

We recommend reviewing this page periodically. The "Last Revised" date at the top of this document indicates when the most recent changes were made.`,
  },
  {
    id: "contact",
    title: "11. Contact",
    content: `For questions, concerns, or legal notices relating to these Terms of Use:

**Legal & Compliance Cell**
Dharwad Institute of Mental Health and Neurosciences
Near KSRTC Bus Stand, Dharwad, Karnataka – 580008

📧 legal@dimhans.gov.in
📞 +91-836-2460000 (Ext. 215)
⏰ Monday – Friday, 9:00 AM – 5:00 PM IST`,
  },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container-site py-10 pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[12px] bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 mt-1">
              <FileText size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-1">
                Legal &amp; Compliance
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-2">
                Terms of Use
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
              <nav aria-label="Terms sections">
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
            <div className="bg-amber-50 border border-amber-200 rounded-[12px] p-5 mb-10">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Please read these terms carefully</strong> before using the DIMHANS website or any
                associated digital service. These Terms of Use form a legally binding agreement between you
                and DIMHANS, a statutory body of the Government of Karnataka.
              </p>
            </div>

            <div className="space-y-12">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold font-display text-[var(--color-text)] mb-4 pb-3 border-b border-[var(--color-border)]">
                    {section.title}
                  </h2>
                  <div>
                    {section.content.split("\n\n").map((para, i) => {
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

            <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-[var(--color-text-muted)]">
                © {new Date().getFullYear()} Dharwad Institute of Mental Health and Neurosciences. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="text-xs text-[var(--color-primary)] hover:underline">Privacy Policy</Link>
                <Link href="/rti" className="text-xs text-[var(--color-primary)] hover:underline">RTI</Link>
                <Link href="/accessibility" className="text-xs text-[var(--color-primary)] hover:underline">Accessibility</Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
