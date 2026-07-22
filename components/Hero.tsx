"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center space-y-6 pt-28 pb-12 px-6 max-w-4xl mx-auto"
    >
      {/* Subtitle */}
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d3a24a]">
        Funeral Service In Honor Of Late
      </span>

      {/* Big Title */}
      <div className="space-y-1">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#b5122c] uppercase font-sans">
          FOREVER
        </h1>
        <p className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#241611]">
          IN OUR HEARTS
        </p>
      </div>

      {/* Circle Portrait + Age Badge */}
      <div className="relative group my-2">
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-[#b5122c] shadow-2xl ring-8 ring-[#d3a24a]/30">
          <Image
            src="/gallery/image2.png"
            alt="Deaconess Love James"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Medium Gold Circle Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 20 }}
          className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#eecf8f] to-[#d3a24a] border-2 border-[#7d0d1f] flex flex-col items-center justify-center shadow-xl shadow-[#241611]/20 ring-4 ring-[#fffaf0]"
        >
          <span className="text-2xl sm:text-3xl font-serif font-bold text-[#7d0d1f] leading-none">
            72
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-[#7d0d1f] mt-0.5">
            YEARS
          </span>
        </motion.div>
      </div>

      {/* Name & Dates */}
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-[#d3a24a]">
          DEACONESS
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold italic text-[#7d0d1f]">
          Love James <span className="font-normal not-italic text-2xl text-[#b5122c]">(Nwa-Ada)</span>
        </h2>
        <p className="text-base font-semibold text-[#55423b] tracking-wider">
          1954 – 2026
        </p>
      </div>

      {/* Event Details Card */}
      <div className="max-w-md w-full bg-[#fffaf0] border border-[#d3a24a]/40 p-6 rounded-2xl shadow-md shadow-[#241611]/5 space-y-3 text-sm">
        <div>
          <p className="font-bold text-[#b5122c]">Thursday, 30 July 2026 · 10am</p>
          <p className="text-[#55423b] text-xs leading-relaxed mt-0.5">
            At Chioma’s Compound, Umugwocha, Ozuzu, Etche LGA, Rivers State
          </p>
        </div>
        <div className="pt-2 border-t border-[#d3a24a]/20">
          <p className="font-bold text-[#b5122c]">
            Thanksgiving Service: <span className="font-normal text-[#241611]">Saturday, 1 August 2026</span>
          </p>
          <p className="text-[#55423b] text-xs leading-relaxed mt-0.5">
            SDA Church, Rumuobiokani, Port Harcourt
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md">
        <button
          onClick={() => {
            const el = document.getElementById("tributes");
            if (el) {
              const yOffset = -80;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#b5122c] hover:bg-[#7d0d1f] text-[#fffaf0] text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#b5122c]/20 transition-all"
        >
          Share a Tribute
        </button>
        <button
          onClick={() => {
            const el = document.getElementById("program");
            if (el) {
              const yOffset = -80;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-[#d3a24a] hover:bg-[#d3a24a]/10 text-[#7d0d1f] text-xs font-bold uppercase tracking-widest transition-all"
        >
          Order of Service
        </button>
      </div>
    </motion.div>
  );
}
