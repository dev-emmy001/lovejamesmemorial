"use client";

import { motion } from "framer-motion";

export default function Appreciation() {
  return (
    <div className="w-full pt-12 pb-24 px-6 bg-transparent text-[#241611]">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pb-4">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        {/* Appreciation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-[#b5122c]/30 p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-md shadow-[#241611]/5"
        >
          <h2 className="text-3xl font-serif text-[#7d0d1f] font-semibold">
            Appreciation
          </h2>
          <p className="text-[#241611] font-normal text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            The family of our beloved mother wishes to express our heartfelt gratitude to all relatives, friends, neighbours, church members, colleagues, and well-wishers for the love, prayers, visits, messages, financial support, and various acts of kindness shown to us during this period of bereavement.
          </p>
          <p className="text-[#55423b] font-normal text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Your compassion, encouragement, and support have been a great source of comfort and strength to us. We are deeply touched by your presence and the sacrifices you have made to mourn and celebrate her life with us.
          </p>
          <p className="text-[#b5122c] font-serif text-sm font-semibold pt-2">
            — Godwin James, for the Family
          </p>
        </motion.div>

      </div>
    </div>
  );
}
