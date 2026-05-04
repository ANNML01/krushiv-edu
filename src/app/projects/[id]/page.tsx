"use client";

import { useState, use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeMilestone, setActiveMilestone] = useState(2);
  
  const milestones = [
    { id: 1, title: "Topic Selection", status: "completed", emoji: "📌" },
    { id: 2, title: "Research & Planning", status: "current", emoji: "🔍" },
    { id: 3, title: "Data Collection", status: "upcoming", emoji: "📊" },
    { id: 4, title: "Drafting Report", status: "upcoming", emoji: "📝" },
    { id: 5, title: "Final Review", status: "upcoming", emoji: "✅" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="sticker bg-yellow-100 text-yellow-800 mb-6">
          <span>📅</span> Due in 12 Days
        </div>
        <h1 className="text-4xl md:text-6xl font-black outfit mb-4">Hydraulic Arm Model</h1>
        <p className="text-xl text-foreground/50 font-medium">Physics • Class 11 • Section B</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left: Milestone Tracker (Scrapbook Style) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="scrapbook-card border-none bg-white shadow-xl">
             <h2 className="text-2xl font-black mb-8">Progress Log</h2>
             <div className="milestone-line space-y-12">
               {milestones.map((m, idx) => (
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
                     <p className="text-xs font-medium opacity-50">Estimated time: 3 days</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Right: Active Phase & Tools */}
        <div className="lg:col-span-8 space-y-12">
          
          <div className="scrapbook-card bg-[#fdfcf0] border-2 border-yellow-200/50 shadow-sm">
            <div className="absolute -top-4 -right-4 sticker bg-accent text-white rotate-6">
              Current Task
            </div>
            <h2 className="text-3xl font-black mb-6">Researching Principles</h2>
            <div className="prose prose-lg mb-8 font-medium text-foreground/70">
              <p>To build a successful Hydraulic Arm, you must understand Pascal's Law. Krushiv has selected the best resources for you below.</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-6 bg-white rounded-[2rem] border-2 border-dashed border-foreground/5 hover:border-primary/20 transition-all group">
                   <div className="text-3xl mb-4">📺</div>
                   <h4 className="font-bold mb-2 group-hover:text-primary">Pascal's Law Explained</h4>
                   <p className="text-xs opacity-50 font-bold">5 min Video • Khan Academy</p>
                </div>
                <div className="p-6 bg-white rounded-[2rem] border-2 border-dashed border-foreground/5 hover:border-primary/20 transition-all group">
                   <div className="text-3xl mb-4">📖</div>
                   <h4 className="font-bold mb-2 group-hover:text-primary">NCERT Physics Part 2</h4>
                   <p className="text-xs opacity-50 font-bold">Page 248 - 252</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-10 py-5 rounded-[2rem] bg-foreground text-background font-black hover:scale-105 transition-all shadow-xl">
                Done for Today
              </button>
              <button className="p-5 rounded-full border-2 border-foreground/5 hover:bg-foreground/5 transition-all">
                🤝 Ask Mentor
              </button>
            </div>
          </div>

          {/* Sticker Checklist Area */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scrapbook-card bg-soft-blue border-none">
              <h3 className="text-xl font-black mb-6">Material List</h3>
              <div className="space-y-3">
                {['Plastic Syringes', 'Infusion Tubes', 'Cardboard Base', 'Glue Gun'].map(item => (
                  <label key={item} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl cursor-pointer hover:bg-white transition-all group">
                    <input type="checkbox" className="w-5 h-5 rounded-lg accent-primary border-none" />
                    <span className="font-bold text-sm group-hover:translate-x-1 transition-transform">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="scrapbook-card bg-soft-pink border-none flex flex-col items-center justify-center text-center p-12">
               <div className="text-6xl mb-6">📸</div>
               <h3 className="text-xl font-black mb-2">Build Log</h3>
               <p className="text-xs font-bold opacity-40 mb-6">Capture your progress and let Krushiv generate a reel for you!</p>
               <button className="px-6 py-3 bg-white rounded-full font-black text-xs hover:scale-105 transition-all shadow-lg">
                 Open Camera
               </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
