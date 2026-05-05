import Image from "next/image";

export default function LandingPage() {
  const grades = [
    { class: "9th", color: "bg-primary/10 text-primary" },
    { class: "10th", color: "bg-secondary/10 text-secondary" },
    { class: "11th", color: "bg-accent/10 text-accent" },
    { class: "12th", color: "bg-foreground/5 text-foreground" },
  ];

  return (
    <div className="min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-32 pb-40 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
              <span className="section-label">Krushiv Agentic Platform</span>
              <h1 className="text-6xl md:text-8xl font-black outfit leading-[0.95] tracking-tight">
                Academic <span className="text-organic">Craftsmanship</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-xl">
                We blend traditional academic rigor with agentic AI to help you build projects that matter. Welcome to the next era of CBSE learning.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                 <a href="/auth" className="btn-organic text-lg">
                   Begin Your Journey
                   <span>➔</span>
                 </a>
                 <div className="flex items-center gap-3 px-6 py-2 bg-white/50 rounded-full border border-border">
                    {grades.map(g => (
                      <span key={g.class} className={`text-xs font-black uppercase tracking-tighter ${g.color} px-3 py-1 rounded-full`}>
                        {g.class}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

            <div className="flex-1 relative">
               {/* Overlapping Editorial Cards */}
               <div className="relative w-full aspect-square">
                  <div className="absolute top-0 right-0 w-4/5 h-4/5 editorial-card bg-white rotate-3 z-20 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <div className="text-6xl">🌿</div>
                        <div className="sticker border-primary/20">NEW TERM</div>
                     </div>
                     <div>
                        <h3 className="text-3xl font-black outfit mb-4">Sustainable Ecosystems</h3>
                        <div className="flex gap-2">
                           <div className="h-1 flex-1 bg-primary rounded-full"></div>
                           <div className="h-1 flex-1 bg-muted rounded-full"></div>
                           <div className="h-1 flex-1 bg-muted rounded-full"></div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-3/4 h-3/4 editorial-card bg-secondary text-white -rotate-6 z-10 opacity-90">
                     <div className="text-5xl mb-6">📊</div>
                     <h4 className="text-2xl font-black mb-4">Internal Assessment Analytics</h4>
                     <p className="text-sm font-bold opacity-60">Real-time tracking of CBSE rubrics and marking schemes.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white/40 border-y border-border">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-24 items-center">
               <div className="space-y-8">
                  <h2 className="text-5xl font-black outfit">A mindful approach to <span className="text-organic">learning</span>.</h2>
                  <p className="text-lg font-medium text-foreground/60 leading-relaxed">
                    Krushiv isn't just about finishing projects; it's about the "how". We provide agentic guidance that encourages critical thinking, research ethics, and creative expression.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8">
                     <div>
                        <div className="text-3xl font-black text-primary mb-2">98%</div>
                        <p className="text-xs font-black uppercase opacity-40">Concept Clarity</p>
                     </div>
                     <div>
                        <div className="text-3xl font-black text-secondary mb-2">12k+</div>
                        <p className="text-xs font-black uppercase opacity-40">Art Integrations</p>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="editorial-card h-64 flex flex-col justify-end bg-soft-blue border-none">
                     <h4 className="font-black">Agentic Bot</h4>
                  </div>
                  <div className="editorial-card h-64 flex flex-col justify-end bg-soft-pink border-none translate-y-12">
                     <h4 className="font-black">Reel Studio</h4>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center">
         <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-black outfit mb-12">Krushiv.</h3>
            <div className="flex justify-center gap-12 font-black text-xs uppercase tracking-[0.3em] opacity-40 mb-16">
               <a href="#" className="hover:text-primary transition-colors">Manifesto</a>
               <a href="#" className="hover:text-primary transition-colors">Curriculum</a>
               <a href="#" className="hover:text-primary transition-colors">Mentors</a>
               <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-20">
               Cultivating Academic Excellence © 2026
            </p>
         </div>
      </footer>
    </div>
  );
}
