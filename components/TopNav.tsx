"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Image as ImageIcon, Calendar, Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: "program", label: "Program", icon: Calendar },
  { id: "biography", label: "Biography", icon: BookOpen },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "tributes", label: "Tributes", icon: Heart },
];

export default function TopNav({ active, setActive }: { active: string, setActive: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-[#7d0d1f]/95 backdrop-blur-md border-b border-[#d3a24a]/30 shadow-lg shadow-[#100b09]/20">
        <div className="w-full max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Love James Memorial"
              width={180}
              height={200}
              className="object-contain "
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                      ? "bg-[#d3a24a] text-[#7d0d1f] font-semibold shadow-md shadow-black/20"
                      : "text-[#fbf1de]/80 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <Icon size={17} strokeWidth={isActive ? 2.5 : 1.8} />
                  <span className="text-xs tracking-widest uppercase font-medium">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end space-y-2 z-50"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 5 : 0,
              }}
              className="block h-[2px] bg-[#fbf1de] rounded-full w-full origin-center transition-all"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -5 : 0,
                width: isOpen ? "100%" : "70%"
              }}
              className="block h-[2px] bg-[#fbf1de] rounded-full origin-center transition-all"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#7d0d1f]/98 backdrop-blur-2xl flex flex-col items-center justify-center pt-20 md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center">
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
                    <div className={`p-4 rounded-full transition-colors ${isActive ? 'bg-[#d3a24a] text-[#7d0d1f] shadow-lg' : 'bg-white/10 text-[#fbf1de] hover:bg-white/20'}`}>
                      <Icon size={28} strokeWidth={isActive ? 2.5 : 1.8} />
                    </div>
                    <span className={`mt-2.5 text-xs font-semibold tracking-widest uppercase transition-colors ${isActive ? 'text-[#d3a24a]' : 'text-[#fbf1de]/80'}`}>
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
