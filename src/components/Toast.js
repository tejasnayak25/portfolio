"use client";

import { useState, useEffect } from "react";

export default function Toast() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleToast = (event) => {
      const id = Date.now();
      const text = event.detail || "";
      
      setMessages((prev) => [...prev, { id, text }]);
      
      // Auto-remove after 3 seconds
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }, 3200);
    };

    window.addEventListener("toast", handleToast);
    return () => window.removeEventListener("toast", handleToast);
  }, []);

  return (
    <div className="fixed top-20 md:top-8 right-4 md:right-8 z-[110] flex flex-col gap-2 w-[calc(100vw-32px)] md:w-auto md:max-w-sm pointer-events-none">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="px-4 py-3 rounded-none border-3 border-black bg-[#FFE05D] text-black font-mono font-black shadow-[4px_4px_0px_#000] flex items-center gap-2.5 animate-scale pointer-events-auto"
        >
          {/* Neon check mark icon - retro box style */}
          <span className="flex items-center justify-center w-5 h-5 border border-black bg-black text-white rounded-none">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <p className="text-xs font-black uppercase tracking-wider">{msg.text}</p>
        </div>
      ))}
    </div>
  );
}
