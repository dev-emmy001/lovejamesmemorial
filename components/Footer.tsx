"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#120806] text-[#ded0be] py-6 px-4 border-t border-[#d3a24a]/30 text-center text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-center space-x-2 text-[#ded0be]/90 font-serif tracking-wide">
        <span>Designed & Developed by</span>
        <a
          href="https://facebook.com/juceeconsults"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-[#eecf8f] hover:text-white font-medium transition-colors group"
        >
          <span>Jucee Consults</span>
          <span className="p-1 rounded-full bg-[#b5122c]/40 border border-[#d3a24a]/50 group-hover:bg-[#b5122c] group-hover:border-[#d3a24a] transition-all flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 fill-current text-[#eecf8f] group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </span>
        </a>
      </div>
    </footer>
  );
}
