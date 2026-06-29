'use client';

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-[10px] font-mono font-black text-black uppercase border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-all cursor-pointer self-end md:self-auto"
    >
      ↑ BACK TO TOP
    </button>
  );
}
