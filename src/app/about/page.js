import AboutBody from "@/components/AboutBody";

export const metadata = {
  title: "About Me",
  description: "Read the biography, developer stats, and career journey of Tejas Nayak, Full-stack and AI engineer."
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 z-10 flex flex-col select-text">
      <div className="mb-8 select-none flex flex-col items-start gap-1.5 border-b-2 border-black pb-6">
        <span className="bg-[var(--color-accent)] text-white px-2.5 py-0.5 text-[10px] font-mono font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000] rotate-[-1deg]">
          Developer Biography // MODULE_03
        </span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black uppercase comic-title-shadow mt-1">
          ABOUT ME
        </h1>
      </div>
      <AboutBody />
    </div>
  );
}
