"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Loader2, CheckCircle2, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { staticTributesData } from "@/lib/tributesData";

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
    <div className="w-full min-h-screen pt-16 pb-20 px-6 bg-transparent text-[#241611]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pt-4">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
          <h1 className="text-4xl font-serif text-[#7d0d1f] tracking-wide font-normal">Words From Those Who Loved Her</h1>
          <p className="text-[#55423b] text-sm">Tributes & Condolences for Late Deaconess Love James</p>
        </motion.div>

        {/* Featured Family Tributes */}
        <div className="space-y-6">
          <h2 className="text-[#b5122c] font-serif text-xl font-semibold flex items-center space-x-2 border-b border-[#b5122c]/20 pb-2">
            <Heart size={20} className="text-[#b5122c]" />
            <span>Family Tributes ({staticTributesData.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staticTributesData.map((trib) => (
              <motion.div
                key={trib.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#fffaf0] border border-[#d3a24a]/40 p-6 sm:p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-xl shadow-[#241611]/5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#b5122c] bg-[#b5122c]/10 px-3 py-1 rounded-full">
                    {trib.relationship}
                  </span>
                  <div className="space-y-2">
                    {trib.message.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-[#55423b] font-serif italic text-sm sm:text-base leading-relaxed">
                        "{para}"
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-[#d3a24a]/30 mt-4">
                  <p className="text-[#7d0d1f] font-serif font-bold text-base">{trib.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form and Live Tributes Feed */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 space-y-12 lg:space-y-0">
          
          {/* Form */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#fffaf0] border border-[#d3a24a]/40 rounded-3xl p-6 shadow-xl shadow-[#241611]/5">
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
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] focus:ring-1 focus:ring-[#b5122c] transition-colors placeholder:text-[#55423b]/50"
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
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] focus:ring-1 focus:ring-[#b5122c] transition-colors placeholder:text-[#55423b]/50"
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
                    className="w-full bg-[#fbf1de]/60 border border-[#d3a24a]/40 rounded-xl px-4 py-3.5 text-[#241611] text-sm focus:outline-none focus:border-[#b5122c] focus:ring-1 focus:ring-[#b5122c] transition-colors placeholder:text-[#55423b]/50 resize-none"
                    placeholder="Write your tribute here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full relative flex items-center justify-center bg-[#b5122c] hover:bg-[#7d0d1f] text-[#fffaf0] font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-[#b5122c]/20 disabled:opacity-70 mt-4"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center space-x-2">
                        <Loader2 size={18} className="animate-spin text-[#fffaf0]" />
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
            <h2 className="text-xl font-serif text-[#7d0d1f] font-semibold mb-6">Tribute Wall ({tributes.length})</h2>
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
              {tributes.map((tribute) => (
                <motion.div key={tribute.id} variants={cardVariants} className="bg-[#fffaf0] border border-[#d3a24a]/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#241611] font-semibold text-base">{tribute.name}</h3>
                      {tribute.relationship && <p className="text-[#b5122c] text-xs mt-0.5 font-semibold uppercase tracking-wider">{tribute.relationship}</p>}
                    </div>
                    <span className="text-[#55423b] text-xs">{tribute.date}</span>
                  </div>
                  <p className="text-[#55423b] text-sm leading-relaxed font-normal font-serif italic">"{tribute.message}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
