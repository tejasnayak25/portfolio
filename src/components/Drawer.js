"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Drawer({ isOpen, onClose, title, subtitle, children }) {
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Semi-transparent Backdrop Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-[#202020]/15 backdrop-blur-xs transition-opacity duration-500 ease-in-out z-[70] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-over Panel (Teenage Engineering Hardware Drawer Style) */}
      <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[540px] md:w-[680px] md:top-8 md:bottom-8 md:h-auto md:right-8 bg-[#FFFDF4] border-l-3 border-black z-[80] flex flex-col transform transition-transform duration-500 ease-out select-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: "-8px 0 0px #000000"
        }}
      >
        
        {/* Technical Header */}
        <div className="px-6 py-5 border-b-2 border-black flex items-center justify-between bg-white select-none">
          <div className="flex flex-col">
            <span className="tech-label text-[10px] text-[var(--color-accent)] font-bold mb-0.5">
              {subtitle || "MANUFACTURING MODULE"}
            </span>
            <h3 className="text-sm font-black font-mono tracking-widest text-black uppercase">
              {title}
            </h3>
          </div>

          {/* Close trigger button */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-none border-2 border-black bg-white hover:bg-red-500 hover:text-white flex items-center justify-center text-black font-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer group"
            aria-label="Close panel"
          >
            <span className="text-base font-black leading-none group-hover:scale-105">×</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#FFFDF4] text-black">
          {children}
        </div>

        {/* Technical Footer border */}
        <div className="px-6 py-3 border-t-2 border-black bg-white flex justify-between items-center text-[9px] font-mono text-black font-bold">
          <span>MODULE STAT: SECURE</span>
          <span>© 2026 TEJAS NAYAK</span>
        </div>

      </div>
    </>,
    document.body
  );
}
