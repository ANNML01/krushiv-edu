import Image from "next/image";

export default function Home() {
  const activeProjects = [
    { id: 1, title: "Social Issues in India", type: "Social Science", progress: 65, color: "var(--soft-purple)", emoji: "🌏" },
    { id: 2, title: "Hydraulic Arm Model", type: "Physics", progress: 30, color: "var(--soft-blue)", emoji: "⚙️" },
  ];

  const trendingTemplates = [
    { id: 3, title: "Biodiversity of Western Ghats", level: "Class 12", subject: "Biology", rating: 4.8, emoji: "🌿" },
    { id: 4, title: "Consumer Rights Awareness", level: "Class 10", subject: "Economics", rating: 4.9, emoji: "⚖️" },
  ];

  const mentors = [
    { id: 1, name: "Dr. Ananya", subject: "Physics", rating: 4.9, emoji: "👩‍🏫" },
    { id: 2, name: "Prof. Rahul", subject: "Social Science", rating: 4.8, emoji: "👨‍🏫" },
  ];

  const categories = [
    { name: "Science", icon: "🔬", color: "var(--soft-blue)" },
    { name: "Math", icon: "📐", color: "var(--soft-yellow)" },
    { name: "History", icon: "📜", color: "var(--soft-orange)" },
    { name: "Art", icon: "🎨", color: "var(--soft-pink)" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-24">
      {/* Header Area */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8 pt-10">
        <div className="max-w-2xl">
          <div className="sticker mb-6 text-purple-600 bg-purple-50">
            <span>✨</span> CBSE Academic Year 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black outfit leading-[1.1] mb-6">
            Everything for your <span className="text-student">School Projects</span> in one place.
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            From CBSE Art Integration to Science Fair models—Krushiv guides you to a perfect internal assessment.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-3xl bg-foreground text-background font-bold hover:scale-105 transition-all shadow-xl">
            Start New Project
          </button>
        </div>
      </header>

      {/* 1. Project Laboratory Section */}
      <section id="laboratory" className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black outfit flex items-center gap-4">
            <span className="p-3 bg-soft-purple rounded-2xl">🧪</span> Project Laboratory
          </h2>
          <div className="flex gap-2">
            <button className="p-2 glass rounded-full opacity-50 hover:opacity-100">←</button>
            <button className="p-2 glass rounded-full opacity-50 hover:opacity-100">→</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
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
                    <div className="h-full bg-foreground transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="scrapbook-card bg-primary text-white border-none shadow-xl shadow-primary/20 sticky top-32">
              <div className="absolute top-4 right-4 text-4xl animate-bounce-subtle">🤖</div>
              <h3 className="text-2xl font-black mb-4">Krushiv's Tip:</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed font-medium text-sm">
                "Pascal's Law is tricky! I've added a 3D simulation to your Physics project lab. Check it out to boost your concept marks."
              </p>
              <button className="w-full py-4 rounded-2xl bg-white text-primary font-black hover:bg-white/90 transition-all text-xs">
                Open Simulation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CBSE Knowledge Bank Section */}
      <section id="knowledge-bank" className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-3xl font-black outfit flex items-center gap-4">
            <span className="p-3 bg-soft-blue rounded-2xl">📚</span> CBSE Knowledge Bank
          </h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button key={cat.name} className="flex-shrink-0 px-4 py-2 rounded-full border-2 border-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center gap-2 font-bold text-xs">
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTemplates.map(template => (
            <div key={template.id} className="scrapbook-card hover:scale-105 transition-all bg-white">
              <div className="text-3xl mb-4">{template.emoji}</div>
              <h4 className="font-black text-lg mb-2">{template.title}</h4>
              <p className="text-[10px] font-bold text-primary mb-4">{template.subject} • {template.level}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black opacity-40">⭐ {template.rating}</span>
                <button className="w-8 h-8 rounded-full bg-soft-blue flex items-center justify-center text-xs">🔍</button>
              </div>
            </div>
          ))}
          <div className="scrapbook-card border-dashed flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="text-3xl mb-4">✨</div>
            <p className="font-bold text-xs uppercase tracking-widest">Explore 500+ Templates</p>
          </div>
        </div>
      </section>

      {/* 3. Mentor Network Section */}
      <section id="mentors" className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black outfit flex items-center gap-4">
            <span className="p-3 bg-soft-pink rounded-2xl">🤝</span> Mentor Network
          </h2>
          <button className="text-sm font-bold text-primary">Find a Volunteer →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="scrapbook-card bg-soft-pink border-none">
              <h3 className="text-xl font-black mb-4">Need a Quick Review?</h3>
              <p className="text-xs font-bold text-foreground/50 mb-6 leading-relaxed">
                Our volunteer mentors are verified subject experts ready to help you with your project doubts.
              </p>
              <button className="w-full py-4 rounded-2xl bg-foreground text-background font-black text-xs">
                Request a Mentor
              </button>
            </div>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {mentors.map(mentor => (
              <div key={mentor.id} className="scrapbook-card flex items-center gap-6 hover:bg-soft-pink/20 transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-4xl">
                  {mentor.emoji}
                </div>
                <div>
                  <h4 className="font-black text-lg">{mentor.name}</h4>
                  <p className="text-[10px] font-bold opacity-40 mb-2">{mentor.subject} Expert</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-yellow-500">⭐ {mentor.rating}</span>
                    <span className="text-[10px] font-black text-green-500">• Online</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Creative Corner Section (Art Integration) */}
      <section id="creative" className="space-y-10 pb-20">
        <div className="p-12 scrapbook-card bg-gradient-to-r from-soft-blue to-soft-purple border-none relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <div className="sticker bg-white text-pink-500 mb-6">
                <span>🎨</span> Mandatory CBSE Activity
              </div>
              <h2 className="text-4xl md:text-5xl font-black outfit mb-6">Art Integration Hub</h2>
              <p className="text-lg font-bold opacity-60 mb-8">
                Learn how to integrate art forms of your paired State/UT into your projects as per the CBSE "Ek Bharat Shreshtha Bharat" initiative.
              </p>
              <button className="px-10 py-5 rounded-[2rem] bg-foreground text-background font-black shadow-2xl hover:scale-105 transition-all">
                Explore Art Projects
              </button>
            </div>
            <div className="flex gap-4">
               <div className="w-32 h-40 bg-white rounded-3xl rotate-6 shadow-xl flex items-center justify-center text-4xl">🎭</div>
               <div className="w-32 h-40 bg-white rounded-3xl -rotate-12 shadow-xl flex items-center justify-center text-4xl translate-y-8">🎻</div>
            </div>
          </div>
          {/* Background Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/20 blur-3xl rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
