"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Music, Calendar, UserCheck } from "lucide-react";

const scheduleEvents = [
  { title: "Funeral Service", date: "Thursday, 30 July 2026 • 10:00 AM", location: "Chioma’s Compound, Umugwocha, Ozuzu, Etche LGA, Rivers State" },
  { title: "Interment", date: "Thursday, 30 July 2026 • Immediately after Funeral", location: "Chioma’s Compound, Ozuzu" },
  { title: "Reception", date: "Thursday, 30 July 2026 • Immediately after Interment", location: "Chioma’s Compound, Ozuzu" },
  { title: "Thanksgiving Service", date: "Saturday, 1 August 2026", location: "SDA Church, Rumuobiokani, Port Harcourt" },
];

const ministers = [
  { name: "Pastor Solomon Okonu", title: "President, Port Harcourt West Conference" },
  { name: "Pastor Alvin Ikeocha", title: "Executive Secretary, Port Harcourt West Conference" },
  { name: "Pastor Tombari Kpenu", title: "Treasurer, Port Harcourt West Conference" },
  { name: "Pastor Ekezie Chendu", title: "Director, Prayer Ministry — Port Harcourt East Conference" },
  { name: "Pastor Samuel Iroulo", title: "President, Port Harcourt East Conference" },
  { name: "Pastor Nation A. Nation", title: "President, Cross River Conference" },
  { name: "Pastor Richard Woke", title: "Ministerial Secretary, Port Harcourt West Conference" },
  { name: "Pastor Ernest Nwoko", title: "Director, Global Mission & Riverine" },
  { name: "Elder Moses Limejuice", title: "Deputy Leader, Degema District" },
  { name: "Elder Otuomasirichi Ebuzie", title: "First Elder, Rumuobiokani Church" },
];

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

const hymns = [
  {
    code: "SDAH 442",
    title: "How Sweet Are the Tidings",
    verses: [
      "How sweet are the tidings that greet the pilgrim’s ear,\nAs he wanders in exile from home!\nSoon, soon will the Savior in glory appear,\nAnd soon will the kingdom come.",
      "Refrain:\nHe’s coming, coming, coming soon I know,\nComing back to this earth again;\nAnd the weary pilgrims will to glory go,\nWhen the Savior comes to reign.",
      "The mossy old graves where the pilgrims sleep\nShall be open as wide as before,\nAnd the millions that sleep in the mighty deep\nShall live on this earth once more.",
      "There we’ll meet ne’er to part in our happy Eden home,\nSweet songs of redemption we’ll sing;\nFrom the north, from the south, all the ransomed shall come,\nAnd worship our heavenly King."
    ]
  },
  {
    code: "SDAH 50",
    title: "Abide With Me",
    verses: [
      "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord with me abide!\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
      "Swift to its close ebbs out life’s little day;\nEarth’s joys grow dim; its glories pass away;\nChange and decay in all around I see;\nO Thou who changest not, abide with me.",
      "I need Thy presence every passing hour.\nWhat but Thy grace can foil the tempter’s power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, O abide with me.",
      "I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness.\nWhere is death’s sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me!"
    ]
  },
  {
    code: "SDAH 205",
    title: "Gleams of the Golden Morning",
    verses: [
      "The golden morning is fast approaching;\nJesus soon will come\nTo take His faithful and happy children\nTo their promised home.",
      "Refrain:\nO, we see the gleams of the golden morning piercing thro’ this night of gloom!\nO, see the gleams of the golden morning that will burst the tomb.",
      "The gospel summons will soon be carried\nTo the nations round;\nThe Bridegroom then will cease to tarry\nAnd the trumpet sound.",
      "Attended by all the shining angels,\nDown the flaming sky\nThe Judge will come, and will take His people\nWhere they will not die."
    ]
  },
  {
    code: "General Hymn",
    title: "He Will Hold Me Fast",
    verses: [
      "When I fear my faith will fail, Christ will hold me fast;\nWhen the tempter would prevail, He can hold me fast!",
      "Refrain:\nHe will hold me fast, He will hold me fast;\nFor my Savior loves me so, He will hold me fast.",
      "I could never keep my hold, He must hold me fast;\nFor my love is often cold, He must hold me fast.",
      "I am precious in His sight, He will hold me fast;\nThose He saves are His delight, He will hold me fast."
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Program() {
  const [activeHymn, setActiveHymn] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen pt-28 pb-20 px-6 bg-transparent text-zinc-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-serif text-zinc-100 tracking-wide font-light mb-2">Order of Service</h1>
          <p className="text-zinc-400 text-sm">Funeral & Interment Program for Late Deaconess Love James</p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="space-y-4">
          <h2 className="text-[#FFE9B3] font-serif text-xl font-semibold flex items-center space-x-2">
            <Calendar size={20} />
            <span>Schedule of Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scheduleEvents.map((evt, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
                <h3 className="text-zinc-100 font-medium text-base mb-1">{evt.title}</h3>
                <p className="text-[#FFE9B3] text-xs font-mono mb-2">{evt.date}</p>
                <p className="text-zinc-400 text-xs">{evt.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Officiating Ministers */}
        <div className="space-y-4">
          <h2 className="text-[#FFE9B3] font-serif text-xl font-semibold flex items-center space-x-2">
            <UserCheck size={20} />
            <span>Officiating Ministers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ministers.map((min, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 p-4 rounded-xl">
                <p className="text-zinc-200 text-sm font-medium">{min.name}</p>
                <p className="text-zinc-500 text-xs">{min.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order of Service Parts */}
        <div className="space-y-12">
          {programData.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-serif text-[#FFE9B3] mb-6 font-semibold border-b border-zinc-800 pb-2">
                {part.title}
              </motion.h2>

              {part.description && (
                <motion.p variants={itemVariants} className="text-zinc-300 text-sm mb-6 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80">
                  {part.description}
                </motion.p>
              )}

              {part.items.length > 0 && (
                <div className="relative border-l-2 border-zinc-800/80 ml-3 space-y-6 pb-2">
                  {part.items.map((item, itemIndex) => (
                    <motion.div key={itemIndex} variants={itemVariants} className="relative pl-7">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#FFE9B3]/80 shadow-sm ring-4 ring-black" />
                      <div className="flex space-x-4 items-start">
                        <span className="text-xs font-bold text-zinc-500 mt-0.5 min-w-[20px]">
                          {(itemIndex + 1).toString().padStart(2, "0")}
                        </span>
                        <p className="text-base text-zinc-200 leading-relaxed font-light">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Hymns Section */}
        <div className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="flex items-center space-x-3">
            <Music className="text-[#FFE9B3]" size={24} />
            <div>
              <h2 className="text-2xl font-serif text-zinc-100 font-light">Sung In Her Honour — Hymns</h2>
              <p className="text-xs text-zinc-500">Tap any hymn to view its complete lyrics</p>
            </div>
          </div>

          <div className="space-y-4">
            {hymns.map((hymn, idx) => {
              const isOpen = activeHymn === idx;
              return (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setActiveHymn(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-zinc-800/30 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FFE9B3]">{hymn.code}</span>
                      <h3 className="text-lg font-serif text-zinc-200">{hymn.title}</h3>
                    </div>
                    <ChevronDown className={`text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} size={20} />
                  </button>

                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-5 pb-6 pt-2 space-y-4 border-t border-zinc-800/40">
                      {hymn.verses.map((verse, vIdx) => (
                        <p key={vIdx} className="text-zinc-300 text-sm font-serif italic whitespace-pre-line leading-relaxed">
                          {verse}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
