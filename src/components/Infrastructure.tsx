"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MapPin, Ruler, CalendarCheck, X, Check, Clock, Building } from "lucide-react";
import { INFRASTRUCTURE_ITEMS } from "@/lib/data";

// Custom hook to trigger actions when component is in viewport
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

const CARD_PATTERNS = [
  "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B5ED7' fill-opacity='0.06'%3E%3Ccircle cx='20' cy='20' r='12'/%3E%3Ccircle cx='0' cy='0' r='12'/%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M16 0v32M0 16h32' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230B5ED7' stroke-opacity='0.06' stroke-width='1'%3E%3Cpolygon points='30,5 55,20 55,40 30,55 5,40 5,20'/%3E%3C/g%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='30' height='30' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Crect x='12' y='12' width='16' height='16' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Ccircle cx='25' cy='25' r='10' fill='none' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 22h44M22 0v44' stroke='%230B5ED7' stroke-width='0.5' stroke-opacity='0.08'/%3E%3Ccircle cx='22' cy='22' r='8' fill='%230B5ED7' fill-opacity='0.05'/%3E%3C/svg%3E",
];

const TIME_SLOTS = [
  "09:00 AM - 01:00 PM (Morning)",
  "02:00 PM - 06:00 PM (Afternoon)",
  "09:00 AM - 05:00 PM (Full Day)",
];

export default function Infrastructure() {
  const { ref, inView } = useInView(0.06);
  const [hovered, setHovered] = useState<string | null>(null);

  // Booking states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(INFRASTRUCTURE_ITEMS[0].id);
  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleOpenBooking = (facilityId: string) => {
    setSelectedId(facilityId);
    setBookingStatus("idle");
    setFormErrors({});
    setIsModalOpen(true);
  };

  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Full name is required";
    if (!email.trim() || !email.includes("@")) errors.email = "Valid email is required";
    if (!bookingDate) errors.date = "Please select a date";
    if (!purpose.trim()) errors.purpose = "Purpose of booking is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setBookingStatus("submitting");
    // Simulate API reservation call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setBookingStatus("success");
  };

  const selectedFacility = INFRASTRUCTURE_ITEMS.find((item) => item.id === selectedId);

  return (
    <section
      id="infrastructure"
      className="section-padding bg-white"
      aria-label="Infrastructure and Facilities"
      ref={ref}
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-label">Infrastructure</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[var(--color-text)] mb-3">
              World-Class Facilities<br className="hidden sm:block" />
              for Research & Innovation
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
              Spanning 45,000+ sq ft of purpose-built research and innovation space, our campus provides
              everything a researcher, clinician, or startup needs to move from idea to impact.
            </p>
          </div>

          <div>
            <button
              onClick={() => handleOpenBooking(INFRASTRUCTURE_ITEMS[0].id)}
              className="btn-secondary text-sm flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Book a Facility <CalendarCheck size={14} />
            </button>
          </div>
        </div>

        {/* Infrastructure Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INFRASTRUCTURE_ITEMS.map((item, i) => (
            <article
              key={item.id}
              className={`relative overflow-hidden rounded-[14px] border transition-all duration-250 cursor-default flex flex-col justify-between ${
                hovered === item.id
                  ? "border-[var(--color-primary)]/30 shadow-[var(--shadow-hover)]"
                  : "border-[var(--color-border)] shadow-[var(--shadow-card)]"
              } bg-white`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.title}
            >
              <div>
                {/* Pattern Header */}
                <div
                  className="h-24 relative"
                  style={{
                    backgroundImage: `url("${CARD_PATTERNS[i % CARD_PATTERNS.length]}")`,
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
                  {/* Capacity badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[var(--color-border)] rounded-[6px] text-[10px] font-semibold text-[var(--color-text-muted)]">
                    {item.capacity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-sm font-bold mb-2 transition-colors duration-200 ${
                    hovered === item.id ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)]">
                      <Users size={10} />
                      <span>{item.capacity.split(" ")[0]} capacity</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)]">
                      <Ruler size={10} />
                      <span>{item.area}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenBooking(item.id)}
                    className="text-[10px] font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:underline flex items-center gap-1"
                  >
                    Book Space →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Campus Overview Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Campus Area", value: "45,000+ sq ft" },
            { label: "Specialized Labs", value: "8 Labs" },
            { label: "24/7 Access", value: "For Incubatees" },
            { label: "Booking Portal", value: "Online Simulator" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 bg-[var(--color-surface)] rounded-[12px] border border-[var(--color-border)] text-center"
            >
              <div className="text-sm font-bold text-[var(--color-primary)] mb-0.5">{item.value}</div>
              <div className="text-[11px] text-[var(--color-text-muted)]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Simulator Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-[16px] shadow-xl overflow-hidden border border-[var(--color-border)] max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] flex-shrink-0">
              <div className="flex items-center gap-2">
                <CalendarCheck className="text-[var(--color-primary)]" size={18} />
                <h3 className="text-sm font-bold text-[var(--color-text)]">Facility Booking Portal</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text)] rounded-[6px] hover:bg-[var(--color-border)]/30 transition-colors"
                aria-label="Close booking modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content body */}
            <div className="p-6 overflow-y-auto flex-1">
              {bookingStatus === "success" ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Check size={24} />
                  </div>
                  <h4 className="text-base font-bold text-[var(--color-text)] mb-2">Reservation Request Received!</h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto mb-6">
                    Your request for booking <span className="font-semibold">{selectedFacility?.title}</span> on{" "}
                    <span className="font-semibold">{bookingDate}</span> ({timeSlot}) has been registered in the system. Confirmation details will be sent to <span className="font-semibold">{email}</span>.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn-primary text-xs py-2 px-5"
                  >
                    Finish Simulation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} className="space-y-4">
                  {/* Facility Selector */}
                  <div>
                    <label htmlFor="book-facility" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1">
                      <Building size={11} /> Select Space <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="book-facility"
                      value={selectedId}
                      onChange={(e) => setSelectedId(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                    >
                      {INFRASTRUCTURE_ITEMS.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title} ({item.capacity.split(" ")[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time slots */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="book-date" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="book-date"
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className={`w-full px-3 py-1.5 text-xs border rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] ${formErrors.date ? "border-red-400" : "border-[var(--color-border)]"}`}
                      />
                      {formErrors.date && <p className="text-[10px] text-red-500 mt-1">{formErrors.date}</p>}
                    </div>

                    <div>
                      <label htmlFor="book-slot" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5 flex items-center gap-1">
                        <Clock size={11} /> Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="book-slot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-[var(--color-border)] rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] bg-white appearance-none"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="book-name" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="book-name"
                        type="text"
                        value={name}
                        placeholder="Dr. Rajesh Kumar"
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-3 py-2 text-xs border rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] ${formErrors.name ? "border-red-400" : "border-[var(--color-border)]"}`}
                      />
                      {formErrors.name && <p className="text-[10px] text-red-500 mt-1">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="book-email" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="book-email"
                        type="email"
                        value={email}
                        placeholder="rajesh@dimhans.org"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-3 py-2 text-xs border rounded-[8px] focus:outline-none focus:border-[var(--color-primary)] ${formErrors.email ? "border-red-400" : "border-[var(--color-border)]"}`}
                      />
                      {formErrors.email && <p className="text-[10px] text-red-500 mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="book-purpose" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-1.5">
                      Purpose of Booking <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="book-purpose"
                      rows={3}
                      value={purpose}
                      placeholder="E.g. EEG brain biomarker data collecting run for Cohort 3 research."
                      onChange={(e) => setPurpose(e.target.value)}
                      className={`w-full px-3 py-2 text-xs border rounded-[8px] resize-none focus:outline-none focus:border-[var(--color-primary)] ${formErrors.purpose ? "border-red-400" : "border-[var(--color-border)]"}`}
                    />
                    {formErrors.purpose && <p className="text-[10px] text-red-500 mt-1">{formErrors.purpose}</p>}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 justify-end pt-3 border-t border-[var(--color-border)]">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-[var(--color-border)] rounded-[8px] text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={bookingStatus === "submitting"}
                      className="btn-primary text-xs py-2 px-6 justify-center disabled:opacity-60"
                    >
                      {bookingStatus === "submitting" ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1" />
                          Confirming...
                        </>
                      ) : (
                        "Submit Reservation"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
