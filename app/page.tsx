"use client";

import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Biography from "@/components/Biography";
import Gallery from "@/components/Gallery";
import Tributes from "@/components/Tributes";
import Appreciation from "@/components/Appreciation";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("program");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["program", "biography", "gallery", "tributes"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Offset for top nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#fbf1de] text-[#241611] flex flex-col selection:bg-[#b5122c] selection:text-[#fffaf0]">
      <TopNav active={activeTab} setActive={handleNavClick} />

      {/* Main Magazine Cover / Hero */}
      <Hero />

      <div className="flex flex-col">
        <section id="program">
          <Program />
        </section>

        <section id="biography">
          <Biography />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="tributes">
          <Tributes />
        </section>

        {/* Appreciation Section at the very end */}
        <section id="appreciation">
          <Appreciation />
        </section>
      </div>
    </main>
  );
}
