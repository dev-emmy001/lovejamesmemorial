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
  const [activeTab, setActiveTab] = useState("home");

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#fbf1de] text-[#241611] flex flex-col selection:bg-[#b5122c] selection:text-[#fffaf0]">
      <TopNav active={activeTab} setActive={handleNavClick} />

      {activeTab === "home" ? (
        <div className="flex flex-col">
          <Hero onNavigate={handleNavClick} />
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
          <section id="appreciation">
            <Appreciation />
          </section>
        </div>
      ) : activeTab === "program" ? (
        <div className="pt-20">
          <Program />
        </div>
      ) : activeTab === "biography" ? (
        <div className="pt-20">
          <Biography />
        </div>
      ) : activeTab === "gallery" ? (
        <div className="pt-20">
          <Gallery />
        </div>
      ) : activeTab === "tributes" ? (
        <div className="pt-20">
          <Tributes />
        </div>
      ) : null}
    </main>
  );
}
