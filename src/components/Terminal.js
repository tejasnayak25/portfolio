"use client";

import { useState, useRef, useEffect } from "react";

const BANNER = [
  "========================================",
  " TEJAS AI TERMINAL v1.2.0 (ACTIVE)     ",
  "========================================",
  "Type 'help' to view available commands.",
  "Or type anything to chat with Tejas AI.",
  "----------------------------------------"
];

const HELP_TEXT = [
  "Available commands:",
  "  about    - Learn who I am",
  "  skills   - See my technical stack",
  "  projects - Check my core projects",
  "  contact  - Get my contact links",
  "  clear    - Clear terminal window",
  "  secret   - Unlock a hidden surprise!"
];

const ABOUT_RESPONSE = [
  "Tejas Nayak is a passionate Fullstack & AI Developer with over 2 years of experience.",
  "He specializes in crafting highly interactive frontend systems (React/NextJS), robust backends (NodeJS/Flask), and integrated AI modules.",
  "Driven by creativity, he translates complex requirements into sleek, fluid applications."
];

const SKILLS_RESPONSE = [
  "Primary Technical Toolkit:",
  "  • Languages: C, C++, Javascript, Python, Dart, Java",
  "  • Frontend: React, NextJS, HTML, CSS, TailwindCSS, Bootstrap",
  "  • Backend & DB: NodeJS, ExpressJS, Flask, Django, MySQL, MongoDB, Firebase",
  "  • Mobile Dev: Flutter (Android & iOS)",
  "  • Specialties: ThreeJS (3D), MediaPipe, Matplotlib, AI integrations"
];

const PROJECTS_RESPONSE = [
  "Featured Projects:",
  "  1. AI Object Detection - OpenCV & Python real-time object mapping",
  "  2. Interactive Portfolio - Premium NextJS with neon design customization",
  "  3. Flutter E-Commerce - Cross-platform shopping app with payment gateway",
  "  4. Three.js Sandbox - 3D interactive graphics playground",
  "Type 'projects' or navigate to /projects to view full repository files."
];

const CONTACT_RESPONSE = [
  "Direct Links:",
  "  • Email: tejasnayak25@outlook.com",
  "  • LinkedIn: linkedin.com/in/tejas-nayak-3110a7220",
  "  • GitHub: github.com/tejasnayak25",
  "  • Instagram: @tjnayak"
];

const SECRET_RESPONSE = [
  "                                      ",
  "   ▲   ANTIGRAVITY ENGAGED!           ",
  "  ▲ ▲  You are now floating above normal developer portfolios...",
  " ◄   ► ",
  "  ▼ ▼  Fun fact: Tejas loves code, animation, and video editing!",
  "   ▼                                  "
];

export default function Terminal() {
  const [history, setHistory] = useState(BANNER);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalHistoryRef = useRef(null);

  // Auto scroll to bottom when history updates
  useEffect(() => {
    if (terminalHistoryRef.current) {
      terminalHistoryRef.current.scrollTop = terminalHistoryRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawInput) => {
    const trimmedInput = rawInput.trim();
    if (!trimmedInput) return;

    const cmd = trimmedInput.toLowerCase();
    const newHistory = [...history, `visitor@tejas-portfolio:~$ ${trimmedInput}`];
    
    // Add to input command history
    setCommandHistory((prev) => [trimmedInput, ...prev]);
    setHistoryIndex(-1);

    let response = [];

    switch (cmd) {
      case "help":
        response = HELP_TEXT;
        break;
      case "about":
        response = ABOUT_RESPONSE;
        break;
      case "skills":
        response = SKILLS_RESPONSE;
        break;
      case "projects":
        response = PROJECTS_RESPONSE;
        break;
      case "contact":
        response = CONTACT_RESPONSE;
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "secret":
        response = SECRET_RESPONSE;
        break;
      default:
        // Mock Chatbot AI responses
        response = getAIResponse(cmd);
        break;
    }

    setHistory([...newHistory, ...response]);
    setInputVal("");
  };

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return ["AI: Hello! How can I help you today? Ask me about my skills, projects, or background!"];
    }
    if (q.includes("experience") || q.includes("work") || q.includes("jobs")) {
      return [
        `AI: Tejas has been coding since 2021 (${new Date().getFullYear() - 2021}+ years) — building full-stack apps, AI tools, and interactive experiences. Type 'about' for details!`
      ];
    }
    if (q.includes("hire") || q.includes("contact") || q.includes("hire you")) {
      return [
        "AI: You can reach Tejas at tejasnayak25@outlook.com or connect via LinkedIn. Type 'contact' for links!"
      ];
    }
    if (q.includes("flutter") || q.includes("mobile") || q.includes("android") || q.includes("ios")) {
      return [
        "AI: Yes! Tejas has extensive experience building cross-platform apps in Flutter with Dart. He's built multiple apps including e-commerce UI integrations."
      ];
    }
    if (q.includes("python") || q.includes("ml") || q.includes("ai") || q.includes("intelligence")) {
      return [
        "AI: Tejas builds Python utilities using OpenCV, Flask/Django, and custom machine learning APIs, integrating smart bots and data analysis tools."
      ];
    }
    if (q.includes("threejs") || q.includes("three.js") || q.includes("3d")) {
      return [
        "AI: Tejas utilizes Three.js and WebGL to build interactive 3D web environments. He loves bringing layouts to life with web graphics!"
      ];
    }
    return [
      `AI: Interesting query: "${query}". I'm a simple AI bot designed to represent Tejas.`,
      "Try asking about: 'skills', 'projects', 'experience', 'threejs', or 'contact'."
    ];
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <div className="w-full h-80 rounded-none border-3 border-black bg-black font-mono text-sm text-[#39FF14] p-4 overflow-hidden flex flex-col shadow-[6px_6px_0px_#000] relative select-none">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-950/5 to-transparent h-full w-full bg-[length:100%_4px] opacity-20" />
      
      {/* Top Header Dots - retro console buttons */}
      <div className="flex gap-2 pb-3 border-b-2 border-black mb-2 items-center">
        <span className="w-3 h-3 rounded-full border border-black bg-red-500" />
        <span className="w-3 h-3 rounded-full border border-black bg-yellow-500" />
        <span className="w-3 h-3 rounded-full border border-black bg-green-500" />
        <span className="text-slate-400 text-[10px] pl-2 font-black">{"// visitor@tejas-ai: ~"}</span>
      </div>

      {/* Terminal History */}
      <div
        ref={terminalHistoryRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 space-y-1.5 pr-2"
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={`${
              line.startsWith("visitor@")
                ? "text-white font-extrabold"
                : line.startsWith("AI:")
                ? "text-cyan-300 font-extrabold"
                : line.startsWith("Error:")
                ? "text-red-400 font-bold"
                : "text-[#39FF14] font-bold"
            } whitespace-pre-wrap`}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="flex items-center gap-1.5 pt-2 border-t-2 border-black mt-2 bg-black">
        <span className="text-white font-extrabold">visitor@tejas-portfolio:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-black border-none outline-none focus:ring-0 text-[#39FF14] placeholder-green-800 font-bold"
          placeholder="Type here..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
