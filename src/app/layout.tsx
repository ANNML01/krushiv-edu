import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import KrushivBot from "@/components/KrushivBot";
import { PageTransition } from "@/components/Animations";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Krushiv Edu | Your Academic Project Partner",
  description: "A premium AI-powered platform for CBSE and educational projects.",
};

import { PersonaProvider } from "./context/PersonaContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <PersonaProvider>
          <nav className="fixed top-0 left-0 right-0 z-[100] glass px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl animate-pulse-glow flex items-center justify-center text-xl" style={{ background: 'linear-gradient(135deg, hsl(var(--krushiv-purple)), hsl(var(--krushiv-pink)))' }}>
              🌿
            </div>
            <span className="text-2xl font-black tracking-tighter outfit text-foreground">
              Krushiv <span className="text-gradient">Edu</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-12 flex-shrink-0">
            <a href="/dashboard" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all">Dashboard</a>
            <a href="/projects/sustainable-city" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all">Laboratory</a>
            <a href="/studio" className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all">Studio</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/auth" className="btn-organic py-3 px-8 text-xs">
              Sign In
            </a>
          </div>
        </nav>
        <main className="pt-24 pb-20 min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
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
        </PersonaProvider>
      </body>
    </html>
  );
}
