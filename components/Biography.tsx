"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Biography() {
  const chapters = [
    {
      title: "Birth and Early Days",
      content:
        "Deaconess Love James was born in 1954 in Umugwuocha, Ozuzu, Etche Local Government Area, Rivers State, Nigeria. The first child of Late Mr. Morrisson Chimezie Chioma and Late Mrs. Beatrice Oghuanya Chioma (née Nwecheform), a position that earned her the cherished name Nwa-Ada. She was the eldest of five siblings, two sisters and three brothers, all raised together in the Chioma compound. As first daughter, she learned early to give before she was taught to ask, and to nurture before she fully understood the word. A preteen when the civil war struck, she was forced to grow beyond her years, a trial that forged the resilience she carried all her life. The close-knit community of Umugwuocha shaped her into the woman she became — rooted, generous, and deeply tied to her people."
    },
    {
      title: "Education",
      content:
        "She received her early education in Ozuzu, attending primary school within her home community. Though formal schooling had its seasons and limits, her truest education came from life itself — the discipline of a large family home, the rhythms of communal living, and the industry demanded of a first daughter. Whatever the classroom could not give, she fashioned for herself. Her greatest academic investment was made through her children; she ensured that each of her five received a solid education, often at a sacrifice she never spoke of."
    },
    {
      title: "Family",
      content:
        "Her journey into family life began at a young age and was marked by challenges that helped shape her resilience and strength of character. Through those early experiences, she developed a quiet determination and deep sense of responsibility that would define the rest of her life. From the very beginning, she embraced motherhood with courage, selfless devotion, and unwavering love, laying the foundation for the remarkable woman she would become.\n\nHer marriage to Late Mr. Mfon James brought solidity and purpose to her world. Together they built a home, full of mouths fed, songs sung, and children accounted for. To that union were born six children, two of whom are now late. The four who remain today — three sons and a daughter — carry her iron and her warmth in equal measure. In her grandchildren, her strong gene lives on, each one cherished with the same fondness she poured into her own. She was beloved within the wider Chioma family and maintained a warm presence among her husband's people in Ukanafun, bridging two families with characteristic grace.\n\nWhen Late Mr. Mfon James passed on 11 September 2001, she was torn, she was broken, but she did not crumble. Her children were her light. She drew herself upright, pulled them close, and continued to build. The loss was great; her love was greater."
    },
    {
      title: "Occupation",
      content:
        "A farmer by trade and temperament, Deaconess Love James understood that patient hands yield lasting harvests. She worked her land with dedication, and it was through this quiet, consistent labour that many of her children’s needs were met. She was also a trader — industrious without being restless, purposeful without being proud — and she learned tailoring, always willing to acquire skills that lightened the family burden. People returned to her not only for what she sold, but for who she was: honest, fair, and warm. Her home was always open, and her table was never bare. Those who came close found in her a place of solace.\n\nAmong her most enduring legacies was her cooking. Her Egusi soup, okazi, and bitter leaf soups were matters of legend — rich, layered, and entirely her own. Her Afang, carefully modernized over the years, was a signature. Her special porridge and the daily variety she set before her children spoke of a mother who knew that feeding a child well is one of the most eloquent forms of love. Even when resources were stretched, she found a way."
    },
    {
      title: "Christian Life",
      content:
        "Faith was not something Deaconess Love James wore on Saturdays — it was woven into the fabric of every day. A devoted member of the Seventh-day Adventist Church at Rumuobiokani, she served faithfully as a Deaconess. She sang in the church choir in Ozuzu, and her love of music was prayer in another form.\n\nEvery morning, she would lead her household in the hymn “Lord, in the Morning,” her voice steady and sure, setting the tone for the day with gratitude before the world could crowd it out, and every evening, as the light softened, she would sing “Abide with Me” — a ritual that her children now carry in their memories like a compass. She held in her heart an archive of hymns and gospel folk songs that seemed without end, singing as she rested, as she worked, and as she held her children close. Those who knew her can still hear her. That is the gift of a singing soul — it does leave a lasting memory."
    },
    {
      title: "Social Life",
      content:
        "Deaconess Love James did not live for herself — her world expanded naturally to embrace all who drew near. She was a keeper of people, the neighbour others turned to when things fell apart, the friend sought out simply to feel less alone. She understood that community is built not in grand gestures but in the accumulation of small, consistent kindnesses, and she gave those freely. Music was a constant companion. Her warmth drew people, her generosity of spirit kept them. She was, in every sense of the word, beloved."
    },
    {
      title: "Her Final Days",
      content:
        "In the years following her husband’s passing, Deaconess Love James bore with quiet courage a declining body — arthritis, high blood pressure, and in time, a diagnosis of Alzheimer’s disease, a condition that slowly dimmed the edges of memory but never extinguished the warmth at her core. Through it all, her children and family surrounded her with unwavering care, so she never faced the darkness alone.\n\nOn Sunday, 18 May 2026, she fell ill and was taken to hospital, then brought back home. Her condition worsened through the week. On the mornings of Saturday 23 May and Sunday 24 May, she was admitted to Good Heart Medical Consultant Hospital, where every effort was made to stabilize her. When her condition exceeded what the facility could manage, she was referred to Braithwaite Memorial Hospital (BMH), where she was admitted for further care.\n\nIn the late hours of Monday, 25 May 2026, before midnight, Deaconess Love James breathed her last, gently, as she had lived, carried by a faith that had never once failed her. She was loved in life. She was tended in sickness. She is celebrated in death."
    }
  ];

  return (
    <div className="w-full min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent text-[#241611]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pt-4">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl font-serif text-[#7d0d1f] tracking-wide font-normal mb-2">Her Life Story</h1>
          <p className="text-[#55423b] text-sm">Biography of Late Deaconess Love James (1954 – 2026)</p>
        </motion.div>

        {/* Main Grid: Left Floating Panel + Right Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Floating / Sticky Card (Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#fffaf0] border border-[#d3a24a]/40 p-6 rounded-3xl shadow-xl shadow-[#241611]/5 flex flex-col items-center text-center space-y-5"
            >
              {/* Circular Portrait */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#b5122c] shadow-xl ring-4 ring-[#d3a24a]/30 shrink-0">
                <Image
                  src="/gallery/image2.png"
                  alt="Deaconess Love James"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Name & Dates */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d3a24a]">
                  DEACONESS
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#7d0d1f]">
                  Love James
                </h2>
                <p className="text-sm font-serif italic text-[#b5122c] font-normal">
                  (Nwa-Ada)
                </p>
                <p className="text-sm font-semibold text-[#55423b] tracking-wider pt-1">
                  1954 – 2026
                </p>
              </div>

              {/* Memory Quote */}
              <div className="pt-4 border-t border-[#d3a24a]/30 w-full">
                <p className="text-xs font-serif italic text-[#55423b] leading-relaxed">
                  “A woman of extraordinary warmth, quiet strength, and unshakeable faith.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Story Chapters & Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Intro Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fffaf0] border border-[#d3a24a]/40 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-xl shadow-[#241611]/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#b5122c]/5 rounded-full blur-3xl pointer-events-none" />
              <p className="text-[#241611] font-serif text-lg leading-relaxed first-letter:text-4xl first-letter:font-semibold first-letter:text-[#b5122c] first-letter:mr-2 first-letter:float-left">
                There are lives that leave a mark so deep that even silence speaks of them. Deaconess Love James was such a life — a woman of extraordinary warmth, quiet strength, and unshakeable faith. To know her was to encounter love in its most selfless form, felt in every meal cooked with care, every hymn sung at dawn, and every door held open to a soul in need. She was mother, farmer, deaconess, provider, and friend — the first daughter of her father's house, carrying that position not as a title but as a calling. She leaves behind five children, grandchildren, siblings, and a family stretched across Ozuzu and Ukanafun, all richer for having known her. This biography is a small monument to a large life.
              </p>
            </motion.div>

            {/* Life Story Chapters */}
            <div className="space-y-12">
              {chapters.map((chapter, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="border-l-2 border-[#b5122c]/40 pl-6 sm:pl-8 space-y-3"
                >
                  <h2 className="text-2xl font-serif font-semibold text-[#b5122c]">
                    {chapter.title}
                  </h2>
                  {chapter.content.split("\n\n").map((para, pIdx) => (
                    <p key={pIdx} className="text-[#55423b] leading-relaxed font-normal text-base sm:text-lg">
                      {para}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Biblical Quote Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#7d0d1f] text-[#fffaf0] border border-[#d3a24a]/50 p-8 rounded-3xl text-center space-y-4 shadow-xl shadow-[#241611]/10"
            >
              <p className="font-serif italic text-lg sm:text-xl text-[#fbf1de]">
                “I have fought a good fight, I have finished my course, I have kept the faith.”
              </p>
              <span className="block text-xs uppercase tracking-widest text-[#eecf8f] font-sans font-semibold">
                2 Timothy 4:7
              </span>
              <div className="pt-4 border-t border-[#d3a24a]/30">
                <p className="font-serif text-[#eecf8f] text-lg font-medium">
                  “Chukwu gozie gi, duzie gi, chebe gi. Mee ka ihu Ya nwuakwasi gi”
                </p>
                <p className="text-xs text-[#fbf1de]/80 mt-1">
                  May God bless you, guide you, keep you. The Lord makes His face shine on you. — Rest in perfect peace.
                </p>
              </div>
            </motion.div>

            {/* Survived By Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fffaf0] border border-[#d3a24a]/40 p-8 rounded-3xl space-y-8 shadow-xl shadow-[#241611]/5"
            >
              <h2 className="text-3xl font-serif text-[#7d0d1f] text-center font-normal">
                She Is Survived By
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="text-[#b5122c] font-semibold uppercase tracking-wider mb-3 text-xs border-b border-[#b5122c]/20 pb-1">Children</h3>
                  <ul className="space-y-1.5 text-[#55423b]">
                    <li><strong className="text-[#241611]">Mr. Israel Onukufor Chioma</strong> (Son)</li>
                    <li><strong className="text-[#241611]">Eld. Engr. Godwin James</strong> (Son)</li>
                    <li><strong className="text-[#241611]">Shepherdess Patience Nwoko</strong> (Daughter)</li>
                    <li><strong className="text-[#241611]">Engr. Thankgod Imoh James</strong> (Son)</li>
                    <li><strong className="text-[#241611]">Engr. Godspower James</strong> (Son)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#b5122c] font-semibold uppercase tracking-wider mb-3 text-xs border-b border-[#b5122c]/20 pb-1">In-Laws</h3>
                  <ul className="space-y-1.5 text-[#55423b]">
                    <li><strong className="text-[#241611]">Mrs. Deborah Israel</strong> (Daughter-in-law)</li>
                    <li><strong className="text-[#241611]">Mrs. Chiamaka James</strong> (Daughter-in-law)</li>
                    <li><strong className="text-[#241611]">Pastor Ernest Nwoko</strong> (Son-in-law)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#b5122c] font-semibold uppercase tracking-wider mb-3 text-xs border-b border-[#b5122c]/20 pb-1">Grandchildren</h3>
                  <ul className="space-y-1.5 text-[#55423b]">
                    <li>Miss Chinaza Israel</li>
                    <li>Master Joshua Israel</li>
                    <li>Master Caleb Israel</li>
                    <li>Miss Eudora Edidiong Godwin</li>
                    <li>Miss Miranda Godwin</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#b5122c] font-semibold uppercase tracking-wider mb-3 text-xs border-b border-[#b5122c]/20 pb-1">Brothers & Sisters</h3>
                  <ul className="space-y-1.5 text-[#55423b]">
                    <li>Sir Chris Nnamdi Chioma (Brother)</li>
                    <li>Mr. Nnodim Chioma (Brother)</li>
                    <li>Mrs. Ego Chioma (Sister)</li>
                    <li>Mrs. Oluchi Chioma (Sister)</li>
                    <li>Mrs. Evelyn Chioma (Sister)</li>
                    <li>Mrs. Oluchi née Chioma (Sister)</li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-[#55423b]/70 text-xs italic pt-4 border-t border-[#d3a24a]/30">
                …and nephews, nieces and many other relatives and sympathizers mourning her demise.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
