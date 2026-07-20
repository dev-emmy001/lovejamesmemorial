"use client";

import dynamic from "next/dynamic";
import TopNav from "@/components/TopNav";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Tributes from "@/components/Tributes";
import { useState } from "react";

const Brochure = dynamic(() => import("@/components/Brochure"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen text-zinc-500 font-serif tracking-widest text-sm animate-pulse">LOADING MEMORIAL...</div>
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("brochure");

  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      <TopNav active={activeTab} setActive={setActiveTab} />
      {activeTab === "brochure" && <Brochure />}
      {activeTab === "program" && <Program />}
      {activeTab === "gallery" && <Gallery />}
      {activeTab === "tributes" && <Tributes />}
    </main>
  );
}
