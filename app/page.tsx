"use client";

import dynamic from "next/dynamic";
import BottomNav from "@/components/BottomNav";

const Brochure = dynamic(() => import("@/components/Brochure"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen text-zinc-500 font-serif tracking-widest text-sm animate-pulse">LOADING MEMORIAL...</div>
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      <Brochure />
      <BottomNav />
    </main>
  );
}
