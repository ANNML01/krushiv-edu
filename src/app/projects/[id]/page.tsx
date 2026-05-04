"use client";

import { useState, use, useEffect } from "react";
import { sampleProjects, Project } from "../../data/projects";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const found = sampleProjects.find(p => p.id === id);
    if (found) setProject(found);
  }, [id]);

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="sticker animate-bounce">Loading Project...</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="sticker bg-yellow-100 text-yellow-800 mb-6">
          <span>📅</span> Final Review in 12 Days
        </div>
        <h1 className="text-4xl md:text-6xl font-black outfit mb-4">{project.title}</h1>
        <p className="text-xl text-foreground/50 font-medium">{project.subject} • {project.level}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left: Milestone Tracker (Scrapbook Style) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="scrapbook-card border-none bg-white shadow-xl">
             <h2 className="text-2xl font-black mb-8">Progress Log</h2>
             <div className="milestone-line space-y-12">
               {project.milestones.map((m) => (
                 <div key={m.id} className="relative group cursor-pointer">
                   <div className={`absolute -left-[3.5rem] w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all shadow-lg ${
                     m.status === 'completed' ? 'bg-green-400 -rotate-3' : 
                     m.status === 'current' ? 'bg-primary rotate-3 animate-bounce-subtle' : 
                     'bg-muted'
                   }`}>
                     {m.status === 'completed' ? '✅' : m.emoji}
                   </div>
                   <div className={`${m.status === 'upcoming' ? 'opacity-30' : ''}`}>
                     <h3 className="font-bold text-lg mb-1">{m.title}</h3>
                     <p className="text-xs font-medium opacity-50">{m.description}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Right: Active Phase & Tools */}
        <div className="lg:col-span-8 space-y-12">
          
          <div className="scrapbook-card bg-[#fdfcf0] border-2 border-yellow-200/50 shadow-sm relative">
            <div className="absolute -top-4 -right-4 sticker bg-accent text-white rotate-6 shadow-lg">
              Active Milestone
            </div>
            <h2 className="text-3xl font-black mb-6">
              {project.milestones.find(m => m.status === 'current')?.title || "Project Complete"}
            </h2>
            <div className="prose prose-lg mb-8 font-medium text-foreground/70">
              <p>{project.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-6 bg-white rounded-[2rem] border-2 border-dashed border-foreground/5 hover:border-primary/20 transition-all group">
                   <div className="text-3xl mb-4">📖</div>
                   <h4 className="font-bold mb-2 group-hover:text-primary">Research Materials</h4>
                   <p className="text-xs opacity-50 font-bold">Curated by Krushiv AI</p>
                </div>
                <div className="p-6 bg-white rounded-[2rem] border-2 border-dashed border-foreground/5 hover:border-primary/20 transition-all group">
                   <div className="text-3xl mb-4">🤖</div>
                   <h4 className="font-bold mb-2 group-hover:text-primary">AI Assistance</h4>
                   <p className="text-xs opacity-50 font-bold">Ask anything about this project</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-10 py-5 rounded-[2rem] bg-foreground text-background font-black hover:scale-105 transition-all shadow-xl">
                Next Milestone
              </button>
              <button className="p-5 rounded-full border-2 border-foreground/5 hover:bg-foreground/5 transition-all">
                🤝 Mentor Help
              </button>
            </div>
          </div>

          {/* Necessary Items Checklist */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scrapbook-card bg-soft-blue border-none">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black">Necessary Items</h3>
                <span className="text-[10px] font-black opacity-30 bg-black/5 px-2 py-1 rounded-full">
                  {project.items.filter(i => i.checked).length}/{project.items.length} READY
                </span>
              </div>
              <div className="space-y-3">
                {project.items.map((item, idx) => (
                  <label key={idx} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl cursor-pointer hover:bg-white transition-all group">
                    <div className="flex items-center gap-4">
                      <input 
                        type="checkbox" 
                        defaultChecked={item.checked}
                        className="w-5 h-5 rounded-lg accent-primary border-none shadow-sm" 
                      />
                      <span className={`font-bold text-sm group-hover:translate-x-1 transition-transform ${item.checked ? 'line-through opacity-30' : ''}`}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-black opacity-20 uppercase tracking-tighter">{item.category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="scrapbook-card bg-soft-pink border-none flex flex-col items-center justify-center text-center p-12">
               <div className="text-6xl mb-6">📸</div>
               <h3 className="text-xl font-black mb-2">Social Studio</h3>
               <p className="text-xs font-bold opacity-40 mb-6">Capture your process and let Krushiv generate a reel for you!</p>
               <a href="/studio" className="px-6 py-3 bg-white rounded-full font-black text-xs hover:scale-105 transition-all shadow-lg">
                 Go to Studio
               </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
