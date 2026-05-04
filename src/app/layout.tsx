import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import KrushivBot from "@/components/KrushivBot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Krushiv Edu | Your Academic Project Partner",
  description: "A premium AI-powered platform for CBSE and educational projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg animate-pulse-glow" style={{ background: 'linear-gradient(135deg, hsl(var(--krushiv-purple)), hsl(var(--krushiv-pink)))' }}></div>
            <span className="text-xl font-bold tracking-tight outfit" style={{ fontFamily: 'var(--font-outfit)' }}>
              Krushiv <span className="text-gradient">Edu</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/dashboard" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Dashboard</a>
            <a href="/projects/sustainable-city" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Project Lab</a>
            <a href="/studio" className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors">Krushiv Studio</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/auth" className="flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              Sign In
            </a>
          </div>
        </nav>
        <main className="pt-24 pb-20 min-h-screen">
          {children}
        </main>
        
        <KrushivBot />
        
        {/* Mobile Nav */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 px-6 py-3 flex md:hidden items-center justify-around">
          <a href="/" className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 opacity-70">🏠</div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Home</span>
          </a>
          <a href="/projects" className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 opacity-70">🔍</div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
          </a>
          <a href="/studio" className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 opacity-70">🎬</div>
            <span className="text-[10px] uppercase tracking-widest font-bold">Studio</span>
          </a>
        </nav>
      </body>
    </html>
  );
}
