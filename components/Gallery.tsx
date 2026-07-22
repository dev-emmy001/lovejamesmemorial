"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "/gallery/image 1.png", alt: "Memorial Image 1" },
  { id: 2, src: "/gallery/image2.png", alt: "Memorial Image 2" },
  { id: 3, src: "/gallery/image 3.png", alt: "Memorial Image 3" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [selectedImage]);

  return (
    <div className="w-full min-h-screen pt-16 pb-20 px-6 bg-transparent text-[#241611]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pt-4">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
        <h1 className="text-4xl font-serif text-[#7d0d1f] tracking-wide font-normal mb-2">A Life In Pictures</h1>
        <p className="text-[#55423b] text-sm">Photo Memories of Late Deaconess Love James</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#d3a24a]/40 shadow-xl shadow-[#241611]/10 cursor-pointer group bg-[#fffaf0]"
            onClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[#7d0d1f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#7d0d1f] text-[#fffaf0] border border-[#d3a24a] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                View Photo
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#100b09]/90 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-[#fbf1de] hover:text-[#d3a24a] bg-[#7d0d1f] rounded-full transition-colors z-[70] shadow-xl border border-[#d3a24a]/50"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen View"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
