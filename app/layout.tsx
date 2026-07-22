import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Love James Memorial",
  description: "There are lives that leave a mark so deep that even silence speaks of them. Deaconess Love James was such a life, a woman of extraordinary warmth, quiet strength, and unshakeable faith. To know her was to encounter love in its most selfless form, felt in every meal cooked with care, every hymn sung at dawn, and every door held open to a soul in need. She was mother, farmer, deaconess, provider, and friend. The first daughter of her father's house, carrying that position not as a title but as a calling. She leaves behind five children, grandchildren, siblings, and a family stretched across Ozuzu and Ukanafun, all richer for having known her. This biography is a small monument to a large life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf1de] text-[#241611]">
        {/* Application children */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
