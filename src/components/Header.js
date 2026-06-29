"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeAccent, setActiveAccent] = useState("amber"); // maps to violet by default
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "01_HOME", url: "/" },
    { id: "projects", label: "02_WORK", url: "/projects" },
    { id: "about", label: "03_ABOUT", url: "/about" },
    { id: "story", label: "04_JOURNEY", url: "/story" },
    { id: "contact", label: "05_CONTACT", url: "/contact" }
  ];

  const changeAccent = (presetName) => {
    setActiveAccent(presetName);
    localStorage.setItem("theme-accent", presetName);
    
    const presets = {
      amber: { color: '#6E4BFF', hover: '#593AD6', glow: 'rgba(110, 75, 255, 0.15)', rgb: '110, 75, 255' }, // violet
      cyan: { color: '#00E5FF', hover: '#00B8D4', glow: 'rgba(0, 229, 255, 0.15)', rgb: '0, 229, 255' },
      emerald: { color: '#39FF14', hover: '#2ED30F', glow: 'rgba(57, 255, 20, 0.15)', rgb: '57, 255, 20' },
      purple: { color: '#FF5722', hover: '#E64A19', glow: 'rgba(255, 87, 34, 0.15)', rgb: '255, 87, 34' }, // orange
      rose: { color: '#FFB300', hover: '#FF8F00', glow: 'rgba(255, 179, 0, 0.15)', rgb: '255, 179, 0' } // amber
    };

    const activePreset = presets[presetName];
    if (activePreset) {
      document.documentElement.style.setProperty('--color-accent', activePreset.color);
      document.documentElement.style.setProperty('--color-accent-hover', activePreset.hover);
      document.documentElement.style.setProperty('--color-accent-glow', activePreset.glow);
      document.documentElement.style.setProperty('--color-accent-rgb', activePreset.rgb);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme-accent");
    if (saved) {
      const timer = setTimeout(() => {
        setActiveAccent(saved);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!moreOpen && !mobileOpen) return;
    const handleClose = () => { setMoreOpen(false); setMobileOpen(false); };
    const handleKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("click", handleClose);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("keydown", handleKey);
    };
  }, [moreOpen, mobileOpen]);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between z-40 select-none relative bg-transparent font-mono">
      
      {/* TN Logo / Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Desktop: TN links to home */}
        <Link 
          href="/" 
          className="hidden md:flex relative px-3.5 py-1 bg-[#FFE05D] border-3 border-black shadow-[3px_3px_0px_#000] rotate-[-2deg] items-center justify-center font-sans hover:rotate-[2deg] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer"
        >
          <span className="text-2xl font-black tracking-tight text-black">TN</span>
        </Link>

        {/* Mobile: TN toggles menu */}
        <button
          onClick={(e) => { e.stopPropagation(); setMobileOpen(!mobileOpen); }}
          className={`md:hidden relative px-3 py-1.5 border-3 border-black shadow-[3px_3px_0px_#000] -rotate-[1.5deg] flex items-center gap-2 font-sans transition-all cursor-pointer ${
            mobileOpen ? "bg-black shadow-none translate-x-0.5 translate-y-0.5" : "bg-[#FFE05D]"
          }`}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-0.5">
            <span className={`block w-3.5 h-0.5 transition-all ${mobileOpen ? "bg-white rotate-45 translate-y-[2px]" : "bg-black"}`} />
            <span className={`block w-3.5 h-0.5 transition-all ${mobileOpen ? "bg-white opacity-0" : "bg-black"}`} />
            <span className={`block w-3.5 h-0.5 transition-all ${mobileOpen ? "bg-white -rotate-45 -translate-y-[2px]" : "bg-black"}`} />
          </span>
          <span className={`text-xl font-black tracking-tight transition-all ${mobileOpen ? "text-white" : "text-black"}`}>
            TN
          </span>
        </button>

        {/* Accent LED Swappers (Industrial Style) - Redesigned to Brutalist Pixels */}
        <div className="hidden lg:flex gap-1.5 items-center bg-white border-2.5 border-black px-3 py-1.5 shadow-[4px_4px_0px_#000]">
          <span className="text-[10px] font-mono font-black text-black mr-1 uppercase">accent:</span>
          {[
            { id: "amber", color: "bg-[#6E4BFF]" }, // Violet
            { id: "cyan", color: "bg-[#00E5FF]" },
            { id: "emerald", color: "bg-[#39FF14]" },
            { id: "purple", color: "bg-[#FF5722]" }, // Orange
            { id: "rose", color: "bg-[#FFB300]" } // Amber
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => changeAccent(preset.id)}
              className={`w-4.5 h-4.5 border-2 border-black transition-all cursor-pointer hover:scale-105 hover:-translate-y-0.5 relative ${preset.color} ${
                activeAccent === preset.id ? "shadow-[1.5px_1.5px_0px_#000] -translate-x-0.5 -translate-y-0.5 scale-105" : "opacity-80"
              }`}
              title={`Switch accent to ${preset.id}`}
            />
          ))}
        </div>
      </div>

      {/* Main Numbered Navigation */}
      <nav className="hidden md:flex gap-6 items-center bg-white border-3 border-black px-6 py-2.5 shadow-[5px_5px_0px_#000]">
        {navLinks.map((link) => {
          const isActive = pathname === link.url || (link.id === "home" && pathname === "/");
          return (
            <Link
              key={link.id}
              href={link.url}
              className={`text-[11px] font-bold tracking-widest uppercase transition-all relative py-1 cursor-pointer font-mono ${
                isActive 
                  ? "text-white bg-[var(--color-accent)] px-2 py-0.5 border border-black shadow-[2px_2px_0px_#000] -rotate-1" 
                  : "text-black hover:text-[var(--color-accent)] hover:-translate-y-0.5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* More Submenu Dropdown */}
        <div 
          className="relative flex items-center h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className={`text-[11px] font-bold tracking-widest uppercase transition-all py-1 cursor-pointer font-mono flex items-center gap-1.5 bg-transparent border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none ${
              moreOpen 
                ? "bg-[var(--color-accent)] text-white shadow-[3px_3px_0px_#000] -translate-x-0.5 -translate-y-0.5" 
                : "bg-white text-black"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            MORE
            <span className={`text-[9px] font-black ml-0.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          
          {moreOpen && (
            <div className="absolute top-[110%] right-0 mt-1 bg-white border-3 border-black shadow-[8px_8px_0px_#000] py-3 w-56 flex flex-col z-[150] select-none">
              <div className="px-5 pb-2 mb-2 border-b-2 border-black/20">
                <span className="text-[10px] font-mono font-black text-black/50 tracking-[0.25em] uppercase">NAV // EXTRA</span>
              </div>
              {[
                { id: "achievements", label: "06_TROPHIES", icon: "🏆", url: "/achievements" },
                { id: "skills", label: "07_SKILLS", icon: "⚙", url: "/skills" },
                { id: "terminal", label: "08_CONSOLE", icon: "⌨", url: "/terminal" }
              ].map((link, i) => {
                const isActive = pathname === link.url;
                return (
                  <Link
                    key={link.id}
                    href={link.url}
                    className={`group flex items-center gap-4 px-5 py-3 transition-all font-mono cursor-pointer border-l-3 ${
                      isActive 
                        ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-[inset_3px_0_0_0_var(--color-accent)]" 
                        : "text-black border-transparent hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                    }`}
                    onClick={() => setMoreOpen(false)}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center text-[14px] font-black border-2 border-black shadow-[2px_2px_0px_#000] ${
                      isActive ? "bg-white text-black" : "bg-[#FFE05D] text-black group-hover:bg-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_#000]"
                    } transition-all`}>
                      {link.label.slice(0, 2)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black uppercase tracking-wider leading-tight">{link.label}</span>
                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-wider group-hover:text-black/70 transition-colors">{link.icon} {link.id}</span>
                    </div>
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t-2 border-black/10 px-5">
                <span className="text-[9px] font-mono font-black text-black/30 uppercase tracking-widest">3 PAGES • PRESS ESC TO CLOSE</span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Tactile Let's Connect capsule button */}
      <Link
        href="/contact"
        className="flex items-center gap-3 bg-white border-3 border-black py-2 pl-4 pr-2.5 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer font-sans"
      >
        <span className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-black">
          Let&apos;s Connect
        </span>
        <span className="w-7 h-7 bg-[var(--color-accent)] border border-black flex justify-center items-center text-white transition-transform">
          <svg className="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-full bg-white border-r-3 border-black z-50 flex flex-col md:hidden overflow-y-auto transition-all duration-400 ease-out ${
          mobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(90vw, 400px)" }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-black">
          <span className="text-[10px] font-mono font-black text-black/40 tracking-[0.25em] uppercase">NAV // SYSTEM</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 border-2 border-black bg-white flex items-center justify-center text-black font-black hover:bg-red-500 hover:text-white transition-all cursor-pointer"
          >
            <span className="text-base font-black">×</span>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 px-5 py-5 space-y-1.5">
          {[
            { id: "home", label: "HOME", url: "/", num: "01" },
            { id: "about", label: "ABOUT", url: "/about", num: "02" },
            { id: "skills", label: "SKILLS", url: "/skills", num: "03" },
            { id: "projects", label: "PROJECTS", url: "/projects", num: "04" },
            { id: "story", label: "JOURNEY", url: "/story", num: "05" },
            { id: "achievements", label: "ACHIEVEMENTS", url: "/achievements", num: "06" },
            { id: "terminal", label: "TERMINAL", url: "/terminal", num: "07" },
          ].map((link) => {
            const isActive = pathname === link.url || (link.id === "home" && pathname === "/");
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 px-4 py-3.5 border-2 border-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-accent)] text-black shadow-[4px_4px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                    : "bg-white text-black hover:bg-[#FFE05D] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]"
                }`}
              >
                <span className="w-8 h-8 flex items-center justify-center text-[11px] font-black border-2 border-black bg-white text-black shrink-0">
                  {link.num}
                </span>
                <span className="text-[14px] font-black uppercase tracking-wider font-mono">{link.label}</span>
              </Link>
            );
          })}

          {/* Contact CTA inside nav area */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-4 mt-4 bg-black border-2 border-black text-white font-black text-[13px] font-mono uppercase shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            LET&apos;S CONNECT
          </Link>
        </div>

        {/* Accent Swatches - collapsed at bottom */}
        <div className="px-5 py-3 border-t-2 border-black bg-[#FFFDF4]">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-mono font-black text-black/30 tracking-[0.15em] uppercase">ACCENT</span>
            <div className="flex gap-1.5">
              {[
                { id: "amber", color: "bg-[#6E4BFF]" },
                { id: "cyan", color: "bg-[#00E5FF]" },
                { id: "emerald", color: "bg-[#39FF14]" },
                { id: "purple", color: "bg-[#FF5722]" },
                { id: "rose", color: "bg-[#FFB300]" },
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => changeAccent(preset.id)}
                  className={`w-6 h-6 border-2 border-black transition-all cursor-pointer ${preset.color} ${
                    activeAccent === preset.id ? "shadow-[2px_2px_0px_#000] -translate-x-0.5 -translate-y-0.5" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="block text-center text-[8px] font-mono font-black text-black/20 mt-2 tracking-widest uppercase">ESC TO CLOSE</span>
        </div>
      </div>

    </header>
  );
}
