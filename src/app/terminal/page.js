import Terminal from "@/components/Terminal";

export const metadata = {
  title: "Diagnostics Console",
  description: "Interactive terminal simulator with CLI commands and AI chatbot response system."
};

export default function TerminalPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 z-10 flex flex-col select-text">
      <div className="mb-8 select-none flex flex-col items-start gap-1.5 border-b-2 border-black pb-6">
        <span className="bg-black text-white px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000] rotate-[-1deg]">
          Secure Core System shell // MODULE_08
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black uppercase comic-title-shadow mt-1">
          CONSOLE CORE
        </h1>
      </div>
      <Terminal />
    </div>
  );
}
