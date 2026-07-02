"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket, Banknote, ScrollText, Users, TrendingUp, Shield, FileText, BarChart3,
  ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight, Check, Award
} from "lucide-react";
import { INCUBATION_BENEFITS, INCUBATION_STAGES } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Banknote, ScrollText, Users, TrendingUp, Shield, FileText, BarChart3,
};

function useInView(threshold = 0.08) {
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

const SECTORS = [
  "AI & Digital Health Diagnostics",
  "Digital Therapeutics (CBT/Therapy)",
  "Pharmacogenomics & Precision Medicine",
  "Medical Imaging & MRI Preprocessing",
  "Sensory & Assistive Devices",
  "Forensic & Computational Psychiatry",
  "Other Healthcare Technology",
];

const STAGES = [
  "Ideation / Concept Stage",
  "Proof of Concept / Prototype Developed",
  "Clinically Validated Product",
  "Scaling / Revenue-Generating",
];

const GRANTS = [
  "DST Seed Support Scheme (up to ₹25 Lakhs)",
  "BIRAC NIDHI-PRAYAS (up to ₹10 Lakhs)",
  "BIRAC BIG (Biotechnology Ignition Grant - up to ₹50 Lakhs)",
  "MEITY Hub Grant Assistance (up to ₹20 Lakhs)",
  "Angel / Private Equity Match Program",
  "Bootstrapped / No Grant Assistance Required",
];

const LAB_RESOURCES = [
  "Neuroimaging Suite (3T MRI, fMRI)",
  "Electrophysiology Labs (EEG/ERP)",
  "Molecular Biology & Genomics Lab",
  "HPC (High-Performance Computing) Cluster",
  "Shared Co-working Space Hot-desks",
  "Access to Patient Cohorts & Clinicians",
];

export default function Incubator() {
  const { ref, inView } = useInView(0.06);
  const [activeStage, setActiveStage] = useState(0);

  // Multi-step Application Portal States
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Fields
  const [startupName, setStartupName] = useState("");
  const [sector, setSector] = useState(SECTORS[0]);
  const [pitch, setPitch] = useState("");
  
  const [founderName, setFounderName] = useState("");
  const [teamSize, setTeamSize] = useState("1-2 members");
  const [background, setBackground] = useState("");

  const [currentStage, setCurrentStage] = useState(STAGES[0]);
  const [targetGrant, setTargetGrant] = useState(GRANTS[0]);
  const [selectedLabs, setSelectedLabs] = useState<string[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLabToggle = (lab: string) => {
    setSelectedLabs((prev) =>
      prev.includes(lab) ? prev.filter((l) => l !== lab) : [...prev, lab]
    );
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!startupName.trim()) errs.startupName = "Startup name is required";
      if (!pitch.trim() || pitch.length < 15) errs.pitch = "Please provide a brief pitch (min 15 chars)";
    } else if (step === 2) {
      if (!founderName.trim()) errs.founderName = "Founder's name is required";
      if (!background.trim()) errs.background = "Please describe academic/clinical backgrounds";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(3, prev + 1));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleOpenModal = () => {
    setStartupName("");
    setPitch("");
    setFounderName("");
    setBackground("");
    setSelectedLabs([]);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
    setSubmitting(false);
    setIsApplyModalOpen(true);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate Birac/DST incubator processing sequence
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="incubator"
      className="section-padding bg-[var(--color-surface)]"
      aria-label="Technology Business Incubator"
      ref={ref}
    >
      <div className="container-site">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="section-label">Technology Business Incubator</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-4">
            Where Deep-Tech Ventures<br className="hidden sm:block" />
            Meet Clinical Credibility
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            The DIMHANS Technology Business Incubator (TBI) is India&apos;s only government-backed incubator
            specifically focused on mental health and neuroscience deep-tech. With access to real patient
            cohorts, clinical validation infrastructure, government funding, and top domain mentors, our
            startups launch with an unfair advantage.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {INCUBATION_BENEFITS.map((benefit, i) => {
            const Icon = ICON_MAP[benefit.icon] ?? Rocket;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.04 * i }}
                className="card p-5 group cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-[8px] bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-primary)] mb-3 transition-colors duration-300">
                  <Icon size={16} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-[var(--color-border)] rounded-[16px] p-6 lg:p-8 mb-8"
        >
          <h3 className="text-base font-bold text-[var(--color-text)] mb-6">
            Incubation Journey
          </h3>

          {/* Stage Selector — Desktop horizontal */}
          <div className="hidden lg:flex items-center mb-8 relative">
            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--color-border)]" />
            <motion.div
              className="absolute top-5 left-0 h-0.5 bg-[var(--color-primary)] origin-left"
              style={{ width: `${(activeStage / (INCUBATION_STAGES.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
            {INCUBATION_STAGES.map((stage, i) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(i)}
                className="relative z-10 flex flex-col items-center gap-2 flex-1"
                aria-pressed={activeStage === i}
                aria-label={`Stage ${stage.step}: ${stage.title}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-250 ${
                  i <= activeStage
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-sm"
                    : "bg-white border-[var(--color-border)] text-[var(--color-text-muted)]"
                }`}>
                  {i < activeStage ? <CheckCircle2 size={16} /> : stage.step}
                </div>
                <span className={`text-[11px] font-semibold transition-colors duration-200 ${
                  i <= activeStage ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"
                }`}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Stage Detail */}
          <div className="lg:min-h-[80px]">
            {INCUBATION_STAGES.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={false}
                animate={{
                  opacity: activeStage === i ? 1 : 0,
                  display: activeStage === i ? "flex" : "none",
                }}
                className="flex gap-4 items-start"
              >
                <div className="hidden lg:flex w-12 h-12 rounded-[10px] bg-[var(--color-primary)]/8 items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[var(--color-primary)]">{stage.step}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text)] mb-1.5">
                    Stage {stage.step}: {stage.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile stage selector */}
          <div className="flex lg:hidden gap-2 flex-wrap mt-4">
            {INCUBATION_STAGES.map((stage, i) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(i)}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-semibold transition-colors ${
                  activeStage === i
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                }`}
              >
                {stage.step}. {stage.title}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
            <button
              onClick={() => setActiveStage((s) => Math.max(0, s - 1))}
              disabled={activeStage === 0}
              className="btn-ghost text-sm disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous
            </button>
            {activeStage === INCUBATION_STAGES.length - 1 ? (
              <button
                onClick={handleOpenModal}
                className="btn-primary text-sm py-2 px-4"
              >
                Apply Now <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setActiveStage((s) => Math.min(INCUBATION_STAGES.length - 1, s + 1))}
                className="btn-ghost text-sm"
              >
                Next →
              </button>
            )}
          </div>
        </motion.div>

        {/* Application Portal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative overflow-hidden bg-[var(--color-secondary)] text-white rounded-[16px] p-8 lg:p-10"
        >
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-64 h-64 opacity-10" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="160" cy="40" r="120" stroke="white" strokeWidth="40" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Cohort 8 Applications Open · Closes Sep 30, 2026
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold font-display mb-2">
                Ready to build the future of healthcare?
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Join 48+ startups that have validated, funded, and scaled their deep-tech ventures
                through DIMHANS TBI. Apply now for our 8th cohort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={handleOpenModal}
                className="bg-white text-[var(--color-primary)] font-semibold text-sm px-5 py-2.5 rounded-[8px] flex items-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Apply for Incubation <ArrowRight size={14} />
              </button>
              <button
                onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-white/30 text-white font-semibold text-sm px-5 py-2.5 rounded-[8px] hover:bg-white/10 transition-colors"
              >
                Download Guidelines
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Multi-step Application Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl bg-white rounded-[16px] shadow-xl overflow-hidden border border-[var(--color-border)] max-h-[90vh] flex flex-col"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Award className="text-[var(--color-primary)]" size={18} />
                  <h3 className="text-sm font-bold text-[var(--color-text)]">Incubator Application Portal</h3>
                </div>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text)] rounded-[6px] hover:bg-[var(--color-border)]/30 transition-colors"
                  aria-label="Close application modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Stepper Indicator */}
              {!submitted && (
                <div className="px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)]/40 flex items-center justify-between text-[11px] font-semibold text-[var(--color-text-muted)] flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${currentStep >= 1 ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "border-[var(--color-border)] bg-white"}`}>1</span>
                    <span className={currentStep === 1 ? "text-[var(--color-primary)]" : ""}>Startup Info</span>
                  </div>
                  <div className="w-8 h-px bg-[var(--color-border)]" />
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${currentStep >= 2 ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "border-[var(--color-border)] bg-white"}`}>2</span>
                    <span className={currentStep === 2 ? "text-[var(--color-primary)]" : ""}>Founders</span>
                  </div>
                  <div className="w-8 h-px bg-[var(--color-border)]" />
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${currentStep >= 3 ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "border-[var(--color-border)] bg-white"}`}>3</span>
                    <span className={currentStep === 3 ? "text-[var(--color-primary)]" : ""}>Needs</span>
                  </div>
                </div>
              )}

              {/* Content Body */}
              <div className="p-6 overflow-y-auto flex-1">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <Check size={24} />
                    </div>
                    <h4 className="text-base font-bold text-[var(--color-text)] mb-2">Application Submitted successfully!</h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you for applying to DIMHANS TBI Cohort 8. Your startup <span className="font-semibold">{startupName}</span> has been entered into the scientific review sequence. We will communicate our evaluation committee results within 30 days.
                    </p>
                    <button
                      onClick={() => setIsApplyModalOpen(false)}
                      className="btn-primary text-xs py-2 px-5"
                    >
                      Return to Portal
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    {/* STEP 1: Startup details */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="startup-name" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            Startup / Venture Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="startup-name"
                            type="text"
                            value={startupName}
                            placeholder="E.g. SynapseMed Diagnostics"
                            onChange={(e) => setStartupName(e.target.value)}
                            className={`w-full px-3 py-2 text-xs border rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] ${errors.startupName ? "border-red-400" : "border-[var(--color-border)]"}`}
                          />
                          {errors.startupName && <p className="text-[10px] text-red-500 mt-1">{errors.startupName}</p>}
                        </div>

                        <div>
                          <label htmlFor="startup-sector" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            Primary Healthcare Sector <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="startup-sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                          >
                            {SECTORS.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="startup-pitch" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            One-Line Pitch / Abstract (Minimum 15 characters) <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="startup-pitch"
                            rows={3}
                            value={pitch}
                            placeholder="Describe the medical problem you are solving and your core technology approach..."
                            onChange={(e) => setPitch(e.target.value)}
                            className={`w-full px-3 py-2 text-xs border rounded-[8px] resize-none focus:outline-none focus:border-[var(--color-primary)] ${errors.pitch ? "border-red-400" : "border-[var(--color-border)]"}`}
                          />
                          {errors.pitch && <p className="text-[10px] text-red-500 mt-1">{errors.pitch}</p>}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Founders Details */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="founder-name" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            Lead Founder Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="founder-name"
                            type="text"
                            value={founderName}
                            placeholder="E.g. Dr. Priyanjali Rao"
                            onChange={(e) => setFounderName(e.target.value)}
                            className={`w-full px-3 py-2 text-xs border rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] ${errors.founderName ? "border-red-400" : "border-[var(--color-border)]"}`}
                          />
                          {errors.founderName && <p className="text-[10px] text-red-500 mt-1">{errors.founderName}</p>}
                        </div>

                        <div>
                          <label htmlFor="team-size" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            Current Core Team Size
                          </label>
                          <select
                            id="team-size"
                            value={teamSize}
                            onChange={(e) => setTeamSize(e.target.value)}
                            className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                          >
                            <option value="1-2 members">1-2 members (Sole founder / early duo)</option>
                            <option value="3-5 members">3-5 members (Cross-functional team)</option>
                            <option value="6-10 members">6-10 members (Growing enterprise)</option>
                            <option value="10+ members">10+ members (Scale-up team)</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="founder-bg" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                            Team Academic & Clinical Background <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="founder-bg"
                            rows={3}
                            value={background}
                            placeholder="Describe the medical, clinical, or software engineering expertise of your core team members..."
                            onChange={(e) => setBackground(e.target.value)}
                            className={`w-full px-3 py-2 text-xs border rounded-[8px] resize-none focus:outline-none focus:border-[var(--color-primary)] ${errors.background ? "border-red-400" : "border-[var(--color-border)]"}`}
                          />
                          {errors.background && <p className="text-[10px] text-red-500 mt-1">{errors.background}</p>}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Stage & Needs details */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="startup-stage" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                              Startup Stage
                            </label>
                            <select
                              id="startup-stage"
                              value={currentStage}
                              onChange={(e) => setCurrentStage(e.target.value)}
                              className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                            >
                              {STAGES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label htmlFor="target-grant" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                              Target Government Grant
                            </label>
                            <select
                              id="target-grant"
                              value={targetGrant}
                              onChange={(e) => setTargetGrant(e.target.value)}
                              className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                            >
                              {GRANTS.map((g) => (
                                <option key={g} value={g}>{g}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Lab resources checklists */}
                        <div>
                          <span className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                            Facility & Research Access Requirements (Select all that apply)
                          </span>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {LAB_RESOURCES.map((lab) => (
                              <label
                                key={lab}
                                className="flex items-center gap-2 p-2 border border-[var(--color-border)] rounded-[6px] hover:bg-[var(--color-surface)] cursor-pointer text-[10px] font-semibold text-[var(--color-text-secondary)]"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedLabs.includes(lab)}
                                  onChange={() => handleLabToggle(lab)}
                                  className="w-3.5 h-3.5 border-[var(--color-border)] text-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]/15"
                                />
                                <span>{lab}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Actions buttons */}
                    <div className="flex gap-2 justify-end pt-3 border-t border-[var(--color-border)]">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-4 py-2 border border-[var(--color-border)] rounded-[8px] text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] flex items-center gap-1"
                        >
                          <ChevronLeft size={12} /> Back
                        </button>
                      )}
                      
                      <button
                        type="button"
                        onClick={() => setIsApplyModalOpen(false)}
                        className="px-4 py-2 border border-[var(--color-border)] rounded-[8px] text-xs font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] mr-auto"
                      >
                        Close
                      </button>

                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="btn-primary text-xs py-2 px-5 flex items-center gap-1"
                        >
                          Continue <ChevronRight size={12} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary text-xs py-2 px-6 justify-center disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
