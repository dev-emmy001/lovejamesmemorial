"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Image as ImageIcon, Calendar, Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: "brochure", label: "Brochure", icon: BookOpen },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "program", label: "Program", icon: Calendar },
  { id: "tributes", label: "Tributes", icon: Heart },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("brochure");

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black backdrop-blur-md ">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Love James Memorial"
            width={180}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-end space-y-2 z-50"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 5 : 0,
            }}
            className="block h-[2px] bg-white rounded-full w-full origin-center transition-all"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -5 : 0,
              width: isOpen ? "100%" : "70%"
            }}
            className="block h-[2px] bg-white rounded-full origin-center transition-all"
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-black backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                      setIsOpen(false);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div className={`p-4 rounded-full transition-colors ${isActive ? 'bg-[#e6e2d8] text-zinc-900 shadow-sm' : 'bg-transparent text-zinc-500 hover:text-zinc-900'}`}>
                      <Icon size={32} strokeWidth={isActive ? 2 : 1.5} />
                    </div>
                    <span className={`mt-3 text-sm font-medium tracking-widest uppercase transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-500 group-hover:text-zinc-900'}`}>
                      {item.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
