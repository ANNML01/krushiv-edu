"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const personas = [
  { id: 'scientist', name: 'The Scientist', emoji: '🔬', color: 'blue', desc: 'Focus on facts, data, and precise experiments.' },
  { id: 'historian', name: 'The Historian', emoji: '📜', color: 'orange', desc: 'Expert in narratives, timelines, and archives.' },
  { id: 'artist', name: 'The Artist', emoji: '🎨', color: 'pink', desc: 'Creative, visual, and highly presentation-focused.' },
  { id: 'techie', name: 'The Techie', emoji: '💻', color: 'purple', desc: 'Leverages modern tools and digital innovation.' },
];

export default function AvatarCreator() {
  const [selected, setSelected] = useState('scientist');
  const [customColor, setCustomColor] = useState('#8b5cf6');
  const router = useRouter();

  const handleComplete = () => {
    // Save avatar selection in real app
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
       {/* Background Glows */}
       <div className="absolute top-0 left-0 -ml-40 -mt-40 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>
       <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-purple-400 mb-2 block">Step 2: Identity</span>
          <h1 className="text-4xl md:text-5xl font-bold outfit mb-4">Choose Your <span className="text-gradient">Project Persona</span></h1>
          <p className="text-white/40 max-w-md mx-auto">Your identity reflects your working style and helps Krushiv guide you better.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar Preview */}
          <div className="flex flex-col items-center justify-center p-12 glass-card rounded-[48px] border border-white/10 relative">
            <div 
              className="w-48 h-48 rounded-full flex items-center justify-center text-8xl shadow-2xl relative z-10 transition-all duration-500 hover:scale-110"
              style={{ backgroundColor: `${customColor}20`, border: `4px solid ${customColor}` }}
            >
              {personas.find(p => p.id === selected)?.emoji}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse" style={{ backgroundColor: customColor }}></div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold outfit mb-2">{personas.find(p => p.id === selected)?.name}</h3>
              <p className="text-sm text-white/50">{personas.find(p => p.id === selected)?.desc}</p>
            </div>

            <div className="mt-8 flex gap-3">
              {['#8b5cf6', '#3b82f6', '#ec4899', '#f97316', '#10b981'].map(c => (
                <button 
                  key={c}
                  onClick={() => setCustomColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${customColor === c ? 'border-white scale-110' : 'border-transparent opacity-50'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Persona Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personas.map(p => (
              <button 
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={`p-6 rounded-[32px] border transition-all text-left relative group overflow-hidden ${
                  selected === p.id ? 'glass border-purple-500/50 bg-white/5' : 'glass border-white/5 hover:border-white/10'
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{p.emoji}</div>
                <h4 className="font-bold mb-1">{p.name}</h4>
                <p className="text-[10px] text-white/30 leading-tight">{p.desc}</p>
                {selected === p.id && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                )}
              </button>
            ))}
            
            <div className="sm:col-span-2 pt-6">
              <button 
                onClick={handleComplete}
                className="w-full py-5 rounded-2xl bg-gradient font-bold text-lg shadow-xl shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                Launch My Dashboard <span>🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
