"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { staticTributesData } from "@/lib/tributesData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, ease: "easeOut" }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

type Tribute = {
  id: string;
  name: string;
  relationship: string;
  date: string;
  message: string;
};

type TributeItem =
  | { type: "tribute"; id: string; name: string; relationship: string; message: string }
  | { type: "quote"; id: string; quote: string; author?: string };

const tributeItems: TributeItem[] = [
  {
    type: "tribute",
    id: "family-6",
    name: "Miss Victory Israel Chioma",
    relationship: "Tribute to My Beloved Grandmother, \"Mummy\"",
    message: staticTributesData.find((t) => t.id === "family-6")?.message || ""
  },
  {
    type: "tribute",
    id: "family-7",
    name: "Master Joshua Israel",
    relationship: "Tribute To My Beloved Grandmother",
    message: staticTributesData.find((t) => t.id === "family-7")?.message || ""
  },
  {
    type: "tribute",
    id: "family-8",
    name: "Master Emmanuel Israel",
    relationship: "Tribute to Grandma",
    message: staticTributesData.find((t) => t.id === "family-8")?.message || ""
  },
  {
    type: "tribute",
    id: "family-9",
    name: "Miss Eudora Edidiong Godwin James",
    relationship: "Tribute to my Lovely Grandma",
    message: staticTributesData.find((t) => t.id === "family-9")?.message || ""
  },
  {
    type: "quote",
    id: "quote-1",
    quote: "Like a bird singing in the rain, let grateful memories survive in time of sorrow.",
    author: "Robert Louis Stevenson"
  },
  {
    type: "tribute",
    id: "family-10",
    name: "Mrs. Deborah Israel",
    relationship: "A tribute to my mother-in-law",
    message: staticTributesData.find((t) => t.id === "family-10")?.message || ""
  },
  {
    type: "tribute",
    id: "family-11",
    name: "Mrs. Chiamaka Godwin James",
    relationship: "Dear Mumsy",
    message: staticTributesData.find((t) => t.id === "family-11")?.message || ""
  },
  {
    type: "tribute",
    id: "family-12",
    name: "Pastor Earnest Nwoko",
    relationship: "Tribute to Our Beloved Mother",
    message: staticTributesData.find((t) => t.id === "family-12")?.message || ""
  },
  {
    type: "tribute",
    id: "family-13",
    name: "Sir Chris Nnamdi Chioma, JP",
    relationship: "Tribute To My Sister Adaibe",
    message: staticTributesData.find((t) => t.id === "family-13")?.message || ""
  },
  {
    type: "quote",
    id: "quote-2",
    quote: "They that love beyond the world cannot be separated by it. Death cannot kill what never dies.",
    author: "William Penn"
  },
  {
    type: "tribute",
    id: "family-14",
    name: "Evelyn Chioma (Ego)",
    relationship: "Tribute To My Dear Sister Dada!",
    message: staticTributesData.find((t) => t.id === "family-14")?.message || ""
  },
  {
    type: "tribute",
    id: "family-15",
    name: "Innocent Chiama",
    relationship: "Tribute To My Sister",
    message: staticTributesData.find((t) => t.id === "family-15")?.message || ""
  },
  {
    type: "quote",
    id: "quote-3",
    quote: "Lives are like rivers: eventually they go where they must. Not where we want them to.",
    author: "Richard Russo"
  },
  {
    type: "tribute",
    id: "family-16",
    name: "Mrs. Stella Chioma",
    relationship: "A Tribute To A Special Sister-in-Law",
    message: staticTributesData.find((t) => t.id === "family-16")?.message || ""
  },
  {
    type: "quote",
    id: "quote-4",
    quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    type: "tribute",
    id: "family-17",
    name: "Mr. Diamond Chioma",
    relationship: "A Tribute To My Beloved Aunt",
    message: staticTributesData.find((t) => t.id === "family-17")?.message || ""
  },
  {
    type: "tribute",
    id: "family-18",
    name: "Precious Ake",
    relationship: "A Tribute to My Mrs. Love",
    message: staticTributesData.find((t) => t.id === "family-18")?.message || ""
  },
  {
    type: "tribute",
    id: "family-19",
    name: "Bridget Amaza Bulus",
    relationship: "To my grandma with the kindest heart",
    message: staticTributesData.find((t) => t.id === "family-19")?.message || ""
  },
  {
    type: "quote",
    id: "quote-5",
    quote: "Say not in grief that she is no more, but live in thankfulness that she was.",
    author: "Hebrew Proverb"
  },
  {
    type: "tribute",
    id: "family-1",
    name: "Mr. Israel Chioma",
    relationship: "Tribute to My Lovely Mother",
    message: staticTributesData.find((t) => t.id === "family-1")?.message || ""
  },
  {
    type: "tribute",
    id: "family-2",
    name: "Eld. Engr. Godwin James",
    relationship: "Tribute to Our Beloved Mother",
    message: staticTributesData.find((t) => t.id === "family-2")?.message || ""
  },
  {
    type: "tribute",
    id: "family-3",
    name: "Shepherdess Engr. Patience Nwoko",
    relationship: "My Mother, My Love, My Foundation",
    message: staticTributesData.find((t) => t.id === "family-3")?.message || ""
  },
  {
    type: "tribute",
    id: "family-4",
    name: "Engr. Imoh James",
    relationship: "A tribute to my lovely mum",
    message: staticTributesData.find((t) => t.id === "family-4")?.message || ""
  },
  {
    type: "tribute",
    id: "family-5",
    name: "Engr. Godspower James",
    relationship: "A tribute to my mother — from her Eberechi, the one I photocopied from",
    message: staticTributesData.find((t) => t.id === "family-5")?.message || ""
  }
];

export default function Tributes() {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", relationship: "", message: "" });

  useEffect(() => {
    async function fetchTributes() {
      if (!supabase) return;

      const { data, error } = await supabase
        .from("tributes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else if (data && data.length > 0) {
        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          relationship: item.relationship || "",
          date: new Date(item.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }),
          message: item.message
        }));
        setTributes(formattedData);
      }
    }

    fetchTributes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (supabase) {
      const { data, error } = await supabase
        .from("tributes")
        .insert([
          {
            name: formData.name,
            relationship: formData.relationship,
            message: formData.message
          }
        ])
        .select();

      if (error) {
        console.error("Supabase insert error:", error.message);
      } else if (data) {
        const newTribute = {
          id: data[0].id,
          name: data[0].name,
          relationship: data[0].relationship || "",
          date: new Date(data[0].created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }),
          message: data[0].message
        };
        setTributes([newTribute, ...tributes]);
      }
    } else {
      const mockNewTribute = {
        id: Date.now().toString(),
        name: formData.name,
        relationship: formData.relationship,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        message: formData.message
      };
      setTributes([mockNewTribute, ...tributes]);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", relationship: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#180a08] via-[#120504] to-[#0a0202] text-[#fbf1de] py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#d3a24a]/30 shadow-2xl">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif text-[#eecf8f] tracking-wide font-normal">Words From Those Who Loved Her</h1>
          <p className="text-[#ded0be]/80 text-sm">Tributes & Condolences for Late Deaconess Love James</p>
        </motion.div>

        {/* 2-Column Bento / Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {tributeItems.map((item) => {
            if (item.type === "quote") {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid mb-6 bg-gradient-to-br from-[#2c130f] via-[#1c0a07] to-[#120504] border border-[#d3a24a]/50 p-6 sm:p-8 rounded-3xl text-center space-y-3 shadow-2xl"
                >
                  <p className="font-serif italic text-base sm:text-lg text-[#f3dfa2] leading-relaxed">
                    "{item.quote}"
                  </p>
                  {item.author && (
                    <span className="block text-xs font-sans uppercase tracking-widest text-[#d3a24a] font-bold">
                      — {item.author}
                    </span>
                  )}
                </motion.div>
              );
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid mb-6 bg-white border border-[#d3a24a]/30 p-6 sm:p-7 rounded-3xl space-y-4 shadow-xl hover:border-[#b5122c]/50 transition-all flex flex-col justify-between text-[#241611]"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#b5122c] bg-[#b5122c]/10 px-3 py-1 rounded-full">
                    {item.relationship}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#7d0d1f] border-b border-[#d3a24a]/20 pb-2 mb-2">{item.name}</h3>
                  <div className="space-y-2">
                    {item.message.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-[#4a3832] font-sans text-sm sm:text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-[#d3a24a]/20 mt-4 text-right">
                  <span className="text-[#7d0d1f] font-serif italic font-semibold text-sm">— {item.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Form & Live Feed Container */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-12 lg:space-y-0 pt-12 border-t border-[#d3a24a]/30">
          
          {/* Form */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-[#d3a24a]/40 rounded-3xl p-6 shadow-2xl text-[#241611]">
              <h2 className="text-xl font-serif text-[#7d0d1f] font-semibold mb-1">Leave a Tribute</h2>
              <p className="text-xs text-[#55423b] mb-6">Every message shared here stays on this page for all to read.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#7d0d1f] uppercase tracking-widest mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] transition-colors placeholder:text-[#55423b]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="relationship" className="block text-xs font-semibold text-[#7d0d1f] uppercase tracking-widest mb-2">Relationship</label>
                  <input
                    type="text"
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] transition-colors placeholder:text-[#55423b]/50"
                    placeholder="Friend, Colleague, Family..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#7d0d1f] uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] transition-colors placeholder:text-[#55423b]/50 resize-none"
                    placeholder="Write your tribute here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full relative flex items-center justify-center bg-[#b5122c] hover:bg-[#7d0d1f] text-[#fffaf0] font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-[#b5122c]/20 disabled:opacity-70 mt-4 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2">
                        <Loader2 size={18} className="animate-spin text-white" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2 text-[#eecf8f]">
                        <CheckCircle2 size={18} />
                        <span>Tribute Sent</span>
                      </motion.div>
                    ) : (
                      <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Post Tribute
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Feed */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-serif text-[#eecf8f] font-semibold mb-6">Tribute Wall ({tributes.length})</h2>
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
              {tributes.map((tribute) => (
                <motion.div key={tribute.id} variants={cardVariants} className="bg-white border border-[#d3a24a]/30 rounded-2xl p-6 shadow-md text-[#241611]">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#7d0d1f] font-semibold text-base">{tribute.name}</h3>
                      {tribute.relationship && <p className="text-[#b5122c] text-xs mt-0.5 font-semibold uppercase tracking-wider">{tribute.relationship}</p>}
                    </div>
                    <span className="text-[#55423b] text-xs">{tribute.date}</span>
                  </div>
                  <p className="text-[#4a3832] text-sm sm:text-base leading-relaxed font-sans">{tribute.message}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
