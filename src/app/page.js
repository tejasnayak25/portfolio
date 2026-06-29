"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DigitalFactory from "@/components/DigitalFactory";

export default function Home() {
  const router = useRouter();
  const codingSince = 2021;
  const yearsExp = new Date().getFullYear() - codingSince;
  const phrases = [
    "I Am\nTejas\nNayak",
    "I Build\nDigital\nSystems"
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
 
  useEffect(() => {
    let timer;
    const currentFullText = phrases[currentPhraseIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, 80);
    }
 
    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
    }
 
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIdx]);

  const handleFactoryClick = (id) => {
    const routeMap = {
      terminal: "/terminal",
      projects: "/projects",
      skills: "/skills",
      contact: "/contact"
    };
    router.push(routeMap[id] || "/");
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-140px)] z-10 p-4 md:p-6">
      
      {/* HERO COLUMN LAYOUT */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* Left Side: Calm narrative */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start select-text pr-4">
          <span className="bg-black text-white px-3 py-1 text-[11px] font-mono font-black uppercase tracking-[0.15em] mb-5 border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1.5deg]">
            ENGINEERING DIGITAL SOLUTIONS
          </span>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-6 font-sans home-title-glow select-none min-h-[200px] md:min-h-[320px]">
            {displayText.split("\n").map((line, idx) => (
              <span key={idx}>
                <span className={idx > 0 ? "text-[var(--color-accent)]" : "text-black"}>
                  {line}
                </span>
                {idx < displayText.split("\n").length - 1 && <br />}
              </span>
            ))}
            <span className="text-[var(--color-accent)] animate-pulse">_</span>
          </h1>
          <p className="text-black text-base md:text-lg leading-relaxed mb-10 max-w-xl font-bold bg-white p-5 border-3 border-black shadow-[5px_5px_0px_#000]">
            Crafting scalable web apps, intelligent systems, and immersive digital experiences that solve real problems and create impact.
          </p>

          <div className="flex gap-5 select-none">
            <button
              onClick={() => router.push("/projects")}
              className="px-8 py-4 bg-[var(--color-accent)] text-white border-3 border-black text-sm font-black font-mono tracking-wider uppercase cursor-pointer shadow-[5px_5px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
            >
              EXPLORE MY WORK ↗
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-white text-black border-3 border-black text-sm font-black font-mono tracking-wider uppercase cursor-pointer shadow-[5px_5px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
            >
              LET'S CONNECT
            </button>
          </div>

          {/* Current Status led indicator */}
          <div className="flex items-center gap-3 mt-10 select-none bg-[#FFE05D] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#000] rotate-[0.5deg]">
            <span className="w-3 h-3 rounded-full bg-[#39FF14] border border-black animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider uppercase font-black text-black">
              STATUS: <span className="text-black font-bold">BUILDING • LEARNING • SHIPPING</span>
            </span>
          </div>
        </div>

        {/* Right Side: Digital Motherboard City */}
        <div className="lg:col-span-7 w-full flex items-center justify-center relative bg-transparent">
          <DigitalFactory onCardClick={handleFactoryClick} />
        </div>
      </div>
 
      {/* PROGRESSIVE EXPLORATION SECTIONS */}
      <div className="relative mt-28 pb-20 select-none select-text">

        <div className="flex flex-col gap-28 relative z-10">

          {/* ─── SECTION 01: ORIGIN ─── */}
          <section className="relative">
            <div className="flex mb-6 items-baseline gap-4 select-none">
              <span className="text-[10px] font-mono font-black text-black/30 tracking-[0.2em]">[01]</span>
              <span className="text-[10px] font-mono font-black bg-[#FFE05D] border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000]">
                ORIGIN // ABOUT
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 bg-[#FFE05D] border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10 -rotate-[0.5deg]">
                <span className="text-[8px] font-mono font-black text-black/40 tracking-widest">FULL-STACK</span>
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight font-mono leading-[0.9] mt-2 mb-4">
                  SYSTEMS<br />ORIGIN
                </h2>
                <div className="w-12 h-1.5 bg-black mb-4" />
                <button
                  onClick={() => router.push("/about")}
                  className="w-full py-3 bg-white border-2 border-black text-black font-black text-[11px] font-mono uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
                >
                  DECODE BIO CORE ➔
                </button>
              </div>
              <div className="lg:col-span-3 bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10">
                <span className="text-[10px] font-mono font-black text-black/40 uppercase tracking-widest select-none">// SNAPSHOT</span>
                <p className="text-sm md:text-base text-black font-bold leading-relaxed mt-3 mb-5">
                  Full-stack developer with professional experience at Giddly and WAKUWAKU Studio. Computer Science student at SMVITM, building production web apps, AI tools, and interactive interfaces.
                </p>
                <div className="grid grid-cols-3 gap-3 select-none">
                  {[
                    { label: "CODING", val: `${yearsExp}+ YEARS`, color: "var(--color-accent)" },
                    { label: "PROJECTS", val: "15+ SHIPPED", color: "#FF5722" },
                    { label: "STACKS", val: "FRONT / BACK / SYS", color: "#000000" }
                  ].map((s, i) => (
                    <div key={i} className="border-2 border-black p-3 bg-[#FFFDF4] text-center">
                      <div className="text-[9px] text-black/40 uppercase font-mono font-black mb-1">{s.label}</div>
                      <div className="text-[9px] sm:text-xs font-black font-mono break-words leading-tight" style={{ color: s.color }}>{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 02: TOOLBOX ─── */}
          <section className="relative">
            <div className="flex mb-6 items-baseline gap-4 select-none">
              <span className="text-[10px] font-mono font-black text-black/30 tracking-[0.2em]">[02]</span>
              <span className="text-[10px] font-mono font-black bg-[#39FF14] text-black border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000]">
                TOOLBOX // SKILLS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 lg:order-2 bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10">
                <span className="text-[10px] font-mono font-black text-black/40 uppercase tracking-widest select-none">// TECH STACKS</span>
                <p className="text-sm md:text-base text-black font-bold leading-relaxed mt-3 mb-5">
                  Frontend, backend, systems programming, and AI — spanning React/Next.js through C/C++, Go, and Python. Each tool chosen for the problem, not the hype.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 select-none">
                  <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_#000]">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] border border-black animate-pulse" />
                      <h5 className="text-[10px] font-mono font-black">FRONTEND / UI</h5>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {["React", "Next.js", "Three.js", "WebGL", "Canvas"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-black text-white text-[10px] font-mono font-black">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_#000]">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFE05D] border border-black animate-pulse" />
                      <h5 className="text-[10px] font-mono font-black">BACKEND / SYSTEMS</h5>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {["Node.js", "C / C++", "Python", "SQL", "Docker"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-[#FFE05D]/20 border border-black text-[10px] font-mono font-black text-black">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-1 bg-[#39FF14] border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10 rotate-[0.5deg] self-start">
                <span className="text-[8px] font-mono font-black text-black/40 tracking-widest">FULL-STACK</span>
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight font-mono leading-[0.9] mt-2 mb-4">
                  TOOLBOX<br />SPECTRUM
                </h2>
                <div className="w-12 h-1.5 bg-black mb-4" />
                <button
                  onClick={() => router.push("/skills")}
                  className="w-full py-3 bg-white border-2 border-black text-black font-black text-[11px] font-mono uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
                >
                  SCAN INVENTORY ➔
                </button>
              </div>
            </div>
          </section>

          {/* ─── SECTION 03: SHIPMENTS ─── */}
          <section className="relative">
            <div className="flex mb-6 items-baseline gap-4 select-none">
              <span className="text-[10px] font-mono font-black text-black/30 tracking-[0.2em]">[03]</span>
              <span className="text-[10px] font-mono font-black bg-[#00E5FF] text-black border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000]">
                SHIPMENTS // PROJECTS
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4 bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10 -rotate-[0.5deg] self-start">
                <span className="text-[8px] font-mono font-black text-black/40 tracking-widest">FEATURED WORK</span>
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight font-mono leading-[0.9] mt-2 mb-4">
                  LIVE<br />PROJECTS
                </h2>
                <div className="w-12 h-1.5 bg-black mb-4" />
                <button
                  onClick={() => router.push("/projects")}
                  className="w-full py-3 bg-white border-2 border-black text-black font-black text-[11px] font-mono uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
                >
                  VIEW ALL PROJECTS ➔
                </button>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <div className="border-3 border-black p-5 bg-[#00E5FF] shadow-[6px_6px_0px_#000] relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-[9px] font-mono font-black text-black/60 bg-white border border-black px-2 py-0.5 select-none uppercase tracking-wider">WEB APP</span>
                      <h4 className="text-lg font-black uppercase text-black font-mono mt-2 mb-1">Interactive Dashboard</h4>
                      <p className="text-[11px] text-black font-bold leading-normal max-w-lg">
                        Real-time SVG schematic connecting pages through glowing animated diagnostic channels.
                      </p>
                    </div>
                    <span className="text-[9px] font-mono font-black text-black/50 select-none whitespace-nowrap mt-1">THREE.JS + SVG</span>
                  </div>
                </div>
                <div className="border-3 border-black p-5 bg-white shadow-[6px_6px_0px_#000] relative z-10 rotate-[0.5deg]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-[9px] font-mono font-black text-black bg-[#00E5FF] border border-black px-2 py-0.5 select-none uppercase tracking-wider">AI / VISION</span>
                      <h4 className="text-lg font-black uppercase text-black font-mono mt-2 mb-1">Facial Mesh Scanner</h4>
                      <p className="text-[11px] text-black font-bold leading-normal max-w-lg">
                        Webcam-powered computer vision app mapping facial landmarks with real-time mesh overlay.
                      </p>
                    </div>
                    <span className="text-[9px] font-mono font-black text-black/50 select-none whitespace-nowrap mt-1">TENSORFLOW.JS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 04: DIAGNOSTICS ─── */}
          <section className="relative">
            <div className="flex mb-6 items-baseline gap-4 select-none">
              <span className="text-[10px] font-mono font-black text-black/30 tracking-[0.2em]">[04]</span>
              <span className="text-[10px] font-mono font-black bg-black text-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000]">
                DIAGNOSTICS // TERMINAL
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-black border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10 font-mono">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3 select-none">
                  <span className="text-[10px] tracking-wider text-slate-500 uppercase font-black">BROWSER TERMINAL // ONLINE</span>
                  <span className="w-3 h-3 rounded-full bg-[#39FF14] animate-ping" />
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-white font-extrabold text-base">&gt; tejas@portfolio ~ $ whoami</p>
                  <p className="text-[#39FF14] font-bold">&gt; FULL-STACK DEVELOPER // CS STUDENT</p>
                  <p className="text-[#00E5FF] font-bold">&gt; STACK: REACT / NEXT.JS / C++ / PYTHON / GO</p>
                  <p className="text-[#FF5722] font-bold">&gt; TYPE 'help' TO EXPLORE →</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#000] relative z-10 self-start rotate-[0.5deg]">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight font-mono leading-[0.9] mb-4">
                  INTERACTIVE<br />TERMINAL
                </h2>
                <div className="w-12 h-1.5 bg-black mb-4" />
                <button
                  onClick={() => router.push("/terminal")}
                  className="w-full py-3 bg-white border-2 border-black text-black font-black text-[11px] font-mono uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
                >
                  LAUNCH TERMINAL ➔
                </button>
              </div>
            </div>
          </section>

          {/* ─── SECTION 05: CONNECTION ─── */}
          <section className="relative">
            <div className="flex mb-6 items-baseline gap-4 select-none">
              <span className="text-[10px] font-mono font-black text-black/30 tracking-[0.2em]">[05]</span>
              <span className="text-[10px] font-mono font-black bg-[var(--color-accent)] text-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000]">
                CONNECTION // CONTACT
              </span>
            </div>
            <div className="bg-[var(--color-accent)] border-3 border-black p-8 md:p-10 shadow-[8px_8px_0px_#000] relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <span className="text-[9px] font-mono font-black text-white/60 uppercase tracking-widest">// GET IN TOUCH</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-mono leading-[0.9] mt-3 mb-4">
                    LET'S<br />CONNECT
                  </h2>
                  <p className="text-sm md:text-base text-white font-bold leading-relaxed max-w-md">
                    Open to full-time roles, freelance projects, and collaborations. Email works best — I'll respond within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4">
                  <span className="bg-white border-3 border-black text-black px-5 py-3 font-mono text-[11px] font-black uppercase tracking-wider shadow-[4px_4px_0px_#000] -rotate-[1deg]">
                    EMAIL: tejasnayak25@outlook.com
                  </span>
                  <button
                    onClick={() => router.push("/contact")}
                    className="px-8 py-3 bg-white border-3 border-black text-black font-black text-[11px] font-mono uppercase cursor-pointer shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    OPEN PORT LINK ➔
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>

      </div>
  );
}
