"use client";

import { useState } from "react";

export default function GovTopBar() {
  const [lang, setLang] = useState<"EN" | "KN">("EN");

  const toggleLang = () => {
    setLang((l) => (l === "EN" ? "KN" : "EN"));
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-[#0b1329] text-white border-b border-white/10 text-[11px] font-medium h-8 flex items-center"
      role="complementary"
      aria-label="Government of India and Karnataka official portal header"
    >
      <div className="container-site max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
        {/* Left Side: India & Karnataka Flag & Text */}
        <div className="flex items-center gap-2.5">
          {/* Small Tricolor Bar Badge */}
          <div className="flex h-3 w-4 border border-white/15 rounded-[1px] overflow-hidden flex-shrink-0" aria-hidden="true">
            <div className="w-[33%] h-full bg-[#FF9933]"></div>
            <div className="w-[34%] h-full bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#000080]" />
            </div>
            <div className="w-[33%] h-full bg-[#128807]"></div>
          </div>

          <span className="text-white/80 hover:text-white transition-colors cursor-default tracking-wide">
            ಕರ್ನಾಟಕ ಸರ್ಕಾರ | <span className="font-semibold text-white">GOVERNMENT OF KARNATAKA</span>
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white/60 hidden sm:inline">
            ಭಾರತ ಸರ್ಕಾರ | GOVERNMENT OF INDIA
          </span>
        </div>

        {/* Right Side: Accessibility Controls + Language Selector */}
        <div className="flex items-center gap-4 text-white/70">
          {/* Skip to Main Content */}
          <a
            href="#main-content"
            className="hover:text-white focus:text-white transition-colors text-[10px] uppercase tracking-wider hidden md:inline border-r border-white/10 pr-3"
          >
            Skip to main content
          </a>

          {/* Text Size Accessibility Controls */}
          <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-3" aria-label="Text size accessibility controls">
            <button
              onClick={() => {
                document.documentElement.style.fontSize = "15px";
              }}
              className="hover:text-white px-1 font-semibold"
              title="Decrease text size"
            >
              A-
            </button>
            <button
              onClick={() => {
                document.documentElement.style.fontSize = "16px";
              }}
              className="hover:text-white px-1 font-semibold"
              title="Normal text size"
            >
              A
            </button>
            <button
              onClick={() => {
                document.documentElement.style.fontSize = "17px";
              }}
              className="hover:text-white px-1 font-semibold"
              title="Increase text size"
            >
              A+
            </button>
          </div>

          {/* Bilingual Language Selector */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 hover:text-white px-2 py-0.5 rounded border border-white/10 hover:border-white/20 transition-all font-semibold"
            aria-label="Select language"
          >
            🌐 {lang === "EN" ? "ಕನ್ನಡ (Kannada)" : "English"}
          </button>
        </div>
      </div>
    </div>
  );
}
