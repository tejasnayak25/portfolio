"use client";

import { useState } from "react";

export default function ContactBody() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      window.dispatchEvent(new CustomEvent("toast", { detail: "ERROR: ALL FIELDS ARE REQUIRED" }));
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        window.dispatchEvent(new CustomEvent("toast", { detail: "TRANSMISSION SUCCESSFUL // INBOX RECEIVED" }));
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.dispatchEvent(new CustomEvent("toast", { detail: `ERROR: ${data.error || "TRANSMISSION FAILED"}` }));
      }
    } catch (err) {
      console.error(err);
      window.dispatchEvent(new CustomEvent("toast", { detail: "ERROR: SYSTEM OFFLINE // TRY AGAIN LATER" }));
    } finally {
      setIsSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("tejasnayak25@outlook.com");
    window.dispatchEvent(new CustomEvent("toast", { detail: "EMAIL COPIED TO SYSTEM CLIPBOARD" }));
  };

  const socials = [
    {
      name: "Email",
      url: "mailto:tejasnayak25@outlook.com",
      subtitle: "tejasnayak25@outlook.com",
      action: "Send",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 4l10 8 10-8" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tejas-nayak-3110a7220",
      subtitle: "Connect professionally",
      action: "Connect",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/tejasnayak25",
      subtitle: "Inspect my repositories",
      action: "Inspect",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tjnayak",
      subtitle: "Follow my stories",
      action: "Follow",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@tjsmediacorner",
      subtitle: "Watch coding content",
      action: "Watch",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "X / Twitter",
      url: "https://x.com/tejasnayak25",
      subtitle: "Read short-form posts",
      action: "Read",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-6 text-[#202020] font-sans">

      {/* ═══ PROFILE CARD ═══ */}
      <div className="bg-white border-3 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 select-none">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[var(--color-accent)] text-white px-2 py-0.5 text-[10px] font-mono font-black uppercase tracking-wider border border-black shadow-[2px_2px_0px_#000]">
            PROFILE // ACTIVE
          </span>
          <span className="w-2 h-2 rounded-full bg-[#39FF14] border border-black animate-pulse" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-black uppercase font-sans leading-[0.9] tracking-tight mb-1">
          TEJAS NAYAK
        </h2>
        <p className="text-sm md:text-base font-black text-black/50 font-mono tracking-wide border-l-3 border-black pl-3 mb-4">
          Full-Stack & AI Systems Architect
        </p>

        <div className="flex flex-wrap gap-4 text-[11px] font-mono font-black text-black/60">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Karnataka, India
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
              Responds within 24h
            </span>
          </div>
      </div>

      {/* ═══ CONTACT FORM ═══ */}
      <div>
        <div className="flex items-center gap-3 mb-3 select-none">
          <span className="text-[10px] font-mono font-black text-black/20 tracking-[0.2em] uppercase">[ TRANSMIT MESSAGE ]</span>
          <span className="h-px flex-1 bg-black/20" />
          <span className="text-[9px] font-mono font-black text-black/20 border border-black/20 px-1.5 py-0.5">REQUIRED</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border-3 border-black shadow-[8px_8px_0px_#000] p-6 md:p-8 flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] border border-black" />
                VISITOR NAME
                <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSending}
                className="w-full bg-white border-2 border-black p-3.5 font-mono text-[12px] font-black text-black outline-none placeholder:text-black/20 focus:bg-[#FFE05D] focus:shadow-[3px_3px_0px_#000] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)] border border-black" />
                REPLY EMAIL
                <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                type="email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSending}
                className="w-full bg-white border-2 border-black p-3.5 font-mono text-[12px] font-black text-black outline-none placeholder:text-black/20 focus:bg-[#FFE05D] focus:shadow-[3px_3px_0px_#000] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono font-black text-black/60 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] border border-black" />
              MESSAGE
              <span className="text-[var(--color-accent)]">*</span>
            </label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSending}
              className="w-full bg-white border-2 border-black p-3.5 font-mono text-[12px] font-black text-black outline-none placeholder:text-black/20 focus:bg-[#FFE05D] focus:shadow-[3px_3px_0px_#000] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all resize-y"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full px-6 py-4 bg-[var(--color-accent)] text-white border-3 border-black font-mono text-[11px] font-black tracking-widest uppercase shadow-[5px_5px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer inline-flex items-center justify-center gap-2 disabled:bg-black/20 disabled:text-black/40 disabled:cursor-not-allowed disabled:shadow-[2px_2px_0px_#000] disabled:translate-x-0.5 disabled:translate-y-0.5"
          >
            {isSending ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                TRANSMITTING...
              </>
            ) : (
              <>
                <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                SEND MESSAGE
              </>
            )}
          </button>
        </form>
      </div>

      {/* ═══ CONTACT CHANNELS ═══ */}
      <div>
        <div className="flex items-center gap-3 mb-3 select-none">
          <span className="text-[10px] font-mono font-black text-black/20 tracking-[0.2em] uppercase">[ CHANNELS ]</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socials.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-3 border-black shadow-[6px_6px_0px_#000] p-4 md:p-5 flex items-center gap-4 group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 select-none"
            >
              <span className="w-11 h-11 border-2 border-black bg-[#FFE05D] flex items-center justify-center text-black shadow-[2px_2px_0px_#000] shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-200">
                {soc.svg}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[13px] font-black text-black uppercase font-mono tracking-wider group-hover:text-[var(--color-accent)] transition-colors">
                    {soc.name}
                  </h4>
                  <span className="text-[9px] font-mono font-black text-[var(--color-accent)] uppercase tracking-wider shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {soc.action} →
                  </span>
                </div>
                <p className="text-[10px] font-mono font-bold text-black/60 mt-0.5 truncate">
                  {soc.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ═══ COPY EMAIL ═══ */}
      <div>
        <div className="flex items-center gap-3 mb-3 select-none">
          <span className="text-[10px] font-mono font-black text-black/20 tracking-[0.2em] uppercase">[ DIRECT LINE ]</span>
          <span className="h-px flex-1 bg-black/20" />
        </div>

        <button
          onClick={copyEmail}
          className="w-full bg-white border-3 border-black shadow-[6px_6px_0px_#000] p-4 md:p-5 flex items-center justify-between gap-3 cursor-pointer group hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 select-none"
        >
          <div className="flex items-center gap-3 min-w-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 4l10 8 10-8" />
            </svg>
            <span className="text-[12px] font-mono font-black text-black/70 truncate">
              tejasnayak25@outlook.com
            </span>
          </div>
          <span className="text-[10px] font-mono font-black text-[var(--color-accent)] uppercase tracking-wider shrink-0 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
            COPY
          </span>
        </button>
      </div>
    </div>
  );
}
