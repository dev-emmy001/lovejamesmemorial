"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Image as ImageIcon, FolderOpen } from "lucide-react";

// 20 Photo items: 1-3 use real gallery images, 4-20 are placeholders
const galleryImages = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  let src = "";
  if (num === 1) src = "/gallery/image 1.png";
  else if (num === 2) src = "/gallery/image2.png";
  else if (num === 3) src = "/gallery/image 3.png";

  return {
    id: num,
    src: src,
    title: `Photo Memory #${num}`,
    isPlaceholder: !src
  };
});

// Google Drive Link URL (user can replace with exact drive folder link if needed)
const GOOGLE_DRIVE_URL = "https://drive.google.com";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; isPlaceholder: boolean } | null>(null);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="w-full min-h-screen bg-black text-[#fbf1de] py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#d3a24a]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Divider */}
        <div className="flex items-center justify-center space-x-4 opacity-40 pt-2">
          <div className="h-[1px] w-16 bg-[#b5122c]" />
          <div className="w-2 h-2 rounded-full bg-[#d3a24a]" />
          <div className="h-[1px] w-16 bg-[#b5122c]" />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl font-serif text-[#eecf8f] tracking-wide font-normal">A Life In Pictures</h1>
          <p className="text-[#ded0be]/80 text-sm">Photo Memories of Late Deaconess Love James</p>
        </motion.div>

        {/* 20 Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#d3a24a]/30 shadow-xl cursor-pointer group bg-[#120806] hover:border-[#d3a24a] transition-all flex flex-col items-center justify-center"
              onClick={() => setSelectedImage(img)}
            >
              {img.src ? (
                <>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-[#7d0d1f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#b5122c] text-white border border-[#d3a24a]/60 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                      View Photo
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full p-4 bg-gradient-to-br from-[#1c100d] via-[#120806] to-[#080302] flex flex-col items-center justify-center text-center space-y-2 group-hover:from-[#2a1713] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#d3a24a]/10 border border-[#d3a24a]/20 flex items-center justify-center group-hover:border-[#d3a24a]/60 group-hover:bg-[#d3a24a]/20 transition-all">
                    <ImageIcon className="w-6 h-6 text-[#d3a24a]/60 group-hover:text-[#eecf8f] transition-colors" />
                  </div>
                  <span className="text-xs font-serif text-[#ded0be]/70 group-hover:text-[#eecf8f] transition-colors">
                    {img.title}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Google Drive Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-6 text-center"
        >
          <a
            href={GOOGLE_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#b5122c] via-[#8f0e22] to-[#7d0d1f] hover:from-[#d91438] hover:to-[#961027] text-white font-serif font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl shadow-[#b5122c]/40 border border-[#d3a24a]/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FolderOpen size={22} className="text-[#eecf8f]" />
            <span>View More Photos on Google Drive</span>
            <ExternalLink size={18} className="text-[#eecf8f]" />
          </a>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 text-white hover:text-[#d3a24a] bg-[#b5122c] rounded-full transition-colors z-[70] shadow-xl border border-[#d3a24a]/50 cursor-pointer"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full h-[80vh] max-w-4xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.src ? (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    quality={100}
                  />
                ) : (
                  <div className="bg-[#1c0e0b] border border-[#d3a24a]/40 p-8 sm:p-12 rounded-3xl text-center space-y-4 max-w-md shadow-2xl">
                    <div className="w-16 h-16 rounded-full bg-[#d3a24a]/15 border border-[#d3a24a]/40 mx-auto flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-[#eecf8f]" />
                    </div>
                    <h3 className="text-xl font-serif text-[#eecf8f] font-semibold">{selectedImage.title}</h3>
                    <p className="text-sm text-[#ded0be]/80">This photo placeholder will be updated as new family photographs are uploaded.</p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
