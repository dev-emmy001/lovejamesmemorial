"use client";

import TopNav from "@/components/TopNav";
import Biography from "@/components/Biography";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Tributes from "@/components/Tributes";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("biography");

  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      <TopNav active={activeTab} setActive={setActiveTab} />
      {activeTab === "biography" && <Biography />}
      {activeTab === "program" && <Program />}
      {activeTab === "gallery" && <Gallery />}
      {activeTab === "tributes" && <Tributes />}
    </main>
  );
}
