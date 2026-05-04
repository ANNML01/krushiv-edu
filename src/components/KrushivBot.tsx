"use client";

import { useState } from "react";

export default function KrushivBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Namaste! I'm Krushiv. How can I help you with your project today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: "That's a great question! For CBSE projects, I recommend focusing on the Methodology section first. Would you like me to generate a template for that?" }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-[100] w-14 h-14 rounded-2xl bg-gradient shadow-2xl flex items-center justify-center text-3xl animate-float hover:scale-110 transition-transform"
      >
        🤖
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-8 z-[100] w-80 md:w-96 glass-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10">
          <div className="p-6 bg-gradient flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-bold outfit leading-none">Krushiv AI</h3>
                <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Educational Agent</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100">✕</button>
          </div>
          
          <div className="h-96 p-6 overflow-y-auto space-y-4 bg-background/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-purple-500/20 border border-purple-500/30' : 'glass border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 glass border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask anything about your project..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-purple-500/50"
            />
            <button onClick={sendMessage} className="p-2 rounded-xl bg-purple-500 text-sm">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
