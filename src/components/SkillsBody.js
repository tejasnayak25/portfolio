"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const categories = {
  languages: {
    title: "01 // SYSTEMS & LANGUAGES",
    accent: "#FFE05D",
    skills: [
      { name: "Python", details: "AI Pipelines & Data Modeling", img: "/images/skills/python.png" },
      { name: "C++", details: "System Compilation & OOP", img: "/images/skills/cpp.svg" },
      { name: "C", details: "Memory Structures & Logic", img: "/images/skills/c.svg" },
      { name: "Java", details: "Enterprise Class Architecture", img: "/images/skills/java.svg" },
      { name: "Dart", details: "Flutter Asynchronous Systems", img: "/images/skills/flutter.png" }
    ]
  },
  frontend: {
    title: "02 // FRONTEND ENGINEERING",
    accent: "#00E5FF",
    skills: [
      { name: "Next.js", details: "Server Components & Routing", img: "/images/skills/next-js.png" },
      { name: "React.js", details: "State Hooks & Virtual DOM", img: "/images/skills/react-js.png" },
      { name: "Three.js", details: "WebGL Graphics & 3D Shaders", img: "/images/skills/three-js.svg" },
      { name: "JavaScript", details: "ES6+ Runtime Async", img: "/images/skills/javascript.svg" },
      { name: "TypeScript", details: "Static Typing & Interfaces", img: "/images/skills/typescript.svg" },
      { name: "Tailwind CSS", details: "Modular Utility Layouts", img: "/images/skills/tailwindcss.png" },
      { name: "HTML", details: "Semantic Markup & Accessibility", img: "/images/skills/html.svg" },
      { name: "CSS", details: "Responsive Design & Animations", img: "/images/skills/css.svg" },
      { name: "Bootstrap", details: "Component Library Patterns", img: "/images/skills/bootstrap.svg" },
      { name: "Vercel", details: "Serverless Deployment & Edge", img: "/images/skills/vercel.svg" },
      { name: "React Native", details: "Cross-platform Mobile Development", img: "/images/skills/react-native.svg" },
      { name: "Electron.js", details: "Cross-platform Desktop Applications", img: "/images/skills/electron.svg" }
    ]
  },
  backend: {
    title: "03 // BACKEND & INFRASTRUCTURE",
    accent: "#FF5722",
    skills: [
      { name: "Node.js", details: "Non-blocking JavaScript Runtime", img: "/images/skills/nodejs.png" },
      { name: "Express.js", details: "Web API Middleware Routing", img: "/images/skills/expressjs.svg" },
      { name: "Flask", details: "Lightweight Python Backend", img: "/images/skills/flask.svg" },
      { name: "Django", details: "Full-featured Python Framework", img: "/images/skills/django.png" },
      { name: "MySQL", details: "Relational Queries & Indexing", img: "/images/skills/mysql.png" },
      { name: "SQL", details: "Relational Queries & Database Design", img: "/images/skills/sql.svg" },
      { name: "MongoDB", details: "Document Collection Structures", img: "/images/skills/mongodb.svg" },
      { name: "Firebase", details: "Serverless Auth & Firestore", img: "/images/skills/firebase.svg" },
      { name: "GCP", details: "Cloud Infrastructure & Services", img: "/images/skills/gcp.svg" },
      { name: "Go", details: "High-performance Systems & Concurrency", img: "/images/skills/go.svg" },
      { name: "WebRTC", details: "Real-time Peer-to-peer Communication", img: "/images/skills/webrtc.svg" },
      { name: "Socket.IO", details: "Bidirectional Event-based Real-time", img: "/images/skills/socketio.svg" }
    ]
  },
  ai: {
    title: "04 // AI & TOOLING",
    accent: "#39FF14",
    skills: [
      { name: "MediaPipe", details: "Real-time CV Pipelines", img: "/images/skills/mediapipe.png" },
      { name: "NumPy", details: "Numerical Computing & Arrays", img: "/images/skills/numpy.svg" },
      { name: "Matplotlib", details: "Data Visualization & Plots", img: "/images/skills/matplotlib.svg" },
      { name: "Git & GitHub", details: "Version Control & Collaboration", img: "/images/skills/git-github.svg" },
      { name: "Postman", details: "API Testing & Documentation", img: "/images/skills/postman.svg" },
      { name: "Hugging Face", details: "Model Hub & AI Pipelines", img: "/images/skills/huggingface.svg" },
      { name: "Kaggle", details: "Competitions & Datasets", img: "/images/skills/kaggle.svg" },
      { name: "Colab", details: "Cloud Notebook Environment", img: "/images/skills/colab.svg" },
      { name: "Puppeteer", details: "Browser Automation & Scraping", img: "/images/skills/puppeteer.svg" },
      { name: "Gemini API", details: "AI-powered Content & Reasoning", img: "/images/skills/gemini.svg" }
    ]
  }
};

const categoryOrder = ["languages", "frontend", "backend", "ai"];

export default function SkillsBody() {
  const [activeCat, setActiveCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const totalSkills = useMemo(() => {
    return Object.values(categories).reduce((sum, cat) => sum + cat.skills.length, 0);
  }, []);

  const keys = activeCat === "all" ? categoryOrder : [activeCat];

  const tabs = [
    { id: "all", name: "ALL MACHINERY", count: totalSkills },
    { id: "languages", name: "SYSTEMS", count: categories.languages.skills.length },
    { id: "frontend", name: "FRONTEND", count: categories.frontend.skills.length },
    { id: "backend", name: "BACKEND", count: categories.backend.skills.length },
    { id: "ai", name: "AI & TOOLS", count: categories.ai.skills.length }
  ];

  return (
    <div className="flex flex-col gap-6 text-[#202020] font-sans">

      {/* ── Search bar ── */}
      <div className="select-none">
        <div className="flex items-center border-3 border-black shadow-[4px_4px_0px_#000] bg-white group focus-within:shadow-[4px_4px_0px_var(--color-accent)] transition-shadow duration-200">
          <span className="pl-4 pr-2 text-black/40 font-mono text-[13px] font-black select-none">❯</span>
          <input
            type="text"
            placeholder="type to filter skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent py-3 pr-4 text-[12px] font-mono font-black text-black outline-none placeholder:text-black/20"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="pr-4 text-black/30 hover:text-black transition-colors cursor-pointer font-mono text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
              CLEAR
            </button>
          ) : (
            <span className="pr-4 text-black/15 font-mono text-[9px] font-black tracking-wider">───</span>
          )}
        </div>
      </div>

      {/* ── Category selector pills ── */}
      <div className="flex flex-wrap gap-2 justify-center select-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCat(tab.id)}
            className={`px-5 py-2.5 rounded-none font-mono text-[11px] tracking-widest font-black transition-all duration-100 cursor-pointer border-3 border-black inline-flex items-center gap-2 ${
              activeCat === tab.id
                ? "bg-[var(--color-accent)] text-black shadow-[4px_4px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                : "bg-white text-black shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none"
            }`}
          >
            {tab.name}
            <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 border border-black ${
              activeCat === tab.id ? 'bg-white/60 text-black border-white/60' : 'bg-black/5 text-black/40 border-black/20'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* ── Skills Sections ── */}
      <div className="space-y-8">
        {keys.map((catKey) => {
          const category = categories[catKey];
          const filtered = searchQuery
            ? category.skills.filter((s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : category.skills;

          if (filtered.length === 0) return null;

          return (
            <div key={catKey}>
              <div className="flex items-center gap-3 mb-4 select-none">
                <span className="text-[11px] font-mono font-black text-black/70 tracking-[0.2em] uppercase">{category.title.split(" // ")[0].trim()}</span>
                <span className="h-px flex-1 bg-black/20" />
                <span className="text-[13px] font-mono font-black uppercase tracking-wider border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_#000] text-black" style={{ backgroundColor: category.accent }}>
                  {category.title.split(" // ")[1]}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filtered.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-3 border-black shadow-[6px_6px_0px_#000] group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 select-text overflow-hidden"
                  >
                    <div className="h-[3px]" style={{ backgroundColor: category.accent }} />
                    <div className="p-4 md:p-5 pt-3 md:pt-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 border-2 border-black p-1.5 flex items-center justify-center select-none shrink-0"
                          style={{ backgroundColor: category.accent }}
                        >
                          {skill.img ? (
                            <Image
                              src={skill.img}
                              alt={skill.name}
                              width={28}
                              height={28}
                              className="w-full h-full object-contain brightness-0"
                            />
                          ) : (
                            <span className="text-[14px] font-black font-mono text-black">{skill.name[0]}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[13px] font-black text-black uppercase font-mono tracking-wide truncate">
                            {skill.name}
                          </h4>
                          <p className="text-[10px] font-mono font-bold text-black/60 mt-0.5 leading-tight truncate">
                            {skill.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* No results */}
        {keys.every((k) => {
          const cat = categories[k];
          return !cat.skills.some((s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }) && searchQuery && (
          <div className="border-3 border-black bg-white shadow-[6px_6px_0px_#000] p-6 text-center select-none">
            <p className="text-[12px] font-mono font-black text-black/30 uppercase tracking-wider">
              NO SKILLS MATCH &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
