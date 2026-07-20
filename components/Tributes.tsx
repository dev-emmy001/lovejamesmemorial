"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] 
    } 
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
  
  // Fetch tributes on mount
  useEffect(() => {
    async function fetchTributes() {
      if (!supabase) return; // Fallback to mock data if no keys
      
      const { data, error } = await supabase
        .from('tributes')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else if (data && data.length > 0) {
        const formattedData = data.map(item => ({
          id: item.id,
          name: item.name,
          relationship: item.relationship || "",
          date: new Date(item.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
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
      // Insert real data
      const { data, error } = await supabase
        .from('tributes')
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
          date: new Date(data[0].created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          message: data[0].message
        };
        setTributes([newTribute, ...tributes]);
      }
    } else {
      console.warn("Supabase is not initialized. Please set your environment variables.");
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", relationship: "", message: "" });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-20 px-6 bg-transparent">
      <div className="max-w-md mx-auto space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl font-serif text-zinc-100 tracking-wide font-light mb-3">Tributes</h1>
          <p className="text-zinc-400 text-sm">Share a memory or a message of condolence.</p>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-md"
        >
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

        {/* Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-30 py-4">
          <div className="h-[1px] w-12 bg-zinc-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
          <div className="h-[1px] w-12 bg-zinc-500" />
        </div>

        {/* Tributes Feed */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {tributes.map((tribute) => (
            <motion.div 
              key={tribute.id}
              variants={cardVariants}
              className="bg-transparent border border-zinc-800/60 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-zinc-800/20 to-transparent opacity-50" />
              
              <div className="relative">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-zinc-200 font-medium text-base">{tribute.name}</h3>
                    <p className="text-zinc-500 text-xs mt-1 uppercase tracking-wider">{tribute.relationship}</p>
                  </div>
                  <span className="text-zinc-600 text-[10px] tracking-widest uppercase mt-1">{tribute.date}</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  "{tribute.message}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
