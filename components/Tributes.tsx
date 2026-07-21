"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Loader2, CheckCircle2, Heart } from "lucide-react";
import { supabase } from "@/lib/supabase";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

type Tribute = {
  id: string;
  name: string;
  relationship: string;
  date: string;
  message: string;
};

const initialTributes: Tribute[] = [
  {
    id: "init-1",
    name: "Elder Godwin James",
    relationship: "Son",
    date: "02 Aug 2026",
    message: "Rest peacefully in the Lord, Mum. Your love will forever live in our hearts. We are so grateful for the life you lived."
  },
  {
    id: "init-2",
    name: "Stella Chioma",
    relationship: "Family",
    date: "01 Aug 2026",
    message: "Adaibe, till we meet again. We miss you every single day, but we take comfort knowing you are with the Lord."
  },
  {
    id: "init-3",
    name: "Precious Ake",
    relationship: "Friend",
    date: "31 Jul 2026",
    message: "Mrs. Love, thank you for everything. I will carry your lessons with me for the rest of my life. Rest well."
  }
];

const featuredTributes = [
  {
    author: "Mr. Israel Chioma",
    role: "Son",
    title: "Tribute to My Lovely Mother",
    message:
      "To my lovely and generous sweet mother, Dada, as we all fondly called you. Death, oh death, you are wicked. Although you are a reality of life, your coming was untimely. The last time I met you, my lovely mother, you said nothing to me. Instead, you only shed tears. Deep within my heart, I felt that something was wrong. My only consolation is that you are resting in the Lord. Heaven has gained a beautiful soul, but we will miss you dearly. May your lovely and gentle soul continue to rest in the Lord until we meet to part no more. Rest in perfect peace, dear Mother. You will forever remain in our heart."
  },
  {
    author: "Eld. Engr. Godwin James",
    role: "Son",
    title: "Tribute to Our Beloved Mother",
    message:
      "With gratitude to God, we celebrate the life of our beloved mother, a woman of unwavering faith, boundless love, and remarkable kindness. She was a devoted Christian whose life reflected the values of compassion, humility, and service to God and humanity. As a mother, she was caring, selfless, and ever-supportive."
  }
];

export default function Tributes() {
  const [tributes, setTributes] = useState<Tribute[]>(initialTributes);
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
        setTributes([...formattedData, ...initialTributes]);
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
    <div className="w-full min-h-screen pt-28 pb-20 px-6 bg-transparent text-zinc-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
          <h1 className="text-4xl font-serif text-zinc-100 tracking-wide font-light">Words From Those Who Loved Her</h1>
          <p className="text-zinc-400 text-sm">Tributes & Condolences for Late Deaconess Love James</p>
        </motion.div>

        {/* Featured Family Tributes */}
        <div className="space-y-6">
          <h2 className="text-[#FFE9B3] font-serif text-xl font-semibold flex items-center space-x-2">
            <Heart size={20} className="text-[#FFE9B3]" />
            <span>Family Tributes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTributes.map((trib, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE9B3]/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-[#FFE9B3] font-serif text-lg font-medium">{trib.title}</h3>
                <p className="text-zinc-300 font-serif italic text-sm sm:text-base leading-relaxed">
                  "{trib.message}"
                </p>
                <div className="pt-3 border-t border-zinc-800/60">
                  <p className="text-zinc-100 font-medium text-xs sm:text-sm">{trib.author}</p>
                  <p className="text-zinc-500 text-xs">{trib.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form and Live Tributes Feed */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-12 lg:space-y-0">
          
          {/* Form */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-md">
              <h2 className="text-xl font-serif text-zinc-100 mb-2">Leave a Tribute</h2>
              <p className="text-xs text-zinc-400 mb-6">Every message shared here stays on this page for all to read.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="relationship" className="block text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">Relationship</label>
                  <input
                    type="text"
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700"
                    placeholder="Friend, Colleague, Family..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700 resize-none"
                    placeholder="Write your tribute here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full relative flex items-center justify-center bg-zinc-100 hover:bg-white text-zinc-900 font-medium py-3.5 rounded-xl transition-all disabled:opacity-70 mt-4"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2">
                        <Loader2 size={18} className="animate-spin text-zinc-600" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2 text-green-700">
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
            <h2 className="text-xl font-serif text-zinc-100 mb-6">Tribute Wall ({tributes.length})</h2>
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
              {tributes.map((tribute) => (
                <motion.div key={tribute.id} variants={cardVariants} className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-zinc-200 font-medium text-base">{tribute.name}</h3>
                      {tribute.relationship && <p className="text-[#FFE9B3] text-xs mt-0.5 uppercase tracking-wider">{tribute.relationship}</p>}
                    </div>
                    <span className="text-zinc-500 text-xs">{tribute.date}</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed font-light font-serif italic">"{tribute.message}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
