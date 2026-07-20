"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// @ts-ignore
import HTMLFlipBookType from "react-pageflip";
const FlipBook = HTMLFlipBookType as any;
import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Need a page wrapper to pass refs correctly for react-pageflip
const PageWrapper = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div ref={ref} className="bg-zinc-100 shadow-xl shadow-black/40 flex items-center justify-center overflow-hidden" data-density="soft">
      {props.children}
    </div>
  );
});
PageWrapper.displayName = "PageWrapper";

export default function Brochure() {
  const [numPages, setNumPages] = useState<number>();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  if (windowWidth === 0) return null;

  // Make the book take up almost the full screen width, suitable for mobile
  const pageWidth = Math.min(windowWidth * 0.95, 600);
  const pageHeight = pageWidth * 1.414; // A4 aspect ratio

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-4 pb-32 bg-transparent relative">
      <Document
        file="/brochure.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center"
        loading={<div className="text-zinc-500 font-serif tracking-widest text-sm animate-pulse">LOADING MEMORIAL...</div>}
        error={<div className="text-red-400 font-serif text-sm">Error loading brochure. Please ensure /public/brochure.pdf exists.</div>}
      >
        {numPages && (
          <FlipBook
            width={pageWidth}
            height={pageHeight}
            size="fixed"
            minWidth={pageWidth}
            maxWidth={pageWidth}
            minHeight={pageHeight}
            maxHeight={pageHeight}
            maxShadowOpacity={0.4}
            showCover={true}
            mobileScrollSupport={true}
            usePortrait={true} // Forces portrait mode single page view for mobile
            className="drop-shadow-2xl mx-auto rounded-md overflow-hidden"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={1000}
            useMouseEvents={true}
            swipeDistance={30}
            clickEventForward={true}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <PageWrapper key={`page_${index + 1}`}>
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="w-full h-full object-contain"
                />
              </PageWrapper>
            ))}
          </FlipBook>
        )}
      </Document>
      
      {numPages && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-28 flex items-center space-x-2 text-zinc-500/80 font-serif"
        >
          <Hand size={16} className="animate-pulse" />
          <span className="text-xs tracking-widest uppercase">Swipe to read</span>
        </motion.div>
      )}
    </div>
  );
}
