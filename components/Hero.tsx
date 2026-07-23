"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const handleTributeClick = () => {
    if (onNavigate) {
      onNavigate("tributes");
    } else {
      const el = document.getElementById("tributes");
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const handleProgramClick = () => {
    if (onNavigate) {
      onNavigate("program");
    } else {
      const el = document.getElementById("program");
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#180a08] via-[#120504] to-[#0d0403] text-[#fbf1de] overflow-hidden pt-36 sm:pt-40 md:pt-44 lg:pt-44 pb-12 lg:pb-16 min-h-[92vh] flex items-center">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b5122c]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-10 right-1/3 w-[400px] h-[400px] bg-[#d3a24a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content, Details & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:pr-4"
          >
            {/* Header Subtitle */}
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#caa257]">
              FUNERAL SERVICE IN HONOR OF LATE
            </span>

            {/* Main Heading */}
            <div className="space-y-0.5">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#c8102e] uppercase font-sans leading-none drop-shadow-[0_4px_16px_rgba(200,16,46,0.25)]">
                FOREVER
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-white leading-tight font-sans">
                IN OUR HEARTS
              </p>
            </div>

            {/* Person Title & Name */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#caa257]">
                DEACONESS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[#eecf8f] leading-tight">
                Love James{" "}
                <span className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#caa257] font-normal">
                  (Nwa-Ada)
                </span>
              </h2>
              <p className="text-lg sm:text-xl font-medium text-[#ded0be] tracking-widest pt-0.5">
                1954 – 2026
              </p>
            </div>

            {/* Middle Section: Badge + Event Info Grid */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 w-full">
              {/* Metallic 72 Years Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 18 }}
                className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#f8e3a1] via-[#d4af37] to-[#7d5615] p-[2px] shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#e6c46c] via-[#b88c28] to-[#6d4b10] flex flex-col items-center justify-center border border-[#fff2ba]/40 shadow-inner">
                  <span className="text-3xl sm:text-4xl font-black font-serif text-[#2a1705] leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    72
                  </span>
                  <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#2a1705] mt-1">
                    YEARS
                  </span>
                </div>
              </motion.div>

              {/* Event Details */}
              <div className="space-y-3 text-sm border-l-2 border-[#caa257]/30 pl-4 py-1">
                <div>
                  <p className="font-bold text-[#eecf8f] text-sm sm:text-base">
                    Thursday, 30 July 2026 · 10am
                  </p>
                  <p className="text-[#ded0be] text-xs sm:text-sm leading-relaxed mt-0.5 max-w-md">
                    At Chioma’s Compound, Umugwocha, Ozuzu, Etche LGA, Rivers State
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[#eecf8f] text-sm sm:text-base">
                    Thanksgiving Service: <span className="font-medium text-white">Saturday, 1 August 2026</span>
                  </p>
                  <p className="text-[#ded0be] text-xs sm:text-sm leading-relaxed mt-0.5 max-w-md">
                    SDA Church, Rumuobiokani, Port Harcourt
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={handleTributeClick}
                className="px-8 py-3.5 rounded-full bg-[#b5122c] hover:bg-[#d91438] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl shadow-[#b5122c]/30 hover:shadow-[#b5122c]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center"
              >
                SHARE A TRIBUTE
              </button>
              <button
                onClick={handleProgramClick}
                className="px-8 py-3.5 rounded-full border border-[#caa257] hover:bg-[#caa257]/15 text-[#eecf8f] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center"
              >
                ORDER OF SERVICE
              </button>
            </div>
          </motion.div>

          {/* Right Column: Clean Portrait Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#caa257]/20"
          >
            <div className="relative w-full h-full">
              <Image
                src="/gallery/image2.png"
                alt="Deaconess Love James"
                fill
                className="object-cover object-top lg:object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Gentle left transition for desktop only */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#120504] to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
