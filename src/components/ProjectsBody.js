"use client";

import { useState, useEffect } from "react";

export default function ProjectsBody() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCat, setActiveCat] = useState("all");
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const cached = sessionStorage.getItem("github-repos");
        if (cached) {
          const data = JSON.parse(cached);
          setRepos(data);
          filterAndSet(data, activeCat);
          setLoading(false);
          return;
        }

        const res = await fetch("https://api.github.com/users/tejasnayak25/repos?per_page=100");
        if (!res.ok) throw new Error("API limits");
        const data = await res.json();

        const projectRepos = data.filter((repo) =>
          repo.topics && repo.topics.includes("project")
        );

        sessionStorage.setItem("github-repos", JSON.stringify(projectRepos));
        setRepos(projectRepos);
        filterAndSet(projectRepos, activeCat);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    filterAndSet(repos, activeCat);
  }, [activeCat, repos]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedRepo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filterAndSet = (allRepos, filter) => {
    if (filter === "all") {
      setFilteredRepos(allRepos);
      return;
    }

    const filtered = allRepos.filter((repo) => {
      const lang = (repo.language || "").toLowerCase();
      const topics = repo.topics || [];

      if (filter === "web") {
        return (
          lang === "javascript" ||
          lang === "typescript" ||
          lang === "html" ||
          lang === "css" ||
          topics.some(t => ["web", "nextjs", "react", "fullstack", "website"].includes(t))
        );
      }
      if (filter === "mobile") {
        return lang === "dart" || topics.some(t => ["flutter", "mobile", "android", "ios", "react-native"].includes(t));
      }
      if (filter === "systems") {
        return (
          lang === "python" ||
          lang === "cpp" ||
          lang === "c" ||
          lang === "java" ||
          topics.some(t => ["ai", "machine-learning", "opencv", "computer-vision"].includes(t))
        );
      }
      return false;
    });

    setFilteredRepos(filtered);
  };

  const getCardType = (index) => {
    const mod = index % 4;
    if (mod === 0) return "hero";
    if (mod === 3) return "wide";
    return "normal";
  };

  return (
    <div className="flex flex-col gap-6 text-[#202020] h-full font-sans">

      {/* Filters selectors */}
      <div className="flex flex-wrap gap-2 justify-center mb-2 select-none">
        {[
          { id: "all", name: "ALL MANUFACTURES" },
          { id: "web", name: "WEB STACKS" },
          { id: "mobile", name: "MOBILE DEV" },
          { id: "systems", name: "SYSTEMS / AI" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCat(tab.id)}
            className={`px-6 py-3 rounded-none font-mono text-[12px] tracking-widest font-black transition-all duration-100 cursor-pointer border-3 border-black ${
              activeCat === tab.id
                ? "bg-[var(--color-accent)] text-white shadow-[4px_4px_0px_#000] -translate-x-0.5 -translate-y-0.5"
                : "bg-white text-black shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-none"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="flex-1 select-text">
        {loading ? (
          <div className="space-y-4">
            <div className="border-3 border-black p-6 bg-white/70 animate-pulse shadow-[6px_6px_0px_#000] h-32" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-3 border-black p-5 bg-white/70 animate-pulse shadow-[5px_5px_0px_#000] h-28" />
              <div className="border-3 border-black p-5 bg-white/70 animate-pulse shadow-[5px_5px_0px_#000] h-28" />
            </div>
            <div className="border-3 border-black p-5 bg-white/70 animate-pulse shadow-[5px_5px_0px_#000] h-24" />
          </div>
        ) : error ? (
          <div className="border-3 border-black p-8 bg-white shadow-[8px_8px_0px_#000] flex flex-col items-center text-center">
            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center text-red-500 mb-4 shadow-[2px_2px_0px_#000]">
              <i className="material-symbols-rounded text-xl">error</i>
            </span>
            <h4 className="text-sm font-black font-mono tracking-wider uppercase mb-2">Diagnostics Error</h4>
            <p className="text-xs text-black max-w-xs mb-5 font-black font-mono bg-yellow-100 p-3 border-2 border-black shadow-[3px_3px_0px_#000]">
              GITHUB API LIMIT MET. MANUALLY ACCESS PORTFOLIO ARCHIVES:
            </p>
            <a
              href="https://github.com/tejasnayak25"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--color-accent)] border-2 border-black text-white text-[10px] font-mono font-black uppercase hover:shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none shadow-[3px_3px_0px_#000] transition-all"
            >
              ACCESS ARCHIVE
            </a>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="border-3 border-black p-8 bg-white shadow-[6px_6px_0px_#000] flex flex-col items-center select-none text-black font-bold text-center">
            <i className="material-symbols-rounded text-3xl mb-3">folder_open</i>
            <h4 className="text-sm font-black font-mono uppercase tracking-wider">Empty Directory</h4>
            <p className="text-xs mt-1 font-mono">// No items match this system filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-scale select-text">
            {filteredRepos.map((repo, idx) => {
              const cardType = getCardType(idx);
              const isHero = cardType === "hero";
              const isWide = cardType === "wide";
              const colors = [
                { bg: "bg-[#FFE05D]", tag: "bg-black text-white" },
                { bg: "bg-[#00E5FF]", tag: "bg-black text-white" },
                { bg: "bg-[#39FF14]", tag: "bg-black text-white" },
                { bg: "bg-[#FF5722] text-white", tag: "bg-white text-black" },
              ];
              const colorSet = colors[idx % colors.length];

              return (
                <div
                  key={repo.id}
                  onClick={() => setSelectedRepo(repo)}
                  className={`cursor-pointer border-3 border-black shadow-[6px_6px_0px_#000] group transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[4px_4px_0px_#000] ${
                    isHero ? "md:col-span-2" : isWide ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <div className={`flex flex-col h-full ${isHero ? "p-6 md:p-7" : "p-5"} ${isHero ? colorSet.bg : "bg-white"}`}>
                    <div className="flex items-center gap-2 mb-2 select-none flex-wrap">
                      <span className={`px-2 py-0.5 border border-black text-[9px] font-mono font-black uppercase tracking-wider shadow-[2px_2px_0px_#000] ${colorSet.tag}`}>
                        {repo.language || "OPEN SOURCE"}
                      </span>
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-0.5 text-[9px] font-mono font-extrabold bg-white border border-black px-1.5 py-0.5 shadow-[2px_2px_0px_#000]">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                    </div>

                    <h4 className={`font-black uppercase font-mono tracking-wider mb-1 leading-tight ${
                      isHero ? "text-xl md:text-2xl" : "text-sm"
                    } text-black`}>
                      {repo.name.replace(/-/g, " ")}
                    </h4>

                    <p className={`font-bold leading-relaxed flex-1 ${
                      isHero ? "text-sm md:text-base" : "text-xs"
                    } text-black/85`}>
                      {repo.description || "System logic files. Click to review configuration code."}
                    </p>

                    <div className={`flex items-center justify-between ${isHero ? "mt-5 pt-4" : "mt-4 pt-3"} border-t-2 border-black/20 select-none`}>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider text-black/40 group-hover:text-black/70 transition-colors">
                        DETAILS →
                      </span>
                      {isWide && (
                        <span className="text-[8px] font-mono font-black text-black/30 uppercase tracking-widest">
                          #{idx + 1}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedRepo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedRepo(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white border-3 border-black shadow-[10px_10px_0px_#000] animate-scale"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-black bg-[#FFE05D] select-none">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-black text-white border border-black text-[9px] font-mono font-black uppercase tracking-wider">
                  {selectedRepo.language || "OPEN SOURCE"}
                </span>
                {selectedRepo.stargazers_count > 0 && (
                  <span className="flex items-center gap-0.5 text-[9px] font-mono font-extrabold bg-white border border-black px-1.5 py-0.5 shadow-[2px_2px_0px_#000]">
                    ★ {selectedRepo.stargazers_count}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedRepo(null)}
                className="w-8 h-8 border-2 border-black bg-white hover:bg-red-500 hover:text-white flex items-center justify-center text-black font-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
              >
                <span className="text-base font-black leading-none">×</span>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 space-y-5">
              <div>
                <h3 className="text-2xl font-black uppercase font-mono tracking-tight text-black leading-tight">
                  {selectedRepo.name.replace(/-/g, " ")}
                </h3>
                <p className="text-sm text-black font-bold mt-3 leading-relaxed">
                  {selectedRepo.description || "No description provided."}
                </p>
              </div>

              {/* Topics / Tags */}
              {selectedRepo.topics && selectedRepo.topics.length > 0 && (
                <div className="select-none">
                  <span className="text-[9px] font-mono font-black text-black/40 uppercase tracking-widest block mb-2">TAGS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRepo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 bg-white border-2 border-black text-[9px] font-mono font-black uppercase shadow-[2px_2px_0px_#000]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 select-none">
                <div className="border-2 border-black p-3 bg-[#FFFDF4] text-center">
                  <div className="text-[9px] font-mono font-black text-black/40 uppercase mb-0.5">Stars</div>
                  <div className="text-base font-black text-black">{selectedRepo.stargazers_count}</div>
                </div>
                <div className="border-2 border-black p-3 bg-[#FFFDF4] text-center">
                  <div className="text-[9px] font-mono font-black text-black/40 uppercase mb-0.5">Forks</div>
                  <div className="text-base font-black text-black">{selectedRepo.forks_count}</div>
                </div>
                <div className="border-2 border-black p-3 bg-[#FFFDF4] text-center">
                  <div className="text-[9px] font-mono font-black text-black/40 uppercase mb-0.5">Watchers</div>
                  <div className="text-base font-black text-black">{selectedRepo.watchers_count}</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t-2 border-black bg-[#FFFDF4] flex items-center justify-between select-none">
              <span className="text-[8px] font-mono font-black text-black/30 uppercase tracking-widest">
                {selectedRepo.private ? "PRIVATE" : "PUBLIC"}
              </span>
              <a
                href={selectedRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[var(--color-accent)] border-2 border-black text-white font-black text-[10px] font-mono uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all inline-flex items-center gap-1.5"
              >
                OPEN ON GITHUB ↗
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
