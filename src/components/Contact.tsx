"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/data";

function useInView(threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  organization: string;
  inquiry: string;
  message: string;
}

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Incubation Application",
  "Research Collaboration",
  "Infrastructure Booking",
  "Clinical Services",
  "Media & Press",
  "Other",
];

export default function Contact() {
  const { ref, inView } = useInView(0.05);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({
    name: "", email: "", organization: "", inquiry: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email required";
    if (!form.inquiry) newErrors.inquiry = "Please select an inquiry type";
    if (form.message.length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const SOCIAL_ICONS = [
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter",
      href: SITE.socials.twitter
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      href: SITE.socials.linkedin
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555a3.003 3.003 0 0 0-2.11 2.108C0 8.02 0 12 0 12s0 3.98.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.98 24 12 24 12s0-3.98-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      label: "YouTube",
      href: SITE.socials.youtube
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      label: "Facebook",
      href: SITE.socials.facebook
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white"
      aria-label="Contact"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
            Let&apos;s Build Something<br className="hidden sm:block" />
            Meaningful Together
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Whether you&apos;re a researcher, entrepreneur, clinician, or investor — reach out to explore
            collaboration opportunities with DIMHANS.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {[
              { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: MapPin, label: "Visit Us", value: SITE.address, href: "#" },
              { icon: Clock, label: "Office Hours", value: SITE.hours, href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-3.5 p-4 rounded-[12px] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-hover)] transition-all duration-200 group cursor-pointer bg-white"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-primary)] transition-colors duration-300 flex-shrink-0">
                  <Icon size={15} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-0.5">{label}</div>
                  <div className="text-sm text-[var(--color-text-secondary)] leading-snug">{value}</div>
                </div>
              </a>
            ))}

            {/* Map Placeholder */}
            <div
              className="w-full h-40 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] relative overflow-hidden"
              aria-label="Map placeholder — Dharwad, Karnataka"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[var(--color-text-muted)]">
                <MapPin size={20} className="text-[var(--color-primary)]" />
                <span className="text-xs font-medium">DIMHANS Campus, Dharwad</span>
                <span className="text-[10px] text-[var(--color-text-subtle)]">Karnataka – 580008, India</span>
              </div>
              {/* Subtle map grid */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M16 0v32M0 16h32' stroke='%230B5ED7' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Follow DIMHANS</div>
              <div className="flex items-center gap-2">
                {SOCIAL_ICONS.map(({ icon: svgIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50 transition-all duration-200"
                  >
                    {svgIcon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {formState === "success" ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12 px-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Message Sent!</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                    Thank you for reaching out. Our team will respond within 2 business days.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", organization: "", inquiry: "", message: "" }); }}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Dr. Firstname Lastname"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-[10px] border transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 ${errors.name ? "border-red-400 focus:border-red-500" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p id="name-error" className="text-xs text-red-500 mt-1" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@organization.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-[10px] border transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 ${errors.email ? "border-red-400 focus:border-red-500" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p id="email-error" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="contact-org" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                    Organization / Institute
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    autoComplete="organization"
                    value={form.organization}
                    onChange={(e) => handleChange("organization", e.target.value)}
                    placeholder="University, Hospital, Company..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-[10px] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="contact-inquiry" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-inquiry"
                    value={form.inquiry}
                    onChange={(e) => handleChange("inquiry", e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-[10px] border transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 bg-white appearance-none ${errors.inquiry ? "border-red-400" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"}`}
                    aria-describedby={errors.inquiry ? "inquiry-error" : undefined}
                    aria-invalid={!!errors.inquiry}
                  >
                    <option value="">Select inquiry type...</option>
                    {INQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.inquiry && <p id="inquiry-error" className="text-xs text-red-500 mt-1" role="alert">{errors.inquiry}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your inquiry, project, or collaboration idea in detail..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-[10px] border resize-none transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/15 ${errors.message ? "border-red-400 focus:border-red-500" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"}`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message
                      ? <p id="message-error" className="text-xs text-red-500" role="alert">{errors.message}</p>
                      : <span />
                    }
                    <span className="text-[10px] text-[var(--color-text-subtle)]">{form.message.length}/500</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
                  aria-live="polite"
                  aria-busy={formState === "submitting"}
                >
                  {formState === "submitting" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[var(--color-text-muted)] text-center">
                  By submitting, you agree to our Privacy Policy. We respond within 2 business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
