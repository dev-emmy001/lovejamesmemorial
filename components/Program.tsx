"use client";

import { motion, Variants } from "framer-motion";

const programData = [
  {
    title: "Part I — The Funeral Service",
    items: [
      "Arrival: Brethren, friends and sympathizers",
      "Song Service: Song Leaders & Sound",
      "Special Song: Nathan David Adiele – Pie Jesu",
      "Processional: Officiating ministers and the bereaved family",
      "Introduction of Officiating Ministers",
      "Opening Hymn: SDAH 442 — 'How Sweet Are the Tidings'",
      "Scripture Reading",
      "Opening Prayer",
      "Lying-in-State: Family / Villagers / Friends / Church / Ministers",
      "Special Song: Nathan David Adiele — 'Time to Say Goodbye'",
      "Biography: Engr. Imoh James (for the family)",
      "Special Song: Degema District Choir",
      "Special Song: Oro-Evo District Choir",
      "General Song: Selected Choristers with Light House Choir – He Will Hold Me Fast",
      "Sermon: Pastor Solomon Okonu",
      "Prayer for the Family",
      "Special Song: Light House Choir – When Peace Like a River",
      "Closing Hymn: SDAH 50 — 'Abide with Me'",
      "Benediction",
      "Special Song: AWM, Oro-Evo District",
      "Recessional: Casket wheeled out, followed by the immediate family and officiating ministers"
    ]
  },
  {
    title: "Part II — The Graveside Service (Interment)",
    items: [
      "Opening Hymn: SDAH 205 — 'Gleams of the Golden Morning'",
      "Scripture Reading",
      "Committal Words",
      "Lowering of the Casket",
      "Graveside Prayer",
      "Vote of Thanks",
      "Benediction"
    ]
  },
  {
    title: "Part III — Reception",
    description: "Served before and during the Funeral Service, and immediately after the interment, at Chioma's Compound.",
    items: []
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Program() {
  return (
    <div className="w-full min-h-screen pt-28 pb-12 px-6 overflow-y-auto bg-transparent">
      <div className="max-w-md mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-serif text-zinc-100 tracking-wide text-center mb-12 font-light"
        >
          Order of Service
        </motion.h1>

        <div className="space-y-16">
          {programData.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative"
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl font-serif text-[#FFE9B3] mb-6 font-semibold"
              >
                {part.title}
              </motion.h2>

              {part.description && (
                <motion.p variants={itemVariants} className="text-zinc-300 leading-relaxed text-sm mb-6 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80 shadow-sm backdrop-blur-sm">
                  {part.description}
                </motion.p>
              )}

              {part.items.length > 0 && (
                <div className="relative border-l-2 border-zinc-800 ml-2.5 space-y-8 pb-4">
                  {part.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      className="relative pl-7"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-red-500/80 shadow-sm ring-4 ring-black" />

                      <div className="flex space-x-4 items-start">
                        <span className="text-xs font-bold text-zinc-400 mt-0.5 min-w-[18px]">
                          {(itemIndex + 1).toString().padStart(2, '0')}
                        </span>
                        <p className="text-[15px] text-zinc-200 leading-relaxed font-medium">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
