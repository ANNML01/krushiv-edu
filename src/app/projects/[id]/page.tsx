"use client";

import { useState, use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeMilestone, setActiveMilestone] = useState(2);
  
  const milestones = [
    { id: 1, title: "Topic Selection", status: "completed", description: "Choosing a relevant and interesting subject." },
    { id: 2, title: "Research & Planning", status: "current", description: "Gathering sources and creating an action plan." },
    { id: 3, title: "Data Collection", status: "upcoming", description: "Surveys, experiments, or field visits." },
    { id: 4, title: "Drafting Report", status: "upcoming", description: "Compiling findings into the required format." },
    { id: 5, title: "Final Review", status: "upcoming", description: "Teacher feedback and final corrections." },
  ];

  const items = [
    { id: 1, name: "A4 Size Sheets", category: "Stationery", checked: true },
    { id: 2, name: "Project File Folder", category: "Stationery", checked: true },
    { id: 3, name: "Reference Books", category: "Resources", checked: false },
    { id: 4, name: "Statistical Data", category: "Resources", checked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-4 gap-12">
        
        {/* Left Column: Milestones */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-xl font-bold outfit">Project Progress</h2>
          <div className="relative space-y-12 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
            {milestones.map((m, idx) => (
              <div key={m.id} className="relative pl-12">
                <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                  m.status === 'completed' ? 'bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50' : 
                  m.status === 'current' ? 'bg-background border-purple-500 animate-pulse' : 
                  'bg-background border-white/20'
                }`}>
                  {m.status === 'completed' ? '✓' : idx + 1}
                </div>
                <div className={m.status === 'upcoming' ? 'opacity-40' : ''}>
                  <h3 className="font-bold text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-white/60">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Active Milestone Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 border border-white/10 rounded-3xl">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">Step 2 of 5</span>
            <h1 className="text-3xl font-bold outfit mb-6">Research & Planning Phase</h1>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-white/70 leading-relaxed">
                In this phase, you need to gather all necessary information regarding your project topic. 
                Identify at least 3 reliable books and 2 authenticated websites for your bibliography.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="glass p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-sm mb-2">Recommended Sources</h4>
                  <ul className="text-xs text-white/50 space-y-1">
                    <li>• NCERT Textbook (Relevant Chapter)</li>
                    <li>• Britannica Encyclopedia</li>
                    <li>• Google Scholar Journals</li>
                  </ul>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-sm mb-2">Pro-Tip from Krushiv</h4>
                  <p className="text-xs text-white/50 italic">
                    "Use a mind map to connect your primary objectives with secondary findings. It helps in the viva-voce later!"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient text-sm font-bold">
                Mark Step as Complete
              </button>
              <button className="px-6 py-3 rounded-xl glass border border-white/10 text-sm font-bold">
                Download Resource Guide
              </button>
            </div>
          </div>

          <div className="glass-card p-8 border border-white/10 rounded-3xl">
            <h2 className="text-xl font-bold outfit mb-6">Necessary Items Checklist</h2>
            <div className="grid gap-3">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={item.checked} readOnly className="w-5 h-5 rounded-md accent-purple-500" />
                    <div>
                      <h4 className={`text-sm font-medium ${item.checked ? 'line-through opacity-40' : ''}`}>{item.name}</h4>
                      <span className="text-[10px] text-white/30 uppercase tracking-tighter">{item.category}</span>
                    </div>
                  </div>
                  <button className="text-xs text-white/20 hover:text-white/60">Edit</button>
                </div>
              ))}
              <button className="text-sm text-purple-400 font-bold py-2">+ Add Item</button>
            </div>
          </div>
        </div>

        {/* Right Column: AI & Volunteer Guidance */}
        <div className="lg:col-span-1 space-y-8">
           <div className="glass-card p-6 border border-white/10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🤖</div>
                <div>
                  <h3 className="font-bold outfit">Krushiv AI</h3>
                  <span className="text-[10px] text-green-400 animate-pulse uppercase tracking-widest font-bold">Online</span>
                </div>
              </div>
              <p className="text-sm text-white/70 mb-6 italic">
                "Hello! I've analyzed your research plan. It looks solid, but you might need more data on urban migration patterns. Want me to find some statistics for you?"
              </p>
              <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-bold transition-all">
                Ask Krushiv anything
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full"></div>
          </div>

          <div className="glass-card p-6 border border-white/10 rounded-3xl">
            <h3 className="font-bold outfit mb-4">Volunteer Guides</h3>
            <div className="space-y-4">
              {[1, 2].map(v => (
                <div key={v} className="flex items-center gap-4 p-3 glass rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10"></div>
                  <div>
                    <h4 className="text-sm font-bold">Mentor {v === 1 ? 'Anish' : 'Sanya'}</h4>
                    <span className="text-[10px] text-white/40">Subject Expert • Science</span>
                  </div>
                </div>
              ))}
              <button className="w-full text-xs text-white/40 py-2 hover:text-purple-400">View All Volunteers</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
