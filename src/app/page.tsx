import Image from "next/image";

export default function Home() {
  const activeProjects = [
    { id: 1, title: "Social Issues in India", type: "Social Science", progress: 65, color: "var(--soft-purple)", emoji: "🌏" },
    { id: 2, title: "Hydraulic Arm Model", type: "Physics", progress: 30, color: "var(--soft-blue)", emoji: "⚙️" },
  ];

  const categories = [
    { name: "Science", icon: "🔬", color: "var(--soft-blue)" },
    { name: "Math", icon: "📐", color: "var(--soft-yellow)" },
    { name: "History", icon: "📜", color: "var(--soft-orange)" },
    { name: "Art", icon: "🎨", color: "var(--soft-pink)" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header Area */}
      <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="sticker mb-6 text-purple-600 bg-purple-50">
            <span>✨</span> New Term 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black outfit leading-[1.1] mb-6">
            Make your <span className="text-student">CBSE Projects</span> stand out.
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Krushiv helps you create, track, and share your academic work with a modern student aesthetic.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-3xl bg-foreground text-background font-bold hover:scale-105 transition-all shadow-xl">
            Start Project
          </button>
        </div>
      </header>

      {/* Categories Bar */}
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
        {categories.map(cat => (
          <button key={cat.name} className="flex-shrink-0 px-6 py-3 rounded-full border-2 border-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center gap-3 font-bold">
            <span className="text-xl">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mt-8">
        {/* Left: Active Projects */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black outfit">Active Drafts</h2>
            <button className="text-sm font-bold text-primary">View All →</button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activeProjects.map(project => (
              <div key={project.id} className="scrapbook-card group cursor-pointer hover:shadow-2xl transition-all" style={{ backgroundColor: project.color }}>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{project.emoji}</div>
                  <div className="sticker text-[10px] bg-white text-black">
                    {project.type}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold opacity-40">
                    <span>PROGRESS</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-foreground transition-all duration-1000" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-8 flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-foreground/10 flex items-center justify-center text-[10px] font-bold">
                      👤
                    </div>
                  ))}
                  <div className="pl-4 text-[10px] font-bold opacity-40 flex items-center">
                    +2 Mentors helping
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Krushiv Updates */}
        <div className="lg:col-span-1">
          <div className="scrapbook-card bg-primary text-white border-none shadow-xl shadow-primary/20 sticky top-32">
             <div className="absolute top-4 right-4 text-4xl animate-bounce-subtle">🤖</div>
             <h3 className="text-2xl font-black mb-4">Krushiv says:</h3>
             <p className="text-primary-foreground/80 mb-8 leading-relaxed font-medium">
               "Hey! I noticed you haven't uploaded your bibliography for the Science project yet. Want me to help you format it in CBSE style?"
             </p>
             <button className="w-full py-4 rounded-2xl bg-white text-primary font-black hover:bg-white/90 transition-all">
               Let's Do It
             </button>
             
             <div className="mt-12 pt-8 border-t border-white/10">
               <h4 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">Milestone reached</h4>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">🏆</div>
                 <div>
                   <p className="font-bold">Topic Wizard</p>
                   <p className="text-xs opacity-60">Unlocked for selecting a trending topic.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
