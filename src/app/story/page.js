"use client";

import { useState } from "react";

const chapters = [
  {
    id: 0,
    title: "Curiosity",
    year: "2021",
    tagline: "Every engineer starts with a single question.",
    description: "Discovered programming through curiosity. Learned how computers think through C/C++, algorithms, data structures, debugging, and systems fundamentals. Countless hours spent building small utilities, breaking things, and understanding how software works beneath the surface.",
    tech: ["C", "C++", "Data Structures", "Algorithms", "CLI", "Problem Solving", "Systems Thinking"],
    highlights: [
      "C & C++",
      "Data Structures & Algorithms",
      "CLI Utilities",
      "Problem Solving",
      "Systems Thinking"
    ]
  },
  {
    id: 1,
    title: "Foundations",
    year: "2024",
    tagline: "Programming became engineering.",
    description: "Moved beyond exercises into building complete software. Learned frontend architecture, backend systems, APIs, authentication, databases, and deployment. Started thinking about software as products rather than code.",
    tech: ["React", "Next.js", "Node.js", "Express", "MySQL", "REST APIs", "Authentication", "Full-stack"],
    highlights: [
      "React & Next.js",
      "Node.js / Express",
      "REST APIs",
      "MySQL",
      "Authentication",
      "Full-stack architecture"
    ]
  },
  {
    id: 2,
    title: "Products",
    year: "2025",
    tagline: "A shift from making apps to solving real problems.",
    description: "Built complete applications from idea to deployment. Started focusing on user experience, scalability, and creating tools people could actually use instead of academic demos. Created products spanning productivity, creative tooling, and automation.",
    tech: ["SaaS", "UX Design", "Firebase", "Deployment", "Prototyping"],
    highlights: [
      "Full-stack SaaS applications",
      "Product design & UX",
      "Firebase backend architecture",
      "Real-world deployments",
      "Hackathons & rapid prototyping"
    ]
  },
  {
    id: 3,
    title: "Intelligence",
    year: "2025-26",
    tagline: "Software became more than interfaces.",
    description: "Entered the world of AI, computer vision, creative tooling, and intelligent systems. Built applications combining machine learning with modern web technologies while exploring how AI can empower creativity instead of replacing it. Expanded into mobile development and interactive experiences.",
    tech: ["Flutter", "Dart", "Python", "MediaPipe", "Firebase", "AI / ML"],
    highlights: [
      "Flutter & Dart",
      "Python",
      "MediaPipe",
      "Firebase Ecosystem",
      "AI-assisted creative tools",
      "Real-time computer vision",
      "Intelligent automation"
    ]
  },
  {
    id: 4,
    title: "Experiences",
    year: "2026",
    tagline: "Software evolved into experiences.",
    description: "Started exploring immersive interfaces, Three.js, procedural graphics, interactive systems, advanced animations, and experimental UI. Instead of simply designing screens, began designing worlds. Expanded into digital products and creative asset production.",
    tech: ["Three.js", "WebGL", "Motion Design", "UI Engineering", "3D", "Asset Pipelines"],
    highlights: [
      "Three.js",
      "Creative Coding",
      "Motion Design",
      "Advanced UI Engineering",
      "Interactive 3D",
      "Digital Product Creation",
      "Asset Pipelines"
    ]
  },
  {
    id: 5,
    title: "Ecosystems",
    year: "Present",
    tagline: "Individual applications became connected platforms.",
    description: "Current work revolves around AI-powered systems, developer tooling, creative platforms, automation, and products that combine engineering with design. The focus is no longer on building software — it's on building systems that enable other people to create.",
    tech: ["AI Agents", "CV Pipelines", "Interactive Viz", "Dev Tooling", "Creative AI", "Commerce"],
    highlights: [
      "AI agent workflows",
      "Computer vision pipelines",
      "Interactive visualization",
      "Creative AI platforms",
      "Large-scale UI reconstruction",
      "Advanced developer tooling",
      "Digital commerce & creator products"
    ]
  },
  {
    id: 6,
    title: "Horizon",
    year: "Future",
    tagline: "The destination keeps moving.",
    description: "Current exploration is heading toward the intersection of artificial intelligence, interactive graphics, human-computer interaction, intelligent agents, and creative development platforms. The long-term vision is to create software that feels less like traditional applications and more like living digital experiences.",
    tech: ["AI", "Interactive 3D", "HCI", "Intelligent Agents", "Creative Platforms", "Product Engineering"],
    highlights: [
      "Artificial Intelligence",
      "Interactive Graphics",
      "Human-Computer Interaction",
      "Intelligent Agents",
      "Creative Development Platforms",
      "Real-time 3D",
      "Product Engineering"
    ]
  }
];

export default function StoryPage() {
  const [activeChapterId, setActiveChapterId] = useState(0);
  const activeChapter = chapters.find((ch) => ch.id === activeChapterId);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 z-10 flex flex-col select-text">

      {/* ═══ HEADER ═══ */}
      <div className="mb-8 select-none flex flex-col items-start gap-1.5 border-b-2 border-black pb-6">
        <span className="bg-[#FF5722] text-white px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000] rotate-[1.5deg]">
          Engineering Chronicles // MODULE_04
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black uppercase comic-title-shadow mt-1">
          DEV STORY
        </h1>
      </div>

      {/* ═══ CHAPTER SCENES ═══ */}
      <div className="relative">
        <div className="absolute left-0 top-8 bottom-0 w-[3px] bg-black hidden md:block" />

        {chapters.map((ch, i) => {
          const isActive = activeChapterId === ch.id;
          return (
            <div key={ch.id} className="relative md:pl-8 pb-5 last:pb-0">
              <div className="hidden md:block absolute left-0 top-[18px] w-[3px] h-3">
                <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-3 border-black transition-all duration-300 ${
                  isActive ? 'bg-[#FF5722]' : 'bg-white'
                }`} />
              </div>

              <div
                className={`
                  cursor-pointer transition-all duration-200 select-none
                  border-3 border-black p-5 md:p-6 relative
                  ${isActive
                    ? 'bg-white text-black shadow-[8px_8px_0px_#FF5722] border-l-[6px] border-l-[#FF5722]'
                    : 'bg-white text-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5'
                  }
                `}
                onClick={() => setActiveChapterId(ch.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[12px] font-mono font-black tracking-[0.15em] uppercase px-2 py-0.5 ${
                    isActive ? 'bg-[#FF5722] text-white' : 'text-[#FF5722]'
                  }`}>
                    CHAPTER_{String(ch.id).padStart(2, '0')}
                  </span>
                  <span className="text-[12px] font-mono font-black text-black/30">
                    // {ch.year}
                  </span>
                  {isActive && (
                    <span className="ml-auto text-[10px] font-mono font-black text-[#FF5722] uppercase tracking-wider">
                      ► ACTIVE
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-black uppercase font-sans leading-[0.95] text-black">
                  {ch.title}
                </h3>

                <p className="text-[13px] font-mono font-black mt-2 text-black/50 italic leading-normal">
                  {ch.tagline}
                </p>

                <p className="text-[12px] font-mono font-bold mt-3 leading-relaxed text-black/70">
                  {ch.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {ch.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider border border-black bg-[#FFE05D] text-black shadow-[1.5px_1.5px_0px_#000]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {isActive && (
                  <div className="mt-5 pt-4 border-t-2 border-black/10">
                    <div className="text-[11px] font-mono font-black text-black/30 uppercase tracking-wider mb-2">Milestones</div>
                    <ul className="space-y-1.5">
                      {ch.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-[12px] font-mono font-bold text-black/60">
                          <span className="w-2 h-2 bg-[#FF5722] border border-black shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
