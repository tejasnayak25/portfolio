"use client";

import { useState } from "react";
import Drawer from "@/components/Drawer";

const Trophy = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Medal = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const competitions = [
  { id: "monaithon", place: "1st", label: "MONAITHON", event: "Hackathon — JNNCE, Shivamogga" },
  { id: "plasma", place: "1st", label: "PLASMA 2K24", event: "Hackathon — JNNCE, Shivamogga" },
  { id: "hackathon", place: "1st", label: "HACK-A-THON", event: "College Techfest" },
  { id: "hacknight", place: "2nd", label: "HACKNIGHT 2024", event: "Hackathon — Sahyadri Engineering College" },
  { id: "webdesign", place: "2nd", label: "WEB-DESIGN", event: "Competition — College Techfest" },
  { id: "hackhunt", place: "2nd", label: "HACKHUNT", event: "Competition — College Techfest" },
  { id: "treasure", place: "2nd", label: "TECH TREASURE HUNT", event: "YUGMA TechFest 1.0 — JNNCE, Shivamogga" }
];

const impacts = [
  {
    id: "nain",
    label: "NAIN 2.0 FUNDING",
    tag: "GRANT",
    accent: "#39FF14",
    stat: "₹5L",
    statLabel: "Funding",
    detail: "Secured ₹5 lakh NAIN 2.0 funding for SoilSense, an agriculture-focused technology project."
  },
  {
    id: "hackotsava",
    label: "HACKOTSAVA & MINI HACKATHON",
    tag: "ORGANIZED",
    accent: "#00E5FF",
    stat: "100+",
    statLabel: "Participants",
    detail: "Organized events involving 100+ participants — coordinated logistics, mentored teams, and managed technical operations."
  },
  {
    id: "workshops",
    label: "TECHNICAL WORKSHOPS",
    tag: "EDUCATION",
    accent: "#FF5722",
    stat: "5+",
    statLabel: "Workshops",
    detail: "Conducted 5+ workshops attended by 150+ students on Web Development, YOLO-based Object Detection, and Full-Stack Engineering."
  },
  {
    id: "sessions",
    label: "SKILL DEVELOPMENT SESSIONS",
    tag: "TRAINING",
    accent: "#FFB300",
    stat: "2",
    statLabel: "Topics",
    detail: "Delivered skill development sessions on Vibe Coding and OCR basics."
  }
];

const golds = competitions.filter((a) => a.place === "1st");
const silvers = competitions.filter((a) => a.place === "2nd");

export default function AchievementsBody() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedComp, setSelectedComp] = useState(null);
  const [selectedImpact, setSelectedImpact] = useState(null);

  const openComp = (ach) => {
    setSelectedComp(ach);
    setSelectedImpact(null);
    setDrawerOpen(true);
  };

  const openImpact = (imp) => {
    setSelectedImpact(imp);
    setSelectedComp(null);
    setDrawerOpen(true);
  };

  return (
    <div className="flex flex-col gap-10 text-[#202020] font-sans">

      {/* ── HERO STATS BANNER ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border-3 border-black bg-[#FFB300] shadow-[8px_8px_0px_#000] p-6 flex flex-col items-center justify-center text-center relative">
          <span className="text-5xl md:text-7xl font-black text-black font-sans leading-none">{competitions.length}</span>
          <span className="text-[9px] font-mono font-black text-black/60 uppercase tracking-[0.15em] mt-1">Competition Wins</span>
        </div>
        <div className="border-3 border-black bg-black shadow-[8px_8px_0px_#FFB300] p-6 flex flex-col items-center justify-center text-center">
          <span className="text-5xl md:text-7xl font-black text-[#FFB300] font-sans leading-none">{golds.length}</span>
          <span className="text-[9px] font-mono font-black text-white/60 uppercase tracking-[0.15em] mt-1">Gold</span>
        </div>
        <div className="border-3 border-black bg-black shadow-[8px_8px_0px_#A8A8A8] p-6 flex flex-col items-center justify-center text-center">
          <span className="text-5xl md:text-7xl font-black text-[#A8A8A8] font-sans leading-none">{silvers.length}</span>
          <span className="text-[9px] font-mono font-black text-white/60 uppercase tracking-[0.15em] mt-1">Silver</span>
        </div>
        <div className="border-3 border-black bg-black shadow-[8px_8px_0px_#39FF14] p-6 flex flex-col items-center justify-center text-center">
          <span className="text-5xl md:text-7xl font-black text-[#39FF14] font-sans leading-none">₹5L</span>
          <span className="text-[9px] font-mono font-black text-white/60 uppercase tracking-[0.15em] mt-1">Funding</span>
        </div>
      </div>

      {/* ── MAJOR IMPACT ── */}
      <div>
        <div className="flex items-center gap-3 mb-5 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">01</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">IMPACT</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {impacts.map((imp) => (
            <div
              key={imp.id}
              onClick={() => openImpact(imp)}
              className="border-3 border-black bg-white shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all cursor-pointer group overflow-hidden h-full"
            >
              <div className="flex items-stretch h-full">
                <div className="w-2 shrink-0 self-stretch" style={{ backgroundColor: imp.accent }} />
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="min-w-0">
                        <span className="inline-block text-[8px] font-mono font-black uppercase tracking-[0.15em] border-2 border-black px-1.5 py-0.5 bg-white text-black mb-2">{imp.tag}</span>
                        <h3 className="text-[15px] font-black text-black uppercase font-mono leading-tight">
                          {imp.label}
                        </h3>
                      </div>
                      <div className="shrink-0 text-right mt-1">
                        <span className="text-3xl md:text-4xl font-black font-sans leading-none block text-black">
                          {imp.stat}
                        </span>
                        <span className="text-[8px] font-mono font-bold text-black/70 uppercase tracking-wider">
                          {imp.statLabel}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] font-mono font-bold text-black/80 leading-relaxed">
                      {imp.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t-2 border-black/10 flex items-center gap-1.5 text-[9px] font-mono font-black uppercase tracking-wider text-black/50 group-hover:text-black transition-colors">
                    <span>VIEW DETAILS</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPETITION WINS ── */}
      <div>
        <div className="flex items-center gap-3 mb-5 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">02</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">COMPETITIONS</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>
        <div className="space-y-5">
          {[golds, silvers].map((group, gi) => {
            const isGold = gi === 0;
            const accent = isGold ? "#FFB300" : "#A8A8A8";
            const accentBg = isGold ? "bg-[#FFB300]" : "bg-[#A8A8A8]";

            return (
              <div key={gi} className="border-3 border-black bg-white shadow-[8px_8px_0px_#000] overflow-hidden">
                <div className={`${accentBg} px-5 py-3 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] -rotate-2 shrink-0">
                    {isGold ? <Trophy size={18} color="#000" /> : <Medal size={16} color="#000" />}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[13px] font-black text-black font-mono uppercase tracking-widest block leading-none">{isGold ? "GOLD" : "SILVER"}</span>
                    <span className="text-[9px] font-mono font-bold text-black/60 uppercase tracking-wider">{isGold ? "1st Place" : "2nd Place"}</span>
                  </div>
                  <span className="ml-auto text-[10px] font-mono font-black text-black/40">{group.length} AWARD{group.length > 1 ? "S" : ""}</span>
                </div>
                <div className="p-4 md:p-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.map((ach) => (
                      <div
                        key={ach.id}
                        onClick={() => openComp(ach)}
                        className="border-2 border-black bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] transition-all cursor-pointer group relative overflow-hidden"
                      >
                        <div className="h-[3px]" style={{ backgroundColor: accent }} />
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="w-8 h-8 border-2 border-black flex items-center justify-center shrink-0" style={{ backgroundColor: accent }}>
                              {isGold ? <Trophy size={14} color="#000" /> : <Medal size={12} color="#000" />}
                            </div>
                            <span className="text-[8px] font-mono font-black uppercase tracking-widest px-1.5 py-0.5 border-2 border-black bg-white text-black/70">
                              {ach.id.toUpperCase()}
                            </span>
                          </div>
                          <h4 className="text-[14px] font-black text-black uppercase font-mono leading-tight mb-1">
                            {ach.label}
                          </h4>
                          <p className="text-[10px] font-mono font-bold text-black/80 leading-relaxed">
                            {ach.event}
                          </p>
                          <div className="mt-3 pt-2 border-t-2 border-black/10 flex items-center gap-2 text-[8px] font-mono font-black uppercase tracking-wider">
                            <span className="font-black" style={{ color: accent }}>◈ VIEW</span>
                            <span className="text-black/20">→</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DRAWER ── */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={selectedComp ? selectedComp.label : selectedImpact ? selectedImpact.label : ""}
        subtitle={selectedComp ? (selectedComp.place === "1st" ? "GOLD // 1ST PLACE" : "SILVER // 2ND PLACE") : selectedImpact ? "IMPACT // MILESTONE" : ""}
      >
        {selectedComp && (
          <div>
            <div className="border-3 border-black bg-white shadow-[6px_6px_0px_#000] p-6 md:p-8 text-center">
              <div className={`w-14 h-14 ${selectedComp.place === "1st" ? "bg-[#FFB300]" : "bg-[#A8A8A8]"} border-3 border-black flex items-center justify-center mx-auto mb-5 -rotate-3 shadow-[4px_4px_0px_#000]`}>
                <Trophy size={24} color="#000" />
              </div>
              <h2 className="text-xl md:text-3xl font-black text-black uppercase font-mono leading-tight mb-2">{selectedComp.label}</h2>
              <p className="text-sm font-mono font-bold text-black/60 mb-1">{selectedComp.event}</p>
              <div className="w-12 h-1 bg-black mx-auto my-5" />
              <p className="text-xs font-mono font-bold text-black/80 leading-relaxed max-w-xs mx-auto">
                {selectedComp.place === "1st"
                  ? "Awarded first place for outstanding project demonstration, technical execution, and presentation."
                  : "Awarded second place for strong technical implementation and creative problem-solving."}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 text-[11px] font-mono font-black uppercase tracking-widest border border-black shadow-[4px_4px_0px_#000]">
                <Trophy size={12} color="#FFB300" />
                PLACE: {selectedComp.place === "1st" ? "1ST" : "2ND"}
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3 select-none">
                <span className="text-[9px] font-mono font-black text-black/30 tracking-[0.2em] uppercase">{"// CERTIFICATE"}</span>
                <span className="h-px flex-1 bg-black/20" />
              </div>
              <div className="border-3 border-black overflow-hidden bg-white shadow-[6px_6px_0px_#000]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/certificates/${selectedComp.id}.jpg`}
                  alt={`${selectedComp.label} certificate`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        )}
        {selectedImpact && (
          <div className="border-3 border-black bg-white shadow-[6px_6px_0px_#000] p-6 md:p-8 text-center">
            <div className="w-14 h-14 border-3 border-black flex items-center justify-center mx-auto mb-5 -rotate-3 shadow-[4px_4px_0px_#000]" style={{ backgroundColor: selectedImpact.accent }}>
              <span className="text-2xl font-black font-mono text-black">◆</span>
            </div>
            <h2 className="text-xl md:text-3xl font-black text-black uppercase font-mono leading-tight mb-2">{selectedImpact.label}</h2>
            <span className="text-[11px] font-mono font-black uppercase tracking-widest border-2 border-black px-2 py-0.5 bg-white text-black">{selectedImpact.tag}</span>
            <div className="w-12 h-1 bg-black mx-auto my-5" />
            <p className="text-xs font-mono font-bold text-black/80 leading-relaxed max-w-xs mx-auto">{selectedImpact.detail}</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 text-[11px] font-mono font-black uppercase tracking-widest border border-black shadow-[4px_4px_0px_#000]">
              <span className="text-xl leading-none" style={{ color: selectedImpact.accent }}>◆</span>
              {selectedImpact.stat} {selectedImpact.statLabel}
            </div>
          </div>
        )}
      </Drawer>

    </div>
  );
}
