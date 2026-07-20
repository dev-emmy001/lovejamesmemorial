"use client";

import { motion } from "framer-motion";
import { BookOpen, Image as ImageIcon, Calendar, Heart } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "brochure", label: "Brochure", icon: BookOpen },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "program", label: "Program", icon: Calendar },
  { id: "tributes", label: "Tributes", icon: Heart },
];

export default function BottomNav() {
  const [active, setActive] = useState("brochure");

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActive(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`relative flex flex-col items-center justify-center px-4 py-2 transition-colors rounded-full ${isActive ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1.5">
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {/* <span className="text-[10px] font-medium tracking-widest uppercase">
                  {item.label}
                </span> */}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
