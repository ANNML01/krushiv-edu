import Image from "next/image";
import { sampleProjects } from "../data/projects";

export default function Home() {
  const activeProjects = sampleProjects.filter(p => p.progress > 0 && p.progress < 100);
  const trendingTemplates = sampleProjects.filter(p => p.progress === 0);

  const mentors = [
    { id: 1, name: "Dr. Ananya", subject: "Physics", rating: 4.9, emoji: "🌿" },
    { id: 2, name: "Prof. Rahul", subject: "Social Science", rating: 4.8, emoji: "🍂" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-32">
      {/* Dashboard Header */}
      <header className="space-y-6 pt-10">
         <span className="section-label">Your Workspace</span>
         <h1 className="text-5xl md:text-7xl font-black outfit tracking-tight">
            Greetings, <span className="text-organic">Anil</span>.
         </h1>
         <p className="text-xl text-foreground/50 font-medium max-w-xl">
            The garden of your academic projects is flourishing. You have 2 active drafts requiring attention today.
         </p>
      </header>

      {/* 1. Laboratory Section */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <h2 className="text-4xl font-black outfit">Active Laboratory</h2>
          <button className="btn-organic py-3 px-8 text-sm">New Seed</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {activeProjects.map(project => (
              <a href={`/projects/${project.id}`} key={project.id} className="editorial-card group hover:bg-white transition-all">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                    {project.emoji}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                    {project.subject}
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight">{project.title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black opacity-30 uppercase tracking-widest">
                    <span>Maturity</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="lg:col-span-1">
             <div className="editorial-card bg-primary text-white border-none h-full flex flex-col justify-between">
                <div className="space-y-6">
                   <div className="text-4xl">🤖</div>
                   <h3 className="text-2xl font-black outfit">Krushiv Agent</h3>
                   <p className="text-lg opacity-70 font-medium leading-relaxed">
                      "The sun is perfect for a soil-moisture test today. Ready to log your findings for the Smart Irrigation model?"
                   </p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-white text-primary font-black text-sm hover:scale-105 transition-all mt-12">
                   Log Findings
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Knowledge Hub Section */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <h2 className="text-4xl font-black outfit">Knowledge Repository</h2>
          <div className="flex gap-4">
             {['Science', 'Math', 'History'].map(cat => (
               <button key={cat} className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline-offset-8 hover:underline">
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingTemplates.map(template => (
            <a href={`/projects/${template.id}`} key={template.id} className="editorial-card p-10 bg-white/50 border-dashed hover:bg-white">
              <div className="text-4xl mb-8">{template.emoji}</div>
              <h4 className="font-black text-xl mb-4 leading-tight">{template.title}</h4>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-8">{template.subject}</p>
              <div className="pt-6 border-t border-border flex justify-between items-center">
                 <span className="text-[10px] font-black opacity-20 uppercase tracking-widest">Library Item</span>
                 <span className="text-xl">➔</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. Mentor Circle Section */}
      <section className="space-y-12 pb-32">
        <h2 className="text-4xl font-black outfit border-b border-border pb-8">Mentor Circle</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {mentors.map(mentor => (
            <div key={mentor.id} className="editorial-card flex items-center gap-8 bg-white/30 border-none">
              <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-5xl">
                {mentor.emoji}
              </div>
              <div>
                <h4 className="font-black text-2xl mb-1">{mentor.name}</h4>
                <p className="text-xs font-black opacity-30 uppercase tracking-widest mb-4">{mentor.subject} Curator</p>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest">Live Feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
