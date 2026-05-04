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
            <a href="/" className="text-sm font-medium hover:text-purple-400 transition-colors">Dashboard</a>
            <a href="/projects" className="text-sm font-medium hover:text-purple-400 transition-colors">Explore Projects</a>
            <a href="/studio" className="text-sm font-medium hover:text-purple-400 transition-colors">Krushiv Studio</a>
          </div>
          <a href="/auth" className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all group">
            <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform">
              👤
            </div>
            <span>Sign In</span>
          </a>
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
