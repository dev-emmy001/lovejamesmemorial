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
    <div className="w-full min-h-screen pt-16 pb-0 bg-transparent text-[#241611]">
      <div className="max-w-4xl mx-auto space-y-16 px-4 sm:px-6 pb-16">

        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pt-4">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-serif text-[#7d0d1f] tracking-wide font-normal mb-2">Order of Service</h1>
          <p className="text-[#55423b] text-sm">Funeral & Interment Program for Late Deaconess Love James</p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="space-y-4">
          <h2 className="text-[#b5122c] font-serif text-xl font-semibold flex items-center space-x-2 border-b border-[#b5122c]/20 pb-2">
            <Calendar size={20} className="text-[#b5122c]" />
            <span>Schedule of Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scheduleEvents.map((evt, idx) => (
              <div key={idx} className="bg-white border border-[#d3a24a]/40 p-5 rounded-2xl shadow-md shadow-[#241611]/5">
                <h3 className="text-[#7d0d1f] font-semibold text-base mb-1">{evt.title}</h3>
                <p className="text-[#b5122c] text-xs font-semibold uppercase tracking-wider mb-2">{evt.date}</p>
                <p className="text-[#55423b] text-xs">{evt.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Officiating Ministers & Music Ministry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Officiating Ministers Single Box */}
          <div className="bg-white border border-[#d3a24a]/40 p-6 rounded-2xl shadow-md shadow-[#241611]/5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#b5122c] font-serif text-xl font-semibold flex items-center space-x-2 border-b border-[#d3a24a]/30 pb-3 mb-4">
                <UserCheck size={20} className="text-[#b5122c]" />
                <span>Officiating Ministers</span>
              </h2>
              <div className="divide-y divide-[#d3a24a]/20">
                {ministers.map((min, idx) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-[#241611] text-sm font-bold">{min.name}</p>
                    <p className="text-[#55423b] text-xs leading-snug">{min.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Music Ministry Single Box */}
          <div className="bg-white border border-[#d3a24a]/40 p-6 rounded-2xl shadow-md shadow-[#241611]/5 flex flex-col justify-between">
            <div>
              <h2 className="text-[#b5122c] font-serif text-xl font-semibold flex items-center space-x-2 border-b border-[#d3a24a]/30 pb-3 mb-4">
                <Music size={20} className="text-[#b5122c]" />
                <span>Music Ministry</span>
              </h2>
              <div className="space-y-4">
                <div className="pb-3 border-b border-[#d3a24a]/20">
                  <p className="text-[#7d0d1f] font-bold text-xs uppercase tracking-wider mb-1">Song Leaders</p>
                  <p className="text-[#241611] text-xs sm:text-sm leading-relaxed">Akachukwu Eke, Godson Chibueze, Choir Leaders/Designates</p>
                </div>
                <div className="pb-3 border-b border-[#d3a24a]/20">
                  <p className="text-[#7d0d1f] font-bold text-xs uppercase tracking-wider mb-1">Organists</p>
                  <p className="text-[#241611] text-xs sm:text-sm leading-relaxed">Engr. Precious Amaugo, Lucky Walson</p>
                </div>
                <div className="pb-3 border-b border-[#d3a24a]/20">
                  <p className="text-[#7d0d1f] font-bold text-xs uppercase tracking-wider mb-1">Choirs</p>
                  <p className="text-[#241611] text-xs sm:text-sm leading-relaxed">Oro-Evo District Choir, Degema District Choir, Light House Choir</p>
                </div>
                <div className="pt-0.5">
                  <p className="text-[#7d0d1f] font-bold text-xs uppercase tracking-wider mb-1">Soloists</p>
                  <p className="text-[#241611] text-xs sm:text-sm leading-relaxed">Akachukwu Eke, Nathan David Adiele</p>
                </div>
              </div>
            </div>
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
              <motion.h2 variants={itemVariants} className="text-2xl font-serif text-[#7d0d1f] mb-6 font-semibold border-b border-[#b5122c]/20 pb-2">
                {part.title}
              </motion.h2>

              {part.description && (
                <motion.p variants={itemVariants} className="text-[#55423b] text-sm mb-6 bg-[#fffaf0] p-5 rounded-2xl border border-[#d3a24a]/40 shadow-sm">
                  {part.description}
                </motion.p>
              )}

              {part.items.length > 0 && (
                <div className="relative border-l-2 border-[#b5122c]/40 ml-3 space-y-6 pb-2">
                  {part.items.map((item, itemIndex) => (
                    <motion.div key={itemIndex} variants={itemVariants} className="relative pl-7">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#b5122c] shadow-sm ring-4 ring-[#fbf1de]" />
                      <div className="flex space-x-4 items-start">
                        <span className="text-xs font-bold text-[#d3a24a] mt-0.5 min-w-[20px]">
                          {(itemIndex + 1).toString().padStart(2, "0")}
                        </span>
                        <p className="text-base text-[#241611] leading-relaxed font-normal">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Width Hymns Section */}
      <div className="w-full bg-gradient-to-b from-[#180a08] via-[#120504] to-[#0a0202] text-[#fbf1de] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#d3a24a]/30 shadow-2xl mt-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center space-x-3.5 border-b border-[#d3a24a]/30 pb-4">
            <Music className="text-[#d3a24a]" size={28} />
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#eecf8f] font-bold tracking-wide">Sung In Her Honour — Hymns</h2>
              <p className="text-xs sm:text-sm text-[#ded0be]/80 mt-0.5">Tap any hymn to view its complete lyrics</p>
            </div>
          </div>

          <div className="space-y-4">
            {hymns.map((hymn, idx) => {
              const isOpen = activeHymn === idx;
              return (
                <div key={idx} className="bg-[#22100d] border border-[#d3a24a]/40 rounded-2xl overflow-hidden shadow-xl hover:border-[#d3a24a]/70 transition-all duration-200">
                  <button
                    onClick={() => setActiveHymn(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d3a24a]">{hymn.code}</span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white font-bold tracking-wide">{hymn.title}</h3>
                    </div>
                    <ChevronDown className={`text-[#d3a24a] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={24} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-6 pt-3 space-y-4 border-t border-[#d3a24a]/20 bg-[#140605]"
                    >
                      {hymn.verses.map((verse, vIdx) => (
                        <p key={vIdx} className="text-[#fbf1de] text-base sm:text-lg leading-relaxed whitespace-pre-line">
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
