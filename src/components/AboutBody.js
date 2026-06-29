import Image from "next/image";

export default function AboutBody() {
  const codingSince = 2021;
  const yearsExp = new Date().getFullYear() - codingSince;
  return (
    <div className="flex flex-col gap-10 text-[#202020] font-sans">

      {/* ── SECTION: IDENTITY CARD ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Photo - Polaroid frame */}
        <div className="lg:col-span-5 flex items-start justify-center lg:justify-end">
          <div className="bg-white border-3 border-black p-4 shadow-[10px_10px_0px_#000] rotate-[-2deg] hover:rotate-0 transition-all duration-300">
            <div className="relative w-[280px] h-[320px] border-2 border-black overflow-hidden">
              <Image
                src="/images/photo.jpeg"
                alt="Tejas Nayak"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="mt-3 font-mono text-[10px] font-black uppercase tracking-widest text-black text-center select-none border-t-2 border-black pt-2 leading-tight">
              TEJAS NAYAK<br />
              <span className="text-black/60">FULL-STACK</span>
            </div>
          </div>
        </div>

        {/* Info Panel - Nameplate style */}
        <div className="lg:col-span-7">
          <div className="bg-white border-3 border-black shadow-[10px_10px_0px_#000] p-6 md:p-8 flex flex-col justify-center h-full">
            <div className="flex items-center gap-2 mb-3 select-none">
              <span className="bg-black text-white px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000]">
                IDENTITY // NAMEPLATE
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight font-sans leading-[0.85]">
              TEJAS<br />NAYAK
            </h2>
            <p className="text-sm md:text-base font-black text-black/70 font-mono tracking-wide mt-2 mb-4 border-l-3 border-black pl-3">
              Full-Stack & AI Systems Architect
            </p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-[#39FF14] border-2 border-black px-4 py-2 shadow-[3px_3px_0px_#000] w-fit select-none">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider">
                ONLINE // OPEN FOR ROLES
              </span>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 select-none">
              {[
                { label: "STACK", value: "JS / PY / C++ / Dart", color: "bg-[#FFE05D]", labelColor: "text-black/70", valueColor: "text-black" },
                { label: "FRAMEWORKS", value: "Next / React / Node / Flutter", color: "bg-[#00E5FF]", labelColor: "text-black/70", valueColor: "text-black" },
                { label: "CODING", value: `${yearsExp}+ Years // R&D`, color: "bg-black", labelColor: "text-white/70", valueColor: "text-white" },
              ].map((chip, i) => (
                <div key={i} className={`${chip.color} border-2 border-black p-3 shadow-[3px_3px_0px_#000]`}>
                  <div className={`text-[10px] font-mono font-black ${chip.labelColor} uppercase tracking-wider mb-1`}>{chip.label}</div>
                  <div className={`text-[11px] font-mono font-black leading-tight ${chip.valueColor}`}>{chip.value}</div>
                </div>
              ))}
            </div>

            {/* Resume download button */}
            <div className="mt-6 flex justify-start select-none">
              <a
                href="/data/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full px-5 py-4 bg-[var(--color-accent)] border-3 border-black font-mono font-black uppercase tracking-widest shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#000] transition-all duration-150 cursor-pointer inline-flex items-center gap-3"
              >
                <span className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center shrink-0 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
                <span className="flex flex-col items-start">
                  <span className="text-[12px] text-white leading-tight">DOWNLOAD RESUME</span>
                  <span className="text-[9px] text-white/50 tracking-[0.15em] font-bold">PDF</span>
                </span>
                <span className="ml-auto border-2 border-black px-2 py-1 bg-white text-[9px] font-black text-black group-hover:bg-black group-hover:text-white transition-colors">
                  ⬇
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION: CORE MANIFEST ── */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-4 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">01</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">MANIFEST</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="bg-[#FFE05D] border-3 border-black p-8 md:p-10 shadow-[8px_8px_0px_#000] relative">
          {/* Corner quote mark */}
          <span className="absolute -top-4 -left-2 text-6xl font-black text-black/40 select-none leading-none">"</span>

          <p className="text-lg md:text-2xl font-black text-black leading-snug max-w-4xl font-sans">
            I build digital systems from the ground up —
            <span className="bg-black text-[#FFE05D] px-2">bridging hardware precision</span>
            with user experience. Every project is an opportunity to push code and design to their limits.
          </p>
          <p className="text-sm md:text-base font-black text-black/80 mt-4 max-w-3xl leading-relaxed">
            From low-level C++ logic to complex mobile pipelines in Flutter, to modern web architectures
            in Next.js — I thrive on clean grids, modular design, and intelligent agent workflows.
          </p>

          <div className="flex flex-wrap gap-2 mt-6 select-none">
            {["C", "C++", "Flutter", "Next.js", "React", "Three.js", "Node.js", "Python"].map((t) => (
              <span key={t} className="bg-white border-2 border-black px-3 py-1 text-[10px] font-mono font-black uppercase shadow-[2px_2px_0px_#000]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION: BENCHMARKS ── */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-4 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">02</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">BENCHMARKS</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 select-none">
          {[
            { value: `${yearsExp}+`, label: "Years of Coding & Building", color: "bg-[#39FF14]", border: "border-[#39FF14]" },
            { value: "15+", label: "Projects Shipped to Production", color: "bg-[#00E5FF]", border: "border-[#00E5FF]" },
            { value: "10+", label: "Technologies Mastered", color: "bg-[#FF5722]", border: "border-[#FF5722]" },
          ].map((stat, i) => (
            <div key={i} className="bg-white border-3 border-black shadow-[6px_6px_0px_#000] p-6 flex flex-col relative group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${stat.color} border-b border-black`} />

              <span className="text-5xl md:text-6xl font-black text-black font-sans leading-none mt-2">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono font-black uppercase tracking-wider text-black/80 mt-2">
                {stat.label}
              </span>

              <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${stat.color} border border-black animate-pulse`} />
                <span className="text-[10px] font-mono font-black text-black/40 uppercase tracking-widest">LIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION: WORK EXPERIENCE ── */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-4 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">03</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">WORK EXPERIENCE</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 gap-5">
          {/* Giddly */}
          <div className="bg-white border-3 border-black shadow-[8px_8px_0px_#000] p-5 md:p-6 relative group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_#000] transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#6E4BFF] border-b border-black" />
            <div className="flex items-start justify-between gap-4 mb-3 mt-1">
              <div>
                <h4 className="text-base md:text-lg font-black text-black uppercase font-mono leading-tight">
                  Software Developer Intern
                </h4>
                <p className="text-[12px] font-mono font-black text-black uppercase tracking-wider mt-0.5">
                  Giddly
                </p>
              </div>
              <span className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider whitespace-nowrap border-2 border-black/40 px-2 py-0.5 shrink-0 mt-1">
                Dec 2025 – Present
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Developed and maintained mobile application features using React Native for Android platforms.",
                "Built and integrated backend services and APIs using Go (Golang).",
                "Collaborated with the development team to implement new features, fix bugs, and improve application reliability.",
                "Worked with REST APIs, authentication flows, and data synchronization between mobile and backend systems.",
                "Participated in code reviews, testing, and agile development processes to ensure timely delivery of features."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[12px] font-mono font-bold text-black/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-[#6E4BFF] border border-black shrink-0 mt-[5px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WAKUWAKU Studio */}
          <div className="bg-white border-3 border-black shadow-[8px_8px_0px_#000] p-5 md:p-6 relative group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[10px_10px_0px_#000] transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00E5FF] border-b border-black" />
            <div className="flex items-start justify-between gap-4 mb-3 mt-1">
              <div>
                <h4 className="text-base md:text-lg font-black text-black uppercase font-mono leading-tight">
                  Front-End Developer Intern
                </h4>
                <p className="text-[12px] font-mono font-black text-black uppercase tracking-wider mt-0.5">
                  WAKUWAKU Studio
                </p>
              </div>
              <span className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider whitespace-nowrap border-2 border-black/40 px-2 py-0.5 shrink-0 mt-1">
                Mar 2025 – Apr 2025
              </span>
            </div>
            <ul className="space-y-2">
              {[
                "Maintained and enhanced comicstrick.art using Nuxt.js, Three.js, and TailwindCSS.",
                "Improved UI, fixed bugs, and optimized performance.",
                "Worked in an agile team environment and delivered tasks on schedule.",
                "Awarded an official certificate for excellent performance."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[12px] font-mono font-bold text-black/80 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-[#00E5FF] border border-black shrink-0 mt-[5px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── SECTION: EDUCATION ── */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-4 select-none">
          <span className="bg-black text-white text-[11px] font-mono font-black px-3 py-1 border border-black shadow-[3px_3px_0px_#000]">04</span>
          <span className="text-[12px] font-mono font-black uppercase tracking-widest text-black">EDUCATION</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              period: "Present – 2027",
              title: "B.E in Computer Science",
              school: "SMVITM",
              location: "Bantakal",
              color: "bg-[#00E5FF]"
            },
            {
              period: "04/2023",
              title: "Higher Secondary – 12th Grade",
              school: "Jnanaganga PU College",
              location: "Nellikatte, Udupi",
              color: "bg-[#FFE05D]"
            }
          ].map((edu, i) => (
            <div key={i} className="bg-white border-3 border-black shadow-[6px_6px_0px_#000] p-5 relative group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] transition-all">
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${edu.color} border-b border-black`} />
              <div className="flex items-center gap-2 mb-3 mt-1">
                <span className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider border-2 border-black/40 px-2 py-0.5">
                  {edu.period}
                </span>
              </div>
              <h4 className="text-sm md:text-base font-black text-black uppercase font-sans leading-tight">
                {edu.title}
              </h4>
              <p className="text-[12px] font-mono font-bold text-black/80 mt-1.5">
                {edu.school}, {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
