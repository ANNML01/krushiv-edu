"use client";

import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/Animations";

export default function LandingPage() {
  const personas = [
    { title: "Student", desc: "Build projects & learn with AI", icon: "🧪", color: "bg-primary text-white", link: "/dashboard" },
    { title: "Mentor", desc: "Review submissions & guide", icon: "👨‍🏫", color: "bg-secondary text-white", link: "/dashboard" },
    { title: "Parent", desc: "Track progress & milestones", icon: "👪", color: "bg-accent text-foreground", link: "/dashboard" },
  ];

  return (
    <div className="min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-32 pb-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
              <div className="flex items-center gap-4">
                 <span className="section-label">Krushiv Platform</span>
                 <div className="h-px w-12 bg-border"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-30">CBSE 2026 Ready</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black outfit leading-[0.85] tracking-tight">
                Academic <span className="text-organic">Craft</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-xl">
                The organic doorway to academic excellence. Choose your path and enter the workspace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                 <a href="/auth" className="btn-organic text-lg shadow-2xl">
                   Access Portal
                   <span className="ml-2">➔</span>
                 </a>
                 <a href="#persona-entry" className="px-10 py-4 rounded-full border-2 border-foreground/5 font-black text-xs uppercase tracking-widest hover:bg-foreground/5 transition-all flex items-center justify-center">
                   Explore Roles
                 </a>
              </div>
            </div>

            <div className="flex-1 relative">
               <div className="relative w-full aspect-square">
                  <div className="absolute top-0 right-0 w-full h-full editorial-card bg-white rotate-3 z-10 shadow-2xl">
                     <div className="h-full flex flex-col justify-between">
                        <div className="text-7xl">🌿</div>
                        <div className="space-y-4">
                           <div className="h-2 w-3/4 bg-muted rounded-full"></div>
                           <div className="h-2 w-full bg-muted rounded-full"></div>
                           <div className="h-2 w-1/2 bg-muted rounded-full opacity-50"></div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 editorial-card bg-primary text-white -rotate-6 z-20 shadow-2xl flex flex-col justify-center items-center text-center">
                     <div className="text-4xl mb-4">🤖</div>
                     <h4 className="font-black text-xl mb-2">Agentic AI</h4>
                     <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Built-in Guidance</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute -bottom-20 -left-20 text-[20rem] font-black text-foreground/[0.02] select-none pointer-events-none outfit rotate-12">
          KRUSHIV
        </div>
      </section>

      {/* Persona Entry Section */}
      <section id="persona-entry" className="py-40 bg-white/40 border-y border-border">
         <div className="max-w-7xl mx-auto px-6 text-center mb-24">
            <span className="section-label mb-6">Choose Your Workspace</span>
            <h2 className="text-5xl md:text-7xl font-black outfit">Tailored for <span className="text-organic">You</span>.</h2>
         </div>

         <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer>
               <div className="grid md:grid-cols-3 gap-12">
                  {personas.map((p, i) => (
                    <StaggerItem key={i}>
                       <a href={p.link} className="editorial-card group text-center hover:bg-white transition-all block">
                          <div className={`w-24 h-24 rounded-[2.5rem] ${p.color} mx-auto flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform shadow-xl`}>
                             {p.icon}
                          </div>
                          <h3 className="text-3xl font-black mb-4">{p.title}</h3>
                          <p className="text-foreground/50 font-medium mb-12">{p.desc}</p>
                          <div className="pt-8 border-t border-border">
                             <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">
                                Enter Workspace ➔
                             </span>
                          </div>
                       </a>
                    </StaggerItem>
                  ))}
               </div>
            </StaggerContainer>
         </div>
      </section>

      {/* Social Proof */}
      <section className="py-40">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-24">
            <div className="text-center">
               <div className="text-7xl font-black outfit text-organic mb-4">10k+</div>
               <p className="text-xs font-black uppercase tracking-[0.2em] opacity-40">Active Students</p>
            </div>
            <div className="text-center">
               <div className="text-7xl font-black outfit text-organic mb-4">500+</div>
               <p className="text-xs font-black uppercase tracking-[0.2em] opacity-40">Verified Projects</p>
            </div>
            <div className="text-center">
               <div className="text-7xl font-black outfit text-organic mb-4">4.9/5</div>
               <p className="text-xs font-black uppercase tracking-[0.2em] opacity-40">Teacher Rating</p>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-border bg-[#fdfcf0]/30">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-black outfit mb-12">Krushiv.</h3>
            <div className="flex flex-wrap justify-center gap-12 font-black text-[10px] uppercase tracking-[0.4em] opacity-30 mb-20">
               <a href="#" className="hover:opacity-100 transition-opacity">Philosophy</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Guidelines</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Resources</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
            </div>
            <p className="text-[10px] font-black opacity-20 tracking-tighter">
               CULTIVATING ACADEMIC EXCELLENCE © 2026
            </p>
         </div>
      </footer>
    </div>
  );
}
