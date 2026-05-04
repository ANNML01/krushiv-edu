import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="sticker bg-primary/10 text-primary mb-8 animate-bounce-subtle">
              🚀 Empowering CBSE Students
            </div>
            <h1 className="text-6xl md:text-8xl font-black outfit leading-[1.05] mb-8">
              The Future of <span className="text-student">Academic Projects</span> is here.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 font-medium leading-relaxed mb-12 max-w-2xl">
              Krushiv AI is your personal academic companion. Create, track, and master your school projects with agentic guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/auth" className="px-10 py-5 rounded-[2rem] bg-foreground text-background font-black text-xl hover:scale-105 transition-all shadow-2xl">
                Get Started Free
              </a>
              <a href="#how-it-works" className="px-10 py-5 rounded-[2rem] border-2 border-foreground/5 font-black text-xl hover:bg-foreground/5 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-blue blur-[80px] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-soft-purple blur-[80px] rounded-full"></div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#fdfcf0]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="scrapbook-card bg-white border-none shadow-xl hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-black mb-4">Agentic Bot</h3>
              <p className="text-foreground/50 font-bold leading-relaxed">
                A personal AI mentor that guides you through every milestone of your project with CBSE-aligned tips.
              </p>
            </div>
            <div className="scrapbook-card bg-white border-none shadow-xl hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-black mb-4">Reel Studio</h3>
              <p className="text-foreground/50 font-bold leading-relaxed">
                Automatically generate educational shorts and reels from your project build logs to share on social media.
              </p>
            </div>
            <div className="scrapbook-card bg-white border-none shadow-xl hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-black mb-4">Volunteer Network</h3>
              <p className="text-foreground/50 font-bold leading-relaxed">
                Connect with verified experts and volunteers who help you debug models and refine your reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black outfit mb-8">From Idea to <span className="text-student">Grade A</span>.</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-soft-purple flex-shrink-0 flex items-center justify-center font-black text-primary shadow-sm">1</div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Pick your Path</h4>
                    <p className="font-bold opacity-40">Choose from hundreds of templates or start your own unique project.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-soft-blue flex-shrink-0 flex items-center justify-center font-black text-secondary shadow-sm">2</div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Track Necessary Items</h4>
                    <p className="font-bold opacity-40">Get a checklist of everything you need, from circuits to art supplies.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-soft-pink flex-shrink-0 flex items-center justify-center font-black text-accent shadow-sm">3</div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Finalize & Export</h4>
                    <p className="font-bold opacity-40">Generate your report and share your build reel with the world.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
               <div className="scrapbook-card bg-white border-none shadow-2xl relative z-10 rotate-3">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[10px] font-black opacity-30">PROJECT_LAB_DASHBOARD</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-muted rounded-full"></div>
                    <div className="h-8 w-1/2 bg-muted rounded-full opacity-50"></div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                       <div className="h-32 bg-soft-blue rounded-3xl"></div>
                       <div className="h-32 bg-soft-purple rounded-3xl"></div>
                    </div>
                  </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-foreground/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-3xl font-black outfit mb-8">Krushiv Edu.</h3>
           <p className="font-bold opacity-40 mb-12">© 2026 Krushiv Agentic Academic Platform. All rights reserved.</p>
           <div className="flex justify-center gap-8 font-black text-xs uppercase tracking-widest opacity-40">
             <a href="#" className="hover:opacity-100">Twitter</a>
             <a href="#" className="hover:opacity-100">Instagram</a>
             <a href="#" className="hover:opacity-100">Discord</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
