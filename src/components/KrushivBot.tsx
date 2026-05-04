"use client";

import { useState } from "react";

export default function KrushivBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hey! I'm Krushiv, your project buddy. Ready to make something awesome today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: "Ooh, interesting! I checked the CBSE 2026 rubrics, and adding a 'Societal Impact' section could boost your internal marks by 15%. Want me to draft a structure?" }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-[100] w-16 h-16 rounded-[2rem] bg-primary shadow-2xl flex items-center justify-center text-4xl animate-bounce-subtle hover:scale-110 transition-transform border-4 border-white"
      >
        🤖
      </button>

      {/* Chat Window - Scrapbook Style */}
      {isOpen && (
        <div className="fixed bottom-44 right-8 z-[100] w-80 md:w-96 scrapbook-card bg-white border-none shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 flex flex-col p-0">
          <div className="p-6 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-black outfit leading-none">Krushiv AI</h3>
                <span className="text-[10px] opacity-70 uppercase tracking-widest font-black">Online & Ready</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="font-black text-xl hover:scale-110 transition-transform">✕</button>
          </div>
          
          <div className="h-80 p-6 overflow-y-auto space-y-4 bg-[#fdfcf0]/30 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-bold shadow-sm ${
                  m.role === 'user' ? 'bg-soft-purple text-primary border-2 border-primary/10' : 'bg-white border-2 border-foreground/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-foreground/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your question..." 
              className="flex-1 bg-muted/50 rounded-2xl px-5 py-3 text-sm font-bold outline-none focus:bg-white focus:ring-2 ring-primary/20 transition-all"
            />
            <button onClick={sendMessage} className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black hover:scale-105 transition-all">
              ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
}
