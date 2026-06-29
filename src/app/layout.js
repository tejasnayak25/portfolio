import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Toast from "@/components/Toast";
import ScrollToTop from "@/components/ScrollToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: "Tejas Nayak | Full-Stack & AI Systems Architect",
  description: "Tejas Nayak manufactures premium digital products, high-interaction full-stack web applications, and integrated AI systems.",
  keywords: ["Tejas Nayak", "Systems Architect", "Fullstack Developer", "AI Developer", "Next.js", "Flutter", "Industrial Portfolio"],
  authors: [{ name: "Tejas Nayak" }],
  openGraph: {
    title: "Tejas Nayak | Computational Industrialism",
    description: "An exhibition of digital systems manufacturing.",
    url: "https://tejasnayak.dev",
    siteName: "Tejas Nayak Portfolio",
    type: "website"
  }
};

const accentScript = `
  (function() {
    try {
      var accent = localStorage.getItem('theme-accent');
      if (accent) {
        var presets = {
          amber: { color: '#6E4BFF', hover: '#593AD6', glow: 'rgba(110, 75, 255, 0.15)', rgb: '110, 75, 255' },
          cyan: { color: '#00E5FF', hover: '#00B8D4', glow: 'rgba(0, 229, 255, 0.15)', rgb: '0, 229, 255' },
          emerald: { color: '#39FF14', hover: '#2ED30F', glow: 'rgba(57, 255, 20, 0.15)', rgb: '57, 255, 20' },
          purple: { color: '#FF5722', hover: '#E64A19', glow: 'rgba(255, 87, 34, 0.15)', rgb: '255, 87, 34' },
          rose: { color: '#FFB300', hover: '#FF8F00', glow: 'rgba(255, 179, 0, 0.15)', rgb: '255, 179, 0' }
        };
        var activePreset = presets[accent];
        if (activePreset) {
          document.documentElement.style.setProperty('--color-accent', activePreset.color);
          document.documentElement.style.setProperty('--color-accent-hover', activePreset.hover);
          document.documentElement.style.setProperty('--color-accent-glow', activePreset.glow);
          document.documentElement.style.setProperty('--color-accent-rgb', activePreset.rgb);
        }
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
        {/* Local Unicons stylesheet */}
        <link rel="stylesheet" href="/css/line.css" />
        {/* Local Material Symbols rounded stylesheet */}
        <link rel="stylesheet" href="/css/material-symbols.css" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[#121212] relative blueprint-dots select-none">
        
        {/* Architectural Grid Outline Boundaries - Comic style */}
        <div className="fixed inset-0 pointer-events-none z-[100] border-[32px] border-[var(--background)] hidden md:block">
          <div className="w-full h-full border-3 border-black relative">
            {/* Top-left coord */}
            <span className="absolute -top-4 left-4 font-mono text-[9px] tracking-[0.15em] text-black font-extrabold uppercase bg-white border-2 border-black px-2 py-0.5 shadow-[3px_3px_0px_#000] rotate-[-1deg]">
              SYS_REF: 43.1206° N, 77.1042° W
            </span>
            {/* Bottom-right coord */}
            <span className="absolute -bottom-4 right-4 font-mono text-[9px] tracking-[0.15em] text-black font-extrabold uppercase bg-[#FFE05D] border-2 border-black px-2 py-0.5 shadow-[3px_3px_0px_#000] rotate-[1.5deg]">
              BUILD // SHIP // REPEAT
            </span>
          </div>
        </div>

        {/* Global Navbar */}
        <Header />

        {/* Main Content wrapper */}
        <main className="flex-1 w-full relative z-10 flex flex-col md:px-6 md:pb-6">
          {children}
        </main>

        {/* Toast Alerts System */}
        <Toast />

        {/* Footer */}
        <footer className="relative z-10 border-t-3 border-black bg-white md:mx-0 md:mb-0">
          <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Col 1: Brand */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-[11px] font-mono font-black text-black/40 tracking-widest">[SYS]</span>
                <h3 className="text-xl font-black font-mono uppercase text-black mt-1 leading-tight">
                  Tejas<br />Nayak
                </h3>
                <div className="w-8 h-1 bg-black mt-3 mb-3" />
                <p className="text-sm font-bold text-black/60 leading-relaxed max-w-xs">
                  Full-stack developer & CS student manufacturing digital products.
                </p>
              </div>

              {/* Col 2: Navigate */}
              <div>
                <span className="text-[11px] font-mono font-black text-black/40 tracking-widest">[NAV]</span>
                <div className="mt-3 flex flex-col gap-2">
                  {[
                    { label: "About", path: "/about" },
                    { label: "Skills", path: "/skills" },
                    { label: "Projects", path: "/projects" },
                    { label: "Terminal", path: "/terminal" },
                    { label: "Contact", path: "/contact" },
                  ].map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className="text-sm font-mono font-black text-black uppercase tracking-wider hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 3: Connect */}
              <div>
                <span className="text-[11px] font-mono font-black text-black/40 tracking-widest">[SOCIAL]</span>
                <div className="mt-3 flex flex-col gap-2">
                  {[
                    { label: "GitHub", href: "https://github.com/tejasnayak25" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/tejas-nayak-3110a7220/" },
                    { label: "Email", href: "mailto:tejasnayak25@outlook.com" },
                    { label: "Instagram", href: "https://instagram.com/tjnayak" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-black text-black uppercase tracking-wider hover:underline underline-offset-4 decoration-2 transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 4: System */}
              <div>
                <span className="text-[11px] font-mono font-black text-black/40 tracking-widest">[BUILD]</span>
                <div className="mt-3 space-y-2">
                  <div className="border-2 border-black p-2 bg-[#FFFDF4]">
                    <div className="text-[10px] font-mono font-black text-black/40 uppercase">STATUS</div>
                    <div className="text-sm font-mono font-black text-black flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#39FF14] border border-black" />
                      ONLINE // v2.0
                    </div>
                  </div>
                  <div className="border-2 border-black p-2 bg-[#FFFDF4]">
                    <div className="text-[10px] font-mono font-black text-black/40 uppercase">STACK</div>
                    <div className="text-sm font-mono font-black text-black">
                      NEXT.JS + TAILWIND
                    </div>
                  </div>
                  <div className="border-2 border-black p-2 bg-[#FFE05D]">
                    <div className="text-[10px] font-mono font-black text-black/40 uppercase">MFG</div>
                    <div className="text-sm font-mono font-black text-black">
                      BUILD // SHIP // REPEAT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 pt-4 border-t-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <span className="text-[11px] font-mono font-black text-black/40 uppercase tracking-wider">
                © {new Date().getFullYear()} TEJAS NAYAK. ALL RIGHTS RESERVED.
              </span>
              <ScrollToTop />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
